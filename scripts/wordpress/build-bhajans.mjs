// Build the bhajan corpus the site reads, from the parsed harvest.
//
//   node scripts/wordpress/fetch.mjs https://bhakthilahari.com
//   node scripts/wordpress/parse-bhajans.mjs
//   node scripts/wordpress/build-bhajans.mjs
//
// Same arrangement as the Rigveda, and for the same reason: nine
// hundred songs are too many to sit in src/lib/seed/ as TypeScript
// arrays, so they are built and committed as data and read through
// src/lib/bhajans/.
//
//   spine.json          every song without its text — what the index
//                       and the devata pages list. Imported directly.
//   texts/<devata>.json the songs themselves. One devata's worth is
//                       loaded when a song is opened, never all of it.
//
// A song is filed under the devata it addresses. Where that could not
// be settled from the owner's own category or from the text, it is
// filed under "unsorted" and the page says so, because a wrong devata
// is worse than an admitted gap.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const IN = "corpus/wordpress/bhajans.json";
const OUT = "src/lib/bhajans/data";

const songs = JSON.parse(readFileSync(IN, "utf8"));

// ── the devatas this corpus actually addresses, in the order the
//    stutis section already uses where they overlap ──────────────────
// Where a devata already has a slug in seed/devatas.ts, the bhajans
// use that one rather than inventing a second name for the same god.
const CANONICAL = { ganapati: "ganesha", durga: "devi" };
const canon = (id) => CANONICAL[id] ?? id;

const ORDER = [
  "ganesha", "krishna", "vitthala", "rama", "venkateshwara", "narasimha",
  "vishnu", "anjaneya", "shiva", "devi", "lakshmi", "saraswati",
  "subramanya", "ayyappa", "raghavendra", "madhva", "dattatreya",
  "hayagriva", "tulasi", "surya", "shani",
];

const UNSORTED = "unsorted";
const NITI = "niti";

/**
 * A nīti pada turns away from the devata and addresses the singer's
 * own mind — ಎಲೆ ಮನವೇ, "O mind". Purandara Dāsa wrote a great many of
 * them, and they are a large part of why a third of this corpus names
 * no deity. Filing them as "unsorted" would be wrong twice over: it
 * would hide a real form, and it would call a deliberate choice a gap.
 */
const ADDRESSES_THE_MIND = /ಮನವೆ|ಮನವೇ|ಮನುಜ|ಎಲೆ ಮನ|ಮನವಾ|manave|manava|manuja/i;

function rank(id) {
  const i = ORDER.indexOf(id);
  return i === -1 ? ORDER.length : i;
}

// ── assemble ───────────────────────────────────────────────────────
const spine = [];
const texts = new Map();

for (const s of songs) {
  // Two posts of 915 carry no Kannada text at all. A song with no text
  // is not a song, so it does not cross over; the report names them.
  if (!s.stanzasKn.length) continue;

  const addressed = ADDRESSES_THE_MIND.test(
    [s.title.full, ...s.stanzasKn.flat(), ...s.stanzasLa.flat()].join(" "),
  );
  const devata = s.devata ? canon(s.devata) : addressed ? NITI : UNSORTED;

  spine.push({
    slug: s.slug,
    devata,
    form: s.form,
    composer: s.ankita?.id ?? null,
    titleKn: s.title.kn,
    titleEn: s.title.en,
    stanzas: s.stanzasKn.length,
    lines: s.lineCountKn,
    hasText: true,
    hasTransliteration: s.stanzasLa.length > 0,
    hasVideo: s.videos.length > 0,
    raga: s.raga,
  });

  if (!texts.has(devata)) texts.set(devata, []);
  texts.get(devata).push({
    slug: s.slug,
    titleKn: s.title.kn,
    titleEn: s.title.en,
    form: s.form,
    composer: s.ankita?.id ?? null,
    ankita: s.ankita?.kn ?? null,
    raga: s.raga,
    tala: s.tala,
    // The text as it is sung, stanza by stanza, line by line.
    stanzas: s.stanzasKn,
    // The transliteration, shown only on English pages. It is kept as
    // its own sequence rather than paired stanza-for-stanza, because
    // in 40% of these it genuinely is not parallel — the source often
    // abridges it. Claiming a pairing that is not there would be a lie
    // told in markup.
    transliteration: s.stanzasLa,
    aligned: s.aligned,
    video: s.videos[0] ?? null,
    videos: s.videos,
    sourceUrl: s.sourceUrl,
  });
}

spine.sort((a, b) => {
  const d = rank(a.devata) - rank(b.devata);
  if (d) return d;
  return (a.titleEn || a.titleKn).localeCompare(b.titleEn || b.titleKn, "en");
});

const counts = {};
for (const s of spine) counts[s.devata] = (counts[s.devata] ?? 0) + 1;

const tail = (id) => (id === UNSORTED ? 2 : id === NITI ? 1 : 0);
const groups = [...texts.keys()]
  .sort((a, b) => tail(a) - tail(b) || rank(a) - rank(b))
  .map((id) => ({ id, count: counts[id] }));

// ── write ──────────────────────────────────────────────────────────
rmSync(OUT, { recursive: true, force: true });
mkdirSync(path.join(OUT, "texts"), { recursive: true });

writeFileSync(
  path.join(OUT, "spine.json"),
  JSON.stringify({ groups, songs: spine }, null, 0),
  "utf8",
);
for (const [devata, list] of texts) {
  list.sort((a, b) => (a.titleEn || a.titleKn).localeCompare(b.titleEn || b.titleKn, "en"));
  writeFileSync(path.join(OUT, "texts", `${devata}.json`), JSON.stringify(list, null, 0), "utf8");
}

const kb = (p) => Math.round(readFileSync(p).length / 1024);
console.log(`${spine.length} songs built into ${groups.length} groups`);
console.log(`  spine.json  ${kb(path.join(OUT, "spine.json"))} KB`);
let biggest = 0;
for (const { id, count } of groups) {
  const size = kb(path.join(OUT, "texts", `${id}.json`));
  biggest = Math.max(biggest, size);
  console.log(`  ${id.padEnd(16)} ${String(count).padStart(4)} songs  ${String(size).padStart(4)} KB`);
}
console.log(`\nlargest file a page ever loads: ${biggest} KB`);
console.log(`with a recitation: ${spine.filter((s) => s.hasVideo).length}`);
console.log(`with a transliteration: ${spine.filter((s) => s.hasTransliteration).length}`);
