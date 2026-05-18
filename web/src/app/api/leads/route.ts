import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import { join } from "node:path";

/* -----------------------------------------------------------------------------
   /api/leads — captura de leads do formulário Crono.
   - Validação manual (sem dependência externa de Zod)
   - 3 sinks em paralelo: Telegram (alerta), Supabase (storage), jsonl (fallback)
   - Resposta sempre 200 ou 400; nunca rebenta o frontend.
   ----------------------------------------------------------------------------- */

interface LeadInput {
  name: string;
  phone: string;
  message?: string;
  zone?: string;
  urgency?: string;
  photoUrl?: string;
  source?: string;
}

interface LeadRecord extends LeadInput {
  id: string;
  createdAt: string;
  ip: string | null;
  userAgent: string | null;
}

interface ValidationResult {
  ok: boolean;
  errors: Record<string, string>;
  data: LeadInput;
}

const MAX_FIELD_LEN = 2000;

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX_FIELD_LEN) : "";
}

function validate(raw: unknown): ValidationResult {
  const body = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};

  const name = asString(body.name);
  if (name.length < 2) errors.name = "Indique o seu nome (mínimo 2 caracteres).";

  const phoneRaw = asString(body.phone);
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  // Aceita formato PT: 9 dígitos (9X XXX XXXX) ou com prefixo 351 (12 dígitos).
  const isPtMobile = /^9\d{8}$/.test(phoneDigits) || /^3519\d{8}$/.test(phoneDigits);
  if (!isPtMobile) {
    errors.phone = "Indique um número de telemóvel português válido (ex: 931 428 476).";
  }

  const message = asString(body.message);
  // message é opcional, mas se preenchido deve ter substância
  if (message && message.length < 10) {
    errors.message = "A mensagem deve ter pelo menos 10 caracteres ou ficar vazia.";
  }

  const data: LeadInput = {
    name,
    phone: phoneDigits.startsWith("351") ? `+${phoneDigits}` : `+351${phoneDigits}`,
    message: message || undefined,
    zone: asString(body.zone) || undefined,
    urgency: asString(body.urgency) || undefined,
    photoUrl: asString(body.photoUrl) || undefined,
    source: asString(body.source) || "website-v2",
  };

  return { ok: Object.keys(errors).length === 0, errors, data };
}

async function appendJsonlFallback(record: LeadRecord): Promise<void> {
  // /tmp em Vercel é ephemeral mas serve para audit local + fallback emergência.
  // Em dev, escreve em web/.leads.jsonl (gitignored).
  const isVercel = Boolean(process.env.VERCEL);
  const filePath = isVercel ? "/tmp/leads.jsonl" : join(process.cwd(), ".leads.jsonl");
  try {
    await fs.appendFile(filePath, JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    console.warn("[leads] jsonl fallback failed:", err);
  }
}

async function notifyTelegram(record: LeadRecord): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.info("[leads] TELEGRAM_BOT_TOKEN/CHAT_ID missing — skipping Telegram alert.");
    return;
  }

  const text = [
    "🏗️ *Novo lead Crono Home Service*",
    `*Nome:* ${record.name}`,
    `*Telefone:* ${record.phone}`,
    record.zone ? `*Zona:* ${record.zone}` : null,
    record.urgency ? `*Urgência:* ${record.urgency}` : null,
    record.message ? `*Mensagem:* ${record.message}` : null,
    `*Origem:* ${record.source}`,
    `*ID:* \`${record.id}\``,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.warn(`[leads] Telegram HTTP ${res.status}: ${errText.slice(0, 200)}`);
    }
  } catch (err) {
    console.warn("[leads] Telegram fetch failed:", err);
  }
}

async function insertSupabase(record: LeadRecord): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.info("[leads] SUPABASE_URL/KEY missing — skipping DB insert.");
    return;
  }

  try {
    const res = await fetch(`${url}/rest/v1/crono_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        external_id: record.id,
        name: record.name,
        phone: record.phone,
        message: record.message ?? null,
        zone: record.zone ?? null,
        urgency: record.urgency ?? null,
        photo_url: record.photoUrl ?? null,
        source: record.source,
        ip: record.ip,
        user_agent: record.userAgent,
        created_at: record.createdAt,
      }),
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.warn(`[leads] Supabase HTTP ${res.status}: ${errText.slice(0, 200)}`);
    }
  } catch (err) {
    console.warn("[leads] Supabase fetch failed:", err);
  }
}

function newLeadId(): string {
  // ID curto, ordenável, sem dep externa: timestamp base36 + 4 chars random.
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 6);
  return `lead_${ts}_${rnd}`;
}

export async function POST(request: Request): Promise<NextResponse> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { _: "Pedido inválido." } }, { status: 400 });
  }

  const { ok, errors, data } = validate(raw);
  if (!ok) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const record: LeadRecord = {
    ...data,
    id: newLeadId(),
    createdAt: new Date().toISOString(),
    ip:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      null,
    userAgent: request.headers.get("user-agent") ?? null,
  };

  console.info(`[leads] new ${record.id} from ${record.name} (${record.phone})`);

  await Promise.allSettled([
    appendJsonlFallback(record),
    notifyTelegram(record),
    insertSupabase(record),
  ]);

  return NextResponse.json({ ok: true, id: record.id });
}
