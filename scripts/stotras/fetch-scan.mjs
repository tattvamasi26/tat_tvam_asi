// Download the scan of one or more pages of the Bṛhat Stotra Ratnākara,
// to settle a reading against the printed book.
//
//   node scripts/stotras/fetch-scan.mjs 98 99      -> corpus/stotras/scans/098.jpg …
//   SCAN_WIDTH=2400 node scripts/stotras/fetch-scan.mjs 98  -> 098-hi.jpg (for crop-scan.ps1)
//
// The page images are rendered by Wikimedia from the PDF on Commons.

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { CORPUS, UA, api, sleep } from "./lib.mjs";

const FILE = "File:बृहत्स्तोत्ररत्नाकरः (प्रथमः भागः).pdf";
const OUT = join(CORPUS, "scans");
mkdirSync(OUT, { recursive: true });
const width = Number(process.env.SCAN_WIDTH ?? 1400);

for (const arg of process.argv.slice(2)) {
  const page = Number(arg);
  // A wider rendering, for reading one line closely, is kept beside the plain one.
  const file = join(OUT, `${String(page).padStart(3, "0")}${width > 1400 ? "-hi" : ""}.jpg`);
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
