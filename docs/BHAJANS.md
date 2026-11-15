# The bhajans

What was brought over from bhakthilahari.com, how, and what was
deliberately left behind. Read this before changing anything under
`src/lib/bhajans/` or `src/app/bhajans/`.

## 1. The source

bhakthilahari.com is a WordPress site the owner of this site also
keeps. It describes itself as "slokas, devotional song lyrics and much
more useful information", and it holds 915 posts.

Nothing was installed on it and nothing on it changed. WordPress has
shipped its REST API in core since 4.7 (December 2016), so the whole
site is readable over plain GET requests at `/wp-json/wp/v2/`. The
harvester (`scripts/wordpress/fetch.mjs`) has exactly one function that
reaches the network and it sends GET and nothing else — the guarantee
is structural, not a promise in a comment.

```bash
node scripts/wordpress/fetch.mjs https://bhakthilahari.com --probe   # counts only
node scripts/wordpress/fetch.mjs https://bhakthilahari.com
node scripts/wordpress/parse-bhajans.mjs
node scripts/wordpress/build-bhajans.mjs
```

The harvest lands in `corpus/wordpress/`, which is git-ignored and
re-fetchable. What is committed is what the editorial layer makes of
it: `src/lib/bhajans/data/`.

## 2. What the posts are

Every post is built the same way, and that regularity is the only
reason an automatic import was possible at all:

1. a picture
2. the song in Kannada, one `<p>` per stanza, `<br>` between lines
3. a line reading "Lyrics in English" — 862 of 915 say exactly that
4. the same song transliterated
5. a YouTube recitation

The corpus is overwhelmingly **dasara padagalu** — the Haridasa
compositions of the 15th to 19th centuries — with ugabhogas, suladis,
a few Sanskrit stotras and ashtottaras, and a body of songs by later
or unnamed hands.

## 3. What crossed over, and what did not

**The text crossed**, both halves. 913 of the 915 posts yielded a
Kannada text; 897 also yielded a transliteration. Two posts had no
text at all and were left behind.

**The recitations crossed** as YouTube ids — 790 of them. They use the
existing `StotraVideo`, which loads nothing from YouTube until the
reader presses play.

**The source site's pictures did not cross.** There are 905 of them,
hosted there, and not one carries a licence or an author. This site's
rule is that every picture names its licence and its source, so none of
them was used. The section is illustrated instead from Wikimedia
Commons and from photographs the owner supplied — see §4a.

**No meaning crossed, because there is almost none to take.** Thirteen
posts of 915 mention a meaning or a translation. So these songs arrive
as *a complete text whose translation has not been written* — the same
claim the Rigveda section makes, and it gets the same plain words on
the front door and on every song page. This is the single most
important fact about the section. Do not let any part of it imply a
meaning exists.

**Raga and tala did not cross, because the source does not record
them.** An early pass appeared to find 227 ragas and 62 talas. Every
one was a false positive: the label matches inside ordinary Kannada
words, so `varagala` yielded raga `la` and a song was shown an invented
raga. The extractor now requires an explicit label and separator, and
finds none in the whole corpus. `tests/unit/bhajans.test.ts` pins this.

## 4. The arrangement

The songs are arranged **by the devata each one addresses**, which the
owner chose. That is the harder arrangement, because only about 200 of
the 915 name a deity in their title and the site's own categories sort
only 151 — 764 posts sit in "Uncategorized".

So the devata is scored over the whole song, using a lexicon of the
names each devata actually goes by (`scripts/wordpress/deities.mjs`).
Gaṇeśa is far more often ಏಕದಂತ or ಲಂಬೋದರ or ಬೆನಕ than ಗಣೇಶ, and a
lexicon of plain names alone would find almost nothing.

Two traps the lexicon exists to avoid:

- **The ankita.** Four Haridasas sign with `...ವಿಠಲ`. Scored naively,
  all five hundred of their songs would be filed under Viṭṭhala. The
  signature is stripped before scoring.
- **Shared epithets.** ಗೋವಿಂದ belongs to Krishna and to Venkaṭeśa
  alike. Shared names carry half weight so an unshared name decides.

A devata must win by a clear margin or the song is not filed under one.

**How well it works:** 625 of 913 settled. Where the owner had also
categorised the post by hand, the text's own verdict agreed **138 times
out of 141** — and the three exceptions are cases where the classifier
declined to settle rather than settling wrongly.

**The two groups that are not devatas:**

- `niti` — a nīti pada turns away from the devata and addresses the
  singer's own mind. Purandara Dāsa wrote a great many. Filing them
  under a god would misread them.
- `bhakti` — "Bhakti padagalu", 258 songs of devotion that name no
  single form of God. This group was first called "Not yet sorted",
  which was wrong twice: a Haridasa very often sings to Hari plainly or
  to his own guru, so naming no single face is a real thing for such a
  song to be, not a defect — and naming a group after what it lacks
  tells a reader nothing. A unit test now rejects any group named
  "unsorted", "unknown", "misc" or "other". The sorting continues
  underneath; the name does not depend on it finishing.

## 4a. Pictures

Every group that can carry a picture does, because a wall of names is
what made the first version read as a database dump.

- **Wikimedia Commons**, via `scripts/wordpress/fetch-devata-images.mjs`,
  which asks the API for each file's real licence and author and
  refuses anything non-free. Several are Raja Ravi Varma paintings,
  long out of copyright — a card is 210px wide and a dark temple
  carving simply does not read at that size. The first pass used
  carvings and one of them turned out to be a photograph of a
  **signboard outside** the Pandharpur temple rather than Vitthala.
  Look at what you downloaded.
- **The site's owner** supplied the photographs for Ganesha,
  Venkateshwara, Devi and Lakshmi. Credited to him with no source link,
  exactly as `seed/stuti-images.ts` already does.
- **Pinterest is not a source.** The images there are other people's
  photographs, and several of the files supplied carry explicit
  copyright notices or photographer watermarks burnt into them. Those
  were not used. A picture goes in only under a free licence or as the
  owner's own.
- A group with no picture shows its name in Kannada on a designed
  plate (`.bh-plate`). That is a normal state, not a hole to fill with
  something approximate — and never with a picture of a different
  devata.

## 5. Things that are true and easy to get wrong

- **A song is Kannada, not Sanskrit stored in Devanagari.** Nothing
  here goes through `scriptFor`. The text is identical on an English,
  Kannada or Hindi page and carries `lang="kn"` so the rendering audit
  knows that is deliberate.
- **Thirty-nine songs carry a little Devanagari** — an invocation or a
  ॐ quoted inside an otherwise Kannada song, as the source wrote them.
  The test asserts that Kannada dominates, not that Devanagari is
  absent.
- **The transliteration is not paired stanza-for-stanza.** In four
  songs out of ten the source's transliteration is abridged relative to
  the Kannada, so the two halves are kept as separate sequences.
  Interleaving them would assert a correspondence the source does not
  have.
- **The stutis show a transliteration only on English pages; the
  bhajans do not follow that rule**, and the departure is deliberate.
  There, an English reader cannot read the Devanagari. Here it is the
  *Kannada* reader who does not need the transliteration, and the
  English and Hindi reader who cannot read the script at all — so it
  opens by default everywhere except Kannada.
- **Load one group, never twenty-two.** `spine.json` is imported
  directly and holds every song without its text. The texts are loaded
  one group at a time through `songsIn()`. No page may import
  `data/texts/*.json` itself.

## 6. Finding a song

Readers found the section hard to search: 913 songs filed under 22
groups, and a reader rarely knows which devata a song is filed under.
What they know is a line, usually the first and sometimes one from the
middle, or the Haridasa who sang it. They type it in Kannada, or in
roman letters spelled their own way. Added 2026-11-14.

- **One box, four filters**, at the top of `/bhajans`.
  - The box searches titles, every line of every song, and the
    composers' names and signatures.
  - The filters are devata, Haridasa (with "Not signed"), form, and
    "with a recitation".
  - Each filter option shows how many songs it would leave, given the
    rest of the search. An option that would leave none is disabled.
  - Each group page carries the same box, preset to its group.
  - Each Haridasa on the front page links to his songs.
- **Spelling does not have to be exact.** `src/lib/bhajans/fold.ts`
  reduces the song and the query to one key, so ಕೃಷ್ಣ, krishna, krushna
  and kṛṣṇa match. It works in four steps:
  1. Kannada becomes IAST by rule, writing the short e and o long first.
  2. Diacritics, aspirates and sibilants are levelled, and doubled
     letters collapse.
  3. The anusvāra is written n before a consonant.
  4. The vowel ṛ, which readers write ri or ru, is written r.

  `tests/unit/bhajan-search.test.ts` holds the pairs.
- **Ranking**:
  1. a title beginning with the query
  2. a title containing it
  3. the first line
  4. a later line, whose text the result card shows under "Found in the line"
  5. the composer
  6. words spread across the song

  With no query, songs are listed in Kannada order.
- **It runs on the server, inside the results page.** There is no
  search endpoint, because the site has no public data API
  (`docs/SECURITY.md`).
  - Every search is an address (`/bhajans?q=…&composer=…&listen=1`)
    that can be kept or sent, and it works without JavaScript.
  - The client piece (`components/bhajan/BhajanFinder.tsx`) only writes
    the address as the reader types.
  - A results page is `noindex`, with `/bhajans` as its canonical.
- **This is the one reader of every group's texts.** A line from the
  middle of a song can only be found by reading the song. The index is
  built once per server process, on the first search, in about half a
  second; after that a search takes a few milliseconds. Pages still
  never import a texts file.

## 7. Still to do

- Meanings. 913 songs have none, and that is the section's largest gap.
- The 258 unsorted songs could be sorted by hand, or by extending the
  lexicon in `deities.mjs`.
- Pictures, if freely licensed ones can be found for the devatas that
  have none on this site.
- The four bhajans that predate this corpus — Vaishnava Jana To,
  Raghupati Raghava, Achyutam Keshavam, Om Jai Jagadisha Hare — are
  summaries with no text, and are listed separately under "Also sung".
  They are not Kannada and not Haridasa, so they were not folded in.
