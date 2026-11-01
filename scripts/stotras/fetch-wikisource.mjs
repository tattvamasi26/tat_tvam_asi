// Harvest the stotras on Sanskrit Wikisource.
//
//   -> corpus/stotras/raw/<pageid>.json   ({ pageid, title, revid, categories, wikitext })
//   -> corpus/stotras/pages.json          (every title found, with its categories)
//
// Run: node scripts/stotras/fetch-wikisource.mjs
//
// Why Wikisource: its texts are CC BY-SA 4.0 (or public domain), every
// page has a revision id a stotra can cite, and it is the edition the
// hand-entered stotras were already checked against. stotranidhi.com,
// which the owner pointed at, publishes no licence for its editions; its
// list is used only as the coverage target (build-target.mjs), never as
// a source of text. See docs/STOTRAS.md.
//
// The walk starts from the stotra categories and descends into their
// subcategories (deity-wise, author-wise), never into anything else.
// Requests are spaced and batched (20 pages a call), and a refusal is
// retried with a growing wait, as in scripts/rigveda/.

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const UA = "TatTvamAsi-research/1.0 (reference site; stotra harvest; https://tattvam-asi.org)";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT = join(ROOT, "corpus", "stotras");
const RAW = join(OUT, "raw");
mkdirSync(RAW, { recursive: true });

const ROOTS = ["वर्गः:स्तोत्राणि", "वर्गः:स्तोत्रसाहित्यम्"];
const MAX_DEPTH = 3;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(params, attempt = 0) {
  const url = new URL("https://sa.wikisource.org/w/api.php");
  url.searchParams.set("format", "json");
  url.searchParams.set("formatversion", "2");
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  await sleep(700);
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    if (attempt >= 5) throw e;
    const wait = 8000 * (attempt + 1);
    console.log(`  [${e.message}] waiting ${wait / 1000}s…`);
    await sleep(wait);
    return api(params, attempt + 1);
  }
}

// ── 1. Walk the category tree ─────────────────────────────
const pages = new Map(); // title -> Set(categories)
const seenCats = new Set();

async function walk(cat, depth) {
  if (seenCats.has(cat) || depth > MAX_DEPTH) return;
  seenCats.add(cat);
  let cont = {};
  do {
    const r = await api({ action: "query", list: "categorymembers", cmtitle: cat, cmlimit: "500", cmtype: "page|subcat", ...cont });
    for (const m of r.query.categorymembers) {
      if (m.ns === 14) await walk(m.title, depth + 1);
      else if (m.ns === 0) {
        if (!pages.has(m.title)) pages.set(m.title, new Set());
        pages.get(m.title).add(cat.replace(/^वर्गः:/, ""));
      }
    }
    cont = r.continue ?? {};
  } while (cont.cmcontinue);
  console.log(`${"  ".repeat(depth)}${cat} — ${pages.size} pages so far`);
}

for (const c of ROOTS) await walk(c, 0);

writeFileSync(
  join(OUT, "pages.json"),
  JSON.stringify([...pages].map(([title, cats]) => ({ title, categories: [...cats] })), null, 1),
);
console.log(`${pages.size} pages in ${seenCats.size} categories`);

// ── 2. Fetch each page's wikitext, 20 at a time ───────────
const titles = [...pages.keys()];
let saved = 0;
for (let i = 0; i < titles.length; i += 20) {
  const batch = titles.slice(i, i + 20);
  const r = await api({
    action: "query",
    prop: "revisions|categories",
    rvprop: "ids|content",
    rvslots: "main",
    cllimit: "max",
    redirects: "1",
    titles: batch.join("|"),
  });
  for (const p of r.query.pages ?? []) {
    if (p.missing || !p.revisions) continue;
    const file = join(RAW, `${p.pageid}.json`);
    const rev = p.revisions[0];
    writeFileSync(
      file,
      JSON.stringify({
        pageid: p.pageid,
        title: p.title,
        revid: rev.revid,
        categories: (p.categories ?? []).map((c) => c.title.replace(/^वर्गः:/, "")),
        wikitext: rev.slots.main.content,
      }),
    );
    saved++;
  }
  if ((i / 20) % 10 === 0) console.log(`  fetched ${Math.min(i + 20, titles.length)} / ${titles.length}`);
}
console.log(`saved ${saved} pages to corpus/stotras/raw/`);
