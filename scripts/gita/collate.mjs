// Collate the Besant & Bhagavan Das edition (as transcribed on
// Wikisource) with two independent digital texts of the Gita:
//
//   gg  the Gita Initiative's gita/gita (Unlicense)
//   vs  vedicscriptures/bhagavad-gita (GPL-3.0; used to check, never copied)
//
// Spelling conventions are levelled first (anusvāra for a class nasal,
// sattva written सत्व, avagraha, spacing, numbering), so what is left is
// a difference of letters. Where the transcription agrees with at least
// one witness the reading stands. Where it disagrees with both, it is a
// place to read on the scan: either the transcription misread the print,
// or the print reads differently from both and the reading is kept.
//
//   node scripts/gita/collate.mjs            # summary
//   node scripts/gita/collate.mjs 2          # every place in chapter 2
//
// Writes corpus/gita/collation.json.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../stotras/lib.mjs";

const read = (p) => JSON.parse(readFileSync(join(ROOT, p), "utf8"));
const besant = read("corpus/gita/besant/verses.json");
const gg = read("corpus/gita/raw/verse.json");
const VS = join(ROOT, "corpus/gita/witness-vs/bhagavad-gita-main/slok");

const NASAL = /[ङञणनम]्(?=[क-ह])/g;

/** A verse reduced to its letters, with spelling conventions levelled. */
export function level(text) {
  // A speaker line is a short first line ending in uvāca. (Not any
  // "uvāca": वाक्यमुवाच in 2.1 is part of the verse.)
  // A speaker line may also stand in the middle of a verse (1.21).
  const SPEAKER = /^[^\s]{0,20}\s?[^\s]{0,20}\s*(?:उवाच|ुवाच)\s*[।|:॥]*\s*$/;
  const lines = text.normalize("NFC").split("\n").filter((l) => l.trim() && !SPEAKER.test(l.trim()));
  return lines
    .join(" ")
    .replace(/\(or[^)]*\)/g, "") // a witness's marginal variant
    .replace(/[०-९0-9]/g, "")
    .replace(/[।॥|.\-–:;,\s‌‍'’"]/g, "")
    .replace(/ऽ/g, "")
    .replace(/ँ/g, "ं")
    .replace(NASAL, "ं")
    .replace(/म्$/, "ं")
    .replace(/त्त्व/g, "त्व")
    .replace(/र्([क-ह])्\1/g, "र्$1") // कर्म्म written कर्म
    .replace(/ृ़/g, "ॄ")
    .replace(/ः(?=[शसष])/g, "$&") // visarga kept: a real letter
    .replace(/[॒॑]/g, "");
}

function vsText(c, v) {
  const f = join(VS, `bhagavadgita_chapter_${c}_slok_${v}.json`);
  return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")).slok : null;
}

/** The places two levelled strings differ, as [ours, theirs] pairs. */
function diffs(a, b) {
  // A small LCS on code points; verses are short.
  const A = [...a], B = [...b];
  const n = A.length, m = B.length;
  const L = Array.from({ length: n + 1 }, () => new Int16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = [];
  let i = 0, j = 0, x = "", y = "";
  const flush = () => { if (x || y) out.push([x, y, i]); x = y = ""; };
  while (i < n || j < m) {
    if (i < n && j < m && A[i] === B[j]) { flush(); i++; j++; }
    else if (j < m && (i === n || L[i][j + 1] >= L[i + 1][j])) y += B[j++];
    else x += A[i++];
  }
  flush();
  return out;
}

const places = [];
const stats = { verses: 0, clean: 0, oneWitness: 0, suspect: 0 };
// Both witnesses count Arjuna's question ("prakṛtiṃ puruṣaṃ caiva…") as
// 13.1, a verse the Besant edition omits with a footnote; their 13.n+1
// is its 13.n.
const wn = (c, v) => (c === 13 ? v + 1 : v);

/**
 * The places where a verse's mūla disagrees with both witnesses, after
 * levelling. Empty when it agrees with either one. Exported so the build
 * can re-collate the corrected text.
 */
export function placesIn(chapter, verse, mula) {
  const ours = level(mula.join("\n"));
  const g = gg.find((x) => x.chapter_number === chapter && x.verse_number === wn(chapter, verse));
  const vt = vsText(chapter, wn(chapter, verse));
  const witnesses = { gg: g ? level(g.text) : null, vs: vt ? level(vt) : null };
  if (ours === witnesses.gg && ours === witnesses.vs) return { kind: "clean", differs: [] };
  // A difference stands only if neither witness has our reading there:
  // where we differ from gg AND, at the same letters, from vs.
  const dg = witnesses.gg ? diffs(ours, witnesses.gg) : [];
  const dv = witnesses.vs ? diffs(ours, witnesses.vs) : [];
  const vsKeys = new Set(dv.map((d) => d[0]));
  const both = dg.filter((d) => (d[0] ? vsKeys.has(d[0]) : dv.some((e) => !e[0] && Math.abs(e[2] - d[2]) <= 2)));
  if (!both.length) return { kind: "oneWitness", differs: [] };
  return {
    kind: "suspect",
    gg: g ? g.text.replace(/\s+/g, " ").trim() : null,
    vs: vt?.replace(/\s+/g, " ").trim() ?? null,
    differs: both.map((d) => ({ ours: d[0], gg: d[1], vs: dv.find((e) => e[0] === d[0])?.[1] ?? null })),
  };
}

const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop());
if (isMain) {
  for (const b of besant) {
    stats.verses++;
    const r = placesIn(b.chapter, b.verse, b.mula);
    stats[r.kind === "clean" ? "clean" : r.kind === "oneWitness" ? "oneWitness" : "suspect"]++;
    if (r.kind === "suspect") places.push({ ref: `${b.chapter}.${b.verse}`, pages: b.mulaPages, mula: b.mula, gg: r.gg, vs: r.vs, differs: r.differs });
  }
  writeFileSync(join(ROOT, "corpus/gita/collation.json"), JSON.stringify({ stats, places }, null, 1));
  console.log(stats);
}
const want = isMain && process.argv[2];
if (want) for (const p of places.filter((p) => p.ref.startsWith(`${want}.`))) {
  console.log(`\n${p.ref}  p${p.pages}`);
  console.log("  ours", p.mula.join(" / "));
  console.log("  gg  ", p.gg);
  for (const d of p.differs) console.log(`  · ours「${d.ours}」 gg「${d.gg}」 vs「${d.vs}」`);
}
