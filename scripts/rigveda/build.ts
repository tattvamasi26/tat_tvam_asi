// Build the Rigveda corpus the site reads.
//
//   corpus/rigveda/rv-sasvara-raw.txt   the accented samhita
//   corpus/rigveda/rv-spine-raw.json    per-sukta rishi/devata/metre
//   src/lib/rigveda/devatas*.ts         the editorial layer
//        |
//        v
//   src/lib/rigveda/data/spine.json       1,028 rows, no verses
//   src/lib/rigveda/data/mandala-N.json   the verses, one file per mandala
//
// Run: npx tsx scripts/rigveda/build.ts
//
// The split matters: the index, the mandala lists and the devata pages
// need the spine and nothing else (~300 KB), while a sukta page loads
// exactly one mandala. Nothing loads all 10,552 verses at once.
//
// Everything here is checked, not assumed. The build fails loudly on a
// verse count that disagrees with the samhita, a devata it cannot map,
// or a sukta with no rishi — it does not write a half-true corpus.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { principalDevata, isMixed } from "./attribution.mjs";
import { DEVATAS, DEVATA_FROM_PRINCIPAL } from "../../src/lib/rigveda/devatas";
import { DEVATAS_BY_HAND } from "../../src/lib/rigveda/devatas-by-hand";
import { RISHIS_BY_HAND, METRES_BY_HAND } from "../../src/lib/rigveda/spine-by-hand";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const CORPUS = join(ROOT, "corpus", "rigveda");
const OUT = join(ROOT, "src", "lib", "rigveda", "data");

const CANONICAL_PER_MANDALA = [191, 43, 62, 58, 87, 75, 104, 103, 114, 191];
const CANONICAL_STANZAS = 10552;

const fail = (msg: string) => {
  console.error("BUILD FAILED: " + msg);
  process.exit(1);
};

// ── 1. The samhita ────────────────────────────────────────────────
// Lines are locator-tagged: "1.001.01a <pada>". The pada letter is
// OPTIONAL — the dvipada viraj hymns (1.65-70, 7.17) print one line
// per stanza with no letter, and a parser that requires it silently
// drops seven hymns.

type Verse = { n: number; lines: string[] };

const verseLine = /^(\d+)\.(\d+)\.(\d+)([a-z]?)\s+(.*)$/;
const samhita = new Map<string, Map<number, string[]>>();

for (const line of readFileSync(join(CORPUS, "rv-sasvara-raw.txt"), "utf8").split(/\r?\n/)) {
  const m = line.match(verseLine);
  if (!m) continue;
  const ref = `${Number(m[1])}.${Number(m[2])}`;
  const stanza = Number(m[3]);
  if (!samhita.has(ref)) samhita.set(ref, new Map());
  const hymn = samhita.get(ref)!;
  if (!hymn.has(stanza)) hymn.set(stanza, []);
  hymn.get(stanza)!.push(m[5].trim());
}

const totalStanzas = [...samhita.values()].reduce((n, h) => n + h.size, 0);
if (samhita.size !== 1028) fail(`samhita has ${samhita.size} suktas, expected 1,028`);
if (totalStanzas !== CANONICAL_STANZAS) fail(`samhita has ${totalStanzas} stanzas, expected ${CANONICAL_STANZAS}`);

// ── 2. The spine ──────────────────────────────────────────────────

type RawSpine = {
  ref: string;
  mandala: number;
  sukta: number;
  rishi: string;
  devata: string;
  metre: string;
  notesRaw: string;
  hasSayana: boolean;
};

const raw: RawSpine[] = JSON.parse(readFileSync(join(CORPUS, "rv-spine-raw.json"), "utf8"));
const byRef = new Map(raw.map((r) => [r.ref, r]));
const devataIds = new Set(DEVATAS.map((d) => d.id));
const handDevata = new Map(DEVATAS_BY_HAND.map((d) => [d.ref, d]));
const handRishi = new Map(RISHIS_BY_HAND.map((r) => [r.ref, r]));
const handMetre = new Map(METRES_BY_HAND.map((m) => [m.ref, m]));

/** The notes field marks its parts: de. devata, r./rshi rishi, ch. chandas. */
function clause(notes: string, markers: RegExp): string {
  const m = notes.match(markers);
  if (!m) return "";
  return m[1]
    .replace(/\[https?:\/\/\S+\s+([^\]]*)\]/g, "$1")
    .replace(/\[https?:\/\/\S+\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[।|]\s*$/, "")
    .trim();
}

const rishiFromNotes = (n: string) => clause(n, /(?:ऋषयः|ऋषि-|ऋषिः|ऋ\.)\s*[-–—]?\s*([^]*?)(?:।\s*(?:दे\.|छ\.)|$)/);
const metreFromNotes = (n: string) => clause(n, /छ\.\s*([^]*?)(?:।|$)/);

type SpineRow = {
  ref: string;
  mandala: number;
  sukta: number;
  verses: number;
  rishi: string;
  devataId: string;
  devata: string;
  mixed: boolean;
  metre: string;
  hasSayana: boolean;
  /** Where a value came from, when it was not the Anukramani's own field. */
  readByHand?: Record<string, string>;
};

const spine: SpineRow[] = [];
const unmapped = new Map<string, string[]>();
const stillMissing: string[] = [];

for (const [ref, hymn] of samhita) {
  const r = byRef.get(ref);
  if (!r) fail(`no harvested page for RV ${ref}`);
  const src = r!;
  const readByHand: Record<string, string> = {};

  // devata
  let devata = src.devata.trim();
  let devataId = "";
  if (!devata) {
    const hand = handDevata.get(ref);
    if (!hand) {
      stillMissing.push(`${ref} devata`);
    } else {
      devata = hand.attribution;
      devataId = hand.devataId;
      readByHand.devata = `${hand.source}: ${hand.witness}`;
    }
  } else {
    const principal = principalDevata(devata);
    const id = DEVATA_FROM_PRINCIPAL[principal];
    if (!id) {
      if (!unmapped.has(principal)) unmapped.set(principal, []);
      unmapped.get(principal)!.push(ref);
    } else devataId = id;
  }
  if (devataId && !devataIds.has(devataId)) fail(`RV ${ref} maps to unknown devata id "${devataId}"`);

  // rishi: the author field, else the notes' own rishi clause, else read by hand
  let rishi = src.rishi.trim();
  if (!rishi) rishi = rishiFromNotes(src.notesRaw);
  if (!rishi) {
    const hand = handRishi.get(ref);
    if (!hand) stillMissing.push(`${ref} rishi`);
    else {
      rishi = hand.rishi;
      readByHand.rishi = `${hand.source}: ${hand.witness}`;
    }
  }

  // metre: the notes' tail, else its chandas clause, else read by hand
  let metre = src.metre.trim();
  if (!metre) metre = metreFromNotes(src.notesRaw);
  if (!metre) {
    const hand = handMetre.get(ref);
    if (!hand) stillMissing.push(`${ref} metre`);
    else {
      metre = hand.metre;
      readByHand.metre = `${hand.source}: ${hand.witness}`;
    }
  }

  spine.push({
    ref,
    mandala: src.mandala,
    sukta: src.sukta,
    verses: hymn.size,
    rishi,
    devataId,
    devata,
    mixed: isMixed(devata),
    metre,
    hasSayana: src.hasSayana,
    ...(Object.keys(readByHand).length ? { readByHand } : {}),
  });
}

if (unmapped.size) {
  console.error(`\n${unmapped.size} devata principal(s) have no entry in devatas.ts:`);
  for (const [p, refs] of unmapped) console.error(`  "${p}"  — ${refs.slice(0, 6).join(", ")}`);
  fail("every principal devata must map to a canonical id");
}
if (stillMissing.length) {
  console.error("\nstill missing after every source was read:");
  for (const m of stillMissing) console.error("  " + m);
  fail("the spine must be complete for all 1,028 suktas");
}

spine.sort((a, b) => a.mandala - b.mandala || a.sukta - b.sukta);

for (let md = 1; md <= 10; md++) {
  const n = spine.filter((s) => s.mandala === md).length;
  if (n !== CANONICAL_PER_MANDALA[md - 1]) fail(`mandala ${md} has ${n} suktas, expected ${CANONICAL_PER_MANDALA[md - 1]}`);
}

// ── 3. Write ──────────────────────────────────────────────────────

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "spine.json"), JSON.stringify(spine), "utf8");

for (let md = 1; md <= 10; md++) {
  const suktas = spine
    .filter((s) => s.mandala === md)
    .map((s) => {
      const hymn = samhita.get(s.ref)!;
      const verses: Verse[] = [...hymn.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([n, lines]) => ({ n, lines }));
      if (verses.some((v, i) => v.n !== i + 1)) fail(`RV ${s.ref} has a gap in its verse numbering`);
      return { sukta: s.sukta, ref: s.ref, verses };
    });
  writeFileSync(join(OUT, `mandala-${md}.json`), JSON.stringify({ mandala: md, suktas }), "utf8");
}

// ── 4. Report ─────────────────────────────────────────────────────

const byDevata = new Map<string, number>();
for (const s of spine) byDevata.set(s.devataId, (byDevata.get(s.devataId) || 0) + 1);
const top = [...byDevata.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);

console.log("=".repeat(58));
console.log("RIGVEDA CORPUS BUILT");
console.log("  suktas        :", spine.length);
console.log("  verses        :", totalStanzas);
console.log("  with rishi    :", spine.filter((s) => s.rishi).length);
console.log("  with devata   :", spine.filter((s) => s.devataId).length);
console.log("  with metre    :", spine.filter((s) => s.metre).length);
console.log("  read by hand  :", spine.filter((s) => s.readByHand).length, "sukta(s)");
console.log("  change devata :", spine.filter((s) => s.mixed).length, "mid-hymn");
console.log("  canonical devatas:", byDevata.size, "of", DEVATAS.length, "declared");
console.log("  biggest groups:", top.map(([id, n]) => `${id} ${n}`).join(", "));
console.log("  written       :", OUT);
