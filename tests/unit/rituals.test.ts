import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  RITUALS,
  RITUAL_GROUPS,
  SAMSKARAS,
  PLACEMENT,
  SAMSKARA_AGE,
  PRESCRIBED_BY,
  ritualsOnLens,
  ritualBySlug,
  ritualsInGroup,
  ritualsInOrder,
} from "../../src/lib/seed/rituals";
import { FESTIVALS, LUNAR_MONTHS } from "../../src/lib/seed/festivals";
import { PRACTICES } from "../../src/lib/seed/practice";
import {
  getRituals,
  getRitual,
  getRitualGroups,
  getSamskaras,
  getYearLens,
  getRitesFromBranch,
} from "../../src/lib/data";
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

test("the rites are drawn, not photographed", () => {
  // Seventeen licence-checked Commons photographs were fetched for this
  // section and all of them were removed: documentary photographs of
  // other people's ceremonies are not what this site looks like, and a
  // rite is not a thing a stranger's snapshot explains. The pages were
  // built to work without them, so this is the designed state and not
  // a gap waiting to be filled.
  assert.deepEqual(
    allRitualImages(),
    [],
    "a picture has been added to the rites; it must be one the owner chose, not one a script found",
  );

  // And nothing may be left behind in the repository for a later run to
  // quietly pick up again.
  const dir = path.join(process.cwd(), "public", "images", "rituals");
  const files = existsSync(dir) ? readdirSync(dir) : [];
  assert.deepEqual(files, [], `public/images/rituals still holds ${files.join(", ")}`);
});

test("a picture added later has to be described and credited", () => {
  // The registry stays so an owner-supplied photograph is one entry
  // rather than a re-wiring. These are the terms it would have to meet.
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
    // Either a free licence with its source, or the owner's own, which
    // links nowhere — the two grounds seed/stuti-images.ts already uses.
    const free = /Public domain|CC BY|CC0|Attribution/.test(img.credit);
    const owner = /upplied by the site owner/.test(img.credit);
    assert.ok(free || owner, `${id}'s picture names neither a licence nor the owner`);
    if (free) assert.match(img.sourceUrl ?? "", /^https:\/\//, `${id}'s picture has no source link`);
    for (const locale of LOCALES) {
      assert.ok(img.alt[locale]?.trim().length > 10, `${id}'s picture has no ${locale} alt text`);
    }
  }
});

test("every rite renders without a picture", () => {
  // The words are what the page is. A rite has to carry its own head
  // from its name, its group and its occasion alone.
  for (const r of getRituals("en")) {
    assert.equal(r.image, null, `${r.slug} has a picture`);
    assert.ok(r.name.trim(), `${r.slug} has no name to head the page with`);
    assert.ok(r.when.trim(), `${r.slug} has no occasion to head the page with`);
    assert.ok(r.groupName.trim(), `${r.slug} has no group to head the page with`);
  }
  for (const g of getRitualGroups("en")) {
    assert.equal(g.image, null, `group ${g.id} has a picture`);
    assert.ok(g.glyph.trim(), `group ${g.id} has no glyph for its plate`);
  }
});

test("every rite is placed on a lens, or it vanishes from the section", () => {
  // The front door is three lenses and a remainder. A rite missing
  // from PLACEMENT is written, reachable only by its URL, and linked
  // from nowhere — which is the failure this test exists to catch.
  const seen = new Set<string>();
  for (const r of RITUALS) {
    const p = PLACEMENT[r.slug];
    assert.ok(p, `${r.slug} is on no lens`);
    assert.ok(
      ["year", "day", "life", "occasion"].includes(p!.lens),
      `${r.slug} is on lens "${p!.lens}"`,
    );
    seen.add(r.slug);
  }
  for (const slug of Object.keys(PLACEMENT)) {
    assert.ok(seen.has(slug), `PLACEMENT has "${slug}", which is not a rite`);
  }

  // Together the four lenses must account for all of them exactly once.
  const counted =
    ritualsOnLens("year").length +
    ritualsOnLens("day").length +
    ritualsOnLens("life").length +
    ritualsOnLens("occasion").length;
  assert.equal(counted, RITUALS.length);
});

test("what a lens needs to be drawn is there", () => {
  for (const r of ritualsOnLens("day")) {
    const hours = PLACEMENT[r.slug]?.hours ?? [];
    assert.ok(hours.length > 0, `${r.slug} is on the day with no hour`);
    for (const h of hours) {
      assert.ok(h >= 4 && h <= 22, `${r.slug} is placed at ${h}, outside the drawn day`);
    }
  }

  for (const r of ritualsOnLens("year")) {
    const p = PLACEMENT[r.slug]!;
    assert.ok(
      (p.timesAYear ?? 0) > 0 || p.span,
      `${r.slug} is on the year with neither a rhythm nor a span`,
    );
    if (p.span) {
      for (const m of p.span) {
        assert.ok(m in LUNAR_MONTHS, `${r.slug} spans "${m}", which is not a lunar month`);
      }
    }
  }

  // Every saṃskāra needs an age or it cannot be placed on the line,
  // and the sixteen must run forward.
  let last = -Infinity;
  for (const s of SAMSKARAS) {
    const age = SAMSKARA_AGE[s.id];
    assert.equal(typeof age, "number", `${s.id} has no age`);
    assert.ok(age! >= last, `${s.id} at ${age} falls before the rite that precedes it`);
    last = age!;
  }
  assert.ok(SAMSKARA_AGE.jatakarma === 0, "birth is the origin of the scale");
});

test("the year wheel places every festival somewhere real", () => {
  const year = getYearLens("en");
  assert.equal(year.marks.length, FESTIVALS.length, "a festival is missing from the ring");
  assert.equal(year.months.length, 12);

  for (const m of year.marks) {
    assert.ok(
      (m.angle ?? -1) >= 0 && (m.angle ?? 361) <= 360,
      `${m.slug} is at ${m.angle} degrees`,
    );
  }

  // Each festival appears in exactly one month's list, so the drawing
  // and the list below it cannot disagree.
  const listed = year.months.flatMap((m) => m.festivals.map((f) => f.slug));
  assert.equal(listed.length, FESTIVALS.length);
  assert.equal(new Set(listed).size, FESTIVALS.length);

  // The lunar year begins at Chaitra; the ring is drawn from there.
  assert.equal(year.months[0]!.id, "chaitra");
  assert.equal(year.months[11]!.id, "phalguna");
});

test("the bridge into the map of the tradition holds at both ends", () => {
  // A rite says which layer lays it down; the branch says how many
  // rites come from it. Either half rotting leaves a dead link.
  const branches = new Set(SHASTRA_BRANCHES.map((b) => b.id));

  for (const [slug, p] of Object.entries(PRESCRIBED_BY)) {
    assert.ok(ritualBySlug(slug), `PRESCRIBED_BY has "${slug}", which is not a rite`);
    assert.ok(branches.has(p.branch), `${slug} is laid down by "${p.branch}", which is not a branch`);
    for (const locale of LOCALES) {
      assert.ok(p.note[locale]?.trim().length > 30, `${slug}: no ${locale} note on where it is laid down`);
    }
  }

  // The view puts an anchor on it that the shastras page can receive.
  const r = getRitual("upanayana", "en")!;
  assert.ok(r.prescribedBy, "upanayana does not say where it is laid down");
  assert.equal(r.prescribedBy!.href, "/shastras#vedangas");

  // And the count the branch prints is the same set, counted the
  // other way round.
  for (const b of SHASTRA_BRANCHES) {
    const fromBranch = getRitesFromBranch(b.id, "en").map((x) => x.slug).sort();
    const expected = Object.entries(PRESCRIBED_BY)
      .filter(([, p]) => p.branch === b.id)
      .map(([slug]) => slug)
      .sort();
    assert.deepEqual(fromBranch, expected, `the two ends disagree about ${b.id}`);
  }
});
