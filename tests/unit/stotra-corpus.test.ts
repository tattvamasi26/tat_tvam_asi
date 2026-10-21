import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { SPINE, COMPOSERS, EDITIONS, corpusVerses } from "../../src/lib/stotra-corpus";
import { devanagariToIast } from "../../src/lib/iast";
import { stotraCorpusStrings } from "../../src/i18n/stotra-corpus";
import { LOCALES } from "../../src/i18n/config";
import { DEVATAS } from "../../src/lib/seed/devatas";
import { getStotraGroups, getDevatas } from "../../src/lib/data";

// The stotra collection: Sanskrit taken from a printed edition and
// checked against its scanned pages (docs/STOTRAS.md). What is pinned
// here is the honesty of the thing — every stotra carries its pages,
// its witness and its record; nothing is presented as translated; the
// texts are Sanskrit in Devanagari and nothing else.

const root = path.resolve(__dirname, "../..");
const CHECKED = path.join(root, "src/lib/stotra-corpus/checked");

test("every built stotra has its text, its pages and its witness", async () => {
  assert.ok(SPINE.length > 0);
  const slugs = new Set<string>();
  for (const s of SPINE) {
    assert.ok(!slugs.has(s.slug), `${s.slug} twice`);
    slugs.add(s.slug);
    assert.ok(DEVATAS.some((d) => d.slug === s.devata), `${s.slug}: no devata ${s.devata}`);
    assert.ok(s.name.trim(), `${s.slug}: no English name`);
    assert.ok(EDITIONS[s.edition.book], `${s.slug}: unknown edition`);
    assert.ok(s.edition.printedPages.length > 0 && s.edition.scans.length === s.edition.printedPages.length, s.slug);
    for (const scan of s.edition.scans) assert.ok(scan.revid > 0, `${s.slug}: page ${scan.page} has no revision`);
    assert.match(s.witness, /^https:\/\//);
    assert.match(s.checkedOn, /^\d{4}-\d{2}-\d{2}$/);
    if (s.composer) assert.ok(COMPOSERS[s.composer], `${s.slug}: unknown composer ${s.composer}`);
    const verses = await corpusVerses(s);
    assert.equal(verses.length, s.verseCount, `${s.slug}: verse count`);
    // Every decision names a verse that exists and a page of the stotra.
    const labels = new Set(verses.map((v) => v.n));
    for (const c of s.corrections) {
      assert.ok(labels.has(c.verse), `${s.slug}: correction names verse ${c.verse}`);
      assert.ok(s.edition.printedPages.includes(c.page), `${s.slug}: correction on page ${c.page}`);
      assert.ok(c.from !== c.to);
    }
    for (const v of s.variants) {
      assert.ok(labels.has(v.verse), `${s.slug}: variant names verse ${v.verse}`);
      assert.ok(s.edition.printedPages.includes(v.page), `${s.slug}: variant on page ${v.page}`);
    }
  }
});

test("the texts are Sanskrit in Devanagari, and the corrections are in them", async () => {
  for (const s of SPINE) {
    const verses = await corpusVerses(s);
    const all = verses.flatMap((v) => v.lines).join("\n");
    // Devanagari, spaces, the dandas, avagraha — nothing typed in another script.
    assert.doesNotMatch(all, /[A-Za-zಀ-೿|:]/, `${s.slug}: a stray letter or mark`);
    assert.doesNotMatch(all, /\.\.\.|…/, `${s.slug}: an abbreviated refrain left in`);
    for (const c of s.corrections) assert.ok(all.includes(c.to), `${s.slug}: correction "${c.to}" not in the text`);
    for (const v of s.variants) if (v.reading) assert.ok(all.includes(v.reading.replace(/ । /, " ")) || all.replace(/\n/g, " ").includes(v.reading), `${s.slug}: kept reading "${v.reading}" not in the text`);
  }
});

test("every check record is built — nothing is left half-checked or dropped", () => {
  const records = readdirSync(CHECKED).filter((f) => f.endsWith(".json"));
  const built = new Set(SPINE.map((s) => s.slug));
  for (const f of records) {
    const r = JSON.parse(readFileSync(path.join(CHECKED, f), "utf8"));
    assert.equal(`${r.slug}.json`, f, "a record is named after its slug");
    assert.ok(built.has(r.slug), `${r.slug} has a record but was not built`);
    for (const c of r.corrections ?? []) assert.ok(["transcription", "misprint"].includes(c.kind), `${f}: kind`);
  }
});

test("a stotra of Śaṅkara's is attributed, never claimed", () => {
  for (const l of LOCALES) {
    assert.doesNotMatch(COMPOSERS.shankara.en, /^by /i);
    assert.ok(COMPOSERS.shankara[l].trim());
  }
  assert.match(COMPOSERS.shankara.en, /attributed/);
});

test("the collection's words exist in every language, and promise no translation", () => {
  const keys = Object.keys(stotraCorpusStrings("en")).sort();
  for (const l of LOCALES) {
    const s = stotraCorpusStrings(l);
    assert.deepEqual(Object.keys(s).sort(), keys, l);
    for (const [k, v] of Object.entries(s)) assert.ok(v.trim(), `${l}.${k}`);
  }
  assert.match(stotraCorpusStrings("en").textOnlyTitle, /not written/);
  assert.match(stotraCorpusStrings("en").groupNote, /Not yet translated/);
  for (const e of Object.values(EDITIONS)) for (const l of LOCALES) assert.ok(e.title[l] && e.detail[l], l);
});

test("a devata with only collection stotras opens, and its section says what it is", () => {
  const open = getDevatas("en").map((d) => d.slug);
  for (const s of SPINE) {
    assert.ok(open.includes(s.devata), `${s.devata} has stotras but no page`);
    const groups = getStotraGroups(s.devata, "en");
    assert.equal(groups.at(-1)!.group, "edition");
    assert.ok(groups.at(-1)!.stotras.some((x) => x.slug === s.slug));
  }
});

test("IAST is made by rule, letter for letter", () => {
  const cases: [string, string][] = [
    ["शिवोऽहम्", "śivo'ham"],
    ["पञ्चाक्षरमिदं पुण्यं यः पठेच्छिवसन्निधौ ।", "pañcākṣaramidaṃ puṇyaṃ yaḥ paṭhecchivasannidhau |"],
    ["कृष्ण", "kṛṣṇa"],
    ["ज्ञानमुक्तिसाधनं", "jñānamuktisādhanaṃ"],
    ["ॐ नमः शिवाय ॥ १", "oṃ namaḥ śivāya || 1"],
    ["हृद्", "hṛd"],
    ["ऐश्वर्य", "aiśvarya"],
  ];
  for (const [deva, iast] of cases) assert.equal(devanagariToIast(deva), iast, deva);
});

test("no page imports a texts file directly: one devata is loaded at a time", () => {
  const offenders: string[] = [];
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(e.name) && /stotra-corpus\/data\/texts/.test(readFileSync(p, "utf8"))) offenders.push(p);
    }
  };
  walk(path.join(root, "src/app"));
  walk(path.join(root, "src/components"));
  assert.deepEqual(offenders, []);
});
