// Collate the English of the Besant & Bhagavan Das translation, as
// transcribed on Wikisource, with an independent OCR of another copy
// of the same 1905 printing (Internet Archive, bhagavadgitawith00londiala).
//
// Two OCRs of two physical copies rarely make the same slip in the same
// word, so where they agree the word stands, and where they differ the
// word is read on the scan. Diacritics, case, hyphenation and
// punctuation are levelled first.
//
//   node scripts/gita/collate-english.mjs        # summary
//   node scripts/gita/collate-english.mjs 2      # every place in chapter 2
//
// Writes corpus/gita/collation-english.json.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../stotras/lib.mjs";

const besant = JSON.parse(readFileSync(join(ROOT, "corpus/gita/besant/verses.json"), "utf8"));
const ia = readFileSync(join(ROOT, "corpus/gita/besant/ia.txt"), "utf8");

const fold = (w) =>
  w
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9']/g, "");
const words = (s) =>
  s
    .replace(/-\s+/g, "") // a word broken at the line end
    .split(/[\s—–]+|(?<=[a-z])-(?=[a-z])/i)
    .map(fold)
    .filter(Boolean);

const iaWords = words(ia.replace(/[^\x00-\x7FÀ-ɏḀ-ỿ]+/g, " "));

/** Where in the IA stream a translation starts: its opening words. */
// The opening words are tried first; when a slip on either side spoils
// them, a run further in is found and the start is counted back from it.
function locate(ws, from) {
  const offsets = [0, 2, 4, 7, 10, Math.floor(ws.length / 2)].filter((o, i, a) => a.indexOf(o) === i && o < ws.length);
  for (const k of [5, 4]) {
    for (const off of offsets) {
      const head = ws.slice(off, off + k);
      if (head.length < k) continue;
      for (let i = from; i < Math.min(iaWords.length - k, from + 60000); i++) {
        let ok = true;
        for (let j = 0; j < k; j++) if (iaWords[i + j] !== head[j]) { ok = false; break; }
        if (ok) return Math.max(0, i - off);
      }
    }
  }
  return -1;
}

function align(a, b) {
  const n = a.length, m = b.length;
  const L = Array.from({ length: n + 1 }, () => new Int16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = [];
  let i = 0, j = 0, x = [], y = [];
  const flush = () => { if (x.length || y.length) out.push({ ours: x.join(" "), ia: y.join(" "), at: i }); x = []; y = []; };
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) { flush(); i++; j++; }
    else if (j < m && (i === n || L[i][j + 1] >= L[i + 1][j])) y.push(b[j++]);
    else x.push(a[i++]);
  }
  flush();
  return out;
}

const places = [];
let cursor = 0, found = 0;
for (const v of besant) {
  const ws = words(v.translation);
  if (!ws.length) { places.push({ ref: `${v.chapter}.${v.verse}`, pages: v.pages, missing: true }); continue; }
  const at = locate(ws, Math.max(0, cursor - 2000));
  if (at < 0) { places.push({ ref: `${v.chapter}.${v.verse}`, pages: v.pages, unlocated: true, translation: v.translation }); continue; }
  found++;
  cursor = at;
  // Take a window a little longer than ours and trim the tail to the
  // last word we share, so the next verse's opening is not counted.
  const win = iaWords.slice(at, at + ws.length + 6);
  let d = align(ws, win);
  const last = d.at(-1);
  if (last && !last.ours && last.at >= ws.length) d = d.slice(0, -1);
  if (d.length) places.push({ ref: `${v.chapter}.${v.verse}`, pages: v.pages, translation: v.translation, differs: d.map(({ ours, ia }) => ({ ours, ia })) });
}

writeFileSync(join(ROOT, "corpus/gita/collation-english.json"), JSON.stringify(places, null, 1));
const n = places.reduce((t, p) => t + (p.differs?.length ?? 0), 0);
console.log({ verses: besant.length, located: found, versesWithPlaces: places.filter((p) => p.differs).length, places: n, unlocated: places.filter((p) => p.unlocated).map((p) => p.ref).join(" ") });
const want = process.argv[2];
if (want) for (const p of places.filter((p) => p.ref.startsWith(`${want}.`))) {
  console.log(`\n${p.ref} p${p.pages}  ${p.unlocated ? "UNLOCATED" : ""}`);
  console.log("  " + (p.translation ?? ""));
  for (const d of p.differs ?? []) console.log(`  · ours「${d.ours}」 ia「${d.ia}」`);
}
