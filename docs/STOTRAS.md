# The stotra collection

How the stutis section grows beyond the stotras written by hand: where
the texts come from, how each one is checked, and how to add more.

## What the owner asked for

The owner pointed at stotranidhi.com's Kannada list, which has about
2,100 stotras in 39 groups, and asked for all of it on this site, in its
three languages and its own design, rather than pasted in.

## Why stotranidhi's texts are not copied

- **It publishes no licence.** Its pages carry no terms of reuse. The
  stotras themselves are centuries old and belong to no one. Each typed,
  proofread edition of them is the work of whoever made it.
- **This site forbids the same thing.** `/rights` forbids copying "pages
  or whole sections into another website". Doing that to another site
  would undercut the site's own notice.
- **The editorial rule.** A text is entered only once every syllable is
  checked against a named edition (CLAUDE.md, "Citation and accuracy
  rules"). A bulk copy checks nothing.

stotranidhi is used in two ways only:

1. **Its list is the coverage target.** `scripts/stotras/fetch-target.mjs`
   reads titles and links only, three seconds apart; its robots.txt allows
   these pages.
2. **Its transcription is a witness.** It is used to check the edition,
   the way a scholar checks one printing against another. Nothing is
   taken from it.

The fastest way to "all of it" is to **ask stotranidhi for permission**.
With a licence, its texts could be imported and credited, and checked
the same way.

## The source: the Bṛhat Stotra Ratnākara

The texts come from the *Bṛhat Stotra Ratnākara*, vol. 1, edited by
Rāmasvāmī Śāstrī and printed by Vavilla Press, Madras, in 1953. The
hand-entered Gaṇeśa Pañcaratnam already cited this book.

- **Every page is on Sanskrit Wikisource.** Each page has a scan and a
  page-by-page transcription under CC BY-SA 4.0, with a revision id the
  site cites.
- **Coverage.** Volume 1 covers Gaṇeśa, Subrahmaṇya, Śiva and his forms
  (Dakṣiṇāmūrti, Bhairava, Naṭarāja), Sūrya, and Śaṅkara's works. The
  segmenter finds 105 stotras in it.
- **Not covered.** Devī and Viṣṇu are in volume 2, which is not on
  Wikisource.

**The transcription is not good enough to publish as it stands.**
Wikisource marks 404 of its 586 pages "validated", meaning two people
checked them. Yet those pages still carry OCR slips:

| The transcription has | The print reads |
|---|---|
| करातमोदकं | करात्तमोदकं |
| भाखरं | भास्वरं |
| पश्चरत्न | पञ्चरत्न |

Syllables printed in the margin were also dropped, so "सहस्रं" became
"हस्रं". In the Gaṇeśa Pañcaratnam, five of six verses had an error.
The status alone proves nothing.

## How a stotra is checked

```
node scripts/stotras/fetch-bsr.mjs        # the book's pages from Wikisource
node scripts/stotras/fetch-target.mjs     # stotranidhi's list (titles only)
node scripts/stotras/segment-bsr.mjs      # split the book into its stotras
node scripts/stotras/collate.mjs          # compare each with its witness
node scripts/stotras/proof.mjs "कालभैरवाष्टकम्"   # the places to look at
node scripts/stotras/fetch-scan.mjs 265 266       # the printed pages
powershell -File scripts/stotras/crop-scan.ps1 -Page 266 -Top 0.5 -Height 0.1
node scripts/stotras/build.mjs            # write what the site reads
```

1. **Collate.** `collate.mjs` picks the witness by the text, not the
   title, because stotranidhi numbers its variants. It then compares the
   two verse by verse. Spelling conventions are levelled first: anusvāra,
   visarga sandhi, ळ and ल, spacing and numbering. A different letter
   stays a difference.
2. **Read the scan.** `proof.mjs` prints every place the two disagree, in
   context. Each one is read on the printed page, enlarged with
   `crop-scan.ps1` when the ink is faint.
3. **Record the decision** in `src/lib/stotra-corpus/checked/<slug>.json`:
   - A **correction**, where the transcription misread the print
     (`kind: "transcription"`) or the book itself has a misprint
     (`kind: "misprint"`). A misprint is corrected only when the sense
     and the witness both require it.
   - A **kept variant**, where the book genuinely reads differently from
     the witness. The book's reading stays.

   Either way, the record gives the printed page.
4. **Verified.** A stotra is verified when no disagreement is left
   unaccounted for. A kept variant settles only the very reading it
   names, never the rest of its verse.
5. **Build.** `build.mjs` publishes verified stotras only. A record whose
   stotra is not verified fails the build. Work in progress is never
   published, and never dropped silently either.

A place where both transcriptions agree but are both wrong would need
two independent readers to make the same slip. That is the residual
risk, and it is small.

The book prints a repeated refrain once and abbreviates it after
("काशिका ...", "चिदा..."). The record's `refrain` writes it out, and
the page says so.

## On the site

- **Section.** On a devata's page, the collection is its own section,
  "From the Bṛhat Stotra Ratnākara". Its note says the texts are not yet
  translated.
- **Stotra page.** Each stotra has the reader's head, a notice ("The
  Sanskrit is checked. The translation is not written yet."), the whole
  text, and IAST on English pages. The IAST is made by rule by
  `src/lib/iast.ts`.
- **The record.** Below the text, the page lists:
  - the edition and its pages;
  - the method;
  - every correction and every reading kept, with links to each scan
    and to the witness.

  These are shown as data with labels in the reader's language, so they
  read the same in all three.
- **Devatas.** A devata opens once it has a stotra of either kind. A
  devata with no chosen picture shows its name on the plate the bhajans
  use. The owner picks the pictures.

## Progress

The checked stotras are in `src/lib/stotra-corpus/checked/`.

**Measured against stotranidhi's Kannada list**

| | stotras |
|---|---|
| stotranidhi's Kannada list (distinct) | about 1,700 |
| in the Bṛhat Stotra Ratnākara, vol. 1 | 105 |
| of those, with a stotranidhi witness | 67 |
| checked and on the site (2026-10-21) | 15 |

**On the site (first batch, 2026-10-21)**

- **Śiva:**
  - Śivapañcākṣara
  - Nirvāṇaṣaṭkam
  - Nirvāṇadaśakam
  - Candraśekharāṣṭakam
  - Vedasāra Śivastava
  - Dvādaśa Jyotirliṅga
  - Śivatāṇḍava
  - Ardhanārīśvara
  - Dāridryadahana
  - Śiva Nāmāvalyaṣṭakam
  - Śaṅkarāṣṭakam
  - Yatipañcakam
  - Manīṣāpañcakam
- **Bhairava:** Kālabhairavāṣṭakam
- **Subrahmaṇya:** Subrahmaṇyāṣṭakam

**What the checking turned up in this batch**

- About 40 transcription errors corrected from the scan.
- Five misprints in the book itself, each corrected only where the sense
  and the witness agree, and recorded as the book's:
  - प्रभामिराम
  - वै नमः for वै यमः
  - कचि-
  - कृति-
  - करालम्बम्
- Over 80 places where the book genuinely reads differently from the
  witness. All are kept and listed.

**What the checking tools now handle**

- `refrain`: a refrain abbreviated with dots, or cut to its first word
  with no dots (`bare`).
- `split`: two verses run together where the transcription lost a danda.
- `drop`: a running head the segmenter took in.
- `misprints`: a misprint the transcriber had already put right.
- Variant kinds:
  - `extra`: text the witness adds.
  - `order`: a verse the witness places elsewhere.
  - `whole`: a verse the witness lacks.

### Next

- **The rest of the book with a witness**, about 52 stotras. The largest
  are the sahasranāmas, Śivānandalaharī and Dakṣiṇāmūrtyaṣṭakam. The
  last needs care: the witness arranges its verses differently.
- **The 38 stotras in the book with no witness.** Among them are
  Ādityahṛdayam, Sūryāṣṭakam and Bilvāṣṭakam.
  - Read every line against the scan, not just the disputed places.
  - Record the result the same way, with `whole` variants saying the
    verse was read in full.
- **Devī, Viṣṇu and the rest of stotranidhi's list.**
  - These need a second printed edition on Wikisource (volume 2 of the
    Ratnākara is not there), or permission from stotranidhi.
  - Write to stotranidhi first; it is the shortest way to everything.
