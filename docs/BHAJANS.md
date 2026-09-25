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

**The pictures did not cross.** There are 905 of them, hosted on the
source site, and not one carries a licence or an author. This site's
rule is that every picture names its licence and its source, so these
would each have to be re-sourced. The section shows none rather than
show 905 whose provenance nobody can state.

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
- `unsorted` — 258 songs whose devata could not be settled. They are
  shown as unsorted and the page says so. A wrong devata is worse than
  an admitted gap.

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

## 6. Still to do

- Meanings. 913 songs have none, and that is the section's largest gap.
- The 258 unsorted songs could be sorted by hand, or by extending the
  lexicon in `deities.mjs`.
- Pictures, if freely licensed ones can be found for the devatas that
  have none on this site.
- The four bhajans that predate this corpus — Vaishnava Jana To,
  Raghupati Raghava, Achyutam Keshavam, Om Jai Jagadisha Hare — are
  summaries with no text, and are listed separately under "Also sung".
  They are not Kannada and not Haridasa, so they were not folded in.
