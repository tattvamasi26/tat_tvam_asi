import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { PRACTICES, practiceBySlug } from "../../src/lib/seed/practice";
import { practiceImage } from "../../src/lib/seed/practice-images";
import { getPractices, getPractice } from "../../src/lib/data";
import { PRACTICE_STRINGS } from "../../src/i18n/practice";
import { SECTIONS } from "../../src/i18n/sections";
import { LOCALES } from "../../src/i18n/config";

// Vedanta in Everyday Life.
//
// A page with a timer on it is read as advice in a way a page of text
// is not, so the rule this section lives by is that it promises
// nothing. The claims test below is the one that matters; the rest is
// ordinary completeness checking.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("every sitting is written in all three languages", () => {
  assert.ok(PRACTICES.length >= 4, `only ${PRACTICES.length} sittings`);
  const slugs = new Set<string>();
  for (const p of PRACTICES) {
    assert.match(p.slug, /^[a-z][a-z0-9-]*$/, `${p.slug} is not a URL-safe slug`);
    assert.ok(!slugs.has(p.slug), `duplicate slug ${p.slug}`);
    slugs.add(p.slug);
    assert.equal(practiceBySlug(p.slug)?.slug, p.slug);
    if (p.sanskrit) assert.match(p.sanskrit, DEVANAGARI, `${p.slug}: Sanskrit must be Devanagari`);

    for (const locale of LOCALES) {
      assert.ok(p.name[locale]?.trim(), `${p.slug} has no ${locale} name`);
      assert.ok(p.lede[locale]?.trim().length > 20, `${p.slug}'s ${locale} lede is too thin`);
      assert.ok(p.origin[locale]?.trim().length > 20, `${p.slug}: ${locale} does not say where it comes from`);
      assert.ok(p.howTo[locale]?.length >= 3, `${p.slug}: ${locale} needs at least three steps`);
      for (const step of p.howTo[locale]) {
        assert.ok(step.trim().length > 15, `${p.slug}: a ${locale} step is too thin`);
      }
    }
  }
});

test("the same number of steps in every language", () => {
  for (const p of PRACTICES) {
    const counts = LOCALES.map((l) => p.howTo[l].length);
    assert.equal(new Set(counts).size, 1, `${p.slug} has a different number of steps per language`);
  }
});

test("nothing here promises anything", () => {
  // This section says what is traditionally done and where it comes
  // from. What it produces is not this site's to assert, and a timer
  // on the page makes any such claim read as advice.
  const CLAIM =
    /\b(cure|cures|heal|heals|healing|guarantee|guaranteed|will make you|reduces? (stress|anxiety|depression)|improves? (health|memory|focus)|scientifically proven|boosts?)\b/i;

  for (const p of PRACTICES) {
    for (const locale of LOCALES) {
      const prose = [p.lede[locale], p.origin[locale], ...p.howTo[locale]].join(" ");
      const hit = prose.match(CLAIM);
      assert.equal(hit, null, `${p.slug} (${locale}) claims a result: "${hit?.[0]}"`);
    }
  }

  // And the section says so outright, in every language.
  for (const locale of LOCALES) {
    assert.ok(
      PRACTICE_STRINGS[locale].standing.trim().length > 100,
      `${locale} must state that this section makes no claims`,
    );
  }
});

test("a recitation is one already chosen for a stotra page", () => {
  // Every track here is a video the owner picked for a text on this
  // site, which means somebody confirmed it recites that exact text.
  // A bare eleven-character id with no title would not be checkable.
  for (const p of PRACTICES) {
    if (!p.track) continue;
    assert.match(p.track.id, /^[A-Za-z0-9_-]{11}$/, `${p.slug}: "${p.track.id}" is not a YouTube id`);
    assert.ok(p.track.title.trim(), `${p.slug}'s track has no title`);
    assert.ok(p.track.channel.trim(), `${p.slug}'s track names no channel`);
  }
});

test("the counted labels are templates, not functions", () => {
  // A Server Component cannot pass a function to a Client Component,
  // and the timer is the site's only client component. These two are
  // interpolated in the browser, so they must carry {n}.
  for (const locale of LOCALES) {
    const s = PRACTICE_STRINGS[locale];
    assert.equal(typeof s.streak, "string", `${locale}: streak must be a string`);
    assert.equal(typeof s.sittings, "string", `${locale}: sittings must be a string`);
    assert.ok(s.streak.includes("{n}"), `${locale}: streak must carry {n}`);
    assert.ok(s.sittings.includes("{n}"), `${locale}: sittings must carry {n}`);
  }
});

test("the streak is described as living in the browser only", () => {
  // A counter that looks like an account and is not would be a small
  // lie told every day.
  for (const locale of LOCALES) {
    assert.ok(
      PRACTICE_STRINGS[locale].streakNote.trim().length > 20,
      `${locale} must say where the streak is kept`,
    );
  }
});

test("every link goes somewhere on this site", () => {
  for (const p of PRACTICES) {
    for (const l of [...(p.links ?? []), ...(p.text ? [p.text] : [])]) {
      assert.match(l.href, /^\/[a-z0-9/-]*$/, `${p.slug} links to "${l.href}"`);
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `${p.slug}'s link has no ${locale} label`);
      }
    }
  }
});

test("durations are sane and ordered", () => {
  for (const p of PRACTICES) {
    assert.ok(p.durations.length > 0, `${p.slug} offers no length`);
    for (const m of p.durations) {
      assert.ok(Number.isInteger(m) && m > 0 && m <= 60, `${p.slug} offers ${m} minutes`);
    }
    const sorted = [...p.durations].sort((a, b) => a - b);
    assert.deepEqual(p.durations, sorted, `${p.slug}'s lengths should read shortest first`);
  }
});

test("every picture is on disk and credited", () => {
  for (const p of PRACTICES) {
    const img = practiceImage(p.slug);
    assert.ok(img, `${p.slug} has no picture`);
    assert.ok(existsSync(path.join(process.cwd(), "public", img!.src)), `${img!.src} is not on disk`);
    assert.ok(img!.credit.trim(), `${p.slug}'s picture has no credit`);
    assert.ok(img!.sourceUrl.startsWith("https://"), `${p.slug}'s picture has no source link`);
    for (const locale of LOCALES) {
      assert.ok(img!.alt[locale]?.trim(), `${p.slug}'s picture has no ${locale} alt text`);
    }
  }
});

test("a sitting resolves in every language, Sanskrit in the reader's script", () => {
  for (const locale of LOCALES) {
    const all = getPractices(locale);
    assert.equal(all.length, PRACTICES.length);
    for (const p of all) {
      assert.ok(p.name.trim() && p.lede.trim(), `${p.slug}: ${locale} view is incomplete`);
      assert.ok(p.howTo.length >= 3);
      if (locale === "kn" && p.sanskrit) {
        assert.match(p.sanskrit, KANNADA, `${p.slug}: Sanskrit should render in Kannada`);
        assert.ok(!DEVANAGARI.test(p.sanskrit), `${p.slug}: Devanagari survived onto the Kannada page`);
      }
      assert.ok(getPractice(p.slug, locale), `${p.slug} does not resolve by slug in ${locale}`);
    }
  }
  assert.equal(getPractice("not-a-sitting", "en"), null);
});

test("the section is in the navigation", () => {
  const section = SECTIONS.find((s) => s.id === "practice");
  assert.ok(section, "practice is not in SECTIONS, so nothing links to it");
  assert.equal(section!.href, "/practice");
  for (const locale of LOCALES) {
    assert.ok(section!.label[locale]?.trim(), `the nav has no ${locale} label`);
    assert.ok(section!.blurb[locale]?.trim(), `the nav has no ${locale} blurb`);
  }
});
