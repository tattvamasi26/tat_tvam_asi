// Every place to read on the scan, page by page, for one chapter: the
// Sanskrit places from collate.mjs and the English ones from
// collate-english.mjs, minus those a check record already settles.
//
//   node scripts/gita/proof.mjs 2
//
// Then fetch the pages (fetch-scan.mjs), read each place, and record
// the decision in src/lib/gita/checked/chapter-NN.json.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../stotras/lib.mjs";

const ch = Number(process.argv[2]);
const sa = JSON.parse(readFileSync(join(ROOT, "corpus/gita/collation.json"), "utf8")).places.filter((p) => p.ref.startsWith(`${ch}.`));
const en = JSON.parse(readFileSync(join(ROOT, "corpus/gita/collation-english.json"), "utf8")).filter((p) => p.ref.startsWith(`${ch}.`));
const verses = JSON.parse(readFileSync(join(ROOT, "corpus/gita/besant/verses.json"), "utf8")).filter((v) => v.chapter === ch);

const byPage = new Map();
const add = (page, line) => { if (!byPage.has(page)) byPage.set(page, []); byPage.get(page).push(line); };
for (const p of sa) for (const d of p.differs) add(p.pages[0], `${p.ref} SA ours「${d.ours}」 gg「${d.gg}」 vs「${d.vs}」   ${p.mula.join(" / ")}`);
for (const p of en) {
  const v = verses.find((x) => `${x.chapter}.${x.verse}` === p.ref);
  const page = v?.pages.find((n) => !v.mulaPages.includes(n)) ?? v?.pages[0];
  if (p.unlocated) add(page, `${p.ref} EN unlocated: ${p.translation}`);
  for (const d of p.differs ?? []) add(page, `${p.ref} EN ours「${d.ours}」 ia「${d.ia}」`);
}
const pages = [...byPage.keys()].sort((a, b) => a - b);
console.log(`chapter ${ch}: ${sa.reduce((t, p) => t + p.differs.length, 0)} Sanskrit, ${en.reduce((t, p) => t + (p.differs?.length ?? 0) + (p.unlocated ? 1 : 0), 0)} English places on ${pages.length} pages`);
console.log(`pages: ${pages.join(" ")}`);
for (const pg of pages) {
  console.log(`\n── page ${pg}`);
  for (const l of byPage.get(pg)) console.log("  " + l);
}
