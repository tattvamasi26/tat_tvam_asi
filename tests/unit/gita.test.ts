import { test } from "node:test";
import assert from "node:assert/strict";
import {
  GITA_CHAPTER_NOTES,
  gitaChapter,
  gitaChaptersInOrder,
  gitaVerseTotal,
} from "../../src/lib/seed/gita-chapters";
import { GITA, GITA_CHAPTERS } from "../../src/lib/seed/corpus";
import { CONCEPTS } from "../../src/lib/seed/concepts";
import { PURANAS } from "../../src/lib/seed/puranas";
import { getGitaChapters, getGitaChapter, getGitaVerseCounts } from "../../src/lib/data";
import { GITA_STRINGS } from "../../src/i18n/gita";
import { LOCALES } from "../../src/i18n/config";

// The Gita's eighteen chapters.
//
// Two tests here are the point of the file. One pins the verse-count
// discrepancy, which is real and is the kind of thing that gets
// silently "fixed" into a lie. The other holds the section to
// entering no Sanskrit mula, which is a decision and not an
// unfinished job.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("there are eighteen chapters, written in all three languages", () => {
  assert.equal(GITA_CHAPTER_NOTES.length, 18);
  assert.deepEqual(
    gitaChaptersInOrder().map((c) => c.n),
    Array.from({ length: 18 }, (_, i) => i + 1),
    "the chapters must run one to eighteen with no gaps",
  );

  for (const c of GITA_CHAPTER_NOTES) {
    assert.ok(c.verses > 0, `chapter ${c.n} has no verses`);
    assert.equal(gitaChapter(c.n)?.n, c.n);
    for (const locale of LOCALES) {
      assert.ok(c.name[locale]?.trim(), `chapter ${c.n} has no ${locale} name`);
      assert.ok(c.lede[locale]?.trim().length > 20, `chapter ${c.n}: ${locale} lede is thin`);
      assert.ok(
        c.argument[locale]?.trim().length > 120,
        `chapter ${c.n}: ${locale} does not say what happens in it`,
      );
      assert.ok(
        c.turn[locale]?.trim().length > 50,
        `chapter ${c.n}: ${locale} does not say where it turns`,
      );
    }
  }
});

test("the chapter keys and counts match the corpus rows they render from", () => {
  // The Sanskrit titles are taken from seed/corpus.ts rather than
  // retyped, so the two lists have to stay aligned or a chapter will
  // render under the wrong name.
  assert.equal(GITA_CHAPTERS.length, 18);
  for (const c of GITA_CHAPTER_NOTES) {
    const row = GITA_CHAPTERS[c.n - 1]!;
    assert.ok(
      row.slug.endsWith(c.key),
      `chapter ${c.n}: key "${c.key}" does not match corpus slug "${row.slug}"`,
    );
    assert.equal(
      c.verses,
      row.verse_count,
      `chapter ${c.n}: this file says ${c.verses} verses, the corpus says ${row.verse_count}`,
    );
    assert.match(row.name_sanskrit, DEVANAGARI, `chapter ${c.n}: the corpus title is not Devanagari`);
  }
});

test("the verse count discrepancy is real, and is explained rather than hidden", () => {
  // The chapters sum to 701 and the Gita is universally called 700.
  // Chapter 13 is why: 34 or 35 depending on whether Arjuna's opening
  // question is counted. Silently changing either number to make the
  // arithmetic tidy would be the wrong fix, so both are pinned.
  const counts = getGitaVerseCounts();
  assert.equal(counts.summed, 701);
  assert.equal(counts.traditional, 700);
  assert.equal(gitaVerseTotal(), 701);
  assert.equal(GITA.verse_count, 700, "the work row keeps the traditional figure");

  const thirteen = gitaChapter(13)!;
  assert.equal(thirteen.verses, 35);
  assert.equal(
    counts.summed - thirteen.verses + 34,
    700,
    "with 34 for chapter 13 the total must be exactly 700",
  );

  // And chapter 13 is the only one that has to explain itself.
  assert.ok(thirteen.note, "chapter 13 does not explain the discrepancy");
  for (const locale of LOCALES) {
    assert.ok(thirteen.note![locale]?.trim().length > 80, `chapter 13: no ${locale} note`);
    assert.ok(
      GITA_STRINGS[locale].verseNote.includes("{summed}") &&
        GITA_STRINGS[locale].verseNote.includes("{traditional}"),
      `${locale}: the verse note must carry both numbers`,
    );
  }
  const others = GITA_CHAPTER_NOTES.filter((c) => c.note && c.n !== 13);
  assert.deepEqual(others, [], "only chapter 13 is textually disputed in this way");
});

test("no Sanskrit mula is entered here, and the section says why", () => {
  // The site enters mula only where every syllable can be verified
  // against an edition. A verse written from memory is not verified,
  // however confident the memory. This holds the section to that.
  // Checking the whole file for Devanagari does not work: the Hindi
  // prose is legitimately in that script. What must stay clean is the
  // English, where Devanagari could only be pasted Sanskrit — and the
  // shape, which has nowhere to put a verse.
  for (const c of GITA_CHAPTER_NOTES) {
    const english = [c.name.en, c.lede.en, c.argument.en, c.turn.en, c.note?.en ?? ""].join(" ");
    assert.equal(
      DEVANAGARI.test(english),
      false,
      `chapter ${c.n}: Devanagari in the English prose could only be pasted Sanskrit`,
    );
    for (const field of ["sanskrit", "mula", "verseText", "iast"]) {
      assert.ok(!(field in c), `chapter ${c.n} has grown a "${field}" field`);
    }
  }

  for (const locale of LOCALES) {
    assert.ok(
      GITA_STRINGS[locale].mulaNote.trim().length > 200,
      `${locale}: nothing explains why there are no verses`,
    );
  }
});

test("every link a chapter makes points somewhere that exists", () => {
  for (const c of GITA_CHAPTER_NOTES) {
    for (const l of c.links ?? []) {
      assert.ok(l.href.startsWith("/"), `chapter ${c.n}: ${l.href} is not site-relative`);
      const [, head, a] = l.href.split("/");
      if (head === "concepts" && a)
        assert.ok(CONCEPTS.some((x) => x.slug === a), `chapter ${c.n}: ${l.href} does not exist`);
      if (head === "puranas" && a && a !== "stories")
        assert.ok(PURANAS.some((p) => p.slug === a), `chapter ${c.n}: ${l.href} does not exist`);
      for (const locale of LOCALES) {
        assert.ok(l.label[locale]?.trim(), `chapter ${c.n}: ${l.href} has no ${locale} label`);
      }
    }
  }
});

test("the view resolves one locale and converts the script", () => {
  const en = getGitaChapters("en");
  assert.equal(en.length, 18);
  for (const c of en) {
    assert.ok(c.name.trim() && c.slug.trim(), `chapter ${c.n}: the view is incomplete`);
    assert.match(c.sanskrit, DEVANAGARI, `chapter ${c.n}: an English page keeps Devanagari`);
  }

  const kn = getGitaChapter(2, "kn");
  assert.ok(kn, "chapter 2 has no Kannada view");
  assert.ok(
    KANNADA.test(kn!.sanskrit) && !DEVANAGARI.test(kn!.sanskrit),
    "Sanskrit must reach a Kannada page in the Kannada script",
  );

  assert.equal(getGitaChapter(19, "en"), null);
  assert.equal(getGitaChapter(0, "en"), null);
});
