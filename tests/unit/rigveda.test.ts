import { test } from "node:test";
import assert from "node:assert/strict";
import {
  DEVATAS,
  SPINE,
  devata,
  devatasByHymnCount,
  groupsOf,
  mandalas,
  neighbours,
  sukta,
  suktasFor,
  suktasOf,
  totals,
  verses,
} from "../../src/lib/rigveda";
import { DEVATA_FROM_PRINCIPAL } from "../../src/lib/rigveda/devatas";
import { DEVATAS_BY_HAND } from "../../src/lib/rigveda/devatas-by-hand";
import { METRES_BY_HAND, RISHIS_BY_HAND } from "../../src/lib/rigveda/spine-by-hand";
import { scriptFor } from "../../src/lib/script";

// The Rigveda spine and text.
//
// The collection is fixed and its counts are known, so most of this
// file is arithmetic against numbers the tradition settled long ago —
// 1,028 hymns, 10,552 verses, and a per-mandala count that has not
// moved since Aufrecht. A build that drifts from any of them has gone
// wrong, whatever else still passes.

const CANONICAL_PER_MANDALA = [191, 43, 62, 58, 87, 75, 104, 103, 114, 191];
const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;
const VEDIC_ACCENTS = /[॒॑]/;

test("the collection is whole: 1,028 suktas, 10,552 verses", () => {
  assert.equal(SPINE.length, 1028);
  assert.equal(totals().verses, 10552);
});

test("every mandala has the number of suktas it has always had", () => {
  const summary = mandalas();
  assert.equal(summary.length, 10);
  for (const m of summary) {
    assert.equal(m.suktas, CANONICAL_PER_MANDALA[m.mandala - 1], `mandala ${m.mandala}`);
    assert.equal(m.suktas, suktasOf(m.mandala).length);
  }
});

test("suktas are numbered 1..n within each mandala, with no gaps", () => {
  for (let md = 1; md <= 10; md++) {
    const numbers = suktasOf(md).map((s) => s.sukta);
    assert.deepEqual(
      numbers,
      numbers.map((_, i) => i + 1),
      `mandala ${md} is not numbered 1..${numbers.length}`,
    );
  }
});

// ── the spine is complete, which is the whole claim ────────────────
// The site may say "all 1,028 hymns carry their rishi, devata, metre
// and verse count" only while this passes.

test("every sukta has a rishi, a devata, a metre and verses", () => {
  for (const s of SPINE) {
    assert.ok(s.rishi.trim(), `RV ${s.ref} has no rishi`);
    assert.ok(s.devata.trim(), `RV ${s.ref} has no devata attribution`);
    assert.ok(s.devataId, `RV ${s.ref} has no canonical devata`);
    assert.ok(s.metre.trim(), `RV ${s.ref} has no metre`);
    assert.ok(s.verses > 0, `RV ${s.ref} has no verses`);
  }
});

test("every canonical devata a sukta claims actually exists", () => {
  const ids = new Set(DEVATAS.map((d) => d.id));
  for (const s of SPINE) assert.ok(ids.has(s.devataId), `RV ${s.ref}: unknown devata "${s.devataId}"`);
  for (const id of Object.values(DEVATA_FROM_PRINCIPAL)) assert.ok(ids.has(id), `alias points at unknown devata "${id}"`);
});

test("no two devatas share an id, a name or a slug", () => {
  const ids = new Set<string>();
  const names = new Set<string>();
  for (const d of DEVATAS) {
    assert.ok(!ids.has(d.id), `duplicate devata id ${d.id}`);
    assert.ok(!names.has(d.sa), `duplicate devata name ${d.sa}`);
    ids.add(d.id);
    names.add(d.sa);
    assert.match(d.id, /^[a-z][a-z0-9-]*$/, `${d.id} is not a URL-safe slug`);
    assert.ok(d.sa && d.iast && d.en, `${d.id} is missing a name`);
  }
});

test("every declared devata is used, and every group sums back to its mandala", () => {
  const used = new Set(SPINE.map((s) => s.devataId));
  for (const d of DEVATAS) assert.ok(used.has(d.id), `${d.id} is declared but no hymn is filed under it`);

  for (let md = 1; md <= 10; md++) {
    const grouped = groupsOf(md).reduce((n, g) => n + g.suktas.length, 0);
    assert.equal(grouped, CANONICAL_PER_MANDALA[md - 1], `mandala ${md} groups do not sum to its suktas`);
  }
  const everywhere = devatasByHymnCount().reduce((n, d) => n + d.suktas, 0);
  assert.equal(everywhere, 1028, "the devata groups do not sum to the whole collection");
});

// ── what was read by hand ──────────────────────────────────────────
// 26 suktas carry a value the Anukramani's own fields do not give.
// Each must say where it came from, so the page can be checked
// against the source rather than trusted.

test("every hand-read value names the sukta it belongs to and quotes its witness", () => {
  const refs = new Set(SPINE.map((s) => s.ref));
  for (const entry of [...DEVATAS_BY_HAND, ...RISHIS_BY_HAND, ...METRES_BY_HAND]) {
    assert.ok(refs.has(entry.ref), `hand-read entry for RV ${entry.ref}, which is not a sukta`);
    assert.ok(entry.witness.trim().length > 10, `RV ${entry.ref} has no witness worth the name`);
  }
  for (const d of DEVATAS_BY_HAND) {
    assert.ok(devata(d.devataId), `RV ${d.ref} was read as unknown devata "${d.devataId}"`);
  }
});

test("a hand-read value reaches the spine, and says so", () => {
  for (const entry of DEVATAS_BY_HAND) {
    const s = sukta(entry.ref)!;
    assert.equal(s.devataId, entry.devataId, `RV ${entry.ref} devata`);
    assert.ok(s.readByHand?.devata, `RV ${entry.ref} does not record that its devata was read by hand`);
  }
  for (const entry of RISHIS_BY_HAND) {
    assert.equal(sukta(entry.ref)!.rishi, entry.rishi, `RV ${entry.ref} rishi`);
  }
  for (const entry of METRES_BY_HAND) {
    assert.equal(sukta(entry.ref)!.metre, entry.metre, `RV ${entry.ref} metre`);
  }
});

test("RV 6.68, which the Anukramani leaves blank entirely, is complete", () => {
  const s = sukta("6.68")!;
  assert.equal(s.verses, 11);
  assert.equal(s.devataId, "indra-varuna");
  assert.match(s.rishi, /भरद्वाज/);
  assert.match(s.metre, /त्रिष्टुप्/);
  assert.ok(s.readByHand?.rishi && s.readByHand?.metre && s.readByHand?.devata);
});

// ── the text itself ────────────────────────────────────────────────

test("RV 1.1.1 is the hymn to Agni, accented, exactly as the samhita prints it", async () => {
  const v = await verses(1, 1);
  assert.ok(v, "RV 1.1 has no verses");
  assert.equal(v!.length, 9);
  assert.equal(v![0].n, 1);
  assert.equal(v![0].lines[0], "अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म् ।");
  assert.match(v![0].lines[0], VEDIC_ACCENTS);
});

test("the dvipada viraj hymns, which print no pada letter, are not lost", async () => {
  // A parser that requires the pada letter silently drops RV 1.65-70
  // and 7.17. They are the reason this test exists.
  for (const [md, sk, count] of [
    [1, 65, 10],
    [1, 70, 11],
    [7, 17, 7],
  ] as const) {
    const v = await verses(md, sk);
    assert.ok(v, `RV ${md}.${sk} is missing`);
    assert.equal(v!.length, count, `RV ${md}.${sk} verse count`);
  }
});

test("every verse a sukta claims is actually there, for a sample across all ten mandalas", async () => {
  const sample = ["1.164", "2.12", "3.62", "4.26", "5.85", "6.75", "7.103", "8.1", "9.97", "10.129", "10.191"];
  for (const ref of sample) {
    const s = sukta(ref)!;
    const v = await verses(s.mandala, s.sukta);
    assert.ok(v, `RV ${ref} has no text`);
    assert.equal(v!.length, s.verses, `RV ${ref}: spine says ${s.verses} verses, text has ${v!.length}`);
    assert.deepEqual(
      v!.map((x) => x.n),
      v!.map((_, i) => i + 1),
      `RV ${ref} verses are not numbered 1..n`,
    );
    for (const verse of v!) {
      assert.ok(verse.lines.length > 0, `RV ${ref}.${verse.n} has no lines`);
      for (const line of verse.lines) assert.match(line, DEVANAGARI, `RV ${ref}.${verse.n} is not Devanagari`);
    }
  }
});

test("the longest hymn and the longest mandala are the ones they should be", () => {
  const longest = [...SPINE].sort((a, b) => b.verses - a.verses)[0];
  assert.equal(longest.ref, "9.97");
  assert.equal(longest.verses, 58);
  const nine = suktasOf(9);
  assert.equal(nine.length, 114);
});

// ── how it renders ─────────────────────────────────────────────────

test("Sanskrit is stored in Devanagari and converts to Kannada without accents", async () => {
  const v = await verses(1, 1);
  const mula = v![0].lines[0];
  assert.match(mula, DEVANAGARI);
  assert.doesNotMatch(mula, KANNADA, "the samhita must be stored in Devanagari only");

  const kannada = scriptFor(mula, "kn");
  assert.match(kannada, KANNADA);
  assert.doesNotMatch(kannada, VEDIC_ACCENTS, "Kannada is set plain — see docs/RIGVEDA-SOURCES.md §8");

  // English and Hindi keep the accents.
  assert.match(scriptFor(mula, "en"), VEDIC_ACCENTS);
  assert.match(scriptFor(mula, "hi"), VEDIC_ACCENTS);
});

test("devata names render in the reader's script too", () => {
  const agni = devata("agni")!;
  assert.match(scriptFor(agni.sa, "kn"), KANNADA);
  assert.match(scriptFor(agni.sa, "en"), DEVANAGARI);
});

// ── navigation ─────────────────────────────────────────────────────

test("the hymns run in one unbroken line from 1.1 to 10.191", () => {
  assert.equal(SPINE[0].ref, "1.1");
  assert.equal(SPINE[SPINE.length - 1].ref, "10.191");
  assert.equal(neighbours("1.1").previous, undefined);
  assert.equal(neighbours("1.1").next?.ref, "1.2");
  assert.equal(neighbours("10.191").next, undefined);
  // across a mandala boundary
  assert.equal(neighbours("1.191").next?.ref, "2.1");
  assert.equal(neighbours("2.1").previous?.ref, "1.191");
});

test("a devata's hymns are the hymns that claim it", () => {
  const indra = suktasFor("indra");
  assert.ok(indra.length > 200, "Indra should hold over 200 hymns");
  for (const s of indra) assert.equal(s.devataId, "indra");
  assert.equal(suktasFor("not-a-devata").length, 0);
});

test("mandala 9 is Soma's, as its character requires", () => {
  const groups = groupsOf(9);
  assert.equal(groups[0].devata.id, "soma-pavamana");
  assert.ok(groups[0].suktas.length > 100, "almost every hymn of mandala 9 is to Soma Pavamana");
});

test("a hymn that changes devata mid-way is marked as one", () => {
  // RV 1.23 addresses six deities across its 24 verses.
  const s = sukta("1.23")!;
  assert.equal(s.mixed, true);
  assert.equal(s.devataId, "vayu", "verse 1 is to Vayu, so that is where it is filed");
  assert.ok(s.devata.includes("मित्रावरुणौ"), "the full attribution must survive beside the principal");

  // RV 1.1 is to Agni throughout.
  assert.equal(sukta("1.1")!.mixed, false);
  assert.ok(totals().mixed > 150, "a good fraction of the collection changes devata mid-hymn");
});

test("a hymn filed under its verse-1 devata, not the first name in the note", () => {
  // RV 10.51's note lists the even verses first: "2, 4, 6, 8 the gods,
  // 1, 3, 5, 7, 9 Agni". The hymn opens with Agni, so it is Agni's.
  const s = sukta("10.51")!;
  assert.equal(s.devataId, "agni");
});

test("an unknown sukta or mandala asks for nothing", async () => {
  assert.equal(sukta("11.1"), undefined);
  assert.equal(await verses(11, 1), null);
  assert.equal(await verses(1, 999), null);
});
