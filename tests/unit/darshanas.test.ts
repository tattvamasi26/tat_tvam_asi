import { test } from "node:test";
import assert from "node:assert/strict";
import {
  DARSHANAS,
  PRAMANAS,
  PAIRS,
  CONTRAST,
  AVAYAVAS,
  TATTVA_TIERS,
  PURUSHA,
  darshanaBySlug,
  darshanasInOrder,
  tattvaCount,
} from "../../src/lib/seed/darshanas";
import { DARSHANA_PROSE } from "../../src/lib/seed/darshana-pages";
import {
  getDarshanas,
  getDarshana,
  getPramanas,
  getPramanaGrid,
  getDarshanaPairs,
  getTattvas,
  getAvayavas,
} from "../../src/lib/data";
import { DARSHANA_STRINGS } from "../../src/i18n/darshanas";
import { SECTIONS } from "../../src/i18n/sections";
import { allShastraTexts } from "../../src/lib/seed/shastras";
import { CONCEPTS } from "../../src/lib/seed/concepts";
import { GITA_CHAPTER_NOTES } from "../../src/lib/seed/gita-chapters";
import { LOCALES } from "../../src/i18n/config";

// The six darśanas.
//
// Four tests here are the point of the file, and each guards one
// claim the popular account gets wrong:
//
//   * that āstika means theist — it does not, and Sāṅkhya and
//     Mīmāṃsā are the proof, so their `ishvara` lines may never be
//     quietly softened into theism;
//   * that six is all there were — CONTRAST must stay populated;
//   * that Jain epistemology fits the Nyāya six — it does not, and
//     that row must stay blank rather than tidy;
//   * that a pramāṇa count is a settled number — three of the six
//     disagree with themselves, and those must carry their note.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;
const SLUGS = ["nyaya", "vaisheshika", "sankhya", "yoga", "mimamsa", "vedanta"];

test("there are six schools, in the traditional paired order", () => {
  assert.equal(DARSHANAS.length, 6);
  assert.deepEqual(darshanasInOrder().map((d) => d.slug), SLUGS);
  assert.deepEqual(
    darshanasInOrder().map((d) => d.order),
    [1, 2, 3, 4, 5, 6],
    "the order must run one to six with no gaps",
  );

  for (const d of DARSHANAS) {
    assert.match(d.sanskrit, DEVANAGARI, `${d.slug}: Sanskrit must be stored in Devanagari`);
    assert.match(d.glyph, DEVANAGARI, `${d.slug}: the card glyph must be Devanagari`);
    assert.ok(d.glyph.length <= 8, `${d.slug}'s glyph is too long for a card`);
    assert.match(d.root.sanskrit, DEVANAGARI, `${d.slug}: the root text's name must be Devanagari`);

    for (const locale of LOCALES) {
      assert.ok(d.name[locale]?.trim(), `${d.slug} has no ${locale} name`);
      assert.ok(d.question[locale]?.trim().length > 25, `${d.slug}: ${locale} question is thin`);
      assert.ok(d.lede[locale]?.trim().length > 40, `${d.slug}: ${locale} lede is thin`);
      assert.ok(d.root.name[locale]?.trim(), `${d.slug}: no ${locale} root-text name`);
      assert.ok(d.root.author[locale]?.trim(), `${d.slug}: no ${locale} author`);
      // A date is given as a claim with its disagreement, never as a
      // bare year — the rule the acharyas section already keeps.
      assert.ok(
        d.root.dating[locale]?.trim().length > 60,
        `${d.slug}: ${locale} dating must state the claim, not a year`,
      );
      assert.ok(d.ishvara[locale]?.trim().length > 60, `${d.slug}: ${locale} says too little on God`);
    }
  }
});

test("astika does not mean theist, and the data says so", () => {
  // This is the single most mangled fact about the darśanas. Sāṅkhya
  // argues there is no God; Mīmāṃsā leaves one nothing to do; both
  // accept the Veda and so both are āstika. If either line were
  // rewritten into theism the section would lose its point, so the
  // claim is pinned here in the English rather than left to prose.
  const sankhya = darshanaBySlug("sankhya")!;
  assert.match(
    sankhya.ishvara.en,
    /none|no God|without a Lord|nir[iī]śvara/i,
    "Sāṅkhya must still be recorded as holding no God",
  );
  assert.match(
    sankhya.ishvara.en,
    /āstika|astika/i,
    "and must still say that it is āstika regardless",
  );

  const mimamsa = darshanaBySlug("mimamsa")!;
  assert.match(
    mimamsa.ishvara.en,
    /no role|authorless|apauruṣeya|nothing to do/i,
    "Mīmāṃsā must still give God no role",
  );

  // And the standing note must carry the correction in every
  // language, since that is where a reader meets it first.
  for (const locale of LOCALES) {
    assert.ok(
      DARSHANA_STRINGS[locale].standingAstika.trim().length > 150,
      `${locale}: nothing corrects the āstika/theist confusion`,
    );
  }
});

test("six is not all there were, and the list of six is not ancient", () => {
  assert.ok(CONTRAST.length >= 3, "the Buddhists, Jains and Cārvākas must all be named");
  assert.deepEqual(
    CONTRAST.map((c) => c.id),
    ["bauddha", "jaina", "charvaka"],
  );

  for (const c of CONTRAST) {
    assert.match(c.sanskrit, DEVANAGARI, `${c.id}: Sanskrit must be Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(c.name[locale]?.trim(), `${c.id} has no ${locale} name`);
      assert.ok(c.note[locale]?.trim().length > 80, `${c.id}: ${locale} note is thin`);
    }
  }

  // Cārvāka has no surviving text of its own, and the page must say
  // so before quoting any of the summaries written to refute it.
  assert.match(
    CONTRAST.find((c) => c.id === "charvaka")!.note.en,
    /not one of its own texts survives|opponents/i,
    "the Cārvāka note must admit that it is known only from its opponents",
  );

  for (const locale of LOCALES) {
    assert.ok(
      DARSHANA_STRINGS[locale].standingSix.trim().length > 150,
      `${locale}: nothing says the list of six is a later convention`,
    );
    assert.ok(
      DARSHANA_STRINGS[locale].standingOthers.trim().length > 120,
      `${locale}: nothing says six is not all there were`,
    );
  }
});

test("the Jain row is blank on purpose, not by omission", () => {
  // Jain epistemology works from a classification of its own. A tidy
  // row of six dots would be neater and false, so the row carries
  // null and the note explains it.
  const jaina = CONTRAST.find((c) => c.id === "jaina")!;
  assert.equal(jaina.pramanas, null, "the Jain row must not be forced onto the Nyāya six");
  assert.match(
    jaina.note.en,
    /deliberately|on purpose|its own/i,
    "and the note must say the blank is a decision",
  );

  // Every other row does have a list, or the grid would be meaningless.
  for (const c of CONTRAST) {
    if (c.id === "jaina") continue;
    assert.ok(Array.isArray(c.pramanas) && c.pramanas.length > 0, `${c.id} has no means of knowledge`);
  }

  const { others } = getPramanaGrid("en");
  assert.equal(others.find((o) => o.id === "jaina")!.accepts, null);
});

test("the means of knowledge are six, and each school's list is a subset in order", () => {
  assert.equal(PRAMANAS.length, 6);
  assert.deepEqual(
    PRAMANAS.map((p) => p.n),
    [1, 2, 3, 4, 5, 6],
    "the columns must be numbered one to six",
  );
  const ids = PRAMANAS.map((p) => p.id);

  for (const d of DARSHANAS) {
    assert.ok(d.pramanas.length >= 2, `${d.slug} accepts fewer than two, which no āstika school does`);
    assert.ok(d.pramanas.length <= 6, `${d.slug} accepts more than six`);
    assert.ok(
      d.pramanas.includes("pratyaksha"),
      `${d.slug} must accept perception — every school does`,
    );
    assert.deepEqual(
      [...d.pramanas].sort((a, b) => ids.indexOf(a) - ids.indexOf(b)),
      d.pramanas,
      `${d.slug}: the list must be in the standard order`,
    );
    assert.equal(new Set(d.pramanas).size, d.pramanas.length, `${d.slug} repeats a pramāṇa`);
  }

  // The counts that make the comparison worth drawing at all.
  assert.equal(darshanaBySlug("vaisheshika")!.pramanas.length, 2);
  assert.equal(darshanaBySlug("sankhya")!.pramanas.length, 3);
  assert.equal(darshanaBySlug("yoga")!.pramanas.length, 3);
  assert.equal(darshanaBySlug("nyaya")!.pramanas.length, 4);
  assert.equal(darshanaBySlug("mimamsa")!.pramanas.length, 6);
});

test("a count that is disputed inside a school carries its note", () => {
  // Vaiśeṣika subsumes testimony under inference rather than denying
  // it; Mīmāṃsā's two wings disagree about absence; Vedānta's three
  // schools accept six, three and three. In all three cases a bare
  // number would be a tidy lie, so the note is required.
  for (const slug of ["vaisheshika", "mimamsa", "vedanta"]) {
    const d = darshanaBySlug(slug)!;
    assert.ok(d.pramanaNote, `${slug}'s count is disputed and nothing says so`);
    for (const locale of LOCALES) {
      assert.ok(
        d.pramanaNote![locale]?.trim().length > 60,
        `${slug}: ${locale} note on the disputed count is thin`,
      );
    }
  }

  // Mīmāṃsā's note must name the split rather than just gesture at it.
  assert.match(
    darshanaBySlug("mimamsa")!.pramanaNote!.en,
    /Pr[aā]bh[aā]kara/,
    "the Mīmāṃsā note must name the wing that accepts five",
  );
});

test("the six are three pairs, and every pair has both its members", () => {
  assert.equal(PAIRS.length, 3);
  const paired = PAIRS.flatMap((p) => p.members);
  assert.deepEqual([...paired].sort(), [...SLUGS].sort(), "every school belongs to exactly one pair");

  for (const p of PAIRS) {
    assert.equal(p.members.length, 2, `${p.id} is not a pair`);
    for (const slug of p.members) {
      assert.ok(darshanaBySlug(slug), `${p.id} names an unknown school ${slug}`);
      assert.equal(darshanaBySlug(slug)!.pair, p.id, `${slug} does not point back at ${p.id}`);
      for (const locale of LOCALES) {
        assert.ok(p.roles[slug]?.[locale]?.trim(), `${p.id}: ${slug} has no ${locale} role`);
      }
    }
    for (const locale of LOCALES) {
      assert.ok(p.label[locale]?.trim(), `${p.id} has no ${locale} label`);
      assert.ok(p.note[locale]?.trim().length > 80, `${p.id}: ${locale} note is thin`);
    }
  }

  const views = getDarshanaPairs("kn");
  assert.equal(views.length, 3);
  for (const v of views) assert.equal(v.members.length, 2, `${v.id}: a member went missing in the view`);
});

test("Sankhya's constituents come to twenty-five, with purusa off the cascade", () => {
  // The count is the school's name and the reason the drawing exists.
  assert.equal(tattvaCount(), 25);
  assert.equal(PURUSHA.id, "purusha");
  assert.ok(
    !TATTVA_TIERS.some((t) => t.items.some((i) => i.id === "purusha")),
    "puruṣa must stand apart from the cascade — that separation is the claim",
  );

  // The order of the tiers is the point: subtle before gross.
  assert.deepEqual(
    TATTVA_TIERS.map((t) => t.id),
    ["root", "inner", "buddhindriya", "karmendriya", "tanmatra", "mahabhuta"],
    "the cascade must run root, inner instrument, senses, actions, subtle, gross",
  );

  const sizes = Object.fromEntries(TATTVA_TIERS.map((t) => [t.id, t.items.length]));
  assert.deepEqual(sizes, {
    root: 1,
    inner: 3,
    buddhindriya: 5,
    karmendriya: 5,
    tanmatra: 5,
    mahabhuta: 5,
  });

  const t = getTattvas("kn");
  assert.equal(t.count, 25);
  assert.ok(KANNADA.test(t.purusha.sanskrit), "Sanskrit must reach a Kannada page in Kannada");
  assert.ok(!DEVANAGARI.test(t.purusha.sanskrit), "Devanagari survived onto the Kannada page");
});

test("Nyaya's argument has five members, and the example runs through all of them", () => {
  assert.equal(AVAYAVAS.length, 5);
  assert.deepEqual(
    AVAYAVAS.map((a) => a.id),
    ["pratijna", "hetu", "udaharana", "upanaya", "nigamana"],
  );
  for (const a of AVAYAVAS) {
    assert.match(a.sanskrit, DEVANAGARI, `${a.id}: Sanskrit must be Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(a.name[locale]?.trim(), `${a.id} has no ${locale} name`);
      assert.ok(a.step[locale]?.trim(), `${a.id} has no ${locale} step`);
      assert.ok(a.example[locale]?.trim(), `${a.id} has no ${locale} example`);
    }
  }

  // Nyāya's sixteen categories must stay sixteen, and the seven about
  // debate going wrong are what the page's observation rests on.
  const nyaya = darshanaBySlug("nyaya")!;
  assert.equal(nyaya.structure!.items.length, 16);
  assert.equal(getAvayavas("en").length, 5);
});

test("each school's countable structure is complete in every language", () => {
  for (const d of DARSHANAS) {
    if (!d.structure) {
      // Sāṅkhya's structure is the drawn cascade, not a flat list.
      assert.equal(d.slug, "sankhya", `${d.slug} has no structure and is not Sāṅkhya`);
      continue;
    }
    assert.ok(d.structure.items.length >= 3, `${d.slug}'s structure is too short to be one`);
    const ids = new Set<string>();
    for (const i of d.structure.items) {
      assert.ok(!ids.has(i.id), `${d.slug} repeats structure id ${i.id}`);
      ids.add(i.id);
      assert.match(i.sanskrit, DEVANAGARI, `${d.slug}/${i.id}: Sanskrit must be Devanagari`);
      for (const locale of LOCALES) {
        assert.ok(i.name[locale]?.trim(), `${d.slug}/${i.id} has no ${locale} name`);
        assert.ok(i.gloss[locale]?.trim(), `${d.slug}/${i.id} has no ${locale} gloss`);
      }
    }
    for (const locale of LOCALES) {
      assert.ok(d.structure.label[locale]?.trim(), `${d.slug}: no ${locale} structure label`);
      assert.ok(
        d.structure.note[locale]?.trim().length > 80,
        `${d.slug}: ${locale} does not say why the list is worth counting`,
      );
    }
  }
});

test("the prose keeps the same sections and block kinds in all three languages", () => {
  // The Shankara monograph's rule. A section added to one language
  // and forgotten in another must fail rather than fall back silently.
  for (const slug of SLUGS) {
    const en = DARSHANA_PROSE.en[slug];
    assert.ok(en && en.length >= 3, `${slug}: English prose is missing or too short`);

    for (const locale of LOCALES) {
      const secs = DARSHANA_PROSE[locale][slug];
      assert.ok(secs, `${slug} has no ${locale} prose`);
      assert.deepEqual(
        secs.map((s) => s.id),
        en.map((s) => s.id),
        `${slug}: ${locale} sections do not match the English`,
      );
      assert.deepEqual(
        secs.map((s) => s.blocks.map((b) => b.kind)),
        en.map((s) => s.blocks.map((b) => b.kind)),
        `${slug}: ${locale} block kinds do not match the English`,
      );
      for (const s of secs) {
        assert.ok(s.eyebrow.trim(), `${slug}/${s.id}: no ${locale} eyebrow`);
        assert.ok(s.title.trim(), `${slug}/${s.id}: no ${locale} title`);
      }
    }

    // Every school says where it is argued with. A school shown
    // without its opponents looks stronger than it was.
    assert.ok(
      en.some((s) => s.id === "argued"),
      `${slug} does not say where it is argued with`,
    );
  }
});

test("no Devanagari strays into the English prose", () => {
  // The Hindi prose is legitimately in that script; the English is
  // where pasted, unverified Sanskrit could hide.
  for (const slug of SLUGS) {
    for (const s of DARSHANA_PROSE.en[slug]) {
      const text = JSON.stringify(s);
      assert.equal(
        DEVANAGARI.test(text),
        false,
        `${slug}/${s.id}: Devanagari in the English prose could only be pasted Sanskrit`,
      );
    }
  }
});

test("every link a school makes points somewhere that exists", () => {
  for (const d of DARSHANAS) {
    assert.ok(d.links.length > 0, `${d.slug} links nowhere`);
    for (const l of d.links) {
      assert.match(l.href, /^\/[a-z0-9/-]*$/, `${d.slug}: ${l.href} is not a site path`);
      const [, head, a] = l.href.split("/");
      if (head === "concepts" && a)
        assert.ok(CONCEPTS.some((c) => c.slug === a), `${d.slug}: ${l.href} does not exist`);
      if (head === "gita" && a)
        assert.ok(
          GITA_CHAPTER_NOTES.some((c) => String(c.n) === a),
          `${d.slug}: ${l.href} does not exist`,
        );
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `${d.slug}: ${l.href} has no ${locale} label`);
      }
    }
  }
});

test("the shastra map leads here, and the six are no longer called planned", () => {
  // The map's own rule is that a readable text links to the section
  // that holds it. These six now have pages, so the map must say so.
  const texts = allShastraTexts();
  for (const slug of SLUGS) {
    const id = slug === "vedanta" ? "vedanta-darshana" : slug;
    const t = texts.find((x) => x.id === id);
    assert.ok(t, `${id} is missing from the śāstra map`);
    assert.equal(t!.status, "live", `${id} has a page now and must not be marked planned`);
    assert.equal(t!.href, `/darshanas/${slug}`, `${id} points at ${t!.href}`);
  }
});

test("the section is reachable from the site's own navigation", () => {
  const section = SECTIONS.find((s) => s.id === "darshanas");
  assert.ok(section, "darshanas is not in SECTIONS, so nothing links to it");
  assert.equal(section!.href, "/darshanas");
  assert.equal(section!.parent, "shastras", "the six are reached through the śāstra map");
  for (const locale of LOCALES) {
    assert.ok(section!.label[locale]?.trim(), `the nav has no ${locale} label`);
    assert.ok(section!.blurb[locale]?.trim(), `the nav has no ${locale} blurb`);
  }
});

test("the view resolves one locale and converts the script", () => {
  for (const locale of LOCALES) {
    const all = getDarshanas(locale);
    assert.equal(all.length, 6);
    for (const d of all) {
      assert.ok(d.name.trim() && d.question.trim() && d.lede.trim(), `${d.slug}: incomplete view`);
      assert.ok(d.sections.length >= 3, `${d.slug}: ${locale} prose did not reach the view`);
      assert.ok(d.pair, `${d.slug} lost its pair in the view`);
      if (locale === "kn") {
        assert.ok(KANNADA.test(d.sanskrit), `${d.slug}: Sanskrit should be Kannada on a Kannada page`);
        assert.ok(!DEVANAGARI.test(d.sanskrit), `${d.slug}: Devanagari survived onto the Kannada page`);
        assert.ok(!DEVANAGARI.test(d.glyph), `${d.slug}: the glyph survived as Devanagari`);
      }
    }

    const grid = getPramanaGrid(locale);
    assert.equal(grid.schools.length, 6);
    assert.equal(grid.others.length, 3);
    assert.equal(getPramanas(locale).length, 6);
  }

  assert.equal(getDarshana("nonexistent", "en"), null);
});

test("the section's own strings are written in every language", () => {
  const keys = Object.keys(DARSHANA_STRINGS.en) as (keyof typeof DARSHANA_STRINGS.en)[];
  for (const locale of LOCALES) {
    const s = DARSHANA_STRINGS[locale];
    for (const k of keys) {
      assert.equal(typeof s[k], "string", `${locale}.${k} is missing`);
      assert.ok((s[k] as string).trim(), `${locale}.${k} is blank`);
    }
    // The counted labels must keep their placeholder, or the page
    // prints a sentence with a hole in it.
    assert.ok(s.gridAccepts.includes("{n}"), `${locale}: gridAccepts drops its number`);
    assert.ok(s.tattvaCount.includes("{n}"), `${locale}: tattvaCount drops its number`);
  }
});
