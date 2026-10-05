import { test } from "node:test";
import assert from "node:assert/strict";
import {
  PURANAS,
  puranaBySlug,
  puranasInOrder,
  puranasByGuna,
  traditionalVerseTotal,
} from "../../src/lib/seed/puranas";
import { getPuranas, getPurana, getPuranasByGuna } from "../../src/lib/data";
import { PURANA_STRINGS } from "../../src/i18n/puranas";
import { SHASTRA_BRANCHES } from "../../src/lib/seed/shastras";
import { SECTIONS } from "../../src/i18n/sections";
import { RITUALS } from "../../src/lib/seed/rituals";
import { FESTIVALS } from "../../src/lib/seed/festivals";
import { LOCALES } from "../../src/i18n/config";

// The eighteen Mahapuranas.
//
// This is a section *about* the Puranas and the tests exist mostly to
// stop it quietly becoming something else. Three in particular:
//
//  - no Purana is entered as a text, and none claims to be
//  - the verse figures are the tradition's own and are labelled so
//  - the famous three-way grading is sectarian, and the page says so

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("there are eighteen, each written in all three languages", () => {
  assert.equal(PURANAS.length, 18, "the Mahapuranas number eighteen");

  for (const p of PURANAS) {
    assert.match(p.slug, /^[a-z][a-z0-9-]*$/, `${p.slug} is not a URL-safe slug`);
    assert.match(p.sanskrit, DEVANAGARI, `${p.slug}: Sanskrit must be in Devanagari`);
    assert.ok(!KANNADA.test(p.sanskrit), `${p.slug}: Sanskrit must not be stored in Kannada`);

    for (const locale of LOCALES) {
      assert.ok(p.name[locale]?.trim(), `${p.slug} has no ${locale} name`);
      assert.ok(p.deity[locale]?.trim(), `${p.slug} does not say what it leans to in ${locale}`);
      assert.ok(p.lede[locale]?.trim().length > 20, `${p.slug}: ${locale} lede is too thin`);
      assert.ok(p.about[locale]?.trim().length > 80, `${p.slug}: ${locale} does not say what is in it`);
      assert.ok(
        p.known[locale]?.trim().length > 40,
        `${p.slug}: ${locale} does not say what came out of it`,
      );
    }
  }
});

test("slugs and places in the list are unique, and the list runs one to eighteen", () => {
  const slugs = new Set<string>();
  for (const p of PURANAS) {
    assert.ok(!slugs.has(p.slug), `duplicate slug ${p.slug}`);
    slugs.add(p.slug);
    assert.equal(puranaBySlug(p.slug)?.slug, p.slug);
  }
  assert.deepEqual(
    puranasInOrder().map((p) => p.order),
    Array.from({ length: 18 }, (_, i) => i + 1),
    "the eighteen must occupy places one to eighteen with no gaps",
  );
});

test("the verse figures are the tradition's, and the total is the one it gives", () => {
  // Four hundred thousand is the figure the Puranas give for the whole
  // body, and it is the sum of the individual figures rather than a
  // separate claim. If an entry's number is edited, this catches the
  // total drifting away from the sum silently.
  for (const p of PURANAS) {
    assert.ok(Number.isInteger(p.verses) && p.verses > 0, `${p.slug}: ${p.verses} is not a figure`);
  }
  assert.equal(traditionalVerseTotal(), PURANAS.reduce((n, p) => n + p.verses, 0));
  assert.equal(traditionalVerseTotal(), 400000, "the traditional total is four hundred thousand");

  // Skanda is the longest by a wide margin, which is the fact the
  // scale on the index page exists to show.
  const longest = [...PURANAS].sort((a, b) => b.verses - a.verses)[0]!;
  assert.equal(longest.slug, "skanda");

  // And every language says the figures are figures.
  for (const locale of LOCALES) {
    assert.ok(
      PURANA_STRINGS[locale].verseNote.trim().length > 80,
      `${locale}: nothing says the counts are not counts`,
    );
  }
});

test("the three-way grading is complete, and is labelled as sectarian", () => {
  // It comes from the Padma Purana, which puts itself in the top
  // class. Printing it unattributed would be repeating a partisan
  // ranking as a neutral classification.
  const graded = getPuranasByGuna("en");
  assert.equal(graded.length, 3);
  assert.equal(
    graded.reduce((n, g) => n + g.puranas.length, 0),
    18,
    "every Purana must fall in exactly one class",
  );
  for (const g of graded) {
    assert.equal(g.puranas.length, 6, `${g.guna} should hold six of the eighteen`);
  }

  // The Vaishnava texts are top and the Shaiva ones bottom — which is
  // the fact that makes the note necessary.
  assert.ok(puranasByGuna("sattvika").some((p) => p.slug === "vishnu"));
  assert.ok(puranasByGuna("tamasa").some((p) => p.slug === "shiva"));

  for (const locale of LOCALES) {
    const note = PURANA_STRINGS[locale].gunaNote;
    assert.ok(note.trim().length > 100, `${locale}: the grading is not explained`);
  }

  // And the Padma Purana's own entry says where the grading came from.
  const padma = puranaBySlug("padma")!;
  for (const locale of LOCALES) {
    assert.ok(padma.note?.[locale]?.trim(), `padma does not own up to the grading in ${locale}`);
  }
});

test("where the list of eighteen is disputed, the page says so", () => {
  // Every enumeration agrees on about fifteen. Bhagavata against Devi
  // Bhagavata, and Shiva against Vayu, are the live ones.
  const disputed = PURANAS.filter((p) => p.note);
  assert.ok(disputed.length >= 4, "the disputes are not recorded");
  for (const slug of ["bhagavata", "shiva"]) {
    const p = puranaBySlug(slug)!;
    assert.ok(p.note, `${slug} is contested and says nothing about it`);
    for (const locale of LOCALES) {
      assert.ok(p.note![locale]?.trim().length > 30, `${slug}: no ${locale} note`);
    }
  }
});

test("every link a Purana makes points somewhere that exists", () => {
  // The value of this section is what it connects to: a Purana names
  // the festival or rite that came out of it. A rotted link is worse
  // than none.
  for (const p of PURANAS) {
    for (const l of p.links ?? []) {
      assert.ok(l.href.startsWith("/"), `${p.slug}: ${l.href} is not site-relative`);
      const [, head, a] = l.href.split("/");
      if (head === "festivals" && a)
        assert.ok(FESTIVALS.some((f) => f.slug === a), `${p.slug}: ${l.href} does not exist`);
      if (head === "rituals" && a)
        assert.ok(RITUALS.some((r) => r.slug === a), `${p.slug}: ${l.href} does not exist`);
      if (head === "puranas" && a)
        assert.ok(puranaBySlug(a), `${p.slug}: ${l.href} does not exist`);
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `${p.slug}: ${l.href} has no ${locale} label`);
      }
    }
  }
});

test("the view resolves one locale and converts the script", () => {
  const en = getPuranas("en");
  assert.equal(en.length, 18);
  assert.deepEqual(
    en.map((p) => p.order),
    [...en.map((p) => p.order)].sort((a, b) => a - b),
  );

  const kn = getPurana("bhagavata", "kn");
  assert.ok(kn, "the Bhagavata has no Kannada view");
  assert.ok(
    KANNADA.test(kn!.sanskrit) && !DEVANAGARI.test(kn!.sanskrit),
    "Sanskrit must reach a Kannada page in the Kannada script",
  );
  assert.match(getPurana("bhagavata", "en")!.sanskrit, DEVANAGARI);

  assert.equal(getPurana("not-a-purana", "en"), null);
});

test("the section is reachable from the map and from the nav", () => {
  // /shastras listed this branch as planned with nothing behind it
  // from the day the map was built. That is the hole this phase fills.
  const branch = SHASTRA_BRANCHES.find((b) => b.id === "puranas");
  assert.ok(branch, "there is no puranas branch on the map");
  assert.equal(branch!.href, "/puranas");

  // In the nav it sits under Shastras, like the Vedas and the
  // Upanishads, so the top level does not grow another entry.
  const section = SECTIONS.find((s) => s.id === "puranas");
  assert.ok(section, "the puranas section is not registered");
  assert.equal(section!.href, "/puranas");
  assert.equal(section!.parent, "shastras");
  for (const locale of LOCALES) {
    assert.ok(section!.label[locale]?.trim(), `the nav has no ${locale} label`);
    assert.ok(section!.blurb[locale]?.trim(), `the nav has no ${locale} blurb`);
  }
});

test("this is a section about the Puranas, not a copy of one", () => {
  // No verse of any Purana is entered here, and the section says so
  // in every language. Four hundred thousand verses do not arrive as
  // a side effect of a page.
  for (const locale of LOCALES) {
    const s = PURANA_STRINGS[locale];
    assert.ok(s.standing.trim().length > 120, `${locale}: the section does not state its scope`);
    assert.ok(s.title.trim() && s.lede.trim(), `${locale}: the section has no head`);
    assert.match(s.count("18", "4,00,000"), /18/);
    assert.match(s.verseUnit("9,000"), /9,000/);
  }

  // The shape of the data makes it impossible to enter a verse here:
  // there is nowhere to put one.
  for (const p of PURANAS) {
    assert.ok(!("verses_text" in p) && !("content" in p), `${p.slug} has grown a text field`);
  }
});
