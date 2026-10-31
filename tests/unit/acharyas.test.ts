import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { getAcharyaMonograph, getAcharyaMonographSlugs, getTeacherBySlug } from "../../src/lib/data";
import { getAcharyaPage } from "../../src/lib/seed/acharya-pages";
import { TEACHERS } from "../../src/lib/seed/teachers";
import { LOCALES } from "../../src/i18n/config";

// The acharyas written in depth.
//
// A monograph says the same thing in three languages or it says
// different things to different readers, which is worse than saying
// less. These tests hold the languages to the same sections and the
// same blocks, check every picture is on disk at the size it claims,
// and hold the page to what docs/SHANKARA.md settled: the contested
// dates are given as contested, and the doubted works are not listed
// as his.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

/** Width and height from a JPEG's start-of-frame marker. */
function jpegSize(file: string): { width: number; height: number } {
  const b = readFileSync(file);
  assert.ok(b[0] === 0xff && b[1] === 0xd8, `${file} is not a JPEG`);
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = b[i + 1];
    const length = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    i += 2 + length;
  }
  throw new Error(`no size marker in ${file}`);
}

test("an acharya with a monograph is a real teacher with a page", () => {
  const slugs = getAcharyaMonographSlugs();
  assert.ok(slugs.includes("adi-shankaracharya"));
  for (const slug of slugs) {
    assert.ok(getTeacherBySlug(slug, "en"), `${slug} has a monograph but no teacher row`);
    assert.ok(getAcharyaMonograph(slug, "en"), `${slug} does not resolve to a monograph`);
  }
});

test("every language has the same sections, in the same order", () => {
  for (const slug of getAcharyaMonographSlugs()) {
    const page = getAcharyaPage(slug)!;
    const ids = page.content.en.sections.map((s) => s.id);
    assert.ok(ids.length >= 5, `${slug} has only ${ids.length} sections`);
    for (const locale of LOCALES) {
      assert.deepEqual(
        page.content[locale].sections.map((s) => s.id),
        ids,
        `${slug}: ${locale} sections differ from English`,
      );
    }
  }
});

test("every language has the same blocks, of the same kinds, in the same order", () => {
  for (const slug of getAcharyaMonographSlugs()) {
    const page = getAcharyaPage(slug)!;
    for (const section of page.content.en.sections) {
      const kinds = section.blocks.map((b) => b.kind);
      for (const locale of LOCALES) {
        const other = page.content[locale].sections.find((s) => s.id === section.id)!;
        assert.deepEqual(
          other.blocks.map((b) => b.kind),
          kinds,
          `${slug} · ${section.id}: ${locale} blocks differ from English`,
        );
        // A list or rows block must carry the same number of entries,
        // or one language quietly drops a matha or a disciple.
        section.blocks.forEach((block, i) => {
          const mirror = other.blocks[i];
          if (block.kind === "list" && mirror.kind === "list") {
            assert.equal(mirror.items.length, block.items.length, `${slug} · ${section.id}: ${locale} list length`);
          }
          if (block.kind === "rows" && mirror.kind === "rows") {
            assert.equal(mirror.rows.length, block.rows.length, `${slug} · ${section.id}: ${locale} rows length`);
          }
          if (block.kind === "sub" && mirror.kind === "sub") {
            assert.equal(mirror.paras.length, block.paras.length, `${slug} · ${section.id}: ${locale} paragraph count`);
          }
          // The drawn blocks carry structured data — a date on a band,
          // a seat at a direction. If one language loses an entry, the
          // picture it draws is a different picture.
          if (block.kind === "timeline" && mirror.kind === "timeline") {
            assert.equal(mirror.marks.length, block.marks.length, `${slug} · ${section.id}: ${locale} timeline marks`);
            assert.deepEqual(
              mirror.marks.map((m) => m.year),
              block.marks.map((m) => m.year),
              `${slug} · ${section.id}: ${locale} timeline years must match — the band is drawn from them`,
            );
            assert.equal(
              mirror.marks.filter((m) => m.emphasis).length,
              block.marks.filter((m) => m.emphasis).length,
              `${slug} · ${section.id}: ${locale} must pin the same reading`,
            );
          }
          if (block.kind === "journey" && mirror.kind === "journey") {
            assert.equal(mirror.stops.length, block.stops.length, `${slug} · ${section.id}: ${locale} journey stops`);
          }
          if (block.kind === "compass" && mirror.kind === "compass") {
            assert.deepEqual(
              mirror.points.map((p) => p.dir),
              block.points.map((p) => p.dir),
              `${slug} · ${section.id}: ${locale} compass directions`,
            );
          }
          if (block.kind === "layers" && mirror.kind === "layers") {
            assert.equal(mirror.layers.length, block.layers.length, `${slug} · ${section.id}: ${locale} layers`);
          }
          if (block.kind === "tiers" && mirror.kind === "tiers") {
            assert.deepEqual(
              mirror.tiers.map((t) => t.tone),
              block.tiers.map((t) => t.tone),
              `${slug} · ${section.id}: ${locale} tiers`,
            );
            block.tiers.forEach((tier, j) => {
              const other = (mirror as typeof block).tiers[j];
              assert.equal(other.items.length, tier.items.length, `${slug} · ${section.id}: ${locale} tier items`);
            });
          }
          if (block.kind === "lineage" && mirror.kind === "lineage") {
            assert.deepEqual(
              mirror.generations.map((g) => g.people.length),
              block.generations.map((g) => g.people.length),
              `${slug} · ${section.id}: ${locale} lineage`,
            );
          }
          if (block.kind === "terms" && mirror.kind === "terms") {
            assert.equal(mirror.terms.length, block.terms.length, `${slug} · ${section.id}: ${locale} terms`);
          }
        });
      }
    }
  }
});

test("the facts bar and the head are written in every language", () => {
  for (const slug of getAcharyaMonographSlugs()) {
    const page = getAcharyaPage(slug)!;
    const factCount = page.content.en.facts.length;
    for (const locale of LOCALES) {
      const c = page.content[locale];
      assert.ok(c.tagline.trim(), `${slug}: ${locale} has no tagline`);
      assert.ok(c.when.trim(), `${slug}: ${locale} has no era line`);
      assert.equal(c.facts.length, factCount, `${slug}: ${locale} facts bar differs in length`);
      for (const [label, value] of c.facts) assert.ok(label.trim() && value.trim(), `${slug}: ${locale} empty fact`);
    }
  }
});

test("every picture is on disk, at the size it claims, and credited", () => {
  for (const slug of getAcharyaMonographSlugs()) {
    const page = getAcharyaPage(slug)!;
    for (const pic of [page.hero, ...(page.gallery ?? [])]) {
      if (!pic) continue;
      const file = path.join(process.cwd(), "public", pic.src);
      assert.ok(existsSync(file), `${pic.src} is not on disk`);
      const size = jpegSize(file);
      assert.equal(size.width, pic.width, `${pic.src} width`);
      assert.equal(size.height, pic.height, `${pic.src} height`);
      assert.ok(pic.credit.trim(), `${pic.src} has no credit`);
      // A Commons picture links back to its file page. A picture the
      // owner supplied has no such page, so its credit has to say that
      // instead — what is never allowed is a picture with neither.
      assert.ok(
        pic.sourceUrl || /upplied by the site owner/.test(pic.credit),
        `${pic.src} has neither a source link nor a credit saying who supplied it`,
      );
      for (const locale of LOCALES) assert.ok(pic.alt[locale]?.trim(), `${pic.src} has no ${locale} alt text`);
    }
  }
});

test("the sources are named, and are links", () => {
  for (const slug of getAcharyaMonographSlugs()) {
    const page = getAcharyaPage(slug)!;
    assert.ok(page.sources.length >= 3, `${slug} cites only ${page.sources.length} sources`);
    for (const s of page.sources) {
      assert.ok(s.title.trim(), `${slug} has a source with no title`);
      assert.match(s.url, /^https:\/\//, `${slug}: ${s.url} is not an https link`);
    }
  }
});

// ── what the study settled ─────────────────────────────────────────

test("Shankara's dates are given as contested, never as two known years", () => {
  const page = getAcharyaPage("adi-shankaracharya")!;
  const teacher = getTeacherBySlug("adi-shankaracharya", "en")!;

  // The seed row must not carry the discarded estimate as fact. The
  // view does not expose the years at all, so this reads the row.
  const row = TEACHERS.find((r) => r.slug === "adi-shankaracharya")!;
  assert.equal(row.birth_year, null, "788 CE is an estimate later scholarship set aside");
  assert.equal(row.death_year, null, "820 CE is an estimate later scholarship set aside");
  assert.match(teacher.era, /8th century|usual/i, "the era line must carry the claim instead");

  const when = page.content.en.sections.find((s) => s.id === "when")!;
  const text = JSON.stringify(when);
  // All four positions must appear, including the mathas' own.
  for (const needle of ["509", "788", "700", "Nakamura", "Potter", "Vikramaditya"]) {
    assert.ok(text.includes(needle), `the dates section does not mention ${needle}`);
  }
});

test("the life is labelled as tradition, not as record", () => {
  const page = getAcharyaPage("adi-shankaracharya")!;
  const life = page.content.en.sections.find((s) => s.id === "life")!;
  // The label must be the first thing a reader meets in the section,
  // before any of the story — so it belongs in the standfirst.
  assert.ok(life.standfirst, "the life section has no standfirst");
  assert.match(life.standfirst!, /tradition/i, "the life section must say plainly that it is tradition");

  // And the section on the sources must say how late the biographies are.
  const sources = page.content.en.sections.find((s) => s.id === "sources")!;
  assert.match(
    JSON.stringify(sources),
    /five centuries/i,
    "the sources section must say how long after his death the lives were written",
  );
});

test("the doubted works are not presented as his", () => {
  const page = getAcharyaPage("adi-shankaracharya")!;
  const works = JSON.stringify(page.content.en.sections.find((s) => s.id === "works"));
  assert.ok(
    /Vivekac(h|ū)ūḍ|Vivekachudamani|Vivekacūḍāmaṇi/.test(works),
    "the Vivekachudamani question should be addressed, not omitted",
  );
  assert.ok(/doubted|rejected/i.test(works), "the doubted works must be labelled as doubted");

  // And it must not sit in the teacher card's key works as though settled.
  const teacher = getTeacherBySlug("adi-shankaracharya", "en")!;
  assert.ok(
    !teacher.keyWorks.some((w) => /Vivekachudamani/i.test(w)),
    "Vivekachudamani is doubted and should not be listed as a key work",
  );
});

test("Sanskrit in the drawn blocks is stored in Devanagari and rendered in the reader's script", () => {
  const page = getAcharyaPage("adi-shankaracharya")!;

  // Stored: Devanagari only, in every language's copy. Storing it
  // converted would make the Kannada file unusable to a Hindi reader
  // and break the site's one rule about Sanskrit.
  for (const locale of LOCALES) {
    for (const section of page.content[locale].sections) {
      for (const block of section.blocks) {
        if (block.kind === "compass") {
          assert.doesNotMatch(block.centre, KANNADA, `${locale}: compass centre is stored converted`);
          for (const p of block.points) {
            assert.match(p.vakya, DEVANAGARI, `${locale}: ${p.dir} mahavakya is not Devanagari`);
            assert.doesNotMatch(p.vakya, KANNADA, `${locale}: ${p.dir} mahavakya is stored converted`);
          }
        }
        if (block.kind === "verse") {
          assert.match(block.sanskrit, DEVANAGARI, `${locale}: a verse is not stored in Devanagari`);
          assert.doesNotMatch(block.sanskrit, KANNADA, `${locale}: a verse is stored converted`);
        }
      }
    }
  }

  // Rendered: the reader's script, with no Devanagari left on a
  // Kannada page.
  const kn = getAcharyaMonograph("adi-shankaracharya", "kn")!;
  const compass = kn.sections
    .flatMap((s) => s.blocks)
    .find((b) => b.kind === "compass") as { centre: string; points: { vakya: string }[] } | undefined;
  assert.ok(compass, "the mathas section has no compass");
  assert.match(compass!.centre, KANNADA);
  for (const p of compass!.points) {
    assert.match(p.vakya, KANNADA, "a mahavakya did not convert for the Kannada reader");
    assert.doesNotMatch(p.vakya, DEVANAGARI, "Devanagari left on a Kannada page");
  }
});

test("the Sanskrit name renders in the reader's script", () => {
  const en = getAcharyaMonograph("adi-shankaracharya", "en")!;
  const kn = getAcharyaMonograph("adi-shankaracharya", "kn")!;
  assert.match(en.nameSanskrit, DEVANAGARI);
  assert.match(kn.nameSanskrit, KANNADA);
  assert.doesNotMatch(kn.nameSanskrit, DEVANAGARI);
});

test("the monograph resolves in every language, with its pictures captioned", () => {
  for (const locale of LOCALES) {
    const m = getAcharyaMonograph("adi-shankaracharya", locale)!;
    assert.ok(m.name.trim() && m.tagline.trim() && m.when.trim());
    assert.ok(m.hero, "the portrait is missing");
    assert.ok(m.gallery.length >= 4, "the gallery should carry the places");
    for (const shot of m.gallery) assert.ok(shot.caption?.trim(), `a gallery picture has no ${locale} caption`);
  }
});
