import { test } from "node:test";
import assert from "node:assert/strict";
import { CONCEPTS, CONCEPT_TRANSLATIONS } from "../../src/lib/seed/concepts";
import {
  CONCEPT_GROUP,
  SCHOOLS,
  SOURCE_TEXTS,
  type ConceptGroup,
} from "../../src/lib/seed/concepts-more";
import { getAllConcepts, getConceptBySlug, getConceptGroups } from "../../src/lib/data";
import { ui } from "../../src/i18n/ui";
import { LOCALES } from "../../src/i18n/config";

// The concepts.
//
// The test that matters is the last one. The first six entries were
// written in Advaita's voice without saying so — "Brahman is the sole
// reality" — while this site holds Śaṅkara, Rāmānuja and Madhva side
// by side in /acharyas and says they disagreed completely. Where the
// schools divide, all three readings have to be present, in every
// language, or the page is quietly taking a side.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;
const GROUPS: ConceptGroup[] = ["reality", "self", "action", "life", "path"];

test("every concept is written in all three languages", () => {
  assert.ok(CONCEPTS.length >= 20, `only ${CONCEPTS.length} concepts`);

  for (const c of CONCEPTS) {
    assert.match(c.slug, /^[a-z][a-z0-9-]*$/, `${c.slug} is not a URL-safe slug`);
    assert.match(c.term_sanskrit, DEVANAGARI, `${c.slug}: Sanskrit must be in Devanagari`);
    assert.ok(!KANNADA.test(c.term_sanskrit), `${c.slug}: Sanskrit must not be stored in Kannada`);
    assert.ok(c.term_iast.trim(), `${c.slug} has no IAST`);

    for (const locale of LOCALES) {
      const tr = CONCEPT_TRANSLATIONS.find((x) => x.concept_id === c.id && x.language === locale);
      assert.ok(tr, `${c.slug} has no ${locale} translation`);
      assert.ok(tr!.term.trim(), `${c.slug} has no ${locale} term`);
      assert.ok(tr!.definition.trim().length > 20, `${c.slug}: ${locale} definition is too thin`);
      assert.ok(
        (tr!.detailed_explanation ?? "").trim().length > 120,
        `${c.slug}: ${locale} explanation is too thin`,
      );
    }
  }
});

test("ids and slugs are unique, and every cross-reference resolves", () => {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const c of CONCEPTS) {
    assert.ok(!ids.has(c.id), `duplicate id ${c.id}`);
    assert.ok(!slugs.has(c.slug), `duplicate slug ${c.slug}`);
    ids.add(c.id);
    slugs.add(c.slug);
  }
  for (const c of CONCEPTS) {
    for (const rel of c.related_concepts) {
      assert.ok(slugs.has(rel), `${c.slug} points at "${rel}", which does not exist`);
      assert.notEqual(rel, c.slug, `${c.slug} is related to itself`);
    }
  }
});

test("every concept is in exactly one group, and no group is empty", () => {
  // A glossary is the one shape in which none of these words make
  // sense; a concept with no group would fall out of the index
  // entirely.
  for (const c of CONCEPTS) {
    const g = CONCEPT_GROUP[c.slug];
    assert.ok(g, `${c.slug} is in no group`);
    assert.ok(GROUPS.includes(g!), `${c.slug} is in group "${g}"`);
  }
  for (const slug of Object.keys(CONCEPT_GROUP)) {
    assert.ok(
      CONCEPTS.some((c) => c.slug === slug),
      `CONCEPT_GROUP has "${slug}", which is not a concept`,
    );
  }

  const groups = getConceptGroups("en");
  assert.equal(groups.length, GROUPS.length);
  for (const g of groups) {
    assert.ok(g.concepts.length > 0, `group ${g.id} is empty`);
  }
  assert.equal(
    groups.reduce((n, g) => n + g.concepts.length, 0),
    CONCEPTS.length,
    "every concept must appear under exactly one group",
  );
});

test("every concept says where it is chiefly set out", () => {
  // So a reader can go and check rather than take this site's word.
  for (const c of CONCEPTS) {
    const src = SOURCE_TEXTS[c.slug];
    assert.ok(src, `${c.slug} does not say where it comes from`);
    for (const locale of LOCALES) {
      assert.ok(src![locale]?.trim().length > 8, `${c.slug}: no ${locale} source`);
    }
  }
  for (const slug of Object.keys(SOURCE_TEXTS)) {
    assert.ok(
      CONCEPTS.some((c) => c.slug === slug),
      `SOURCE_TEXTS has "${slug}", which is not a concept`,
    );
  }
});

test("the view resolves one locale and converts the script", () => {
  for (const locale of LOCALES) {
    const all = getAllConcepts(locale);
    assert.equal(all.length, CONCEPTS.length);
    for (const c of all) {
      assert.ok(c.term.trim() && c.definition.trim(), `${c.slug}: ${locale} view is incomplete`);
      assert.ok(c.group, `${c.slug} has no group in the view`);
    }
  }

  // Sanskrit is stored in Devanagari and rendered in the reader's
  // script by the page, as everywhere else on the site.
  const kn = getConceptBySlug("karma", "kn");
  assert.ok(kn, "karma has no Kannada view");
  assert.match(kn!.termSanskrit, DEVANAGARI, "the view keeps Devanagari; the page converts it");

  assert.equal(getConceptBySlug("not-a-concept", "en"), null);
});

test("where Vedanta divides, all three readings are printed", () => {
  // This is the point of the phase. Śaṅkara, Rāmānuja and Madhva
  // wrote on the same verses and reached incompatible conclusions. A
  // page that gave one of them without the others would be taking a
  // side while appearing to report.
  const CONTESTED = ["brahman", "atman", "maya", "jiva", "ishvara", "moksha"];

  for (const slug of CONTESTED) {
    const s = SCHOOLS[slug];
    assert.ok(s, `${slug} is contested but carries no readings`);
    for (const locale of LOCALES) {
      for (const school of ["advaita", "vishishtadvaita", "dvaita"] as const) {
        const said = s![school][locale];
        assert.ok(said?.trim().length > 30, `${slug}: ${school} says nothing in ${locale}`);
      }
      // Three readings that agree would mean the disagreement had been
      // flattened in translation.
      const three = new Set([
        s!.advaita[locale],
        s!.vishishtadvaita[locale],
        s!.dvaita[locale],
      ]);
      assert.equal(three.size, 3, `${slug} (${locale}): two schools are given the same sentence`);
    }

    const view = getConceptBySlug(slug, "en");
    assert.ok(view?.schools, `${slug} does not reach the page with its readings`);
  }

  for (const slug of Object.keys(SCHOOLS)) {
    assert.ok(
      CONCEPTS.some((c) => c.slug === slug),
      `SCHOOLS has "${slug}", which is not a concept`,
    );
  }

  // And a term nobody argues about should not pretend to be argued
  // over: the mark on the index has to mean something.
  assert.equal(getConceptBySlug("rina", "en")?.schools, null);
});

test("the section's strings are complete in every language", () => {
  const KEYS = [
    "conceptGroupReality",
    "conceptGroupSelf",
    "conceptGroupAction",
    "conceptGroupLife",
    "conceptGroupPath",
    "labelSchools",
    "labelSchoolsNote",
    "schoolAdvaita",
    "schoolVishishtadvaita",
    "schoolDvaita",
    "labelSourceText",
  ] as const;

  for (const locale of LOCALES) {
    const s = ui(locale);
    for (const k of KEYS) {
      assert.equal(typeof s[k], "string", `${locale}.${k} is missing`);
      assert.ok((s[k] as string).trim().length > 0, `${locale}.${k} is empty`);
    }
    assert.ok(s.conceptCount.includes("{n}"), `${locale}: conceptCount must carry {n}`);
  }
});
