#!/usr/bin/env node
/**
 * fal.ai image generation for Cronograma Home Service.
 * Uses fal-ai/flux/dev (~$0.04/img). Outputs JPG directly (no conversion needed).
 *
 * Usage: node --env-file=.env.local scripts/gen-images-fal.mjs [--force]
 *
 * Prompts are intentionally rich/contextual: white shaker cabinets, marble
 * waterfall island, brushed brass, etc. — to dodge the "AI-generic interior"
 * look and land on "premium Portuguese remodelling portfolio" aesthetic.
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_SERVICES = join(ROOT, "public", "services");
const OUT_GALLERY = join(ROOT, "public", "gallery");
const OUT_OG = join(ROOT, "public");
const OUT_BA = join(ROOT, "public", "ba");
const RAW_SERVICES = join(ROOT, "public", "services", "raw");
const RAW_GALLERY = join(ROOT, "public", "gallery", "raw");
const RAW_BA = join(ROOT, "public", "ba", "raw");

const FORCE = process.argv.includes("--force");
const API_KEY = process.env.FAL_KEY || process.env.FAL_API_KEY;
if (!API_KEY) {
  console.error("ERROR: FAL_KEY / FAL_API_KEY missing. Run with --env-file=.env.local");
  process.exit(2);
}

const FAL_ENDPOINT = "https://fal.run/fal-ai/flux/dev";
const SUFFIX = ", no people, no faces, no hands, no text, no watermark, photo realistic";

/** @type {Array<{slug: string, prompt: string, size: string, dir: string, raw?: string}>} */
const JOBS = [
  // 13 Category circles (square_hd 1024×1024)
  { slug: "remodelacoes-gerais", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "modern Portuguese apartment renovation in progress, freshly plastered white walls, polished concrete floor, scaffolding partially visible, tool kit on the floor, bright natural daylight streaming through large window, clean construction site, premium real estate photography, magazine quality, 4K" },
  { slug: "pichelaria", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "professional plumbing installation close-up, brand new copper and brass pipes neatly arranged behind opened wall panel, modern Portuguese bathroom, clean workspace with tools, bright LED lighting, premium home renovation photography, 4K" },
  { slug: "eletricidade", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "modern residential electrical panel close-up, neatly organized colorful wiring, clean white wall installation, premium European-style breaker box, soft natural daylight, professional home services photography, 4K" },
  { slug: "pinturas", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "freshly painted Portuguese apartment interior wall, paint roller and tray resting on protective drop cloth, pristine white wall surface, painters tape edges, bright natural daylight, premium home renovation photography, 4K" },
  { slug: "decoracao", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "Scandinavian-Portuguese style living room decor vignette, modern interior design, neutral beige and cream palette, terracotta and brass accents, linen sofa corner, warm sunset light, magazine quality interior photography, 4K" },
  { slug: "pladur", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "drywall plasterboard ceiling installation with recessed LED spotlights, clean modern Portuguese interior, white walls, professional contractor work just completed, bright natural daylight, premium home photography, 4K" },
  { slug: "cozinhas", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "modern Portuguese kitchen renovation, white shaker cabinets, marble waterfall island countertop, brushed brass fixtures, oak floating shelves, large window with natural daylight, Scandinavian-Portuguese fusion style, professional real estate photography, 4K" },
  { slug: "casas-de-banho", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "luxury Portuguese bathroom remodel, large walk-in shower with frameless glass door, calacatta marble floor-to-ceiling tiles, brushed brass fixtures, floating oak vanity, soft natural daylight, professional real estate photography, 4K" },
  { slug: "limpeza-pos-obra", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "professional post-construction cleaning aftermath, sparkling clean modern Portuguese apartment after renovation, bright sunlight streaming through tall windows, cleaning supplies neatly arranged in corner, polished wood floor reflecting light, premium home photography, 4K" },
  { slug: "jardinagem", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "manicured Portuguese garden patio, lush green lawn, mediterranean lavender plants, terracotta pots on tiled patio, white limestone walls, sunny day with soft afternoon light, premium landscape photography, 4K" },
  { slug: "mudancas", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "professional moving service in progress, stacked sealed cardboard boxes neatly organized in empty Portuguese apartment with hardwood floor, moving blankets folded, white walls, soft natural daylight, premium photography, 4K" },
  { slug: "manutencao", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "home maintenance tool kit organized on wooden workbench, premium cordless drill, measuring tape, screwdriver set, level, blueprint paper, modern Portuguese apartment interior softly blurred in background, premium home service photography, 4K" },
  { slug: "impermeabilizacao", size: "square_hd", dir: OUT_SERVICES, raw: RAW_SERVICES,
    prompt: "waterproofing membrane application on flat rooftop terrace, slate-blue liquid membrane partially applied with roller, modern Portuguese apartment building visible, sunny day with sharp shadows, professional construction photography, 4K" },

  // 6 Gallery (landscape_4_3 1024×768)
  { slug: "obra-cozinha-lisboa", size: "landscape_4_3", dir: OUT_GALLERY, raw: RAW_GALLERY,
    prompt: "completed luxury Portuguese kitchen renovation in Lisbon, white shaker cabinets, quartz waterfall island, brushed brass hardware, oak floating shelves, large window with Lisbon rooftop view, magazine cover photography, 4K" },
  { slug: "obra-casa-banho-cascais", size: "landscape_4_3", dir: OUT_GALLERY, raw: RAW_GALLERY,
    prompt: "completed luxury Portuguese bathroom in Cascais, calacatta marble tiles floor to ceiling, frameless glass walk-in shower, floating oak vanity with brushed brass tap, freestanding tub by window, magazine cover photography, 4K" },
  { slug: "obra-sala-oeiras", size: "landscape_4_3", dir: OUT_GALLERY, raw: RAW_GALLERY,
    prompt: "completed Portuguese living room renovation in Oeiras, light oak hardwood floor, white walls, modern beige linen sofa, terracotta pots, abundant natural light from glass doors to terrace, magazine cover photography, 4K" },
  { slug: "obra-quarto-sintra", size: "landscape_4_3", dir: OUT_GALLERY, raw: RAW_GALLERY,
    prompt: "completed Portuguese bedroom renovation in Sintra, neutral palette of cream and stone, crisp white linen on low platform bed, oak floor, soft natural light filtering through linen curtains, minimal decor, magazine cover photography, 4K" },
  { slug: "obra-fachada-amadora", size: "landscape_4_3", dir: OUT_GALLERY, raw: RAW_GALLERY,
    prompt: "freshly repainted Portuguese apartment building facade in Amadora, traditional Portuguese architecture, crisp white walls with blue azulejo accents, terraces with flower pots, sunny midday light, professional architectural photography, 4K" },
  { slug: "obra-pladur-almada", size: "landscape_4_3", dir: OUT_GALLERY, raw: RAW_GALLERY,
    prompt: "completed drywall ceiling renovation with linear recessed LED lights, modern Portuguese living room in Almada, white walls, oak floor, bright daylight, magazine cover photography, 4K" },

  // 1 OG default (landscape_16_9 ~1024×576)
  { slug: "og-default", size: "landscape_16_9", dir: OUT_OG,
    prompt: "modern Portuguese home interior magazine cover, bright living room with floor-to-ceiling windows, neutral cream and beige palette, oak floor, linen sofa, brass accents, premium real estate hero shot, cinematic widescreen composition, 4K" },

  // 3 BeforeAfter "antes" shots (landscape_4_3) — pair with existing /gallery/ "depois"
  { slug: "wc-antes", size: "landscape_4_3", dir: OUT_BA, raw: RAW_BA,
    prompt: "old run-down Portuguese bathroom needing renovation, peeling paint on walls, dated cracked tiles in faded green and beige, broken chrome fixtures, exposed pipes, dim yellowish lighting, real estate before-renovation photography, neutral muted colors, photo realistic" },
  { slug: "cozinha-antes", size: "landscape_4_3", dir: OUT_BA, raw: RAW_BA,
    prompt: "outdated Portuguese kitchen needing complete renovation, old worn yellow laminated cabinets, scratched vinyl floor, dated 1980s appliances, stained countertop, dim yellowish lighting, professional real estate before-renovation photography, photo realistic" },
  { slug: "sala-antes", size: "landscape_4_3", dir: OUT_BA, raw: RAW_BA,
    prompt: "old Portuguese living room before renovation, peeling and stained walls, dated faded floral wallpaper, worn scratched parquet floor, empty room with damaged baseboard, dim daylight, professional real estate before-makeover photography, photo realistic" },
];

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

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
      num_inference_steps: 28,
      guidance_scale: 3.5,
      num_images: 1,
      enable_safety_checker: true,
      output_format: "jpeg",
    };

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 90_000);
    const res = await fetch(FAL_ENDPOINT, {
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

    console.log(`✓ ok    (${(buf.length / 1024).toFixed(0)}KB): ${job.slug}`);
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
  await mkdir(OUT_SERVICES, { recursive: true });
  await mkdir(OUT_GALLERY, { recursive: true });
  await mkdir(OUT_BA, { recursive: true });
  await mkdir(RAW_SERVICES, { recursive: true });
  await mkdir(RAW_GALLERY, { recursive: true });
  await mkdir(RAW_BA, { recursive: true });
  await writeFile(join(RAW_SERVICES, ".gitignore"), "*\n!.gitignore\n");
  await writeFile(join(RAW_GALLERY, ".gitignore"), "*\n!.gitignore\n");
  await writeFile(join(RAW_BA, ".gitignore"), "*\n!.gitignore\n");

  console.log(`\nGenerating ${JOBS.length} images via fal-ai/flux/dev...`);
  console.log(`Cost estimate: ~$${(JOBS.length * 0.04).toFixed(2)} USD\n`);

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
