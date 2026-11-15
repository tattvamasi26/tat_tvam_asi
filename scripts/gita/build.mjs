// Build what the site reads for the Gita's verses, from the Besant &
// Bhagavan Das edition (1905) and the check records.
//
//   node scripts/gita/parse-besant.mjs
//   node scripts/gita/collate.mjs
//   node scripts/gita/collate-english.mjs
//   node scripts/gita/build.mjs
//
// A chapter is published only when its record in src/lib/gita/checked/
// shows that every scan page with a place to read was read, and the
// corrected Sanskrit leaves no disagreement with both witnesses except
// the readings the record keeps. A record for a chapter that does not
// pass fails the build, so work in progress is never published and
// never dropped silently either.
//
// Writes src/lib/gita/data/spine.json and chapter-N.json.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../stotras/lib.mjs";
import { COUNTS } from "./lib.mjs";
import { placesIn } from "./collate.mjs";
import { asPrinted } from "./names.mjs";

const read = (p) => JSON.parse(readFileSync(join(ROOT, p), "utf8"));
const verses = read("corpus/gita/besant/verses.json");
const english = read("corpus/gita/collation-english.json");
const pagesJson = read("corpus/gita/besant/pages.json");
const CHECKED = join(ROOT, "src/lib/gita/checked");
const OUT = join(ROOT, "src/lib/gita/data");
mkdirSync(OUT, { recursive: true });

const SPEAKER = /^[^\s]{0,20}\s?[^\s]{0,20}\s*(?:उवाच|ुवाच)\s*[।|:॥]*\s*$/;

// The transcription is inconsistent about a space before punctuation
// ("Pandavas ?", "family ;"); this is typography, not text, so it is
// levelled. Straight quotes become the print's curly ones.
const tidy = (s) =>
  s
    .replace(/\s+([;:?!,.])/g, "$1")
    .replace(/([;:?!])(?=[A-Za-zâîû"“])/g, "$1 ")
    .replace(/"(?=\S)/g, "“")
    .replace(/"/g, "”")
    .replace(/\s{2,}/g, " ")
    .trim();
const pad = (n) => String(n).padStart(2, "0");

/** Every scan page holding a place to read, for one chapter. */
function pagesToRead(ch) {
  const pages = new Set();
  for (const v of verses.filter((x) => x.chapter === ch)) {
    if (placesIn(v.chapter, v.verse, v.mula).kind === "suspect") pages.add(v.mulaPages[0]);
  }
  for (const p of english.filter((x) => x.ref.startsWith(`${ch}.`))) {
    if (!p.differs?.length && !p.unlocated) continue;
    const v = verses.find((x) => `${x.chapter}.${x.verse}` === p.ref);
    pages.add(v.pages.find((n) => !v.mulaPages.includes(n)) ?? v.pages[0]);
  }
  return [...pages].sort((a, b) => a - b);
}

function applyFixes(v, fixes, problems) {
  const out = { ...v, mula: [...v.mula] };
  for (const f of fixes.filter((x) => x.ref === `${v.chapter}.${v.verse}`)) {
    if (f.field === "mula") {
      const i = out.mula.findIndex((l) => l.includes(f.from));
      if (i < 0) { problems.push(`${f.ref}: "${f.from}" is not in the mūla`); continue; }
      out.mula[i] = out.mula[i].replace(f.from, f.to);
      if (!["transcription", "misprint"].includes(f.kind)) problems.push(`${f.ref}: a mūla fix needs kind "transcription" or "misprint"`);
      if (!f.page) problems.push(`${f.ref}: a fix needs its page`);
    } else if (f.field === "translation") {
      if (!out.translation.includes(f.from)) { problems.push(`${f.ref}: "${f.from}" is not in the translation`); continue; }
      out.translation = out.translation.replace(f.from, f.to);
    } else problems.push(`${f.ref}: unknown field ${f.field}`);
  }
  return out;
}

const spine = { edition: null, chapters: [] };
const failures = [];
for (let ch = 1; ch <= 18; ch++) {
  const recFile = join(CHECKED, `chapter-${pad(ch)}.json`);
  const own = verses.filter((v) => v.chapter === ch);
  const entry = { chapter: ch, verses: COUNTS[ch - 1], verified: false };
  spine.chapters.push(entry);
  if (!existsSync(recFile)) continue;

  const rec = JSON.parse(readFileSync(recFile, "utf8"));
  const problems = [];
  const fixes = rec.fixes ?? [];
  const kept = rec.kept ?? [];
  const fixed = own.map((v) => applyFixes(v, fixes, problems));

  const unread = pagesToRead(ch).filter((p) => !(rec.pagesRead ?? []).includes(p));
  if (unread.length) problems.push(`pages not yet read: ${unread.join(" ")}`);

  for (const v of fixed) {
    const r = placesIn(v.chapter, v.verse, v.mula);
    for (const d of r.differs) {
      const k = kept.find((x) => x.ref === `${v.chapter}.${v.verse}` && x.ours === d.ours);
      if (!k) problems.push(`${v.chapter}.${v.verse}: 「${d.ours}」 against 「${d.gg}」 is neither corrected nor kept`);
    }
  }
  for (const k of kept) if (!k.page || !k.note) problems.push(`${k.ref}: a kept reading needs its page and a note`);

  if (problems.length) {
    failures.push(`chapter ${ch}:\n  ${problems.join("\n  ")}`);
    continue;
  }

  entry.verified = true;
  const page = (n) => pagesJson.find((p) => p.n === n);
  writeFileSync(
    join(OUT, `chapter-${ch}.json`),
    JSON.stringify({
      chapter: ch,
      checkedOn: rec.checkedOn,
      verses: fixed.map((v) => ({
        n: v.verse,
        lines: v.mula.map((l) => {
          const t = l.replace(/\s*[॥।|]+\s*[०-९0-9\s]*[॥।|]*\s*$/, (m) => (SPEAKER.test(l) ? "" : m.includes("॥") || /[०-९0-9]/.test(m) ? " ॥" : " ।")).trim();
          return SPEAKER.test(l) ? { t: l.replace(/[।|:॥\s]+$/, ""), speaker: true } : { t };
        }),
        translation: tidy(asPrinted(v.translation)),
        pages: v.pages.map((n) => ({ n, rev: page(n)?.revid ?? null })),
      })),
      fixes: fixes.map(({ ref, field, from, to, kind, page: pg, why }) => ({ ref, field, from, to, kind: kind ?? "transcription", page: pg, ...(why ? { why } : {}) })),
      kept,
    }),
  );
}

spine.edition = {
  title: "The Bhagavad-Gita, with Samskrit text, free translation into English, a word-for-word translation, and an introduction on Samskrit grammar",
  translators: "Annie Besant and Bhagavan Das",
  year: 1905,
  printer: "Freeman & Co., Tara Printing Works, Benares",
  wikisource: "भगवद्गीता (आनिबेसेण्ट्, भगवान्दासश्च)",
  index: "भगवद्गीता (आनिबेसेण्ट्, भगवान्दासश्च).djvu",
};
writeFileSync(join(OUT, "spine.json"), JSON.stringify(spine, null, 1));

const done = spine.chapters.filter((c) => c.verified);
console.log(`published: ${done.map((c) => c.chapter).join(", ") || "none"} (${done.reduce((t, c) => t + c.verses, 0)} verses)`);
if (failures.length) {
  console.error(`\n${failures.join("\n\n")}`);
  process.exit(1);
}
