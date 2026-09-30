import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  RITUALS,
  RITUAL_GROUPS,
  SAMSKARAS,
  ritualBySlug,
  ritualsInGroup,
  ritualsInOrder,
} from "../../src/lib/seed/rituals";
import { FESTIVALS } from "../../src/lib/seed/festivals";
import { PRACTICES } from "../../src/lib/seed/practice";
import { getRituals, getRitual, getRitualGroups, getSamskaras } from "../../src/lib/data";
import { allRitualImages } from "../../src/lib/seed/ritual-images";
import { RITUAL_STRINGS } from "../../src/i18n/rituals";
import { SECTIONS } from "../../src/i18n/sections";
import { SHASTRA_BRANCHES } from "../../src/lib/seed/shastras";
import { LOCALES } from "../../src/i18n/config";
import { gregorianDateIn } from "./support/gregorian";

// Rituals & Festivals — the rites half.
//
// Three of these tests exist for editorial reasons rather than
// technical ones, and they are the ones to keep if the rest are ever
// pruned:
//
//  - the sixteen are all present, in order, each declaring whether it
//    is still performed
//  - the counts in the prose cannot drift from the counts in the data
//  - a rite's occasion is never written as a calendar date

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("every rite is written in all three languages", () => {
  assert.ok(RITUALS.length >= 18, `only ${RITUALS.length} rites`);
  for (const r of RITUALS) {
    assert.match(r.slug, /^[a-z][a-z0-9-]*$/, `${r.slug} is not a URL-safe slug`);
    assert.match(r.sanskrit, DEVANAGARI, `${r.slug}: Sanskrit must be stored in Devanagari`);
    assert.ok(!KANNADA.test(r.sanskrit), `${r.slug}: Sanskrit must not be stored in Kannada script`);
    for (const locale of LOCALES) {
      assert.ok(r.name[locale]?.trim(), `${r.slug} has no ${locale} name`);
      assert.ok(r.when[locale]?.trim().length > 10, `${r.slug}: ${locale} does not say when`);
      assert.ok(r.lede[locale]?.trim().length > 20, `${r.slug}'s ${locale} lede is too thin`);
      assert.ok(
        r.observed[locale]?.trim().length > 60,
        `${r.slug}: ${locale} does not say what is done`,
      );
      assert.ok(
        r.significance[locale]?.trim().length > 60,
        `${r.slug}: ${locale} does not say why`,
      );
    }
  }
});

test("slugs and orders are unique, and every group is populated", () => {
  const slugs = new Set<string>();
  const orders = new Set<number>();
  for (const r of RITUALS) {
    assert.ok(!slugs.has(r.slug), `duplicate slug ${r.slug}`);
    slugs.add(r.slug);
    assert.ok(!orders.has(r.order), `two rites share order ${r.order}`);
    orders.add(r.order);
    assert.equal(ritualBySlug(r.slug)?.slug, r.slug);
    assert.ok(
      RITUAL_GROUPS.some((g) => g.id === r.group),
      `${r.slug} is in group ${r.group}, which does not exist`,
    );
  }

  for (const g of RITUAL_GROUPS) {
    assert.ok(ritualsInGroup(g.id).length > 0, `group ${g.id} has no rites`);
    assert.match(g.sanskrit, DEVANAGARI, `group ${g.id}: Sanskrit must be in Devanagari`);
    assert.match(g.glyph, DEVANAGARI, `group ${g.id}: the glyph must be in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(g.name[locale]?.trim(), `group ${g.id} has no ${locale} name`);
      assert.ok(g.lede[locale]?.trim().length > 30, `group ${g.id}: ${locale} lede is too thin`);
    }
  }

  // The pager walks `order`, so it must cover every rite exactly once.
  assert.equal(ritualsInOrder().length, RITUALS.length);
});

test("the sixteen are all there, in order, and each says whether it is kept", () => {
  // The point of the arc is the sequence, gaps included. Sixteen is
  // not a round number chosen for the layout; it is the list.
  assert.equal(SAMSKARAS.length, 16, "the ṣoḍaśa saṃskāras must number sixteen");

  const expected = [
    "garbhadhana",
    "pumsavana",
    "simantonnayana",
    "jatakarma",
    "namakarana",
    "nishkramana",
    "annaprashana",
    "chudakarma",
    "karnavedha",
    "upanayana",
    "vedarambha",
    "keshanta",
    "samavartana",
    "vivaha",
    "vanaprastha",
    "antyeshti",
  ];
  assert.deepEqual(
    SAMSKARAS.map((s) => s.id),
    expected,
    "the sixteen must stay in the order they fall in a life",
  );

  for (const s of SAMSKARAS) {
    assert.ok(
      ["common", "rare", "lapsed"].includes(s.kept),
      `${s.id} does not say whether it is still performed`,
    );
    assert.match(s.sanskrit, DEVANAGARI, `${s.id}: Sanskrit must be in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(s.name[locale]?.trim(), `${s.id} has no ${locale} name`);
      assert.ok(s.marks[locale]?.trim().length > 5, `${s.id}: ${locale} does not say what it marks`);
    }
    // A saṃskāra that claims a page must have one, and it must be a
    // rite of passage rather than something from another group.
    if (s.slug) {
      const r = ritualBySlug(s.slug);
      assert.ok(r, `${s.id} points at /rituals/${s.slug}, which does not exist`);
      assert.equal(r!.group, "samskara", `${s.slug} is on the arc but is not a saṃskāra`);
    }
  }

  // Every rite in the saṃskāra group must be reachable from the arc,
  // or it is written and unreachable.
  for (const r of ritualsInGroup("samskara")) {
    assert.ok(
      SAMSKARAS.some((s) => s.slug === r.slug),
      `${r.slug} is a saṃskāra with no place on the arc`,
    );
  }
});

test("the counts in the prose cannot drift from the counts in the data", () => {
  // i18n/rituals.ts and the saṃskāra group's lede both say "eight …
  // and the other eight". If that split changes, those three-language
  // strings have to change with it, and this is what makes that
  // impossible to forget.
  const by = (k: string) => SAMSKARAS.filter((s) => s.kept === k).length;
  assert.equal(by("common"), 8, "the prose says eight are still commonly performed");
  assert.equal(by("rare"), 3);
  assert.equal(by("lapsed"), 5);
  assert.equal(by("common") + by("rare") + by("lapsed"), 16);

  for (const locale of LOCALES) {
    const s = RITUAL_STRINGS[locale];
    assert.ok(s.arcLede.trim().length > 60, `${locale}: the arc has no explanation`);
    assert.ok(s.keptCommon.trim(), `${locale}: no word for a rite still performed`);
    assert.ok(s.keptRare.trim(), `${locale}: no word for a rite rarely performed`);
    assert.ok(s.keptLapsed.trim(), `${locale}: no word for a rite no longer performed`);
  }
});

test("a rite's occasion is never written as a calendar date", () => {
  // The same rule the festivals keep, for the same reason: an
  // occasion is a tithi, an hour or a stage of life. "Ekadashi is in
  // November" is wrong the following year.
  for (const r of RITUALS) {
    for (const locale of LOCALES) {
      const prose = [
        r.when[locale],
        r.lede[locale],
        r.observed[locale],
        r.significance[locale],
        r.regional?.[locale] ?? "",
      ].join(" ");
      const hit = gregorianDateIn(prose);
      assert.equal(hit, null, `${r.slug} (${locale}) gives a Gregorian date: "${hit}"`);
    }
  }
});

test("nothing here is written as an instruction to follow", () => {
  // These pages describe rites; they do not teach them. The giveaway
  // is the second person — "recite the mantra", "you should" — which
  // turns a description into a manual the site is in no position to
  // be.
  const IMPERATIVE = /\b(you should|you must|recite the|repeat after|follow these steps)\b/i;
  for (const r of RITUALS) {
    const prose = [r.lede.en, r.observed.en, r.significance.en, r.regional?.en ?? ""].join(" ");
    const hit = prose.match(IMPERATIVE);
    assert.equal(hit, null, `${r.slug} reads as an instruction: "${hit?.[0]}"`);
  }
  for (const locale of LOCALES) {
    assert.ok(
      RITUAL_STRINGS[locale].standing.trim().length > 80,
      `${locale}: the section does not say that it describes rather than teaches`,
    );
  }
});

test("every link a rite makes points somewhere that exists", () => {
  // These cross-links are the section's whole value: a rite sends the
  // reader to the words, the temple or the sitting the site already
  // holds. A rotted one is worse than none.
  const ok = (href: string) => {
    assert.ok(href.startsWith("/"), `${href} is not a site-relative path`);
    const [, head, a, b] = href.split("/");
    if (head === "rituals") assert.ok(ritualBySlug(a), `${href} does not exist`);
    if (head === "festivals" && a)
      assert.ok(FESTIVALS.some((f) => f.slug === a), `${href} does not exist`);
    if (head === "practice" && a)
      assert.ok(PRACTICES.some((p) => p.slug === a), `${href} does not exist`);
    // A stotra's own route is /stutis/<devata>/<stotra>; both segments
    // must be present or the link lands on a devata page by accident.
    if (head === "stutis" && a) assert.ok(b, `${href} is missing the stotra`);
  };

  for (const r of RITUALS) {
    for (const l of [...(r.words ?? []), ...(r.links ?? [])]) {
      ok(l.href);
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `${r.slug}: ${l.href} has no ${locale} label`);
      }
    }
  }
});

test("the view layer resolves one locale and converts the script", () => {
  const en = getRituals("en");
  assert.equal(en.length, RITUALS.length);
  // Pager order, not declaration order.
  assert.deepEqual(
    en.map((r) => r.order),
    [...en.map((r) => r.order)].sort((a, b) => a - b),
  );

  const kn = getRitual("upanayana", "kn");
  assert.ok(kn, "upanayana has no Kannada view");
  assert.ok(
    KANNADA.test(kn!.sanskrit) && !DEVANAGARI.test(kn!.sanskrit),
    "Sanskrit must reach a Kannada page in the Kannada script",
  );
  const enUp = getRitual("upanayana", "en")!;
  assert.match(enUp.sanskrit, DEVANAGARI, "an English page keeps Devanagari");

  // The group chip on a rite's page is the group's resolved name.
  assert.ok(kn!.groupName.trim() && kn!.groupName !== kn!.group);

  const groups = getRitualGroups("hi");
  assert.equal(groups.length, RITUAL_GROUPS.length);
  assert.equal(
    groups.reduce((n, g) => n + g.rituals.length, 0),
    RITUALS.length,
    "every rite must appear under exactly one group",
  );

  const arc = getSamskaras("en");
  assert.equal(arc.length, 16);
  assert.deepEqual(
    arc.map((s) => s.step),
    Array.from({ length: 16 }, (_, i) => i + 1),
  );

  assert.equal(getRitual("no-such-rite", "en"), null);
});

test("Rituals & Festivals is one section, listed once", () => {
  const rituals = SECTIONS.find((s) => s.id === "rituals");
  const festivals = SECTIONS.find((s) => s.id === "festivals");
  assert.ok(rituals, "there is no rituals section");
  assert.equal(rituals!.href, "/rituals");
  assert.equal(rituals!.parent, undefined, "Rituals & Festivals is a top-level section");
  assert.ok(festivals, "there is no festivals section");
  assert.equal(
    festivals!.parent,
    "rituals",
    "the year is reached through Rituals & Festivals, not beside it",
  );

  for (const locale of LOCALES) {
    // The label names both halves, since the front door holds one and
    // links to the other.
    assert.ok(rituals!.label[locale]?.trim(), `no ${locale} label`);
    assert.equal(
      rituals!.label[locale],
      RITUAL_STRINGS[locale].title,
      `${locale}: the nav and the page must call the section the same thing`,
    );
  }
});

test("the rites are reachable from the map of the tradition", () => {
  // Kalpa is the Vedāṅga that governs ritual procedure, so that is
  // the branch this section belongs under. Left unlinked, /shastras
  // would describe a limb the site has now filled and not say so.
  const vedangas = SHASTRA_BRANCHES.find((b) => b.id === "vedangas");
  assert.ok(vedangas, "there is no vedangas branch");
  const kalpa = vedangas!.texts.find((t) => t.id === "kalpa");
  assert.ok(kalpa, "there is no kalpa entry");
  assert.equal(kalpa!.href, "/rituals");
  assert.equal(
    kalpa!.status,
    "partial",
    "the sūtras themselves are not entered, only the practice they describe",
  );
});

test("the section's own strings are complete, and carry no typed arrows", () => {
  // Google's subsets omit these, so each device draws them in its own
  // system font and the font audit fails.
  const TYPED = /[→←↔⇒⟶⚠]|[←-⇿]/;
  const keys = Object.keys(RITUAL_STRINGS.en) as (keyof typeof RITUAL_STRINGS.en)[];

  for (const locale of LOCALES) {
    const s = RITUAL_STRINGS[locale];
    for (const k of keys) {
      const v = s[k];
      assert.ok(v !== undefined && v !== null, `${locale} is missing ${String(k)}`);
      if (typeof v === "string") {
        assert.ok(v.trim().length > 0, `${locale}.${String(k)} is empty`);
        assert.equal(TYPED.test(v), false, `${locale}.${String(k)} has a typed arrow`);
      }
    }
    // The two counted strings are functions and must substitute.
    assert.match(s.count("21", "16"), /21/);
    assert.match(s.groupCount("8"), /8/);
  }
});

test("every picture is on disk, credited, and describes a rite that exists", () => {
  // The festivals shipped a museum exhibit label by filtering on
  // licence and filename without opening the results. This cannot
  // catch a wrong picture — only a person looking at it can — but it
  // does catch the two failures that follow from one: a file with no
  // description, and a description left behind pointing at an id that
  // no longer has a picture.
  const ids = new Set(RITUALS.map((r) => r.slug));
  const groups = new Set(RITUAL_GROUPS.map((g) => `g-${g.id}`));

  for (const [id, img] of allRitualImages()) {
    assert.ok(
      ids.has(id) || groups.has(id),
      `there is a picture for "${id}", which is neither a rite nor a group`,
    );
    assert.ok(
      existsSync(path.join(process.cwd(), "public", img.src)),
      `${img.src} is described but not on disk`,
    );
    assert.ok(img.credit.trim(), `${id}'s picture has no credit`);
    assert.match(img.sourceUrl, /^https:\/\//, `${id}'s picture has no source link`);
    assert.match(
      img.credit,
      /Public domain|CC BY|CC0|Attribution/,
      `${id}'s picture does not name a free licence`,
    );
    for (const locale of LOCALES) {
      assert.ok(img.alt[locale]?.trim().length > 10, `${id}'s picture has no ${locale} alt text`);
    }
  }
});

test("a rite with no picture is a designed state, not a gap", () => {
  // Most rites have none and are meant not to: nobody publishes a
  // photograph of a jātakarma. What must not happen is a rite whose
  // picture exists on disk but is never shown, or a group whose plate
  // half-exists.
  const shown = new Set(allRitualImages().map(([id]) => id));
  const files = readdirSync(path.join(process.cwd(), "public", "images", "rituals"))
    .filter((f) => f.endsWith(".jpg"))
    .map((f) => f.replace(/\.jpg$/, ""));

  for (const f of files) {
    assert.ok(shown.has(f), `${f}.jpg is in the repository but nothing shows it`);
  }

  // And the section still works without them: every rite has the words
  // its page needs whether or not a photograph turned up.
  for (const r of RITUALS) {
    assert.ok(r.name.en.trim() && r.when.en.trim(), `${r.slug} cannot render without a picture`);
  }
});
