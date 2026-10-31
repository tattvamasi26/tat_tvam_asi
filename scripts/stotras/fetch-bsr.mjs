// Harvest the Bṛhat Stotra Ratnākara, volume 1 (1953), as transcribed
// and proofread page by page on Sanskrit Wikisource.
//
//   -> corpus/stotras/bsr/pages.json
//        [{ page: 265, title, revid, quality, text }]   (scan order)
//   -> corpus/stotras/bsr/index.json
//        the Index page's wikitext (book metadata, page list)
//
// Run: node scripts/stotras/fetch-bsr.mjs
//
// This is the site's edition of record for the stotras (docs/STOTRAS.md):
// a printed book, every page of which carries a proofreading status on
// Wikisource. "Validated" (पुष्टितम्) means two people have checked the
// page against the scan; "proofread" (परिष्कृतम्) means one has. Pages
// still "not proofread" are harvested too, so the build can refuse them
// by name.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { CORPUS, api } from "./lib.mjs";

const BOOK = "बृहत्स्तोत्ररत्नाकरः (प्रथमः भागः).pdf";
const OUT = join(CORPUS, "bsr");
mkdirSync(OUT, { recursive: true });

const DEVA = "०१२३४५६७८९";
const fromDeva = (s) => Number(s.replace(/[०-९]/g, (d) => String(DEVA.indexOf(d))));

const QUALITY = { "पुष्टितम्": "validated", "परिष्कृतम्": "proofread", "अपरिष्कृतम्": "not-proofread" };

const pages = [];
let cont = {};
do {
  const r = await api({
    action: "query",
    generator: "allpages",
    gapnamespace: "104",
    gapprefix: BOOK + "/",
    gaplimit: "50",
    prop: "proofread|revisions",
    rvprop: "ids|content",
    rvslots: "main",
    ...cont,
  });
  for (const pg of r.query?.pages ?? []) {
    const rev = pg.revisions?.[0];
    if (!rev) continue;
    const q = pg.proofread?.quality_text ?? "";
    pages.push({
      page: fromDeva(pg.title.split("/").pop()),
      title: pg.title,
      revid: rev.revid,
      quality: QUALITY[q] ?? q,
      text: rev.slots.main.content,
    });
  }
  cont = r.continue ?? {};
  console.log(`  ${pages.length} pages`);
} while (cont.gapcontinue || cont.rvcontinue);

pages.sort((a, b) => a.page - b.page);
writeFileSync(join(OUT, "pages.json"), JSON.stringify(pages, null, 1));

const idx = await api({ action: "query", prop: "revisions", rvprop: "ids|content", rvslots: "main", titles: "अनुक्रमणिका:" + BOOK });
const ip = idx.query.pages[0];
writeFileSync(join(OUT, "index.json"), JSON.stringify({ title: ip.title, revid: ip.revisions[0].revid, wikitext: ip.revisions[0].slots.main.content }, null, 1));

const tally = pages.reduce((t, p) => ((t[p.quality] = (t[p.quality] ?? 0) + 1), t), {});
console.log(`${pages.length} pages`, tally);
