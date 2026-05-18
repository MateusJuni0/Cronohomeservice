#!/usr/bin/env node
/**
 * Pollinations.ai image generation for Cronograma Home Service.
 * Uses FLUX model. Saves as .jpg into web/public/services/ and web/public/gallery/.
 * No API key required. Run: node scripts/gen-images.mjs [--force]
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_SERVICES = join(ROOT, "public", "services");
const OUT_GALLERY = join(ROOT, "public", "gallery");
const OUT_OG = join(ROOT, "public");

const FORCE = process.argv.includes("--force");

const POLLINATIONS = "https://image.pollinations.ai/prompt/";

/** @type {Array<{slug: string, prompt: string, w: number, h: number, dir: string, seed: number}>} */
const JOBS = [
  // 13 Categorias circulares (1:1, ~800x800)
  { slug: "remodelacoes-gerais", prompt: "modern Portuguese apartment renovation in progress, clean construction site, freshly plastered walls, bright natural light, premium real estate photography, magazine quality, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 101 },
  { slug: "pichelaria", prompt: "professional plumbing installation, new copper pipes in modern bathroom wall, clean workspace, photo realistic, bright lighting, no people, premium home renovation", w: 800, h: 800, dir: OUT_SERVICES, seed: 102 },
  { slug: "eletricidade", prompt: "modern residential electrical panel close-up, organized colorful wiring, clean installation, professional workshop, bright daylight, no people, premium photography", w: 800, h: 800, dir: OUT_SERVICES, seed: 103 },
  { slug: "pinturas", prompt: "freshly painted Portuguese apartment interior wall, paint roller and tray on drop cloth, white pristine walls, bright natural light, premium home renovation photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 104 },
  { slug: "decoracao", prompt: "Scandinavian style living room decor close-up, modern interior design vignette, neutral palette beige and white, warm light, magazine quality interior photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 105 },
  { slug: "pladur", prompt: "drywall plasterboard ceiling installation with recessed LED lights, clean modern interior, professional contractor work in progress, bright natural light, premium home photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 106 },
  { slug: "cozinhas", prompt: "modern Portuguese kitchen renovation, white shaker cabinets, marble island, natural light, Scandinavian style, brass fixtures, professional photography, premium real estate, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 107 },
  { slug: "casas-de-banho", prompt: "luxury bathroom remodel, large walk-in shower with glass door, marble tiles, modern brass fixtures, Portuguese home, professional photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 108 },
  { slug: "limpeza-pos-obra", prompt: "professional post-construction cleaning, sparkling clean modern apartment after renovation, sunlight streaming through windows, cleaning supplies neatly arranged, premium home photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 109 },
  { slug: "jardinagem", prompt: "manicured Portuguese garden, lush green lawn, mediterranean plants, terracotta pots, sunny day, premium landscape photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 110 },
  { slug: "mudancas", prompt: "professional moving service, stacked cardboard boxes neatly organized in empty Portuguese apartment, moving truck visible through window, premium photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 111 },
  { slug: "manutencao", prompt: "home maintenance tools organized on workbench, drill, screwdrivers, measuring tape, modern Portuguese apartment interior background, premium home service photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 112 },
  { slug: "impermeabilizacao", prompt: "waterproofing membrane on flat rooftop terrace, blue membrane roll partially applied, sunny day, modern Portuguese building background, professional construction photography, no people", w: 800, h: 800, dir: OUT_SERVICES, seed: 113 },

  // 6 Gallery (4:3) — completed projects
  { slug: "obra-cozinha-lisboa", prompt: "completed luxury Portuguese kitchen renovation, white shaker cabinets, quartz countertop, brass hardware, large window with Lisbon city view, magazine photography, no people", w: 1200, h: 900, dir: OUT_GALLERY, seed: 201 },
  { slug: "obra-casa-banho-cascais", prompt: "completed luxury Portuguese bathroom in Cascais, marble tiles floor to ceiling, glass walk-in shower, modern brass vanity, magazine photography, no people", w: 1200, h: 900, dir: OUT_GALLERY, seed: 202 },
  { slug: "obra-sala-oeiras", prompt: "completed Portuguese living room renovation in Oeiras, light hardwood floor, white walls, modern beige sofa, abundant natural light, magazine photography, no people", w: 1200, h: 900, dir: OUT_GALLERY, seed: 203 },
  { slug: "obra-quarto-sintra", prompt: "completed Portuguese bedroom renovation in Sintra, neutral palette, white linens on platform bed, soft natural light, minimal decor, magazine photography, no people", w: 1200, h: 900, dir: OUT_GALLERY, seed: 204 },
  { slug: "obra-fachada-amadora", prompt: "freshly painted Portuguese apartment building facade in Amadora, traditional architecture, white walls with blue trim, terraces with flowers, sunny day, no people", w: 1200, h: 900, dir: OUT_GALLERY, seed: 205 },
  { slug: "obra-pladur-almada", prompt: "completed drywall ceiling renovation with recessed LED lights, modern Portuguese living room, white walls, bright daylight, magazine photography, no people", w: 1200, h: 900, dir: OUT_GALLERY, seed: 206 },

  // 1 OG default (1200x630)
  { slug: "og-default", prompt: "modern Portuguese home interior magazine cover, bright living room with natural light, neutral palette, premium real estate photography, hero shot, cinematic, no people, 16:9", w: 1200, h: 630, dir: OUT_OG, seed: 301 },
];

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

async function downloadOne(job, attempt = 1) {
  const url = `${POLLINATIONS}${encodeURIComponent(job.prompt)}?width=${job.w}&height=${job.h}&model=flux&nologo=true&safe=true&seed=${job.seed}&enhance=true`;
  const outPath = join(job.dir, `${job.slug}.jpg`);

  if (!FORCE && await exists(outPath)) {
    console.log(`✓ skip (exists): ${job.slug}`);
    return { ok: true, skipped: true };
  }

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 180_000); // 3 min per image
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);

    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1000) throw new Error(`Tiny payload (${buf.length} bytes)`);

    await mkdir(job.dir, { recursive: true });
    await writeFile(outPath, buf);
    console.log(`✓ ok    (${(buf.length / 1024).toFixed(0)}KB): ${job.slug}`);
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (attempt < 3) {
      console.log(`⟳ retry ${attempt + 1}/3: ${job.slug} (${msg})`);
      await new Promise(r => setTimeout(r, 2000 * attempt));
      return downloadOne({ ...job, seed: job.seed + 1000 * attempt }, attempt + 1);
    }
    console.error(`✗ FAIL: ${job.slug} — ${msg}`);
    return { ok: false, error: msg };
  }
}

async function runBatch(jobs, batchSize = 4) {
  const results = [];
  for (let i = 0; i < jobs.length; i += batchSize) {
    const batch = jobs.slice(i, i + batchSize);
    const out = await Promise.all(batch.map(j => downloadOne(j)));
    results.push(...out);
  }
  return results;
}

async function main() {
  await mkdir(OUT_SERVICES, { recursive: true });
  await mkdir(OUT_GALLERY, { recursive: true });

  console.log(`\nGenerating ${JOBS.length} images via Pollinations.ai (FLUX)...`);
  console.log(`Force regenerate: ${FORCE}\n`);

  const results = await runBatch(JOBS, 4);
  const ok = results.filter(r => r.ok && !r.skipped).length;
  const skipped = results.filter(r => r.skipped).length;
  const failed = results.filter(r => !r.ok).length;

  console.log(`\n${ok} generated · ${skipped} skipped · ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch(err => { console.error(err); process.exit(1); });
