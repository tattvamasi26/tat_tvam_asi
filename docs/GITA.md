# The Gita's verses

How the verses of the Bhagavad Gita reach the site: which text, how it
is checked, and how to check the next chapter. Read this before
touching `src/lib/gita/` or `scripts/gita/`.

The section is **Geetha Rasa Dhara** (`/gita`). Its chapter write-ups
(`seed/gita-chapters.ts`) came first and carry no Sanskrit; the verses
are a separate, checked corpus.

## What the owner asked for

Every verse with its meaning, recitation and commentaries, as a
reader would find in GitaViśva (gitaviswa.vercel.app), built in this
site's own design and under its rules. The study of that app is in
`Project V/Gita Rasa Dhaara/GITAVISWA-TEARDOWN.md`. The work goes one
feature at a time; this file covers the first, the verses and their
translation.

## The edition: Besant & Bhagavan Das, 1905

*The Bhagavad-Gita, with Samskrit text, free translation into English,
a word-for-word translation, and an introduction on Samskrit grammar*,
by Annie Besant and Bhagavan Das, printed by Freeman & Co., Benares,
1905. Besant died in 1933 and Bhagavan Das in 1958, so the whole book
(Sanskrit, translation and gloss) is in the public domain in India.

- **Every page is on Sanskrit Wikisource**, transcribed and marked
  proofread, each with its scan and a revision id the site cites.
- **It numbers the Gita as the vulgate does**: 700 verses, with
  Arjuna's question that opens chapter 13 in some recensions omitted
  and footnoted. Both digital witnesses count that question as 13.1,
  so their 13.n+1 is this edition's 13.n.
- **It prints speaker lines inside its verses** where the dialogue
  turns ("…महीपते । अर्जुन उवाच । सेनयो…", 1.21). They are kept where
  the book sets them and styled apart.

Other texts were considered and set aside:

| Source | Why not the text |
|---|---|
| gita/gita (Gita Initiative, Unlicense) | A clean digital text with no named printed edition behind it. Used as a witness. |
| vedicscriptures/bhagavad-gita | GPL-3.0, and also unnamed. Used as a witness, never copied. |
| gita/gita's word meanings and transliteration | Copied from holy-bhagavad-gita.org (Swami Mukundananda), which is under copyright. Not used at all. |
| The Hindi translations in gita/gita | Ramsukhdas, Tejomayananda and Chinmayananda, all under copyright. |
| Gambhirananda, Adidevananda, Sankaranarayan | Under copyright. |

Public-domain English that may be added later: Swami Sivananda (died
1963, so public domain in India since 2024), Shri Purohit Swami (died
1941), Telang (1882) and Arnold (1885).

## How a chapter is checked

```
node scripts/gita/fetch-besant.mjs        # the edition's 398 pages from Wikisource
node scripts/gita/parse-besant.mjs        # split into 700 verses
node scripts/gita/collate.mjs             # Sanskrit against two witnesses
node scripts/gita/collate-english.mjs     # English against the Internet Archive OCR
node scripts/gita/proof.mjs 2             # every place to read, page by page
node scripts/gita/fetch-scan.mjs 69 70    # the pages
powershell -File scripts/gita/crop-scan.ps1 -Page 64 -Top 0.47 -Height 0.05   # one line, enlarged
node scripts/gita/build.mjs               # write what the site reads
```

The witnesses also have to be fetched into `corpus/gita/` (git-ignored):

- `raw/verse.json`, from `github.com/gita/gita` (`data/`)
- `witness-vs/`, the vedicscriptures repository
- `besant/ia.txt`, the Internet Archive text of `bhagavadgitawith00londiala`

1. **Parse.** The book is read as one stream of lines. A verse is the
   run of Devanagari lines ending in a numbered daṇḍa; its translation
   is the English up to the first Devanagari word; the gloss is the
   rest. A printed number the OCR misread is taken from its neighbours,
   and the parse reports any gap.
2. **Collate the Sanskrit.** Spelling conventions are levelled first:
   anusvāra for a class nasal, सत्व for सत्त्व, the avagraha, spacing,
   numbering and speaker lines. Where the transcription agrees with
   either witness it stands. Where it disagrees with both, the place is
   read on the scan.
3. **Collate the English** against an independent OCR of another copy
   of the same printing. Every word on which they disagree is read on
   the scan.
4. **Record** each decision in `src/lib/gita/checked/chapter-NN.json`:
   - A **fix** from the scan, with its page. A Sanskrit fix is either a
     `transcription` slip or a `misprint` in the book. A misprint is
     corrected only where the book's own word-for-word gloss and both
     witnesses agree, and its `why` says so. For example, the print
     reads कृस्नम at 1.40; its gloss reads कृत्स्नम्.
   - A **kept** reading, where the print genuinely differs from both
     witnesses. It needs its page and a note.
   - `pagesRead`: every page that `proof.mjs` lists.
5. **Build.** `build.mjs` publishes a chapter only if three things hold:
   - every listed page has been read;
   - every fix finds its text;
   - re-collating the corrected Sanskrit leaves nothing but kept
     readings.

   A record that does not pass fails the build. Unchecked chapters have
   no file, and their page says the verses are still being checked.

## Presentation decisions

- **Names as printed.** The print spells names with diacritics
  (Dhṛitarâṣhṭra, Pâṇḍavas, Sañjaya), and the transcription mostly
  drops them. `scripts/gita/names.mjs` restores the printed spelling.
  Each entry was read on a scan, and the table gives its page.
- **Typography, not text, is levelled.** That covers the space before
  `; : ? !` and straight quotes.
- **The translation is English on every page**, because it is the only
  one there is. Kannada and Hindi pages say so above the verses and
  mark it `lang="en"`.
- **IAST appears on English pages only**, as on the stotras. It is made
  by rule from the Devanagari (`src/lib/iast.ts`), not taken from the
  book.
- **Footnotes and the word-for-word gloss are parsed but not shown yet.**
  The footnotes are incomplete in the transcription, and the gloss has
  its own Devanagari slips and no independent witness. Each needs its
  own check before it appears.

## On the site

- `/gita` says how the verses are checked and how many chapters have
  passed.
- `/gita/[chapter]` shows the write-up, then the whole chapter in one
  `.stotra-text` card. Each verse number leads to the verse's page, and
  the check record follows, folded.
- `/gita/[chapter]/[verse]` shows one verse, its record narrowed to it,
  and the previous and next verses. It is a reading page, counted by
  the meter (`GATED`). Commentaries, the word-for-word meaning and
  recitation will attach here.
- **Load one chapter, never eighteen.** `chapterText()` imports a
  single chapter file; a unit test fails any page that imports one
  directly.

## Progress

| Chapter | Sanskrit places | English places | Fixes | On the site |
|---|---|---|---|---|
| 1 | 22 | 57 | 20 mūla (5 misprints), 35 English | 2026-11-14 |
| 2 | 38 | 44 | 34 mūla (7 misprints), 37 English; 2 kept | 2026-11-15 |
| 3 | 26 | 25 | 21 mūla (3 misprints), 24 English; 1 kept | 2026-11-15 |
| 4 | 25 | 25 | 20 mūla (3 misprints), 29 English | 2026-11-15 |
| 5 | 27 | 18 | 15 mūla (6 misprints), 22 English; 5 kept | 2026-11-15 |
| 6 | 28 | 20 | 24 mūla (6 misprints), 28 English; 1 kept | 2026-11-16 |
| 7 | 29 | 12 | 21 mūla (5 misprints), 16 English; 1 kept | 2026-11-16 |
| 8 | 20 | 24 | 17 mūla (4 misprints), 18 English | 2026-11-16 |
| 9 | 23 | 6 | 18 mūla (10 misprints), 8 English | 2026-11-16 |
| 10 | 17 | 38 | 16 mūla (4 misprints), 15 English | 2026-11-16 |

Chapters 5–18: 318 Sanskrit and about 276 English places remain to be
read.
