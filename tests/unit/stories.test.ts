import { test } from "node:test";
import assert from "node:assert/strict";
import {
  STORIES,
  storyBySlug,
  storiesInOrder,
  storiesFromPurana,
} from "../../src/lib/seed/stories";
import { PURANAS } from "../../src/lib/seed/puranas";
import { RITUALS } from "../../src/lib/seed/rituals";
import { FESTIVALS } from "../../src/lib/seed/festivals";
import { CONCEPTS } from "../../src/lib/seed/concepts";
import { getStories, getStory, getStoriesFromPurana } from "../../src/lib/data";
import { STORY_STRINGS } from "../../src/i18n/stories";
import { LOCALES } from "../../src/i18n/config";

// The stories.
//
// Three rules hold this section up, and the third is the one that
// keeps it a reference rather than a sermon:
//
//  - every story names the text it is told in, and where in it
//  - where the tellings differ, the difference is printed
//  - a reading is kept apart from what the story says

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("every story is written in all three languages", () => {
  assert.ok(STORIES.length >= 8, `only ${STORIES.length} stories`);

  for (const s of STORIES) {
    assert.match(s.slug, /^[a-z][a-z0-9-]*$/, `${s.slug} is not a URL-safe slug`);
    assert.match(s.sanskrit, DEVANAGARI, `${s.slug}: Sanskrit must be in Devanagari`);
    assert.ok(!KANNADA.test(s.sanskrit), `${s.slug}: Sanskrit must not be stored in Kannada`);

    for (const locale of LOCALES) {
      assert.ok(s.name[locale]?.trim(), `${s.slug} has no ${locale} name`);
      assert.ok(s.lede[locale]?.trim().length > 20, `${s.slug}: ${locale} lede is too thin`);
      assert.ok(
        s.story[locale]?.trim().length > 300,
        `${s.slug}: the ${locale} telling is too thin to be a telling`,
      );
      assert.ok(
        s.reading[locale]?.trim().length > 80,
        `${s.slug}: ${locale} does not say how it is read`,
      );
    }
  }
});

test("every story names the text it is told in, and that text exists here", () => {
  // A story with no address is folklore. That is a fine thing to be
  // and a different thing from what this section claims.
  const slugs = new Set(PURANAS.map((p) => p.slug));

  for (const s of STORIES) {
    assert.ok(slugs.has(s.purana), `${s.slug} is told in "${s.purana}", which is not a Purana here`);
    for (const locale of LOCALES) {
      const told = s.told[locale];
      assert.ok(told?.trim().length > 15, `${s.slug}: no ${locale} address`);
      // An address has to be more specific than "the Puranas say".
      assert.ok(
        /\d|skandha|ಸ್ಕಂಧ|स्कंध|book|अंश|ಅಂಶ|Purāṇa|ಪುರಾಣ|पुराण/i.test(told!),
        `${s.slug} (${locale}): "${told}" does not name a text or a place in one`,
      );
    }
  }

  // And the link back resolves both ways.
  for (const p of PURANAS) {
    for (const s of storiesFromPurana(p.slug)) {
      assert.equal(s.purana, p.slug);
    }
  }
  assert.ok(getStoriesFromPurana("bhagavata", "en").length > 0, "the Bhagavata carries no stories");
});

test("slugs and places are unique, and the order has no gaps", () => {
  const slugs = new Set<string>();
  const orders = new Set<number>();
  for (const s of STORIES) {
    assert.ok(!slugs.has(s.slug), `duplicate slug ${s.slug}`);
    slugs.add(s.slug);
    assert.ok(!orders.has(s.order), `two stories share order ${s.order}`);
    orders.add(s.order);
    assert.equal(storyBySlug(s.slug)?.slug, s.slug);
  }
  assert.deepEqual(
    storiesInOrder().map((s) => s.order),
    Array.from({ length: STORIES.length }, (_, i) => i + 1),
  );
});

test("a reading is written as a reading, not as what the story says", () => {
  // Every one of these has a famous meaning attached; the meanings are
  // old and worth having, and they are still not what the story says.
  // The prose has to carry that difference, so the reading field is
  // required to attribute itself.
  // "is held to be" attributes as well as "is read as" does. The
  // first version of this check only knew the second, and reported
  // prose that was already attributing perfectly well.
  const ATTRIBUTES =
    /\b(is read|is usually read|reading|readings|interpretation|taken as|held to)\b|ಓದಲಾಗುತ್ತದೆ|ಓದು|ವ್ಯಾಖ್ಯಾನ|ಪರಿಗಣಿಸ|पढ़ा जाता|पाठ|व्याख्या|माना जाता/;

  for (const s of STORIES) {
    for (const locale of LOCALES) {
      assert.match(
        s.reading[locale]!,
        ATTRIBUTES,
        `${s.slug} (${locale}): the reading is stated as fact rather than as a reading`,
      );
    }
  }

  // And the section says so once, plainly, in each language.
  for (const locale of LOCALES) {
    assert.ok(
      STORY_STRINGS[locale].standing.trim().length > 150,
      `${locale}: the section does not state its rules`,
    );
    assert.ok(
      STORY_STRINGS[locale].labelReading.trim(),
      `${locale}: the reading block has no heading`,
    );
  }
});

test("where the tellings differ, the difference is printed", () => {
  // The churning appears in at least four Puranas and they do not
  // agree about what came out of the sea. Flattening that is the
  // commonest way a page like this goes wrong.
  const differing = STORIES.filter((s) => s.differs);
  assert.ok(differing.length >= 2, "no story records a difference between its tellings");

  const churning = storyBySlug("samudra-manthana")!;
  assert.ok(churning.differs, "the churning does not record its variants");
  for (const locale of LOCALES) {
    assert.ok(churning.differs![locale]?.trim().length > 40, `the churning: no ${locale} variant note`);
  }
});

test("every link a story makes points somewhere that exists", () => {
  for (const s of STORIES) {
    for (const l of s.links ?? []) {
      assert.ok(l.href.startsWith("/"), `${s.slug}: ${l.href} is not site-relative`);
      const [, head, a] = l.href.split("/");
      if (head === "puranas" && a && a !== "stories")
        assert.ok(PURANAS.some((p) => p.slug === a), `${s.slug}: ${l.href} does not exist`);
      if (head === "festivals" && a)
        assert.ok(FESTIVALS.some((f) => f.slug === a), `${s.slug}: ${l.href} does not exist`);
      if (head === "rituals" && a)
        assert.ok(RITUALS.some((r) => r.slug === a), `${s.slug}: ${l.href} does not exist`);
      if (head === "concepts" && a)
        assert.ok(CONCEPTS.some((c) => c.slug === a), `${s.slug}: ${l.href} does not exist`);
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `${s.slug}: ${l.href} has no ${locale} label`);
      }
    }
  }
});

test("the view resolves one locale and converts the script", () => {
  const en = getStories("en");
  assert.equal(en.length, STORIES.length);

  const kn = getStory("dhruva", "kn");
  assert.ok(kn, "Dhruva has no Kannada view");
  assert.ok(
    KANNADA.test(kn!.sanskrit) && !DEVANAGARI.test(kn!.sanskrit),
    "Sanskrit must reach a Kannada page in the Kannada script",
  );
  // The Purana's own name is resolved, so the chip never shows a slug.
  assert.ok(kn!.puranaName.trim() && kn!.puranaName !== kn!.purana);

  assert.equal(getStory("not-a-story", "en"), null);
});
