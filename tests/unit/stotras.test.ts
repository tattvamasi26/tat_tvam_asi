import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  getDevata,
  getDevatas,
  getPlannedDevatas,
  getStotraGroups,
  getStotraParams,
  getStotraVerses,
  getStotraViews,
} from "../../src/lib/data";
import { DEVATAS, type DevataImage } from "../../src/lib/seed/devatas";
import { allStotraRows, getStotra, stotraSlugs } from "../../src/lib/seed/stotras";
import { STUTIS } from "../../src/lib/seed/corpus";
import { NAVA_VINAYAKAS } from "../../src/lib/seed/nava-vinayakas";
import { LOCALES } from "../../src/i18n/config";

// The stutis, devata by devata: the registry, its content and its pictures.
// Importing data.ts registers every stotra module, as the site does.

const DEVANAGARI_LETTER = /[ऀ-ॐ॓-ॣ०-ॿ]/;
const KANNADA = /[ಀ-೿]/;
const LATIN = /[A-Za-z]/;

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

test("the stutis open on Gāyatrī, then Gaṇeśa", () => {
  assert.deepEqual(getDevatas("en").map((d) => d.slug).slice(0, 2), ["gayatri", "ganesha"]);
  assert.equal(getStotraViews("gayatri", "en")[0]?.slug, "gayatri-mantra", "Gāyatrī's page opens on the mantra");
});

test("every stotra has its header row in corpus.ts, with the same id and devata", () => {
  assert.ok(stotraSlugs().length >= 6);
  for (const slug of stotraSlugs()) {
    const s = getStotra(slug)!;
    const row = STUTIS.find((t) => t.slug === slug);
    assert.ok(row, `${slug}: no row in STUTIS`);
    assert.equal(row!.id, s.textId, `${slug}: textId does not match its row`);
    assert.equal(row!.work_type, "stotra");
    assert.equal(row!.deity, s.devata, `${slug}: row says ${row!.deity}, module says ${s.devata}`);
  }
});

test("every stotra belongs to an open devata, and every summarised stotra to a known one", () => {
  const known = new Set(DEVATAS.map((d) => d.slug));
  const open = new Set(DEVATAS.filter((d) => d.status === "open").map((d) => d.slug));
  for (const slug of stotraSlugs()) assert.ok(open.has(getStotra(slug)!.devata), `${slug}: devata is not open`);
  for (const row of STUTIS) assert.ok(row.deity && known.has(row.deity), `${row.slug}: unknown devata ${row.deity}`);
  for (const d of DEVATAS.filter((x) => x.status === "open")) {
    assert.ok(getStotraViews(d.slug, "en").length > 0, `${d.slug} is open but has nothing to read`);
  }
});

test("positions on a devata's page are unique, so the order is never ambiguous", () => {
  for (const d of DEVATAS) {
    const orders = stotraSlugs().map((s) => getStotra(s)!).filter((s) => s.devata === d.slug).map((s) => s.order);
    assert.equal(new Set(orders).size, orders.length, `${d.slug}: two stotras share a position`);
  }
});

test("IAST is set line for line against the mūla, with no blank lines", () => {
  for (const slug of stotraSlugs()) {
    for (const v of getStotra(slug)!.verses) {
      assert.equal(v.iast.length, v.sanskrit.length, `${slug} ${v.locator}: ${v.sanskrit.length} Sanskrit lines, ${v.iast.length} IAST`);
      v.sanskrit.forEach((l, i) => assert.ok(l.trim(), `${slug} ${v.locator}: Sanskrit line ${i + 1} is blank`));
      v.iast.forEach((l, i) => assert.ok(l.trim(), `${slug} ${v.locator}: IAST line ${i + 1} is blank`));
    }
  }
});

test("the mūla is stored in Devanagari only — never Kannada script, never Latin", () => {
  for (const slug of stotraSlugs()) {
    for (const v of getStotra(slug)!.verses) {
      for (const s of [...v.sanskrit, ...(v.keywords ?? []).map((k) => k.term)]) {
        assert.ok(DEVANAGARI_LETTER.test(s), `${slug} ${v.locator}: “${s}” has no Devanagari`);
        assert.ok(!KANNADA.test(s) && !LATIN.test(s), `${slug} ${v.locator}: “${s}” is not pure Devanagari`);
      }
    }
  }
});

test("every verse reads in every language, with nothing blank", () => {
  for (const slug of stotraSlugs()) {
    const s = getStotra(slug)!;
    for (const l of LOCALES) {
      assert.ok(s.origin[l]?.trim(), `${slug}: no ${l} origin`);
      if (s.composer) assert.ok(s.composer[l]?.trim(), `${slug}: no ${l} composer`);
      for (const v of s.verses) {
        // The translation is required; handles, glosses and commentary are
        // optional for a stotra, but where written they are written in full.
        assert.ok(v.readings[l]?.translation.trim(), `${slug} ${v.locator}: no ${l} translation`);
        if (v.handle) assert.ok(v.handle[l]?.trim(), `${slug} ${v.locator}: no ${l} handle`);
        const note = v.readings[l]?.explanation;
        if (note !== undefined) assert.ok(note.trim(), `${slug} ${v.locator}: blank ${l} explanation`);
        (v.keywords ?? []).forEach((k) => assert.ok(k.gloss[l]?.trim(), `${slug} ${v.locator}: “${k.iast}” has no ${l} gloss`));
      }
    }
  }
});

test("verse ids are unique across all stotras, and locators within each", () => {
  const ids = stotraSlugs().flatMap((s) => getStotra(s)!.verses.map((v) => v.id));
  assert.equal(new Set(ids).size, ids.length, "a verse id is reused");
  for (const slug of stotraSlugs()) {
    const locators = getStotra(slug)!.verses.map((v) => v.locator);
    assert.equal(new Set(locators).size, locators.length, `${slug}: duplicate locator`);
  }
});

test("an invocation comes first and a phalaśruti last; everything between is numbered", () => {
  for (const slug of stotraSlugs()) {
    const locators = getStotra(slug)!.verses.map((v) => v.locator);
    locators.forEach((loc, i) => {
      if (loc === "invocation") assert.equal(i, 0, `${slug}: invocation is not first`);
      else if (loc === "phala") assert.equal(i, locators.length - 1, `${slug}: phalaśruti is not last`);
      else assert.match(loc, /^\d+$/, `${slug}: unexpected locator “${loc}”`);
    });
  }
});

test("on a Kannada page every title, line and term comes back in Kannada script", () => {
  for (const d of getDevatas("kn")) {
    assert.ok(!DEVANAGARI_LETTER.test(d.nameSanskrit), `${d.slug}: name left in Devanagari`);
    for (const s of getStotraViews(d.slug, "kn")) {
      assert.ok(!DEVANAGARI_LETTER.test(s.nameSanskrit), `${s.slug}: title left in Devanagari`);
      assert.ok(!DEVANAGARI_LETTER.test(s.firstLine), `${s.slug}: opening line left in Devanagari`);
      for (const v of getStotraVerses(s.slug, "kn")) {
        for (const text of [...v.sanskrit, ...v.keywords.map((k) => k.term)]) {
          const left = text.match(DEVANAGARI_LETTER);
          assert.equal(left, null, `${s.slug} ${v.locator}: “${text}” left “${left?.[0]}” in Devanagari`);
        }
      }
    }
  }
});

test("every devata has its names, epithet and blurb in every language", () => {
  for (const d of DEVATAS) {
    for (const l of LOCALES) {
      assert.ok(d.name[l]?.trim(), `${d.slug}: no ${l} name`);
      assert.ok(d.epithet[l]?.trim(), `${d.slug}: no ${l} epithet`);
      assert.ok(d.blurb[l]?.trim(), `${d.slug}: no ${l} blurb`);
    }
  }
});

/** Every picture the stutis and the Nava Vinayakas use, with where it is used. */
function allPictures(): { owner: string; img: DevataImage }[] {
  const out: { owner: string; img: DevataImage }[] = [];
  for (const d of DEVATAS) {
    if (d.image) out.push({ owner: d.slug, img: d.image });
    if (d.festival) out.push({ owner: `${d.slug} festival`, img: d.festival.image });
    for (const [group, img] of Object.entries(d.groupImages ?? {})) if (img) out.push({ owner: `${d.slug} ${group}`, img });
  }
  for (const slug of stotraSlugs()) {
    const img = getStotra(slug)!.image;
    if (img) out.push({ owner: slug, img });
  }
  for (const n of NAVA_VINAYAKAS) if (n.photo) out.push({ owner: `temple ${n.slug}`, img: n.photo });
  return out;
}

test("every picture is on disk, credited, described in every language, and declared at its real size", () => {
  assert.ok(DEVATAS.filter((d) => d.image).length >= 2, "Gāyatrī and Gaṇeśa both have pictures");
  for (const { owner, img } of allPictures()) {
    const file = path.join(process.cwd(), "public", img.src);
    assert.ok(existsSync(file), `${owner}: ${img.src} is missing`);
    assert.ok(img.credit.trim(), `${owner}: picture has no credit`);
    if (img.sourceUrl !== undefined) assert.ok(img.sourceUrl.startsWith("https://"), `${owner}: source is not a web address`);
    for (const l of LOCALES) assert.ok(img.alt[l]?.trim(), `${owner}: picture has no ${l} description`);
    // next/image draws at the declared size; a wrong one stretches the picture.
    assert.deepEqual(jpegSize(file), { width: img.width, height: img.height }, `${owner}: declared size is not the file's`);
  }
});

test("a devata's portrait and every temple photograph link to their free-licence source", () => {
  for (const d of DEVATAS.filter((x) => x.image)) {
    assert.match(d.image!.sourceUrl ?? "", /^https:\/\/commons\.wikimedia\.org\//, `${d.slug}: portrait has no Commons source`);
  }
  for (const n of NAVA_VINAYAKAS.filter((x) => x.photo)) {
    assert.match(n.photo!.sourceUrl ?? "", /^https:\/\/commons\.wikimedia\.org\//, `${n.slug}: photograph has no Commons source`);
    assert.match(n.photo!.credit, /CC BY|CC0|public domain/i, `${n.slug}: credit does not name the licence`);
  }
  // A picture without a source says who supplied it.
  for (const { owner, img } of allPictures()) {
    if (img.sourceUrl === undefined) assert.match(img.credit, /supplied by/i, `${owner}: no source and no supplier`);
  }
});

test("Gaṇeśa has at least ten stotras, each with its own recitation to listen to", () => {
  const views = getStotraViews("ganesha", "en");
  assert.ok(views.length >= 10, `only ${views.length} Gaṇeśa stotras`);
  for (const s of views) {
    assert.ok(s.video, `${s.slug}: no video`);
    assert.match(s.video!.id, /^[A-Za-z0-9_-]{11}$/, `${s.slug}: “${s.video!.id}” is not a YouTube id`);
    assert.ok(s.video!.title.trim() && s.video!.channel.trim(), `${s.slug}: video has no title or channel`);
  }
  const ids = views.map((s) => s.video!.id);
  assert.equal(new Set(ids).size, ids.length, "two stotras share a video");
});

test("a devata's sections come daily, Vedic, stotras — and read in the same order as the pager", () => {
  for (const d of getDevatas("en")) {
    const groups = getStotraGroups(d.slug, "en");
    const present = groups.map((g) => g.group);
    assert.deepEqual(present, (["daily", "vedic", "stotra"] as const).filter((g) => present.includes(g)), `${d.slug}: sections out of order`);
    assert.deepEqual(
      groups.flatMap((g) => g.stotras.map((s) => s.slug)),
      getStotraViews(d.slug, "en").map((s) => s.slug),
      `${d.slug}: reading down the sections does not follow the stotras' positions`
    );
  }
  assert.deepEqual(getStotraGroups("ganesha", "en").map((g) => g.group), ["daily", "vedic", "stotra"]);
});

test("Gaṇeśa Chaturthi's band leads to a stotra that can be read", () => {
  for (const l of LOCALES) {
    const g = getDevata("ganesha", l)!;
    assert.ok(g.festival, "Gaṇeśa has no festival band");
    assert.ok(g.festival!.name.trim() && g.festival!.when.trim() && g.festival!.text.trim(), `festival band blank in ${l}`);
    assert.equal(g.festival!.stotra?.href, "/stutis/ganesha/ganapati-atharvashirsha");
  }
});

test("the Nava Vinayakas are nine, south to north, each described in every language", () => {
  assert.equal(NAVA_VINAYAKAS.length, 9);
  assert.equal(NAVA_VINAYAKAS[0].slug, "madhur", "the list starts in the south, at Madhur");
  assert.equal(NAVA_VINAYAKAS[8].slug, "gokarna", "the list ends in the north, at Gokarna");
  assert.equal(new Set(NAVA_VINAYAKAS.map((n) => n.slug)).size, 9, "a temple is listed twice");
  for (const n of NAVA_VINAYAKAS) {
    assert.ok(KANNADA.test(n.nameLocal) && !LATIN.test(n.nameLocal), `${n.slug}: its own name is not in Kannada`);
    for (const l of LOCALES) {
      for (const [field, text] of Object.entries({ name: n.name, short: n.short, place: n.place, text: n.text })) {
        assert.ok(text[l]?.trim(), `${n.slug}: no ${l} ${field}`);
      }
    }
  }
});

test("devatas still being entered list only stotras that cannot be read yet", () => {
  const readable = new Set(stotraSlugs());
  const planned = getPlannedDevatas("en");
  assert.ok(planned.length > 0);
  for (const g of planned) {
    assert.equal(g.devata.status, "planned");
    for (const s of g.stotras) assert.ok(!readable.has(s.slug), `${s.slug} is readable but listed as coming`);
  }
});

test("the storage rows cite the site's own editorial source for every translation", () => {
  const rows = allStotraRows();
  const verses = stotraSlugs().reduce((n, s) => n + getStotra(s)!.verses.length, 0);
  assert.equal(rows.verses.length, verses);
  assert.equal(rows.translations.length, verses * LOCALES.length);
  assert.ok(rows.translations.every((t) => t.source_id === "site-editorial"));
  assert.ok(rows.verses.every((v) => v.citation_status === "legacy_uncited"), "nothing may present itself as cited");
});

test("every stotra route names the devata the stotra belongs to", () => {
  for (const p of getStotraParams()) assert.equal(getStotra(p.stotra)!.devata, p.devata);
});
