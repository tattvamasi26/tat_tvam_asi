import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  getNavaVinayakas,
  getTempleEntryKind,
  getTempleMonograph,
  getTempleRegionPage,
  getTempleRegions,
  getTempleRoutes,
  templeHref,
} from "../../src/lib/data";
import { TEMPLE_REGIONS } from "../../src/lib/seed/temple-regions";
import { TEMPLE_COLLECTIONS } from "../../src/lib/seed/temple-collections";
import { getTemplePage, templePageSlugs, type TempleBlock } from "../../src/lib/seed/temple-pages";
import { TEMPLES } from "../../src/lib/seed/temples";
import { LOCALES } from "../../src/i18n/config";

// The temples, region by region: every temple belongs to a region, the
// monographs say the same thing in every language, and every picture is
// on disk at the size it claims. Importing data.ts registers the temple
// modules, as the site does.

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
  throw new Error(`${file}: no frame header`);
}

test("every temple and circuit belongs to a region that exists", () => {
  const regions = new Set(TEMPLE_REGIONS.map((r) => r.slug));
  assert.ok(regions.has("tulunadu"), "Tulunadu is a region");
  for (const slug of templePageSlugs()) {
    assert.ok(regions.has(getTemplePage(slug)!.region), `${slug}: unknown region`);
  }
  for (const row of TEMPLES) assert.ok(regions.has(row.region), `${row.slug}: unknown region`);
  for (const c of TEMPLE_COLLECTIONS) assert.ok(regions.has(c.region), `${c.slug}: unknown region`);
});

test("slugs are unique across temples and circuits, and positions within a region do not clash", () => {
  const slugs = [...templePageSlugs(), ...TEMPLES.map((t) => t.slug), ...TEMPLE_COLLECTIONS.map((c) => c.slug)];
  assert.equal(new Set(slugs).size, slugs.length, "a slug is used twice");
  for (const r of TEMPLE_REGIONS) {
    const orders = templePageSlugs()
      .map((s) => getTemplePage(s)!)
      .filter((p) => p.region === r.slug)
      .map((p) => p.order);
    assert.equal(new Set(orders).size, orders.length, `${r.slug}: two temples share a position`);
  }
});

test("a region reads in every language and lists what it holds", () => {
  for (const l of LOCALES) {
    for (const r of getTempleRegions(l)) {
      assert.ok(r.name.trim() && r.blurb.trim() && r.lede.trim(), `${r.slug}: blank in ${l}`);
      const page = getTempleRegionPage(r.slug, l, "temples");
      assert.ok(page, `${r.slug}: no page`);
      assert.equal(page!.temples.length, r.templeCount, `${r.slug}: card count does not match the page`);
      assert.ok(page!.temples.length > 0, `${r.slug}: a region with nothing in it`);
      for (const card of page!.temples) {
        assert.match(card.href, new RegExp(`^/temples/${r.slug}/`), `${card.slug}: href outside its region`);
        assert.ok(card.name.trim() && card.blurb.trim(), `${card.slug}: blank card in ${l}`);
      }
    }
  }
  assert.ok(getTempleRegionPage("tulunadu", "en", "temples")!.collections.length > 0, "Tulunadu has its circuit");
});

/** The shape of a monograph's sections, for comparing languages. */
function shape(blocks: TempleBlock[]) {
  return blocks.map((b) => b.kind).join(",");
}

test("a monograph says the same thing in every language: same sections, same blocks", () => {
  assert.ok(templePageSlugs().length >= 7, `only ${templePageSlugs().length} temples written in depth`);
  for (const slug of templePageSlugs()) {
    const page = getTemplePage(slug)!;
    const en = page.content.en;
    assert.ok(en.sections.length >= 2, `${slug}: too thin to be a monograph`);
    for (const l of LOCALES) {
      const c = page.content[l];
      assert.ok(c, `${slug}: no ${l} content`);
      assert.ok(c.tagline.trim() && c.place.trim(), `${slug}: blank tagline or place in ${l}`);
      assert.ok(c.facts.length > 0, `${slug}: no facts in ${l}`);
      assert.deepEqual(
        c.sections.map((s) => s.id),
        en.sections.map((s) => s.id),
        `${slug}: ${l} has different sections`
      );
      c.sections.forEach((s, i) => {
        assert.ok(s.title.trim() && s.eyebrow.trim(), `${slug} ${s.id}: blank heading in ${l}`);
        assert.equal(shape(s.blocks), shape(en.sections[i].blocks), `${slug} ${s.id}: ${l} has different blocks`);
      });
      assert.ok(page.name[l]?.trim(), `${slug}: no ${l} name`);
    }
    assert.ok(KANNADA.test(page.nameLocal), `${slug}: local name is not in its own script`);
    assert.ok(page.sources.length > 0, `${slug}: no sources`);
    for (const s of page.sources) assert.match(s.url, /^https:\/\//, `${slug}: source is not a web address`);
  }
});

test("every temple picture is on disk, credited, described in every language, and declared at its real size", () => {
  for (const slug of templePageSlugs()) {
    const page = getTemplePage(slug)!;
    for (const img of [page.hero, ...(page.gallery ?? [])]) {
      if (!img) continue;
      const file = path.join(process.cwd(), "public", img.src);
      assert.ok(existsSync(file), `${slug}: ${img.src} is missing`);
      assert.ok(img.credit.trim(), `${slug}: ${img.src} has no credit`);
      if (img.sourceUrl !== undefined) assert.match(img.sourceUrl, /^https:\/\//, `${slug}: bad source for ${img.src}`);
      for (const l of LOCALES) assert.ok(img.alt[l]?.trim(), `${slug}: ${img.src} has no ${l} description`);
      assert.deepEqual(jpegSize(file), { width: img.width, height: img.height }, `${slug}: ${img.src} is not that size`);
    }
  }
});

test("a temple written in depth has a monograph in every language, with the region and the way on", () => {
  for (const l of LOCALES) {
    const kollur = getTempleMonograph("kollur-mookambika", l);
    assert.ok(kollur, `no Kollur monograph in ${l}`);
    assert.equal(kollur!.region.slug, "tulunadu");
    assert.ok(kollur!.sections.length >= 5, "the Kollur guide keeps its sections");
    assert.ok(kollur!.next, "Kollur leads on to the next temple in the region");
  }
});

test("what sits at each address: a temple, a circuit, or nothing", () => {
  assert.equal(getTempleEntryKind("tulunadu", "kollur-mookambika"), "temple");
  assert.equal(getTempleEntryKind("tulunadu", "nava-vinayakas"), "collection");
  assert.equal(getTempleEntryKind("tamil-nadu", "brihadeeswarar-temple"), "temple");
  // A temple asked for under the wrong region is not there.
  assert.equal(getTempleEntryKind("tamil-nadu", "kollur-mookambika"), null);
  assert.equal(getTempleEntryKind("tulunadu", "no-such-temple"), null);
});

test("every route the section builds resolves to something", () => {
  const { regions, entries } = getTempleRoutes();
  assert.equal(regions.length, TEMPLE_REGIONS.length);
  for (const r of regions) assert.ok(getTempleRegionPage(r.section, "en", "temples"), `${r.section}: no page`);
  for (const e of entries) assert.ok(getTempleEntryKind(e.section, e.entry), `${e.section}/${e.entry}: nothing there`);
  assert.equal(new Set(entries.map((e) => `${e.section}/${e.entry}`)).size, entries.length, "a route is built twice");
});

test("the addresses temples had before the regions still lead somewhere", () => {
  assert.equal(templeHref("brihadeeswarar-temple"), "/temples/tamil-nadu/brihadeeswarar-temple");
  assert.equal(templeHref("kollur-mookambika"), "/temples/tulunadu/kollur-mookambika");
  assert.equal(templeHref("no-such-temple"), null);
});

test("the Nava Vinayakas are nine, south to north, each described in every language", () => {
  for (const l of LOCALES) {
    const page = getNavaVinayakas(l);
    assert.equal(page.temples.length, 9);
    assert.equal(page.temples[0].slug, "madhur", "the circuit starts in the south");
    assert.equal(page.temples[8].slug, "gokarna", "and ends in the north");
    assert.ok(page.title.trim() && page.lede.trim() && page.note.trim(), `blank circuit page in ${l}`);
    for (const t of page.temples) {
      assert.ok(t.name.trim() && t.place.trim() && t.text.trim(), `${t.slug}: blank in ${l}`);
      assert.ok(KANNADA.test(t.nameLocal), `${t.slug}: local name is not in Kannada`);
    }
  }
});
