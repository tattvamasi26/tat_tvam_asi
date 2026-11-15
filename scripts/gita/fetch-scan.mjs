// Download the scan of one or more pages of the Besant & Bhagavan Das
// Gita (1905), to settle a reading against the printed book.
//
//   node scripts/gita/fetch-scan.mjs 70 71     -> corpus/gita/scans/070.jpg …
//
// The page images are rendered by Wikimedia from the DjVu file. Page
// numbers are the file's (the Wikisource page numbers), not the book's.

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, UA, api, sleep } from "../stotras/lib.mjs";

const FILE = "File:भगवद्गीता (आनिबेसेण्ट्, भगवान्दासश्च).djvu";
const OUT = join(ROOT, "corpus", "gita", "scans");
mkdirSync(OUT, { recursive: true });
const width = Number(process.env.SCAN_WIDTH ?? 1600);

for (const arg of process.argv.slice(2)) {
  const page = Number(arg);
  const file = join(OUT, `${String(page).padStart(3, "0")}.jpg`);
  if (existsSync(file)) continue;
  const r = await api({ action: "query", prop: "imageinfo", titles: FILE, iiprop: "url", iiurlwidth: String(width), iiurlparam: `page${page}-${width}px` });
  const url = r.query.pages[0].imageinfo?.[0]?.thumburl;
  if (!url) {
    console.log(`no image for page ${page}`);
    continue;
  }
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      console.log(file);
      break;
    } catch (e) {
      console.log(`  [${e.message}] retrying page ${page}`);
      await sleep(5000 * (attempt + 1));
    }
  }
}
