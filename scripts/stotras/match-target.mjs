// For each stotra in the coverage target, find its page on Sanskrit
// Wikisource, and fetch the ones the category walk did not reach.
//
//   reads  corpus/stotras/stotranidhi-catalogue.json, corpus/stotras/raw/
//   -> corpus/stotras/raw/<pageid>.json   (more pages)
//   -> corpus/stotras/matches.json        ({ url, title, group, key, wikisource|null })
//
// Run: node scripts/stotras/match-target.mjs
//
// A match must agree on the title key (lib.mjs titleKey): same words,
// spelling differences levelled. A near miss is left unmatched rather
// than risk filing one stotra's text under another's name — "Ganesha
// Ashtakam" and "Ekadanta Ashtakam" are not the same text.

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { CORPUS, api, knToDeva, titleKey } from "./lib.mjs";

const RAW = join(CORPUS, "raw");
const catalogue = JSON.parse(readFileSync(join(CORPUS, "stotranidhi-catalogue.json"), "utf8"));

const have = new Map(); // key -> title
for (const f of readdirSync(RAW)) {
  const p = JSON.parse(readFileSync(join(RAW, f), "utf8"));
  have.set(titleKey(p.title), p.title);
}

const seen = new Map(); // url -> match
const toFetch = new Set();
let n = 0;
for (const g of catalogue.groups) {
  for (const it of g.items) {
    if (seen.has(it.url)) {
      seen.get(it.url).groups.push(g.title);
      continue;
    }
    // "Sri Saraswathi Stotram – ಶ್ರೀ ಸರಸ್ವತೀ ಸ್ತೋತ್ರಂ": the Kannada half.
    const kn = it.title.includes("–") ? it.title.split("–").pop().trim() : it.title;
    const key = titleKey(kn);
    const m = { url: it.url, title: kn, deva: knToDeva(kn), key, groups: [g.title], wikisource: have.get(key) ?? null };
    seen.set(it.url, m);
    if (!m.wikisource && key.length >= 3) {
      const query = knToDeva(kn).replace(/\(.*?\)/g, "").replace(/श्री\s*/g, "").trim();
      const r = await api({ action: "query", list: "search", srsearch: query, srlimit: "5", srnamespace: "0" });
      for (const hit of r.query?.search ?? []) {
        if (titleKey(hit.title) === key) {
          m.wikisource = hit.title;
          toFetch.add(hit.title);
          break;
        }
      }
    }
    if (++n % 50 === 0) console.log(`  ${n} looked up, ${[...seen.values()].filter((x) => x.wikisource).length} matched`);
  }
}

// Fetch the newly found pages, 20 at a time.
const titles = [...toFetch];
for (let i = 0; i < titles.length; i += 20) {
  const r = await api({
    action: "query",
    prop: "revisions|categories",
    rvprop: "ids|content",
    rvslots: "main",
    cllimit: "max",
    redirects: "1",
    titles: titles.slice(i, i + 20).join("|"),
  });
  for (const p of r.query.pages ?? []) {
    if (p.missing || !p.revisions) continue;
    const file = join(RAW, `${p.pageid}.json`);
    if (existsSync(file)) continue;
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
  }
}

const matches = [...seen.values()];
writeFileSync(join(CORPUS, "matches.json"), JSON.stringify(matches, null, 1));
console.log(`${matches.length} stotras in the target; ${matches.filter((m) => m.wikisource).length} found on Wikisource; ${titles.length} newly fetched`);
