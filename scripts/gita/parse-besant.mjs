// Split the Besant & Bhagavan Das (1905) pages into verses.
//
// The book is read as one stream of lines, each tagged with its page.
// A verse is the run of pure-Devanagari lines ending in a daṇḍa and a
// number; its translation is the English up to "(N)"; its word gloss is
// everything after that, up to the next verse. Uvāca lines are kept
// apart. Verses are numbered by their order against the vulgate counts,
// and every place the book's own printed number disagrees is reported,
// because that is where a verse was missed or split.
//
//   node scripts/gita/parse-besant.mjs
//
// Writes corpus/gita/besant/verses.json.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../stotras/lib.mjs";
import { COUNTS } from "./lib.mjs";
const FIRST_PAGE = 47; // 1.1; before it, the grammar primer and the Gītā-māhātmya
const LAST_PAGE = 396; // after it, library stamps

const pages = JSON.parse(readFileSync(join(ROOT, "corpus/gita/besant/pages.json"), "utf8"));
const DEV = "०१२३४५६७८९";
const num = (s) => Number(String(s).replace(/[०-९]/g, (c) => DEV.indexOf(c)));

// The book's footnotes sit below a rule at the foot of the page: "1 Words
// that sound wise…". They are kept, by page and number, and attached to
// the translation whose marker points at them.
const notes = new Map(); // page -> Map(n -> text)
function readNotes(page, text) {
  const t = text.replace(/\{\{gap\}\}/g, " ").replace(/''/g, "").replace(/\s+/g, " ").trim();
  const m = new Map();
  // "I Drona…": the OCR reads a note numbered 1 as the letter I.
  const parts = t.split(/(?:^|\s)([\dI])\s+(?=[A-Z"'‘“ऀ-ॿ])/);
  for (let i = 1; i < parts.length; i += 2) m.set(parts[i] === "I" ? 1 : Number(parts[i]), parts[i + 1].trim());
  if (m.size) notes.set(page, m);
}

const lines = [];
for (const p of pages) {
  if (p.n < FIRST_PAGE || p.n > LAST_PAGE) continue;
  const [main, foot] = p.text.split("{{rule}}");
  if (foot) readNotes(p.n, foot.replace(/<noinclude>[\s\S]*?<\/noinclude>/g, ""));
  const t = main
    .replace(/<noinclude>[\s\S]*?<\/noinclude>/g, "")
    .replace(/<\/?poem>/g, "\n")
    .replace(/\{\{gap\}\}/g, " ")
    .replace(/\{\{(?:center|bold|larger|smaller|x-larger|sc)\|([^}]*)\}\}/g, "$1")
    .replace(/''/g, "");
  for (const raw of t.split("\n")) {
    const s = raw.replace(/\s+/g, " ").trim();
    if (!s) continue;
    if (/^\[\s*[\dlivxIVX०-९ ]+[\])]?\s*$/.test(s)) continue; // page numbers, "[ 3० ]" included
    if (/^[॥।|\s]+$/.test(s)) continue; // a daṇḍa the OCR set on a line of its own
    lines.push({ s, page: p.n });
  }
}

const hasLatin = (s) => /[A-Za-z]/.test(s);
// A verse line is Devanagari. OCR sometimes drops a stray Latin letter
// into one (स्वधर्मx), so two are tolerated in a line of ten or more.
const isDeva = (s) => {
  const deva = (s.match(/[ऀ-ॿ]/g) || []).length;
  const latin = (s.match(/[A-Za-z]/g) || []).length;
  return deva > 0 && (latin === 0 || (latin <= 2 && deva >= 10));
};
// The verse number, its digits sometimes split by a space (१ ६); or a
// bare double daṇḍa where the print or the OCR lost the number (17.8),
// which then comes from the "(N)" closing the translation.
const END = /(?:[॥।|]+\s*([०-९0-9](?:\s?[०-९0-9])?)\s*[॥।|]*|॥|।।)\s*$/;
const COLOPHON = /इति\s*श्रीमद्भगवद्गीता|ध्यायः/;
// "संजय उवाच", and "श्रीभगवानुवाच" written as one word.
const UVACA = /^[ऀ-ॿ\s]{2,30}(?:उवाच|ुवाच)\s*[।|:॥]*\s*$/;

const blocks = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].s.match(END);
  if (!m || !isDeva(lines[i].s) || COLOPHON.test(lines[i].s)) continue;
  let j = i;
  // Walk back over the verse's own lines. A line ending in a numbered
  // daṇḍa belongs to the verse before; one ending in a bare "।।" is a
  // half-verse of this one (2.30).
  const ownsNumber = (s) => { const e = s.match(END); return !!(e && e[1]); };
  // A speaker line is part of the verse where the book prints it: above
  // it, or in its middle (1.21: "…महीपते । अर्जुन उवाच । सेनयो…").
  while (j - 1 >= 0 && isDeva(lines[j - 1].s) && !ownsNumber(lines[j - 1].s) && !COLOPHON.test(lines[j - 1].s) && i - j < 7) j--;
  const mula = lines.slice(j, i + 1);
  const uvaca = UVACA.test(mula[0].s) ? mula[0].s.replace(/[।|:॥\s]+$/, "") : null;
  let printed = m[1] ? num(m[1].replace(/\s/g, "")) : null;
  if (printed === null) {
    // A bare double daṇḍa closes a half-verse when more verse follows.
    if (lines[i + 1] && isDeva(lines[i + 1].s)) continue;
    // Only a verse if its translation closes with a number soon after.
    const close = lines.slice(i + 1, i + 12).find((l) => /\(\s*\d{1,2}\s*\)\s*$/.test(l.s));
    if (!close) continue;
    printed = Number(close.s.match(/\((\s*\d{1,2})\s*\)\s*$/)[1]);
  }
  blocks.push({ printed, uvaca, mula, start: j, end: i });
}

// Number by the book's own printed numbers. A chapter starts where the
// numbering falls back to 1. A printed number that breaks the sequence
// while its neighbours keep it is an OCR slip (११ read as १), and is
// taken from the sequence; anything else is left as printed and
// surfaces below as a gap or a repeat.
const verses = [];
let chapter = 0;
for (let i = 0; i < blocks.length; i++) {
  const k = blocks[i];
  const prev = verses.at(-1);
  const nextPrinted = blocks[i + 1]?.printed;
  let n = k.printed;
  if (prev && prev.chapter === chapter && n !== prev.verse + 1) {
    const expected = prev.verse + 1;
    if (nextPrinted === expected + 1 || (expected === COUNTS[chapter - 1] && nextPrinted === 1)) n = expected;
  }
  if (!prev || (n === 1 && prev.verse !== 0) || (prev && n < prev.verse - 3)) chapter++;
  verses.push({ chapter, verse: n, printed: k.printed, uvaca: k.uvaca, mula: k.mula.map((l) => l.s), mulaPages: [...new Set(k.mula.map((l) => l.page))], start: k.start, end: k.end });
}

// Translation and gloss: the lines between one verse and the next.
for (let k = 0; k < verses.length; k++) {
  const v = verses[k];
  const to = k + 1 < verses.length ? verses[k + 1].start - (verses[k + 1].uvaca ? 1 : 0) : lines.length;
  const body = lines.slice(v.end + 1, Math.max(v.end + 1, to)).filter((l) => !COLOPHON.test(l.s));
  // The translation is English and the gloss opens on a Devanagari word,
  // so the first Devanagari letter is the boundary. The book closes a
  // translation with "(N)", but the OCR sometimes sets that marker on
  // its own line before the translation, so it is removed wherever it
  // falls rather than trusted as the boundary.
  // A Devanagari word, not a lone vowel sign the OCR dropped into an
  // English one ("boैmen").
  // ("न not;" opens a gloss on a one-letter word.)
  const DEVA_WORD = /[ऀ-ॿ]{2,}|[अ-ह](?=\s+[A-Za-z(])/;
  const firstDeva = body.findIndex((l) => DEVA_WORD.test(l.s));
  const trLines = firstDeva < 0 ? body : body.slice(0, firstDeva + 1);
  const MARK = /[({]\s*[\dlI]{1,2}\s*\)/g;
  // A footnote marker is a lone digit after a word ("well-wishers, 1").
  // Its note is on the same page; numbering starts again on every page.
  const v_notes = [];
  const trText = trLines
    .map((l, idx) => {
      let s = idx === trLines.length - 1 && firstDeva >= 0 ? l.s.slice(0, l.s.search(DEVA_WORD)) : l.s;
      s = s.replace(MARK, " ").replace(/([A-Za-z,;:.!?'"’”)])\s?(\d)(?=[\s,;:.!?]|$)/g, (all, before, n) => {
        const note = notes.get(l.page)?.get(Number(n));
        if (note) v_notes.push(note);
        return before;
      });
      return s;
    })
    .join(" ");
  v.translation = trText.replace(/^[}\s]+/, "").replace(/\s+/g, " ").trim();
  v.notes = v_notes;
  const all = body.map((l) => l.s).join(" ");
  const at = all.search(DEVA_WORD);
  v.gloss = at < 0 ? "" : all.slice(at).trim();
  v.pages = [...new Set([...v.mulaPages, ...body.map((l) => l.page)])];
  delete v.start;
  delete v.end;
}

writeFileSync(join(ROOT, "corpus/gita/besant/verses.json"), JSON.stringify(verses, null, 1));
console.log(`blocks ${blocks.length}, verses ${verses.length} (vulgate 700)`);
const off = verses.filter((v) => v.printed !== v.verse);
console.log(`printed number corrected from its neighbours: ${off.map((v) => `${v.chapter}.${v.verse}(${v.printed})`).join(" ")}`);
for (let c = 1; c <= 18; c++) {
  const got = verses.filter((v) => v.chapter === c).map((v) => v.verse);
  const missing = [], repeated = [];
  for (let n = 1; n <= COUNTS[c - 1]; n++) {
    const k = got.filter((x) => x === n).length;
    if (!k) missing.push(n);
    if (k > 1) repeated.push(n);
  }
  const extra = got.filter((n) => n > COUNTS[c - 1]);
  if (missing.length || repeated.length || extra.length) console.log(`  chapter ${c}: missing ${missing} repeated ${repeated} beyond ${extra}`);
}
console.log("no translation:", verses.filter((v) => !v.translation).map((v) => `${v.chapter}.${v.verse}`).join(" ") || "none");
console.log("no gloss:", verses.filter((v) => !v.gloss).map((v) => `${v.chapter}.${v.verse}`).join(" ") || "none");
