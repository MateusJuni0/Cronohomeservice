#!/usr/bin/env node
/**
 * Round 2 image generation — 1 hero + 4 portfolio extras + 3 before/after extras.
 *
 * Hero uses flux-pro/v1.1 ($0.10) for premium quality on the most visible shot.
 * Portfolio + BA use flux/dev ($0.04) — same model as Round 1 for visual consistency.
 *
 * Usage: node --env-file=.env.local scripts/gen-images-round2.mjs [--force]
 *
 * Total estimated cost: $0.10 + 7 × $0.04 = ~$0.38 USD.
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_GALLERY = join(ROOT, "public", "gallery");
const OUT_HERO = join(ROOT, "public");
const OUT_BA = join(ROOT, "public", "ba");
const RAW_GALLERY = join(ROOT, "public", "gallery", "raw");
const RAW_HERO = join(ROOT, "public", "raw");
const RAW_BA = join(ROOT, "public", "ba", "raw");

const FORCE = process.argv.includes("--force");
const API_KEY = process.env.FAL_KEY || process.env.FAL_API_KEY;
if (!API_KEY) {
  console.error("ERROR: FAL_KEY / FAL_API_KEY missing. Run with --env-file=.env.local");
  process.exit(2);
}

const ENDPOINTS = {
  dev: "https://fal.run/fal-ai/flux/dev",
  pro: "https://fal.run/fal-ai/flux-pro/v1.1",
};
const SUFFIX = ", no people, no faces, no hands, no text, no watermark, photo realistic";

/** @typedef {{slug: string, prompt: string, size: string, dir: string, model: "dev"|"pro", raw?: string}} Job */

/** @type {Job[]} */
const JOBS = [
  // 1 HERO (16:9 widescreen, flux-pro for top quality)
  {
    slug: "hero-living-room",
    size: "landscape_16_9",
    dir: OUT_HERO,
    raw: RAW_HERO,
    model: "pro",
    prompt:
      "modern Portuguese home renovation hero shot, beautifully renovated living room with crisp white walls and warm wide-plank oak floors, large floor-to-ceiling windows flooded with Lisbon golden hour sunlight, minimalist Scandinavian-Portuguese fusion interior design, low linen sofa, terracotta and brass accents, magazine cover composition, cinematic widescreen, premium real estate hero photography, 4K",
  },

  // 4 portfolio extras (4:3 to match existing /gallery/)
  {
    slug: "obra-quarto-lisboa",
    size: "landscape_4_3",
    dir: OUT_GALLERY,
    raw: RAW_GALLERY,
    model: "dev",
    prompt:
      "completed Portuguese master bedroom renovation in Lisbon, soft cream walls with subtle texture, low oak platform bed dressed in crisp white linen, brushed brass pendant light, oak floor reflecting daylight, sheer linen curtains diffusing afternoon light, magazine cover photography, 4K",
  },
  {
    slug: "obra-wc-cascais-pretos",
    size: "landscape_4_3",
    dir: OUT_GALLERY,
    raw: RAW_GALLERY,
    model: "dev",
    prompt:
      "premium Portuguese bathroom in Cascais, full-height black hexagonal azulejos covering the wet wall, contrasting white marble floor, floating oak vanity with white basin and brushed brass tap, frameless glass walk-in shower, soft window light, magazine cover photography, 4K",
  },
  {
    slug: "obra-cozinha-sintra",
    size: "landscape_4_3",
    dir: OUT_GALLERY,
    raw: RAW_GALLERY,
    model: "dev",
    prompt:
      "minimalist Portuguese kitchen renovation in Sintra, handleless white lacquered cabinets, slim porcelain countertop, integrated appliances, oak floating shelf with ceramic vases, light grey microcement floor, large window framing Sintra greenery, magazine cover photography, 4K",
  },
  {
    slug: "obra-sala-oeiras-open",
    size: "landscape_4_3",
    dir: OUT_GALLERY,
    raw: RAW_GALLERY,
    model: "dev",
    prompt:
      "completed open-space living room in Oeiras, light oak hardwood floor flowing into open kitchen, white walls, modern beige boucle sofa, walnut sideboard, abundant natural light from glass doors to terrace overlooking Tagus river, magazine cover photography, 4K",
  },

  // 3 BeforeAfter extras (4:3, pair with the 3 new portfolio "depois")
  {
    slug: "quarto-antes",
    size: "landscape_4_3",
    dir: OUT_BA,
    raw: RAW_BA,
    model: "dev",
    prompt:
      "old Portuguese bedroom before renovation, faded yellowed walls with peeling paint, dated wooden wardrobe with damaged finish, worn scratched parquet floor, dim ceiling bulb light, empty room, professional real estate before-renovation photography, photo realistic",
  },
  {
    slug: "wc-pretos-antes",
    size: "landscape_4_3",
    dir: OUT_BA,
    raw: RAW_BA,
    model: "dev",
    prompt:
      "outdated Portuguese bathroom needing renovation, old beige square tiles, yellowed grout, cracked porcelain pedestal sink, dated chrome shower curtain, dim yellow fluorescent light, professional real estate before-renovation photography, photo realistic",
  },
  {
    slug: "cozinha-sintra-antes",
    size: "landscape_4_3",
    dir: OUT_BA,
    raw: RAW_BA,
    model: "dev",
    prompt:
      "outdated Portuguese kitchen needing complete renovation, old dark brown wooden cabinets with worn varnish, scratched red ceramic tile floor, dated white appliances, stained beige laminate countertop, dim yellow lighting, professional real estate before-renovation photography, photo realistic",
  },
];

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

/** @param {Job} job */
async function generateOne(job, attempt = 1) {
  const outPath = join(job.dir, `${job.slug}.jpg`);

  if (!FORCE && await exists(outPath)) {
    console.log(`✓ skip (exists): ${job.slug}`);
    return { ok: true, skipped: true };
  }

  try {
    const body = {
      prompt: job.prompt + SUFFIX,
      image_size: job.size,
      num_inference_steps: job.model === "pro" ? 32 : 28,
      guidance_scale: 3.5,
      num_images: 1,
      enable_safety_checker: true,
      output_format: "jpeg",
    };

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 120_000);
    const res = await fetch(ENDPOINTS[job.model], {
      method: "POST",
      headers: {
        "Authorization": `Key ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    clearTimeout(timer);

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`fal API HTTP ${res.status} ${res.statusText} — ${errText.slice(0, 200)}`);
    }

    const data = await res.json();
    const imgUrl = data?.images?.[0]?.url;
    if (!imgUrl) throw new Error(`No image URL in response: ${JSON.stringify(data).slice(0, 200)}`);

    const imgRes = await fetch(imgUrl);
    if (!imgRes.ok) throw new Error(`Image download HTTP ${imgRes.status}`);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    if (buf.length < 5000) throw new Error(`Tiny payload (${buf.length} bytes)`);

    await mkdir(job.dir, { recursive: true });
    await writeFile(outPath, buf);

    if (job.raw) {
      await mkdir(job.raw, { recursive: true });
      await writeFile(join(job.raw, `${job.slug}.jpg`), buf);
    }

    console.log(`✓ ok (${job.model}, ${(buf.length / 1024).toFixed(0)}KB): ${job.slug}`);
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (attempt < 3) {
      console.log(`⟳ retry ${attempt + 1}/3: ${job.slug} (${msg})`);
      await new Promise(r => setTimeout(r, 3000 * attempt));
      return generateOne(job, attempt + 1);
    }
    console.error(`✗ FAIL: ${job.slug} — ${msg}`);
    return { ok: false, error: msg, slug: job.slug };
  }
}

async function runBatch(jobs, batchSize = 4) {
  const results = [];
  for (let i = 0; i < jobs.length; i += batchSize) {
    const batch = jobs.slice(i, i + batchSize);
    const out = await Promise.all(batch.map(j => generateOne(j)));
    results.push(...out);
  }
  return results;
}

async function main() {
  await mkdir(OUT_GALLERY, { recursive: true });
  await mkdir(OUT_HERO, { recursive: true });
  await mkdir(OUT_BA, { recursive: true });
  await mkdir(RAW_GALLERY, { recursive: true });
  await mkdir(RAW_HERO, { recursive: true });
  await mkdir(RAW_BA, { recursive: true });

  const dollars = JOBS.reduce((sum, j) => sum + (j.model === "pro" ? 0.10 : 0.04), 0);
  console.log(`\nGenerating ${JOBS.length} images (Round 2)...`);
  console.log(`Cost estimate: ~$${dollars.toFixed(2)} USD\n`);

  const results = await runBatch(JOBS, 4);
  const ok = results.filter(r => r.ok && !r.skipped).length;
  const skipped = results.filter(r => r.skipped).length;
  const failed = results.filter(r => !r.ok).length;
  const failedSlugs = results.filter(r => !r.ok).map(r => r.slug).join(", ");

  console.log(`\n${ok} generated · ${skipped} skipped · ${failed} failed`);
  if (failed > 0) {
    console.log(`Failed: ${failedSlugs}`);
    process.exit(1);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
