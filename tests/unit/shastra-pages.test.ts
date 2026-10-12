import { test } from "node:test";
import assert from "node:assert/strict";
import { SHASTRA_BRANCHES } from "../../src/lib/seed/shastras";
import { SHASTRA_TIERS } from "../../src/lib/seed/shastra-tiers";
import { BRANCH_PAGES, BRANCHES_WITH_PAGES } from "../../src/lib/seed/shastra-pages";
import { getShastraMap, getShastraBranch, getShastraTiers } from "../../src/lib/data";
import { SHASTRA_UI } from "../../src/i18n/shastra-ui";
import { LOCALES } from "../../src/i18n/config";

// The redesigned map: three tiers, and no branch that leads nowhere.

test("the three tiers hold all ten branches, each once", () => {
  const placed = SHASTRA_TIERS.flatMap((t) => t.branches);
  assert.equal(placed.length, SHASTRA_BRANCHES.length);
  assert.deepEqual([...placed].sort(), SHASTRA_BRANCHES.map((b) => b.id).sort());
  assert.deepEqual(SHASTRA_TIERS[0].branches, ["veda", "upanishads"], "what is heard comes first");
  for (const t of SHASTRA_TIERS) {
    for (const locale of LOCALES) {
      assert.ok(t.name[locale]?.trim() && t.lede[locale]?.trim().length > 40, `${t.id}: thin ${locale} tier`);
    }
  }
});

test("every branch leads somewhere: its section, or its page here", () => {
  for (const b of getShastraMap("en")) {
    assert.ok(b.page, `${b.id} leads nowhere`);
    if (b.href) assert.equal(b.page, b.href, `${b.id} has a section and must lead to it`);
    else assert.equal(b.page, `/shastras/${b.id}`);
  }
  // A branch with a section has no page here, so there is never a
  // second page about the same thing.
  for (const id of BRANCHES_WITH_PAGES) {
    assert.equal(SHASTRA_BRANCHES.find((b) => b.id === id)?.href, undefined, `${id} has a section and a page`);
  }
});

test("each branch page is written in every language, with every text described", () => {
  for (const id of BRANCHES_WITH_PAGES) {
    const branch = SHASTRA_BRANCHES.find((b) => b.id === id)!;
    const en = BRANCH_PAGES.en[id];
    for (const locale of LOCALES) {
      const p = BRANCH_PAGES[locale][id];
      assert.ok(p, `${id} has no ${locale} page`);
      assert.equal(p.about.length, en.about.length, `${id}: ${locale} has a different number of paragraphs`);
      for (const t of branch.texts) {
        assert.ok(p.texts[t.id]?.trim().length > 60, `${id}/${t.id} has no ${locale} paragraph`);
      }
      assert.deepEqual(Object.keys(p.texts).sort(), branch.texts.map((t) => t.id).sort(), `${id}: ${locale} describes texts not in the branch`);
    }
  }
});

test("a doubted attribution stays doubted on the branch page", () => {
  assert.match(BRANCH_PAGES.en.prakarana.texts.vivekachudamani, /doubt/i);
});

test("the views resolve, and the strings exist", () => {
  for (const locale of LOCALES) {
    assert.equal(getShastraTiers(locale).reduce((n, t) => n + t.branches.length, 0), 10);
    const b = getShastraBranch("vedangas", locale)!;
    assert.equal(b.details.length, 6);
    assert.ok(b.details.every((d) => d.detail), `${locale}: a Vedanga has no paragraph`);
    assert.equal(getShastraBranch("veda", locale), null, "a branch with a section has no page");
    for (const [k, v] of Object.entries(SHASTRA_UI[locale])) assert.ok(String(v).trim(), `${locale}.${k}`);
  }
});
