import { test } from "node:test";
import assert from "node:assert/strict";
import {
  FESTIVALS,
  LUNAR_MONTHS,
  PAKSHAS,
  TITHIS,
  festivalBySlug,
} from "../../src/lib/seed/festivals";
import { getFestivals, getFestival } from "../../src/lib/data";
import { FESTIVAL_STRINGS } from "../../src/i18n/festivals";
import { SECTIONS } from "../../src/i18n/sections";
import { LOCALES } from "../../src/i18n/config";

// The festivals.
//
// The rule that defines this section is that a date is lunar and
// never Gregorian. Everything else here is ordinary completeness
// checking; the Gregorian test is the one that matters, because
// getting it wrong is both easy and invisible until the year turns.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("every festival is written in all three languages", () => {
  assert.ok(FESTIVALS.length >= 15, `only ${FESTIVALS.length} festivals`);
  for (const f of FESTIVALS) {
    assert.match(f.slug, /^[a-z][a-z0-9-]*$/, `${f.slug} is not a URL-safe slug`);
    assert.match(f.sanskrit, DEVANAGARI, `${f.slug}: Sanskrit must be stored in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(f.name[locale]?.trim(), `${f.slug} has no ${locale} name`);
      assert.ok(f.lede[locale]?.trim().length > 20, `${f.slug}'s ${locale} lede is too thin`);
      assert.ok(f.observed[locale]?.trim().length > 40, `${f.slug}: ${locale} does not say what is done`);
      assert.ok(f.significance[locale]?.trim().length > 40, `${f.slug}: ${locale} does not say why`);
    }
  }
});

test("slugs are unique", () => {
  const seen = new Set<string>();
  for (const f of FESTIVALS) {
    assert.ok(!seen.has(f.slug), `duplicate slug ${f.slug}`);
    seen.add(f.slug);
    assert.equal(festivalBySlug(f.slug)?.slug, f.slug);
  }
});

test("a lunar festival is never given a Gregorian date", () => {
  // This is the section's whole reason for existing in this shape.
  // "Ganesha Chaturthi is in August" is wrong every other year, and
  // a month name is the easiest way for it to creep in.
  const GREGORIAN =
    /\b(january|february|march|april|may|june|july|august|september|october|november|december)\b|\b(19|20)\d{2}\b/i;

  for (const f of FESTIVALS) {
    if (f.reckoning === "solar") continue; // a solar date really is near-fixed
    for (const locale of LOCALES) {
      const prose = [
        f.lede[locale],
        f.observed[locale],
        f.significance[locale],
        f.regional?.[locale] ?? "",
        f.whenNote?.[locale] ?? "",
      ].join(" ");
      const hit = prose.match(GREGORIAN);
      assert.equal(
        hit,
        null,
        `${f.slug} (${locale}) gives a Gregorian date: "${hit?.[0]}" — lunar festivals move every year`,
      );
    }
  }
});

test("a lunar festival has a lunar date, and a solar one says so", () => {
  for (const f of FESTIVALS) {
    if (f.reckoning === "lunar") {
      assert.ok(f.month, `${f.slug} is lunar but names no month`);
      assert.ok(f.paksha, `${f.slug} is lunar but names no paksha`);
      assert.ok(f.tithi, `${f.slug} is lunar but names no tithi`);
    } else {
      // Nothing else can say when it falls, so the note must.
      assert.ok(f.whenNote, `${f.slug} is solar and must explain when it falls`);
      for (const locale of LOCALES) {
        assert.ok(f.whenNote![locale]?.trim(), `${f.slug} has no ${locale} when-note`);
      }
    }
  }
});

test("every month, paksha and tithi named is one the section can print", () => {
  for (const f of FESTIVALS) {
    if (f.month) assert.ok(LUNAR_MONTHS[f.month], `${f.slug} names unknown month "${f.month}"`);
    if (f.paksha) assert.ok(PAKSHAS[f.paksha], `${f.slug} names unknown paksha "${f.paksha}"`);
    if (f.tithi) assert.ok(TITHIS[f.tithi], `${f.slug} names unknown tithi "${f.tithi}"`);
  }
  for (const [id, m] of Object.entries(LUNAR_MONTHS)) {
    for (const locale of LOCALES) assert.ok(m[locale]?.trim(), `month ${id} has no ${locale} name`);
  }
  for (const [id, t] of Object.entries(TITHIS)) {
    for (const locale of LOCALES) assert.ok(t[locale]?.trim(), `tithi ${id} has no ${locale} name`);
  }
});

test("the north-south month difference is recorded where it applies", () => {
  // A lunar month ends at the new moon in the south and the full moon
  // in the north, so Janmashtami and Shivaratri sit in a different
  // month depending on where you are. A reader in either place must
  // find the name they know.
  for (const slug of ["krishna-janmashtami", "maha-shivaratri"]) {
    const f = festivalBySlug(slug)!;
    assert.ok(f.alsoCalled, `${slug} needs the northern month name`);
    for (const locale of LOCALES) {
      assert.ok(f.alsoCalled![locale]?.trim(), `${slug} has no ${locale} northern name`);
    }
  }
});

test("every link goes somewhere on this site", () => {
  for (const f of FESTIVALS) {
    for (const l of f.links ?? []) {
      assert.match(l.href, /^\/[a-z0-9/-]*$/, `${f.slug} links to "${l.href}"`);
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `${f.slug}'s link has no ${locale} label`);
      }
    }
  }
});

test("the year reads in order, starting at Chaitra", () => {
  const order = getFestivals("en").map((f) => f.slug);
  assert.equal(order[0], "ugadi", "the lunar year begins at Chaitra, and so does this list");
  assert.equal(order.length, FESTIVALS.length);
});

test("a festival resolves in every language, with its date composed", () => {
  for (const locale of LOCALES) {
    for (const f of getFestivals(locale)) {
      assert.ok(f.name.trim(), `${f.slug}: ${locale} name missing`);
      // Either a composed lunar date or a note saying when it falls.
      assert.ok((f.when && f.when.trim()) || f.whenNote, `${f.slug}: ${locale} has no date at all`);
      if (locale === "kn") {
        assert.match(f.sanskrit, KANNADA, `${f.slug}: Sanskrit should render in Kannada`);
        assert.ok(!DEVANAGARI.test(f.sanskrit), `${f.slug}: Devanagari survived onto the Kannada page`);
      }
      assert.ok(getFestival(f.slug, locale), `${f.slug} does not resolve by slug in ${locale}`);
    }
  }
  assert.equal(getFestival("not-a-festival", "en"), null);
});

test("the section is in the navigation and explains its own dates", () => {
  const section = SECTIONS.find((s) => s.id === "festivals");
  assert.ok(section, "festivals is not in SECTIONS, so nothing links to it");
  assert.equal(section!.href, "/festivals");
  for (const locale of LOCALES) {
    assert.ok(section!.label[locale]?.trim(), `the nav has no ${locale} label`);
    const s = FESTIVAL_STRINGS[locale];
    assert.ok(
      s.standing.trim().length > 100,
      `${locale} must explain why there are no Gregorian dates here`,
    );
    assert.ok(s.labelWhen.trim() && s.labelObserved.trim() && s.labelWhy.trim());
  }
});
