import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { getAllTeachers, getTeacherBySlug } from "../../src/lib/data";
import { TEACHERS, TEACHER_TRANSLATIONS } from "../../src/lib/seed/teachers";
import { LOCALES } from "../../src/i18n/config";

// The acharyas list.
//
// These are people, several of them living, so the rules are stricter
// than for a text: every entry says the same thing in three languages,
// every picture is free to use and on disk at the size it claims, and
// a date that scholarship disputes is not printed as though settled.

const DEVANAGARI = /[ऀ-ॿ]/;

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
  throw new Error(`no size marker in ${file}`);
}

test("every teacher is written in all three languages", () => {
  assert.ok(TEACHERS.length >= 9, `only ${TEACHERS.length} teachers`);
  for (const teacher of TEACHERS) {
    for (const locale of LOCALES) {
      const row = TEACHER_TRANSLATIONS.find((r) => r.teacher_id === teacher.id && r.language === locale);
      assert.ok(row, `${teacher.slug} has no ${locale} row`);
      assert.ok(row!.name.trim(), `${teacher.slug}: ${locale} has no name`);
      assert.ok(row!.era.trim(), `${teacher.slug}: ${locale} has no era`);
      assert.ok(row!.tradition.trim(), `${teacher.slug}: ${locale} has no tradition`);
      assert.ok(row!.biography.trim().length > 120, `${teacher.slug}: ${locale} biography is too thin`);
    }
  }
});

test("the same works are listed in every language", () => {
  for (const teacher of TEACHERS) {
    const counts = LOCALES.map(
      (l) => TEACHER_TRANSLATIONS.find((r) => r.teacher_id === teacher.id && r.language === l)!.key_works.length,
    );
    assert.equal(new Set(counts).size, 1, `${teacher.slug} lists a different number of works per language`);
  }
});

test("a quote is either given in every language or in none", () => {
  for (const teacher of TEACHERS) {
    const quoted = LOCALES.map(
      (l) => TEACHER_TRANSLATIONS.find((r) => r.teacher_id === teacher.id && r.language === l)!.quote.trim().length > 0,
    );
    assert.equal(new Set(quoted).size, 1, `${teacher.slug} is quoted in some languages and not others`);
  }
});

test("every teacher has a Sanskrit name and a URL-safe slug", () => {
  const slugs = new Set<string>();
  for (const teacher of TEACHERS) {
    assert.match(teacher.slug, /^[a-z][a-z0-9-]*$/, `${teacher.slug} is not a URL-safe slug`);
    assert.ok(!slugs.has(teacher.slug), `duplicate slug ${teacher.slug}`);
    slugs.add(teacher.slug);
    assert.match(teacher.name_sanskrit, DEVANAGARI, `${teacher.slug} has no Devanagari name`);
  }
});

test("every photograph is on disk, at the size it claims, and credited", () => {
  for (const teacher of TEACHERS) {
    if (!teacher.image_url) {
      // No picture is a valid state — but then there must be no credit
      // either, and the page falls back to the name.
      assert.equal(teacher.image_credit, null, `${teacher.slug} credits a picture it does not have`);
      continue;
    }
    const file = path.join(process.cwd(), "public", teacher.image_url);
    assert.ok(existsSync(file), `${teacher.image_url} is not on disk`);
    const { width, height } = jpegSize(file);
    // The card is a tall frame, so the floor is on both sides rather
    // than on the area. 500 is the lowest a portrait can be and still
    // hold up: Basavanna's is 519 square and is the softest on the
    // page — a larger file should replace it when one is found.
    assert.ok(width >= 500 && height >= 500, `${teacher.image_url} is ${width}x${height} — too small to fill a card`);
    assert.ok(teacher.image_credit && teacher.image_credit.trim(), `${teacher.slug} has a picture with no credit`);
    // A picture is used on one of two grounds, and the credit has to
    // say which. Either it carries a licence that allows reuse —
    // "Attribution" is Commons' own name for a bare attribution
    // licence, as free as CC BY, and Nisargadatta's portrait carries
    // it — or the site's owner supplied it, in which case the credit
    // names him instead of a licence. What is never allowed is a
    // picture whose provenance is simply unstated.
    assert.match(
      teacher.image_credit!,
      /Public domain|CC BY|CC0|Attribution|upplied by the site owner/,
      `${teacher.slug}: the credit must name a reuse licence or who supplied the picture`,
    );
  }
});

test("a photographer who signed his work is credited by name", () => {
  // The portrait of Sri Vidhushekhara Bharati carries a visible
  // watermark. The watermark stays on the file and the name goes in
  // the credit; cropping either out would be the one thing worse than
  // not using the picture at all.
  const row = TEACHERS.find((t) => t.slug === "vidhushekhara-bharati")!;
  assert.match(row.image_credit ?? "", /Nagabhushan Beloor/);
});

test("a disputed date is not printed as a known one", () => {
  // Where scholarship disagrees, the years stay null and the era
  // string carries the claim. See docs/SHANKARA.md §2.
  for (const slug of ["adi-shankaracharya", "ramanujacharya", "madhvacharya"]) {
    const row = TEACHERS.find((t) => t.slug === slug)!;
    assert.equal(row.birth_year, null, `${slug} prints a contested birth year`);
    assert.equal(row.death_year, null, `${slug} prints a contested death year`);
    const en = getTeacherBySlug(slug, "en")!;
    assert.ok(en.era.trim(), `${slug} must carry the claim in its era line`);
  }
});

test("a living teacher is not given a death year", () => {
  for (const slug of ["bharati-tirtha", "vidhushekhara-bharati"]) {
    const row = TEACHERS.find((t) => t.slug === slug)!;
    assert.equal(row.death_year, null, `${slug} is living and must have no death year`);
  }
});

test("the list runs in chronological order", () => {
  const order = TEACHERS.map((t) => t.slug);
  const expected = [
    "adi-shankaracharya",
    "ramanujacharya",
    "basavanna",
    "madhvacharya",
    "ramakrishna-paramahamsa",
    "ramana-maharshi",
    "nisargadatta-maharaj",
    "bharati-tirtha",
    "vidhushekhara-bharati",
  ];
  assert.deepEqual(order, expected, "the acharyas should read oldest to living");
});

test("every teacher resolves to a view in every language", () => {
  for (const locale of LOCALES) {
    const all = getAllTeachers(locale);
    assert.equal(all.length, TEACHERS.length);
    for (const view of all) {
      assert.ok(view.name.trim() && view.biography.trim(), `${view.slug}: ${locale} view is incomplete`);
      assert.ok(getTeacherBySlug(view.slug, locale), `${view.slug} does not resolve by slug in ${locale}`);
    }
  }
});
