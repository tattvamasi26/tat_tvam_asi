import { test } from "node:test";
import assert from "node:assert/strict";
import { fold } from "../../src/lib/bhajans/fold";
import { isActive, readQuery, searchBhajans } from "../../src/lib/bhajans/search";
import { allBhajans } from "../../src/lib/bhajans";

// Finding a song. A reader types Kannada however they type it, so the
// test is mostly pairs: the song's own words against the spellings
// people actually use, which must all reach the same key.

test("every common spelling folds to the song's own key", () => {
  const pairs: [string, string][] = [
    ["ಕೃಷ್ಣ", "krishna"],
    ["ಕೃಷ್ಣ", "krushna"],
    ["ಕೃಷ್ಣ", "kṛṣṇa"],
    ["ರಂಗ ಬಾರೋ", "ranga baro"],
    ["ಪುರಂದರವಿಠಲ", "purandara vittala"],
    ["ಪುರಂದರವಿಠಲ", "purandaravithala"],
    ["ಸಂಭ್ರಮ", "sambhrama"],
    ["ಎಲ್ಲಿ ಹೋದೆ", "elli hode"],
    ["ಶ್ರೀನಿವಾಸ", "shreenivasa"],
    ["ಭಾಗ್ಯದ ಲಕ್ಷ್ಮಿ ಬಾರಮ್ಮ", "bhagyada lakshmi baaramma"],
    ["ಗೋವಿಂದ", "govinda"],
    ["ವೆಂಕಟರಮಣ", "venkataramana"],
    ["ಕೊಳಲು", "kolalu"],
  ];
  for (const [kn, typed] of pairs) {
    assert.equal(fold(kn).replace(/ /g, ""), fold(typed).replace(/ /g, ""), `${kn} and ${typed}`);
  }
  assert.equal(fold("ಕೃಷ್ಣ"), fold("कृष्ण"), "Devanagari folds the same as Kannada");
  assert.equal(fold("  !! "), "", "punctuation alone folds to nothing");
});

test("a title finds its song first, in either script", async () => {
  const roman = await searchBhajans({ q: "bhagyada lakshmi" }, "en");
  assert.equal(roman.hits[0].row.titleKn, "ಭಾಗ್ಯದ ಲಕ್ಷ್ಮಿ ಬಾರಮ್ಮ");

  const a = await searchBhajans({ q: "krushna" }, "en");
  const b = await searchBhajans({ q: "ಕೃಷ್ಣ" }, "en");
  assert.ok(a.total > 50);
  assert.deepEqual(
    a.hits.map((h) => h.row.slug),
    b.hits.map((h) => h.row.slug),
    "krushna and ಕೃಷ್ಣ find the same songs",
  );
});

test("a line from the middle of a song finds it, and says which line", async () => {
  const r = await searchBhajans({ q: "jagadoddharana" }, "en");
  const mid = r.hits.find((h) => h.line);
  assert.ok(mid, "no song was found by a line");
  assert.match(fold(mid!.line!), /jagadodarana/);
  assert.ok(r.hits[0].score > mid!.score, "a title match ranks above a line match");
});

test("filters narrow, and each option counts what it would leave", async () => {
  const all = await searchBhajans({}, "en");
  assert.equal(all.total, allBhajans().length);
  const devataSum = all.facets.devata.reduce((t, o) => t + o.count, 0);
  assert.equal(devataSum, all.total, "every song is under exactly one devata");
  const composerSum = all.facets.composer.reduce((t, o) => t + o.count, 0);
  assert.equal(composerSum, all.total, "every song is signed by one Haridasa or by none");

  const purandara = await searchBhajans({ composer: "purandara-dasa" }, "en");
  assert.equal(purandara.total, all.facets.composer.find((o) => o.value === "purandara-dasa")!.count);
  assert.ok(purandara.hits.every((h) => h.row.composer === "purandara-dasa"));

  const listen = await searchBhajans({ listen: true, devata: "krishna" }, "en");
  assert.ok(listen.hits.every((h) => h.row.hasVideo && h.row.devata === "krishna"));

  const unsigned = await searchBhajans({ composer: "none" }, "en");
  assert.ok(unsigned.total > 0 && unsigned.hits.every((h) => !h.row.composer));
});

test("a query from the address keeps only values that exist", () => {
  const q = readQuery({ q: "  ranga  ", devata: "nobody", composer: "purandara-dasa", form: "<script>", listen: "1" });
  assert.deepEqual(q, { q: "ranga", devata: undefined, composer: "purandara-dasa", form: undefined, listen: true });
  assert.equal(readQuery({ q: "x".repeat(500) }).q!.length, 120);
  assert.equal(isActive(readQuery({})), false);
  assert.equal(isActive(readQuery({ listen: "1" })), true);
});

test("a query of one letter browses rather than matching everything", async () => {
  const r = await searchBhajans({ q: "a" }, "en");
  assert.equal(r.key, "");
  assert.equal(r.total, allBhajans().length);
});
