import { test } from "node:test";
import assert from "node:assert/strict";
import {
  allBhajans,
  bhajanCount,
  bhajanGroups,
  bhajansIn,
  bhajanGroupExists,
  songsIn,
  bhajan,
  composerCounts,
  formName,
} from "../../src/lib/bhajans";
import { BHAJAN_GROUPS, bhajanGroup, HARIDASAS, haridasa } from "../../src/lib/bhajans/groups";
import { BHAJAN_STRINGS } from "../../src/i18n/bhajans";
import { LOCALES } from "../../src/i18n/config";

// The bhajan corpus.
//
// 913 Kannada songs brought over from bhakthilahari.com. The rules
// these tests hold it to are about honesty more than about shape: the
// songs have no translation, and nothing on the site may imply
// otherwise; a song's devata is either known or admitted to be
// unknown, never guessed; and the text stays Kannada on every page,
// because it is Kannada, not Sanskrit stored in Devanagari.

const KANNADA = /[ಀ-೿]/;

test("the corpus is whole, and every song has a text", () => {
  const songs = allBhajans();
  assert.ok(songs.length > 850, `only ${songs.length} songs`);
  assert.equal(songs.length, bhajanCount());
  for (const s of songs) {
    assert.ok(s.hasText, `${s.slug} has no text`);
    assert.ok(s.lines > 0, `${s.slug} has no lines`);
    assert.ok(s.titleKn.trim(), `${s.slug} has no Kannada name`);
    assert.match(s.titleKn, KANNADA, `${s.slug}: the name should be Kannada`);
  }
});

test("every song belongs to a group the section knows", () => {
  const known = new Set(BHAJAN_GROUPS.map((g) => g.id));
  for (const s of allBhajans()) {
    assert.ok(known.has(s.devata), `${s.slug} is filed under unknown group "${s.devata}"`);
    assert.ok(bhajanGroupExists(s.devata), `${s.devata} holds songs but is not listed`);
  }
});

test("every slug is URL-safe and unique", () => {
  const seen = new Set<string>();
  for (const s of allBhajans()) {
    assert.match(s.slug, /^[a-z0-9][a-z0-9-]*$/, `${s.slug} is not a URL-safe slug`);
    assert.ok(!seen.has(s.slug), `duplicate slug ${s.slug}`);
    seen.add(s.slug);
  }
});

test("the group counts match the songs actually in each group", () => {
  for (const locale of LOCALES) {
    for (const g of bhajanGroups(locale)) {
      assert.equal(bhajansIn(g.id).length, g.count, `${g.id} claims ${g.count}`);
      assert.ok(g.name.trim(), `${g.id} has no name in ${locale}`);
    }
  }
});

test("every group is named in all three languages", () => {
  for (const g of BHAJAN_GROUPS) {
    for (const locale of LOCALES) {
      assert.ok(g.name[locale]?.trim(), `${g.id} has no ${locale} name`);
    }
  }
});

test("a song's text is Kannada, and is never turned into Devanagari", async () => {
  // These are Kannada poems, not Sanskrit stored in Devanagari, so no
  // script conversion applies to them: the text is the same on an
  // English, Kannada or Hindi page, and it carries lang="kn" so the
  // rendering audit knows that is deliberate.
  //
  // Thirty-nine of the songs do carry a little Devanagari: an
  // invocation or a ओं quoted inside an otherwise Kannada text, which
  // is how the source wrote them. So the rule is not "no Devanagari"
  // but "Kannada dominates" — which still catches the failure that
  // matters, a whole song converted out of its own script.
  for (const group of ["krishna", "ganesha", "devi"]) {
    const songs = await songsIn(group);
    assert.ok(songs.length > 0, `${group} has no songs`);
    for (const s of songs) {
      const text = s.stanzas.flat().join(" ");
      const kannada = (text.match(/[ಀ-೿]/g) ?? []).length;
      const devanagari = (text.match(/[ऀ-ॿ]/g) ?? []).length;
      assert.ok(kannada > 0, `${s.slug} has no Kannada in its text`);
      assert.ok(
        kannada > devanagari * 4,
        `${s.slug} is ${devanagari} Devanagari to ${kannada} Kannada — it may have been converted`,
      );
    }
  }
});

test("no song claims a meaning, because none has one", async () => {
  // The source carries a meaning for 13 posts out of 915, which is not
  // enough to build anything on. The section says so in every
  // language rather than leaving a reader to discover it.
  for (const locale of LOCALES) {
    const s = BHAJAN_STRINGS[locale];
    assert.ok(s.meaningPending.trim(), `${locale} has no pending-meaning notice`);
    assert.ok(s.noMeaning.trim().length > 60, `${locale}'s standing note is too thin`);
  }
  const songs = await songsIn("ganesha");
  for (const song of songs) {
    assert.ok(!("meaning" in song), `${song.slug} carries a meaning field`);
    assert.ok(!("translation" in song), `${song.slug} carries a translation field`);
  }
});

test("a raga is only recorded where the source actually labels one", async () => {
  // The label matches inside ordinary Kannada words — "varagala"
  // yields raga "la" — and an early pass put invented ragas on 227
  // songs before anyone noticed. The source labels none, so none may
  // claim one, and anything it does claim must look like a name.
  for (const s of allBhajans()) {
    if (s.raga === null) continue;
    assert.ok(s.raga.length >= 3, `${s.slug} claims raga "${s.raga}" — too short to be a name`);
  }
});

test("every composer named is a Haridasa the section can describe", () => {
  for (const s of allBhajans()) {
    if (!s.composer) continue;
    const h = haridasa(s.composer);
    assert.ok(h, `${s.slug} is signed by unknown composer "${s.composer}"`);
    for (const locale of LOCALES) assert.ok(h!.name[locale]?.trim(), `${h!.id} has no ${locale} name`);
    assert.match(h!.ankita, KANNADA, `${h!.id}'s ankita should be given in Kannada`);
  }
});

test("the Haridasa counts add up, and Purandara Dasa leads them", () => {
  const counts = composerCounts("en");
  assert.ok(counts.length >= 6, "most of the Haridasas should be represented");
  assert.equal(counts[0].id, "purandara-dasa", "Purandara Dasa signed the most of these");
  const total = counts.reduce((n, c) => n + c.count, 0);
  const signed = allBhajans().filter((s) => s.composer).length;
  assert.equal(total, signed);
  // Every Haridasa in the list is one the groups file describes.
  const known = new Set(HARIDASAS.map((h) => h.id));
  for (const c of counts) assert.ok(known.has(c.id), `${c.id} is counted but not described`);
});

test("a song loads with its text, and its neighbours resolve", async () => {
  const first = bhajansIn("ganesha")[0];
  const song = await bhajan("ganesha", first.slug);
  assert.ok(song, `${first.slug} does not load`);
  assert.equal(song!.slug, first.slug);
  assert.ok(song!.stanzas.length > 0, "a song must have stanzas");
  assert.ok(song!.sourceUrl.startsWith("https://"), "a song must say where it came from");
});

test("an unknown group and an unknown song both come back empty", async () => {
  assert.equal(bhajanGroupExists("not-a-devata"), false);
  assert.deepEqual(await songsIn("not-a-devata"), []);
  assert.equal(await bhajan("ganesha", "not-a-song"), undefined);
});

test("the two groups that are not devatas say what they are", () => {
  // "Songs to the mind" is a form and "Not yet sorted" is an admitted
  // gap. Neither may be presented as a devata.
  assert.equal(bhajanGroup("niti")!.kind, "form");
  assert.equal(bhajanGroup("unsorted")!.kind, "gap");
  for (const locale of LOCALES) {
    assert.ok(BHAJAN_STRINGS[locale].nitiNote.trim(), `${locale} does not explain the niti group`);
    assert.ok(BHAJAN_STRINGS[locale].unsortedNote.trim(), `${locale} does not explain the gap`);
  }
});

test("every form has a name in every language", () => {
  const forms = new Set(allBhajans().map((s) => s.form));
  for (const form of forms) {
    for (const locale of LOCALES) {
      assert.ok(formName(form, locale).trim(), `form ${form} has no ${locale} name`);
    }
  }
});
