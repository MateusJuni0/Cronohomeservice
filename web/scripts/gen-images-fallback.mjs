#!/usr/bin/env node
/**
 * Fallback image downloader — curated Unsplash photos when Pollinations.ai
 * returns 402 / rate limits. Downloads to web/public/services/ and gallery/.
 * Only downloads missing files (skips if .jpg already exists).
 *
 * Unsplash license: free to use, no API key needed for direct CDN URLs.
 * Run: node scripts/gen-images-fallback.mjs [--force]
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

const U = (id, w = 800, h = 800, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=${q}&fit=crop&auto=format`;

/** @type {Array<{slug: string, url: string, dir: string}>} */
const JOBS = [
  // Categories (1:1) — only missing ones; others already generated via Pollinations
  { slug: "pichelaria",          url: U("1581094794329-c8112a89af12", 800, 800), dir: OUT_SERVICES },
  { slug: "eletricidade",        url: U("1558002038-1055907df827",  800, 800), dir: OUT_SERVICES },
  { slug: "decoracao",           url: U("1616046229478-9901c5536a45", 800, 800), dir: OUT_SERVICES },
  { slug: "pladur",              url: U("1503387762-592deb58ef4e",   800, 800), dir: OUT_SERVICES },
  { slug: "casas-de-banho",      url: U("1552321554-5fefe8c9ef14",   800, 800), dir: OUT_SERVICES },
  { slug: "jardinagem",          url: U("1416879595882-3373a0480b5b", 800, 800), dir: OUT_SERVICES },
  { slug: "mudancas",            url: U("1600518464441-9154a4dea21b", 800, 800), dir: OUT_SERVICES },
  { slug: "manutencao",          url: U("1581094794329-c8112a89af12", 800, 800), dir: OUT_SERVICES },

  // Gallery (4:3)
  { slug: "obra-cozinha-lisboa",    url: U("1556909114-f6e7ad7d3136",  1200, 900), dir: OUT_GALLERY },
  { slug: "obra-casa-banho-cascais", url: U("1620626011761-996317b8d101", 1200, 900), dir: OUT_GALLERY },
  { slug: "obra-sala-oeiras",       url: U("1600210492486-724fe5c67fb0", 1200, 900), dir: OUT_GALLERY },
  { slug: "obra-quarto-sintra",     url: U("1615529182904-14819c35db37", 1200, 900), dir: OUT_GALLERY },
  { slug: "obra-fachada-amadora",   url: U("1513694203232-719a280e022f", 1200, 900), dir: OUT_GALLERY },
  { slug: "obra-pladur-almada",     url: U("1503387762-592deb58ef4e",  1200, 900), dir: OUT_GALLERY },

  // OG (1200x630)
  { slug: "og-default",             url: U("1600585154340-be6161a56a0c", 1200, 630), dir: OUT_OG },
];

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

async function downloadOne(job, attempt = 1) {
  const outPath = join(job.dir, `${job.slug}.jpg`);

  if (!FORCE && await exists(outPath)) {
    console.log(`✓ skip (exists): ${job.slug}`);
    return { ok: true, skipped: true };
  }

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 60_000);
    const res = await fetch(job.url, {
      signal: ctrl.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Cronohome-Builder/1.0)" },
    });
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
      await new Promise(r => setTimeout(r, 1000 * attempt));
      return downloadOne(job, attempt + 1);
    }
    console.error(`✗ FAIL: ${job.slug} — ${msg}`);
    return { ok: false, error: msg };
  }
}

async function runBatch(jobs, batchSize = 6) {
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

  console.log(`\nDownloading ${JOBS.length} curated photos from Unsplash CDN...`);
  console.log(`Force redownload: ${FORCE}\n`);

  const results = await runBatch(JOBS, 6);
  const ok = results.filter(r => r.ok && !r.skipped).length;
  const skipped = results.filter(r => r.skipped).length;
  const failed = results.filter(r => !r.ok).length;

  console.log(`\n${ok} downloaded · ${skipped} skipped · ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch(err => { console.error(err); process.exit(1); });
