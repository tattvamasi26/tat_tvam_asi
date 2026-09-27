import { test } from "node:test";
import assert from "node:assert/strict";
import { SHASTRA_BRANCHES, allShastraTexts, shastraProgress } from "../../src/lib/seed/shastras";
import { getShastraMap } from "../../src/lib/data";
import { SHASTRA_STRINGS } from "../../src/i18n/shastras";
import { SECTIONS } from "../../src/i18n/sections";
import { LOCALES } from "../../src/i18n/config";

// The śāstra map.
//
// This page makes two promises that are easy to break later: it never
// becomes a second address for a text that lives elsewhere, and it
// never claims to hold something it does not. The tests below are
// mostly about those two.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("the map has all ten branches, named in every language", () => {
  assert.equal(SHASTRA_BRANCHES.length, 10, "the taxonomy has ten branches");
  const ids = new Set<string>();
  for (const b of SHASTRA_BRANCHES) {
    assert.ok(!ids.has(b.id), `duplicate branch ${b.id}`);
    ids.add(b.id);
    assert.match(b.sanskrit, DEVANAGARI, `${b.id}: Sanskrit must be stored in Devanagari`);
    assert.match(b.glyph, DEVANAGARI, `${b.id}: the card glyph must be Devanagari too`);
    // A long glyph breaks across two lines in the card's panel and
    // orphans its last conjunct. Eight aksharas is the ceiling.
    assert.ok(b.glyph.length <= 8, `${b.id}'s glyph "${b.glyph}" is too long for the card`);
    for (const locale of LOCALES) {
      assert.ok(b.name[locale]?.trim(), `${b.id} has no ${locale} name`);
      assert.ok(b.lede[locale]?.trim().length > 30, `${b.id}'s ${locale} lede is too thin`);
    }
  }
});

test("every text is named and described in every language", () => {
  const ids = new Set<string>();
  for (const t of allShastraTexts()) {
    assert.match(t.id, /^[a-z][a-z0-9-]*$/, `${t.id} is not a usable id`);
    assert.ok(!ids.has(t.id), `duplicate text id ${t.id}`);
    ids.add(t.id);
    assert.match(t.sanskrit, DEVANAGARI, `${t.id}: Sanskrit must be stored in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(t.name[locale]?.trim(), `${t.id} has no ${locale} name`);
      assert.ok(t.note[locale]?.trim().length > 20, `${t.id}'s ${locale} note is too thin`);
    }
  }
});

test("a text that is readable has somewhere to go, and one that is not does not", () => {
  // This is the rule that keeps the map a map. A live or partly built
  // text must link to the section that actually holds it; a planned
  // one must not pretend to lead anywhere.
  for (const t of allShastraTexts()) {
    if (t.status === "planned") {
      assert.equal(t.href, undefined, `${t.id} is planned but links to ${t.href}`);
    } else {
      assert.ok(t.href, `${t.id} is marked ${t.status} but has no href`);
      assert.match(t.href!, /^\/[a-z0-9/-]*$/, `${t.id}'s href is not a site path`);
    }
  }
});

test("the map never becomes a second address for a text", () => {
  // Every href must point into a section that already exists, never
  // to a path underneath /shastras itself.
  for (const t of allShastraTexts()) {
    if (!t.href) continue;
    assert.ok(
      !t.href.startsWith("/shastras"),
      `${t.id} points inside /shastras — the map must link out, never hold a copy`,
    );
  }
});

test("the Vedas and the Upanisads lead, in that order", () => {
  // The page gives these two double-width cards because they are the
  // branches with real depth behind them. If the order changes, the
  // layout silently promotes something thinner.
  assert.equal(SHASTRA_BRANCHES[0].id, "veda");
  assert.equal(SHASTRA_BRANCHES[1].id, "upanishads");
  assert.equal(SHASTRA_BRANCHES[0].href, "/vedas");
  assert.equal(SHASTRA_BRANCHES[1].href, "/upanishads");
});

test("the Gita is on the front page, and not also inside Shastras", () => {
  // It is the most read text in the tradition, so it sits at the top
  // level rather than three clicks in — and therefore must not appear
  // as an entry here as well.
  const gita = SECTIONS.find((s) => s.id === "gita")!;
  assert.equal(gita.parent, undefined, "the Gita should be a top-level section");
  assert.ok(
    !allShastraTexts().some((t) => t.id === "gita" || t.href === "/gita"),
    "the Gita has its own section and must not be listed inside Shastras too",
  );
});

test("the branches a reader used to reach from the nav are reachable here", () => {
  // Vedas and Upanishads left the top-level nav when they became
  // branches of this section. If this page stopped linking to one of
  // them it would be unreachable rather than merely moved. The Gita
  // is deliberately NOT here: it went back to the top level, and
  // listing it in both places is the duplication this all fixed.
  const hrefs = new Set<string>();
  for (const b of SHASTRA_BRANCHES) {
    if (b.href) hrefs.add(b.href);
    for (const t of b.texts) if (t.href) hrefs.add(t.href);
  }
  for (const moved of ["/vedas", "/upanishads"]) {
    assert.ok(hrefs.has(moved), `${moved} left the nav and nothing here links to it`);
  }
});

test("the map is reachable from the site's own navigation", () => {
  const section = SECTIONS.find((s) => s.id === "shastras");
  assert.ok(section, "shastras is not in SECTIONS, so nothing links to it");
  assert.equal(section!.href, "/shastras");
  for (const locale of LOCALES) {
    assert.ok(section!.label[locale]?.trim(), `the nav has no ${locale} label`);
    assert.ok(section!.blurb[locale]?.trim(), `the nav has no ${locale} blurb`);
  }
});

test("Vivekacudamani is not quietly called Shankara's here", () => {
  // The Shankara monograph rejects this attribution and a test in
  // acharyas.test.ts enforces that it is never listed among his
  // works. If this page said otherwise, the site would contradict
  // itself in two places about the same text.
  const t = allShastraTexts().find((x) => x.id === "vivekachudamani")!;
  assert.ok(t, "Vivekacudamani should be in the teaching texts");
  assert.match(
    t.note.en,
    /doubt|disput|question|said to be/i,
    "its note must carry the doubt the Shankara monograph records",
  );
});

test("the map resolves in every language, with Sanskrit in the reader's script", () => {
  for (const locale of LOCALES) {
    const branches = getShastraMap(locale);
    assert.equal(branches.length, SHASTRA_BRANCHES.length);
    for (const b of branches) {
      assert.ok(b.name.trim() && b.lede.trim(), `${b.id}: ${locale} view is incomplete`);
      assert.ok(b.texts.length > 0, `${b.id} has no texts`);
      if (locale === "kn") {
        assert.match(b.sanskrit, KANNADA, `${b.id}: Sanskrit should render in Kannada on a Kannada page`);
        assert.ok(!DEVANAGARI.test(b.sanskrit), `${b.id}: Devanagari survived onto the Kannada page`);
      }
    }
  }
});

test("the page counts what it actually has", () => {
  const { live, partial, planned, total } = shastraProgress();
  assert.equal(live + partial + planned, total);
  assert.ok(live > 0, "at least the Rigveda is readable");
  assert.ok(planned > live, "most of the map is honestly still to come");
});

test("the section's own strings are written in every language", () => {
  for (const locale of LOCALES) {
    const s = SHASTRA_STRINGS[locale];
    assert.ok(s.lede.trim(), `${locale} has no lede`);
    assert.ok(s.standing.trim().length > 60, `${locale}'s standing note is too thin`);
    assert.ok(s.statusLive.trim() && s.statusPartial.trim() && s.statusPlanned.trim());
    assert.ok(s.progress("4", "33").includes("4"), `${locale}'s progress line drops its number`);
  }
});
