// Build the stotra collection the site reads, from the verified stotras.
//
//   reads  corpus/stotras/bsr/stotras.json, corpus/stotras/bsr/collation.json,
//          src/lib/stotra-corpus/checked/*.json
//   -> src/lib/stotra-corpus/data/spine.json         (every stotra, without its text)
//   -> src/lib/stotra-corpus/data/texts/<devata>.json (the texts, one file per devata)
//
// Run: node scripts/stotras/segment-bsr.mjs && node scripts/stotras/collate.mjs \
//        && node scripts/stotras/build.mjs
//
// Only a stotra with a check record whose collation is "verified" is
// built. A check record whose stotra is not verified fails the build:
// work in progress is never published by accident, and never dropped
// without a word either.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { CORPUS, ROOT } from "./lib.mjs";
import { loadChecks, applyChecks } from "./compare.mjs";

const OUT = join(ROOT, "src", "lib", "stotra-corpus", "data");
const stotras = JSON.parse(readFileSync(join(CORPUS, "bsr", "stotras.json"), "utf8"));
const collation = JSON.parse(readFileSync(join(CORPUS, "bsr", "collation.json"), "utf8"));
const checks = loadChecks();

const PRINTED_OFFSET = 8; // scan page 9 is printed page 1
const BOOK = "बृहत्स्तोत्ररत्नाकरः (प्रथमः भागः).pdf";

const spine = [];
const texts = {};
const problems = [];
const seen = new Set();

for (const [startPage, check] of [...checks].sort((a, b) => a[0] - b[0])) {
  const i = stotras.findIndex((s) => s.pages[0] === startPage);
  const s = stotras[i];
  const rec = collation[i];
  if (!s || s.title !== check.editionTitle) {
    problems.push(`${check.file}: no stotra "${check.editionTitle}" starts on scan page ${startPage}`);
    continue;
  }
  if (rec?.status !== "verified") {
    problems.push(`${check.file}: ${rec?.unsettled?.length ?? "?"} places still unsettled — not verified`);
    continue;
  }
  if (seen.has(check.slug)) problems.push(`${check.file}: slug ${check.slug} used twice`);
  seen.add(check.slug);

  const verses = applyChecks(s, check).filter((v) => v.lines.length);
  // Verses are numbered on the page by their place in the stotra. That
  // is the book's own numbering almost everywhere; where the book leaves
  // some unnumbered or numbers a preface apart (Manīṣāpañcaka), one
  // plain sequence is clearer, and the record's page references still
  // lead to the print.
  const place = new Map(verses.map((v, i) => [v.label, String(i + 1)]));
  const at = (verse) => {
    const n = place.get(String(verse));
    if (!n) problems.push(`${check.file}: names verse ${verse}, which it does not have`);
    return n;
  };
  const pages = s.pages.filter((p) => s.quality[p] !== undefined);
  if (pages.some((p) => s.quality[p] === "not-proofread")) problems.push(`${check.file}: spans a page not yet proofread on Wikisource`);

  spine.push({
    slug: check.slug,
    devata: check.devata,
    title: s.title,
    name: check.name,
    composer: check.composer ?? null,
    verseCount: verses.length,
    edition: {
      book: "bsr-1",
      printedPages: pages.map((p) => p - PRINTED_OFFSET),
      scans: pages.map((p) => ({ page: p, revid: s.revids[p], wikisource: `पृष्ठम्:${BOOK}/${p}` })),
    },
    witness: check.witness,
    checkedOn: check.checkedOn,
    refrainExpanded: Boolean(check.refrain),
    corrections: (check.corrections ?? []).map(({ verse, from, to, page, kind }) => ({ verse: at(verse), from, to, page, kind })),
    variants: (check.variants ?? []).map(({ verse, reading, witness, extra, whole, order, page }) => ({
      verse: at(verse),
      kind: extra ? "extra" : whole ? (order ? "order" : "absent") : "reading",
      reading: reading ?? null,
      witness: witness ?? null,
      extra: extra ?? null,
      page,
    })),
  });
  (texts[check.devata] ??= {})[check.slug] = verses.map((v, i) => ({
    n: String(i + 1),
    lines: v.lines.map((l) => l.replace(/\s+/g, " ").trim()),
  }));
}

if (problems.length) {
  console.error("Build refused:\n  " + problems.join("\n  "));
  process.exit(1);
}

rmSync(join(OUT, "texts"), { recursive: true, force: true });
mkdirSync(join(OUT, "texts"), { recursive: true });
spine.sort((a, b) => a.devata.localeCompare(b.devata) || a.edition.printedPages[0] - b.edition.printedPages[0]);
writeFileSync(join(OUT, "spine.json"), JSON.stringify(spine, null, 1) + "\n");
for (const [devata, t] of Object.entries(texts)) {
  writeFileSync(join(OUT, "texts", `${devata}.json`), JSON.stringify(t, null, 1) + "\n");
}
console.log(`${spine.length} stotras built: ${Object.entries(texts).map(([d, t]) => `${d} ${Object.keys(t).length}`).join(", ")}`);
