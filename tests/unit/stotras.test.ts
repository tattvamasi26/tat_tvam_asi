import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  getDevatas,
  getPlannedDevatas,
  getStotraParams,
  getStotraVerses,
  getStotraViews,
} from "../../src/lib/data";
import { DEVATAS } from "../../src/lib/seed/devatas";
import { allStotraRows, getStotra, stotraSlugs } from "../../src/lib/seed/stotras";
import { STUTIS } from "../../src/lib/seed/corpus";
import { LOCALES } from "../../src/i18n/config";

// The stutis, devata by devata: the registry, its content and its pictures.
// Importing data.ts registers every stotra module, as the site does.

const DEVANAGARI_LETTER = /[ऀ-ॐ॓-ॣ०-ॿ]/;
const KANNADA = /[ಀ-೿]/;
const LATIN = /[A-Za-z]/;

/** Width and height from a JPEG's start-of-frame marker. */
function jpegSize(file: string): { width: number; height: number } {
  const b = readFileSync(file);
  assert.ok(b[0] === 0xff && b[1] === 0xd8, `${file} is not a JPEG`);
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = b[i + 1];
    const length = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    i += 2 + length;
  }
  throw new Error(`${file}: no frame header`);
}

test("the stutis open on Gāyatrī, then Gaṇeśa", () => {
  assert.deepEqual(getDevatas("en").map((d) => d.slug).slice(0, 2), ["gayatri", "ganesha"]);
  assert.equal(getStotraViews("gayatri", "en")[0]?.slug, "gayatri-mantra", "Gāyatrī's page opens on the mantra");
});

test("every stotra has its header row in corpus.ts, with the same id and devata", () => {
  assert.ok(stotraSlugs().length >= 6);
  for (const slug of stotraSlugs()) {
    const s = getStotra(slug)!;
    const row = STUTIS.find((t) => t.slug === slug);
    assert.ok(row, `${slug}: no row in STUTIS`);
    assert.equal(row!.id, s.textId, `${slug}: textId does not match its row`);
    assert.equal(row!.work_type, "stotra");
    assert.equal(row!.deity, s.devata, `${slug}: row says ${row!.deity}, module says ${s.devata}`);
  }
});

test("every stotra belongs to an open devata, and every summarised stotra to a known one", () => {
  const known = new Set(DEVATAS.map((d) => d.slug));
  const open = new Set(DEVATAS.filter((d) => d.status === "open").map((d) => d.slug));
  for (const slug of stotraSlugs()) assert.ok(open.has(getStotra(slug)!.devata), `${slug}: devata is not open`);
  for (const row of STUTIS) assert.ok(row.deity && known.has(row.deity), `${row.slug}: unknown devata ${row.deity}`);
  for (const d of DEVATAS.filter((x) => x.status === "open")) {
    assert.ok(getStotraViews(d.slug, "en").length > 0, `${d.slug} is open but has nothing to read`);
  }
});

test("positions on a devata's page are unique, so the order is never ambiguous", () => {
  for (const d of DEVATAS) {
    const orders = stotraSlugs().map((s) => getStotra(s)!).filter((s) => s.devata === d.slug).map((s) => s.order);
    assert.equal(new Set(orders).size, orders.length, `${d.slug}: two stotras share a position`);
  }
});

test("IAST is set line for line against the mūla, with no blank lines", () => {
  for (const slug of stotraSlugs()) {
    for (const v of getStotra(slug)!.verses) {
      assert.equal(v.iast.length, v.sanskrit.length, `${slug} ${v.locator}: ${v.sanskrit.length} Sanskrit lines, ${v.iast.length} IAST`);
      v.sanskrit.forEach((l, i) => assert.ok(l.trim(), `${slug} ${v.locator}: Sanskrit line ${i + 1} is blank`));
      v.iast.forEach((l, i) => assert.ok(l.trim(), `${slug} ${v.locator}: IAST line ${i + 1} is blank`));
    }
  }
});

test("the mūla is stored in Devanagari only — never Kannada script, never Latin", () => {
  for (const slug of stotraSlugs()) {
    for (const v of getStotra(slug)!.verses) {
      for (const s of [...v.sanskrit, ...v.keywords.map((k) => k.term)]) {
        assert.ok(DEVANAGARI_LETTER.test(s), `${slug} ${v.locator}: “${s}” has no Devanagari`);
        assert.ok(!KANNADA.test(s) && !LATIN.test(s), `${slug} ${v.locator}: “${s}” is not pure Devanagari`);
      }
    }
  }
});

test("every verse reads in every language, with nothing blank", () => {
  for (const slug of stotraSlugs()) {
    const s = getStotra(slug)!;
    for (const l of LOCALES) {
      assert.ok(s.origin[l]?.trim(), `${slug}: no ${l} origin`);
      if (s.composer) assert.ok(s.composer[l]?.trim(), `${slug}: no ${l} composer`);
      for (const v of s.verses) {
        assert.ok(v.handle[l]?.trim(), `${slug} ${v.locator}: no ${l} handle`);
        assert.ok(v.readings[l]?.translation.trim(), `${slug} ${v.locator}: no ${l} translation`);
        assert.ok(v.readings[l]?.explanation.trim(), `${slug} ${v.locator}: no ${l} explanation`);
        v.keywords.forEach((k) => assert.ok(k.gloss[l]?.trim(), `${slug} ${v.locator}: “${k.iast}” has no ${l} gloss`));
      }
    }
  }
});

test("verse ids are unique across all stotras, and locators within each", () => {
  const ids = stotraSlugs().flatMap((s) => getStotra(s)!.verses.map((v) => v.id));
  assert.equal(new Set(ids).size, ids.length, "a verse id is reused");
  for (const slug of stotraSlugs()) {
    const locators = getStotra(slug)!.verses.map((v) => v.locator);
    assert.equal(new Set(locators).size, locators.length, `${slug}: duplicate locator`);
  }
});

test("an invocation comes first and a phalaśruti last; everything between is numbered", () => {
  for (const slug of stotraSlugs()) {
    const locators = getStotra(slug)!.verses.map((v) => v.locator);
    locators.forEach((loc, i) => {
      if (loc === "invocation") assert.equal(i, 0, `${slug}: invocation is not first`);
      else if (loc === "phala") assert.equal(i, locators.length - 1, `${slug}: phalaśruti is not last`);
      else assert.match(loc, /^\d+$/, `${slug}: unexpected locator “${loc}”`);
    });
  }
});

test("on a Kannada page every title, line and term comes back in Kannada script", () => {
  for (const d of getDevatas("kn")) {
    assert.ok(!DEVANAGARI_LETTER.test(d.nameSanskrit), `${d.slug}: name left in Devanagari`);
    for (const s of getStotraViews(d.slug, "kn")) {
      assert.ok(!DEVANAGARI_LETTER.test(s.nameSanskrit), `${s.slug}: title left in Devanagari`);
      assert.ok(!DEVANAGARI_LETTER.test(s.firstLine), `${s.slug}: opening line left in Devanagari`);
      for (const v of getStotraVerses(s.slug, "kn")) {
        for (const text of [...v.sanskrit, ...v.keywords.map((k) => k.term)]) {
          const left = text.match(DEVANAGARI_LETTER);
          assert.equal(left, null, `${s.slug} ${v.locator}: “${text}” left “${left?.[0]}” in Devanagari`);
        }
      }
    }
  }
});

test("every devata has its names, epithet and blurb in every language", () => {
  for (const d of DEVATAS) {
    for (const l of LOCALES) {
      assert.ok(d.name[l]?.trim(), `${d.slug}: no ${l} name`);
      assert.ok(d.epithet[l]?.trim(), `${d.slug}: no ${l} epithet`);
      assert.ok(d.blurb[l]?.trim(), `${d.slug}: no ${l} blurb`);
    }
  }
});

test("every picture is on disk, credited, described in every language, and declared at its real size", () => {
  const pictured = DEVATAS.filter((d) => d.image);
  assert.ok(pictured.length >= 2, "Gāyatrī and Gaṇeśa both have pictures");
  for (const d of pictured) {
    const img = d.image!;
    const file = path.join(process.cwd(), "public", img.src);
    assert.ok(existsSync(file), `${d.slug}: ${img.src} is missing`);
    assert.ok(img.credit.trim() && img.sourceUrl.startsWith("https://"), `${d.slug}: picture has no credit or source`);
    for (const l of LOCALES) assert.ok(img.alt[l]?.trim(), `${d.slug}: picture has no ${l} description`);
    // next/image draws at the declared size; a wrong one stretches the picture.
    assert.deepEqual(jpegSize(file), { width: img.width, height: img.height }, `${d.slug}: declared size is not the file's`);
  }
});

test("devatas still being entered list only stotras that cannot be read yet", () => {
  const readable = new Set(stotraSlugs());
  const planned = getPlannedDevatas("en");
  assert.ok(planned.length > 0);
  for (const g of planned) {
    assert.equal(g.devata.status, "planned");
    for (const s of g.stotras) assert.ok(!readable.has(s.slug), `${s.slug} is readable but listed as coming`);
  }
});

test("the storage rows cite the site's own editorial source for every translation", () => {
  const rows = allStotraRows();
  const verses = stotraSlugs().reduce((n, s) => n + getStotra(s)!.verses.length, 0);
  assert.equal(rows.verses.length, verses);
  assert.equal(rows.translations.length, verses * LOCALES.length);
  assert.ok(rows.translations.every((t) => t.source_id === "site-editorial"));
  assert.ok(rows.verses.every((v) => v.citation_status === "legacy_uncited"), "nothing may present itself as cited");
});

test("every stotra route names the devata the stotra belongs to", () => {
  for (const p of getStotraParams()) assert.equal(getStotra(p.stotra)!.devata, p.devata);
});
