#!/usr/bin/env node
/**
 * Compresses fal.ai output JPGs to ≤200KB while keeping visual quality.
 * Targets max 1200px wide, JPEG quality steps 85→70→55 until under budget.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const TARGETS = [
  { dir: join(ROOT, "public", "services"), maxW: 800 },
  { dir: join(ROOT, "public", "gallery"),  maxW: 1200 },
  { dir: join(ROOT, "public", "ba"),       maxW: 1200 },
];
const OG = join(ROOT, "public", "og-default.jpg");

const MAX_BYTES = 200 * 1024;

async function compressOne(filePath, maxWidth) {
  const before = (await stat(filePath)).size;
  if (before <= MAX_BYTES) {
    console.log(`✓ skip ${filePath.split(/[\\/]/).slice(-2).join("/")} — ${(before / 1024).toFixed(0)}KB ≤ 200KB`);
    return;
  }

  const original = await readFile(filePath);
  let lastBuf = null;
  for (const q of [85, 78, 70, 62, 55]) {
    const buf = await sharp(original)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality: q, progressive: true, mozjpeg: true })
      .toBuffer();
    if (buf.length <= MAX_BYTES) {
      await writeFile(filePath, buf);
      console.log(`✓ ${filePath.split(/[\\/]/).slice(-2).join("/")} — ${(before / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB (q=${q})`);
      return;
    }
    lastBuf = buf;
  }
  if (lastBuf) {
    await writeFile(filePath, lastBuf);
    console.log(`⚠ ${filePath.split(/[\\/]/).slice(-2).join("/")} — ${(before / 1024).toFixed(0)}KB → ${(lastBuf.length / 1024).toFixed(0)}KB (best-effort)`);
  }
}

async function main() {
  for (const t of TARGETS) {
    const files = (await readdir(t.dir, { withFileTypes: true }))
      .filter(d => d.isFile() && d.name.endsWith(".jpg"))
      .map(d => d.name);
    for (const f of files) {
      await compressOne(join(t.dir, f), t.maxW);
    }
  }
  await compressOne(OG, 1200);
}

main().catch(e => { console.error(e); process.exit(1); });
