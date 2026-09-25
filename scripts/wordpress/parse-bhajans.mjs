// Turn a bhakthilahari.com harvest into the shape this site reads.
//
//   node scripts/wordpress/fetch.mjs https://bhakthilahari.com
//   node scripts/wordpress/parse-bhajans.mjs            # writes the parse
//   node scripts/wordpress/parse-bhajans.mjs --report   # says what it found
//
// Every post on that site is built the same way, and the regularity is
// what makes this possible at all:
//
//   1. a picture
//   2. the song in Kannada, one <p> per stanza, <br> between lines
//   3. a line reading "Lyrics in English"
//   4. the same song transliterated, stanza for stanza
//   5. a YouTube recitation
//
// What crosses over and what does not:
//
//   - The text crosses, both halves. The site already shows a text in
//     the reader's script and a transliteration only on English pages,
//     which is exactly the shape this arrives in.
//   - The video crosses as a YouTube id. StotraVideo loads nothing
//     from YouTube until the reader presses it.
//   - The pictures do NOT cross. There are 905 of them, hosted on that
//     site, and none carries a licence or an author. This site's rule
//     is that every picture names its licence and its source, so these
//     would have to be re-sourced one by one. The devata pictures the
//     site already owns stand in their place.
//   - No meaning crosses, because there is almost none to take: 13
//     posts of 915 mention one. These songs arrive as text without
//     translation, and the section has to say so in plain words.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { classify } from "./deities.mjs";

const IN = "corpus/wordpress/bhakthilahari.com/posts.json";
const OUT = "corpus/wordpress/bhajans.json";

/**
 * The owner's own category on a post, where it names a devata. The
 * three that name a form instead — dasara padagalu, ugabhoga,
 * vachanagalu — are deliberately absent: they say what a text is, not
 * who it is addressed to.
 */
const CATEGORY_DEVATA = {
  274592: "krishna",
  1095782: "vishnu", // Narayana
  1828656: "ganapati",
  1238872: "raghavendra",
  1479443: "anjaneya",
  468535: "shiva",
  781287: "lakshmi",
  406026: "durga",
  18049792: "saraswati", // Sharade
  5561432: "venkateshwara",
  9112433: "vitthala",
  2922229: "venkateshwara", // Srinivasa
  787434370: "narasimha",
  782452171: "narasimha",
  407724: "rama",
  8059489: "subramanya",
  6880283: "surya",
};

const KN = /[ಀ-೿]/;
const KN_G = /[ಀ-೿]/g;
const LA_G = /[A-Za-z]/g;

/**
 * The ankita — the signature a Haridasa works into the last lines of
 * every song he composes. It is not a byline added later: it is inside
 * the text, which makes it the one attribution here that can be
 * checked rather than believed. Each pattern matches the signature in
 * both scripts.
 */
const ANKITA = [
  { id: "purandara-dasa", kn: "ಪುರಂದರ ವಿಠಲ", re: /ಪುರಂದರ\s*ವಿ?ಠ್?ಠ?ಲ|purandara\s*vi[tṭ]+h?ala/i },
  { id: "kanaka-dasa", kn: "ಕಾಗಿನೆಲೆ ಆದಿಕೇಶವ", re: /ಕಾಗಿನೆಲೆ|ಆದಿಕೇಶವ|kaginele|adikeshava/i },
  { id: "vijaya-dasa", kn: "ವಿಜಯ ವಿಠಲ", re: /ವಿಜಯ\s*ವಿ?ಠ್?ಠ?ಲ|vijaya\s*vi[tṭ]+h?ala/i },
  { id: "jagannatha-dasa", kn: "ಜಗನ್ನಾಥ ವಿಠಲ", re: /ಜಗನ್ನಾಥ\s*ವಿ?ಠ್?ಠ?ಲ|jagannatha\s*vi[tṭ]+h?ala/i },
  { id: "gopala-dasa", kn: "ಗೋಪಾಲ ವಿಠಲ", re: /ಗೋಪಾಲ\s*ವಿ?ಠ್?ಠ?ಲ|gopala\s*vi[tṭ]+h?ala/i },
  { id: "vadiraja", kn: "ಹಯವದನ", re: /ಹಯವದನ|hayavadana/i },
  { id: "sripadaraja", kn: "ರಂಗವಿಠಲ", re: /ರಂಗವಿಠಲ|ranga\s*vi[tṭ]+h?ala/i },
  { id: "vyasaraja", kn: "ಸಿರಿಕೃಷ್ಣ", re: /ಸಿರಿಕೃಷ್ಣ|sirikrishna/i },
  { id: "basavanna", kn: "ಕೂಡಲಸಂಗಮದೇವ", re: /ಕೂಡಲಸಂಗಮ|kudalasangama/i },
];

/** What kind of text this is — a song, or something said rather than sung. */
const FORM = [
  { id: "ugabhoga", re: /ಉಗಾಭೋಗ|ugabhoga|ugaabhoga/i },
  { id: "suladi", re: /ಸುಳಾದಿ|suladi|sulaadi/i },
  { id: "vachana", re: /ವಚನ|vachana/i },
  { id: "ashtottara", re: /ಅಷ್ಟೋತ್ತರ|ashtottara|ನಾಮಾವಳಿ|namavali/i },
  { id: "stotra", re: /ಸ್ತೋತ್ರ|stotra|ಕವಚ|kavacha|ಸಹಸ್ರನಾಮ|sahasranama/i },
  { id: "suprabhata", re: /ಸುಪ್ರಭಾತ|suprabhata/i },
  // A nīti pada is addressed to the singer's own mind rather than to
  // any devata — "ಎಲೆ ಮನವೇ", O mind. Purandara Dāsa wrote a great many,
  // and they are the reason a third of this corpus names no deity: it
  // is not a gap in the classifier, it is what the songs are.
  { id: "niti", re: /ಮನವೆ|ಮನವಾ|ಮನುಜ|ಮನಸು|manave|manava|manuja/i },
];

const decode = (s) =>
  s
    .replace(/&#8217;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));

/** Split a post body into the blocks it was written as. */
function blocksOf(html) {
  return html
    .split(/(?=<(?:p|div|figure|iframe|h[1-6]|ul|ol|blockquote)[\s>])/i)
    .map((raw) => {
      const lines = raw
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/(p|div|h[1-6]|li|blockquote)>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .split("\n")
        .map((l) => decode(l).replace(/\s+/g, " ").trim())
        .filter(Boolean);
      const text = lines.join(" ");
      return {
        raw,
        lines,
        text,
        isVideo: /<iframe/i.test(raw),
        isImage: /<img/i.test(raw),
        kn: (text.match(KN_G) || []).length,
        la: (text.match(LA_G) || []).length,
      };
    })
    .filter((b) => b.lines.length || b.isVideo || b.isImage);
}

/** Every YouTube id in the body, in the order they appear. */
function videosOf(html) {
  const ids = [];
  for (const m of html.matchAll(/<iframe[^>]+src="([^"]+)"/gi)) {
    const src = m[1];
    const id =
      src.match(/(?:youtube(?:-nocookie)?\.com\/(?:embed|v)\/|youtu\.be\/)([A-Za-z0-9_-]{11})/)?.[1] ??
      src.match(/[?&]v=([A-Za-z0-9_-]{11})/)?.[1];
    if (id && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

/**
 * The title is written "ಕನ್ನಡ ಹೆಸರು / English transliteration", but
 * seventy-nine of them have a third part or none at all — a form name
 * carried in front ("ಉಗಾಭೋಗ / ..."), or no transliteration. Take the
 * last Kannada part and the last Latin part rather than parts 1 and 2.
 */
function titleOf(raw) {
  const full = decode(raw).replace(/\s+/g, " ").trim();
  const parts = full.split(/\s*[\/|]\s*/).filter(Boolean);
  const knParts = parts.filter((p) => KN.test(p));
  const laParts = parts.filter((p) => /[A-Za-z]{3}/.test(p) && !KN.test(p));
  return {
    full,
    kn: knParts[knParts.length - 1] ?? "",
    en: (laParts[laParts.length - 1] ?? "").replace(/^[-–—\s]+/, "").trim(),
  };
}

/** A URL-safe slug from the transliterated name. */
function slugOf(en, kn, id) {
  const base = (en || kn)
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 72)
    .replace(/-+$/, "");
  return base || `song-${id}`;
}

function parse(post) {
  const html = post.content.rendered;
  const title = titleOf(post.title.rendered);
  const bs = blocksOf(html);

  // Where the transliteration is announced. 862 of 915 say so outright.
  const markerAt = bs.findIndex(
    (b) => b.text.length < 70 && /lyrics?\s*(in|-)?\s*(english|engish|englisha)/i.test(b.text),
  );

  const isText = (b) => !b.isVideo && !b.isImage && b.lines.length > 0;
  const body = bs.filter(isText);

  let knBlocks;
  let laBlocks;
  if (markerAt !== -1) {
    const before = bs.slice(0, markerAt).filter(isText);
    const after = bs.slice(markerAt + 1).filter(isText);
    knBlocks = before.filter((b) => b.kn > b.la);
    laBlocks = after.filter((b) => b.la > b.kn);
  } else {
    // No marker: sort by script alone.
    knBlocks = body.filter((b) => b.kn > b.la);
    laBlocks = body.filter((b) => b.la > b.kn && b.la > 25);
  }

  // Musical setting, where the post gives it.
  const flat = body.map((b) => b.text).join(" · ");
  // Raga and tala are only taken when the post labels them outright.
  // Without the separator the label matches inside ordinary words --
  // "varagala" yields raga "la", "ವರಗಳ" yields tala "ದಿ" -- and a
  // song was shown a made-up raga on the strength of it. Require a
  // word boundary before the label and a colon or dash after it.
  const labelled = (label) =>
    flat.match(
      new RegExp(`(?:^|[\s·|(\[])(?:${label})\s*[:\-–]\s*([A-Za-zಀ-೿][A-Za-zಀ-೿\s]{2,28}?)(?=[\s·|)\]]|$)`, "i"),
    )?.[1]?.trim() ?? null;
  const raga = labelled("ರಾಗಂ?|raga|rāga");
  const tala = labelled("ತಾಳಂ?|tala|tāla");

  const signed = ANKITA.find((a) => a.re.test(flat));
  const form = FORM.find((f) => f.re.test(title.full))?.id ?? (signed ? "pada" : "song");

  const stanzasKn = knBlocks.map((b) => b.lines);
  const stanzasLa = laBlocks.map((b) => b.lines);

  // Who the song is addressed to, scored over title and text.
  const hints = (post.categories ?? []).map((c) => CATEGORY_DEVATA[c]).filter(Boolean);
  const verdict = classify({
    title: title.full,
    body: knBlocks.concat(laBlocks).map((b) => b.text).join(" · "),
    categoryHints: hints,
  });

  return {
    id: post.id,
    slug: slugOf(title.en, title.kn, post.id),
    sourceUrl: post.link,
    date: post.date.slice(0, 10),
    title,
    form,
    devata: verdict.devata,
    devataFrom: !verdict.devata ? null : hints.length ? "category" : "text",
    devataRanked: verdict.ranked,
    ankita: signed ? { id: signed.id, kn: signed.kn } : null,
    raga,
    tala,
    stanzasKn,
    stanzasLa,
    lineCountKn: stanzasKn.reduce((n, s) => n + s.length, 0),
    lineCountLa: stanzasLa.reduce((n, s) => n + s.length, 0),
    videos: videosOf(html),
    // Where the two halves do not line up stanza for stanza, the song
    // is flagged rather than silently mis-paired. The reader can show
    // both halves whole; only a verse-by-verse pairing needs this.
    aligned: stanzasKn.length > 0 && stanzasKn.length === stanzasLa.length,
  };
}

// ── run ────────────────────────────────────────────────────────────
const posts = JSON.parse(readFileSync(IN, "utf8"));
const songs = posts.map(parse);

// A slug has to be unique: it is the URL.
const used = new Map();
for (const s of songs) {
  if (!used.has(s.slug)) used.set(s.slug, 1);
  else {
    const n = used.get(s.slug) + 1;
    used.set(s.slug, n);
    s.slug = `${s.slug}-${n}`;
  }
}

if (process.argv.includes("--report")) {
  const n = songs.length;
  const pct = (x) => `${x} (${Math.round((x / n) * 100)}%)`;
  console.log(`songs parsed: ${n}\n`);
  console.log(`  with a Kannada text      ${pct(songs.filter((s) => s.stanzasKn.length).length)}`);
  console.log(`  with a transliteration   ${pct(songs.filter((s) => s.stanzasLa.length).length)}`);
  console.log(`  halves aligned           ${pct(songs.filter((s) => s.aligned).length)}`);
  console.log(`  with a recitation        ${pct(songs.filter((s) => s.videos.length).length)}`);
  console.log(`  signed by its composer   ${pct(songs.filter((s) => s.ankita).length)}`);
  console.log(`  with a raga named        ${pct(songs.filter((s) => s.raga).length)}`);
  console.log(`  an English name          ${pct(songs.filter((s) => s.title.en).length)}`);

  const by = (key) => {
    const m = {};
    for (const s of songs) {
      const k = typeof key === "function" ? key(s) : s[key];
      if (k) m[k] = (m[k] ?? 0) + 1;
    }
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  };
  console.log("\nby composer:");
  for (const [k, c] of by((s) => s.ankita?.id)) console.log(`  ${String(c).padStart(4)} ${k}`);
  console.log("\nby form:");
  for (const [k, c] of by("form")) console.log(`  ${String(c).padStart(4)} ${k}`);

  console.log("\nby devata:");
  for (const [k, c] of by("devata")) console.log(`  ${String(c).padStart(4)} ${k}`);
  const unsorted = songs.filter((s) => !s.devata);
  console.log(`  ${String(unsorted.length).padStart(4)} (not settled)`);
  console.log(`\nsettled from the owner's category: ${songs.filter((s) => s.devataFrom === "category").length}`);
  console.log(`settled from the text itself:      ${songs.filter((s) => s.devataFrom === "text").length}`);

  const broken = songs.filter((s) => !s.stanzasKn.length);
  console.log(`\nno Kannada text at all: ${broken.length}`);
  broken.slice(0, 10).forEach((s) => console.log(`   ${s.id}  ${s.title.full.slice(0, 70)}`));
} else {
  mkdirSync(path.dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(songs, null, 2), "utf8");
  console.log(`${songs.length} songs written to ${OUT}`);
}
