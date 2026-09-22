# Rigveda — source survey

What exists, what it costs, and what may legally be used. Compiled
2026-09-21, before any Rigveda content or UI was written.

Every claim below was checked against the source itself, not against a
description of it. Where something is unresolved it says so.

---

## 1. The size of the thing

| | Count |
|---|---|
| Mandalas | 10 |
| Sūktas (hymns) | 1,028 |
| Mantras (stanzas) | 10,552 |

For comparison, every Upaniṣad entered on this site so far comes to
about 130 verses. The Rigveda is **eighty times** the site's entire
verse corpus to date. That number governs every decision that follows.

---

## 2. The Sanskrit mūla — settled

**Use: `sa.wikisource.org`, `ऋग्वेदः/संहिता/सस्वरपाठः/१-५` and `/६-१०`.**

Two plain-text pages, 597,643 and 786,861 characters. Verified by
parsing, not by trusting the index:

```
stanzas    : 10552   (canonical 10,552)
suktas     : 1028    (canonical 1,028)
per mandala: 191 43 62 58 87 75 104 103 114 191
missing suktas: NONE
```

It is **accented** (sasvara) — 32,571 udātta and 44,137 anudātta marks
in part one alone. Lines are locator-tagged and machine-parseable:

```
1.001.01a अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म् ।
1.001.01c होता॑रं रत्न॒धात॑मम् ॥
```

> **A trap worth recording.** A first parse reported 1,021 sūktas and
> 10,462 stanzas, and RV 1.65–70 and 7.17 looked missing. They are not
> missing. Those hymns are in dvipadā virāj and print one line per
> stanza with **no pada letter** — `1.065.01`, not `1.065.01a`. Any
> parser must treat the pada letter as optional or it will silently
> drop seven hymns.

### The per-sūkta pages carry more

`ऋग्वेदः सूक्तं १.१` and its siblings hold, in a header template:
the **ṛṣi** (`author`), and the **devatā and metre** (`notes`) — i.e.
the Anukramaṇī data, already structured, per hymn. Below that sits
**Sāyaṇa's bhāṣya** in Sanskrit.

Sampled across all ten mandalas — 1.1, 1.164, 2.23, 3.62, 5.85, 7.86,
9.1, 10.129, 10.90, 10.125 — **all ten had Sāyaṇa and accents**, from
8,485 to 108,589 characters each.

Licence: **CC BY-SA 4.0** (and GFDL), per the Wikimedia Terms of Use —
"When you submit text to which you hold the copyright, you agree to
license it under: Creative Commons Attribution-ShareAlike 4.0
International License". Attribution and share-alike both apply, and
attribution may be satisfied by a link to the page history.

### The ṛṣi/devatā indexes are not a shortcut

`ऋग्वेदः ऋषिसूची` and `ऋग्वेदः देवतासूची` exist, but they are **inverted
indexes** — keyed by name, pointing out to hymns, with ranges
(`१.१७१ - १.१७८`), partial-hymn attributions (`१०.५१.२; ४; ६; ८`) and OCR
noise (`१. १६६`, `१ ०`). There is no chandas index. The per-sūkta page
headers are the clean, authoritative source; the spine has to be
harvested hymn by hymn, 1,028 requests, politely rate-limited.

---

## 3. Word-by-word meaning — settled

**Use: the morphologically glossed Rigveda (Zurich corpus), Zenodo
[10.5281/zenodo.8410656](https://zenodo.org/records/8410656).**

- Licence: **CC BY 4.0** — reuse on a public site is permitted with credit.
- Authors: Casaretto, Fischer, Halfmann, Korobzow, Kölligan, Reinöhl.
- One 9.5 MB spreadsheet; per token: surface form, lemma, grammatical
  category, case, gender, number, person, tense, mood, voice, stem class.

This is the backbone for "what each word means", and it is the only
per-word resource found that is cleanly licensed.

---

## 4. VedaWeb — read the licences before trusting it

<https://vedaweb.uni-koeln.de> is the best scholarly Rigveda platform
and looks, at first, like a single source covering everything. Its TEI
files name **thirteen** sources across six languages:

```
zurich, lubotsky, vnh, aufrecht, padapatha, eichler,
geldner, grassmann, griffith, macdonell, oldenberg,
renou, elizarenkova
langs: san-Deva, san-Latn, deu, eng, fra, rus
```

**But only four carry a licence.** Reading `vedaweb_corpus.tei`
directly, CC BY 4.0 is attached to exactly: `addressees`, `strata`,
`stanza_properties`, `zurich`. The remaining nine — including the
Devanagari text, the padapāṭha, and Griffith's English — have **no
licence element**; the header says only "Please see the licensing terms
for each source", and Lubotsky's note records a source file privately
shared between two named scholars in 2010.

**Therefore:** take the Zurich morphology from VedaWeb. Do not take the
text or the translations from it. Get those from the cleared sources.

Note also that the old `/rigveda/api` endpoints now return the
single-page-app shell; the platform has moved to Tekst.

---

## 5. English translations

| Translation | Year | Status | Use? |
|---|---|---|---|
| **Griffith**, *The Hymns of the Rigveda* | 1896 | Public domain (`PD-old` on en.wikisource, both original and translation) | **Yes** |
| **Wilson**, *Ṛg-Veda-Sanhitá* | 1850–66 | Pre-1928, public domain | Yes, as a second reading |
| **Jamison & Brereton** | 2014 | © Oxford University Press | **No.** Best modern translation; not ours to use |

Griffith is retrievable from en.wikisource at
`The Hymns of the Rigveda/Book N/Hymn M` — but **only via
`action=parse`**. The wikitext is a 286-character transclusion stub;
the rendered HTML gives the text. Confirmed working for RV 1.1 and
10.129.

Griffith is Victorian and dated ("I laud Agni, the chosen Priest"). It
is a citable reference, not a model for the site's own voice.

---

## 6. Hindi and Kannada — the hard finding

**There is no freely licensed Rigveda translation in either language.**

| Source | Detail | Problem |
|---|---|---|
| Trivedi, *Hindi Rigveda* | Indian Press, Allahabad, 1954, 1,622 pp. | One archive.org upload carries a PD Mark, but that was applied by an uploader, not the rights-holder. The ASI/IGNCA scan of the same book states **no licence**. Unresolved. |
| H. P. Venkata Rao, Rigveda with Sāyaṇa | 36 vols, Mysore 1949–55, sponsored by Maharaja Jayachamarajendra Wadiyar; Sanskrit + Kannada + English | archive.org states **no licence**; a community upload. Death year not established, so India's life + 60 years cannot be applied. Unresolved. |
| kn.wikisource | Searched `ಋಗ್ವೇದ`, `ವೇದ` | **No Rigveda text.** Only Mysore University encyclopaedia articles *about* it, and Vachana literature. |
| hi.wikisource | Searched `ऋग्वेद`, `ऋग्वेद संहिता` | **No saṃhitā.** Only essays citing it. |

**Consequence:** the Kannada and Hindi for this site must be written,
not sourced — which is what the site already does for the Upaniṣads and
stotras, and what the owner asked for ("don't make translation, it
should be a meaningful one"). It is editorial content, flagged
`not yet cited`, and it is the slowest part of the work.

---

## 7. Other sources checked

- **GRETIL**, `sa_Rgveda-edAufrecht.xml` — van Nooten & Holland's data
  entry of Aufrecht (1877), TEI. Licence: **CC BY-NC-SA 4.0**. The
  non-commercial clause is a real constraint on a public site that may
  one day carry any commercial element. Header also states the text was
  "provided to GRETIL in good faith that no copyright rights have been
  infringed" — not a warranty.
- **archive.org `rigvedacomplete`** (the item this work started from) —
  "Complete Rig Veda in English (Sakala Shakha)", CC Public Domain Mark
  1.0. A compiler's assembly of **Griffith's** Saṃhitā translation with
  **Keith's** Aitareya Brāhmaṇa/Āraṇyaka. Useful and free, but
  **English only — it contains no Sanskrit**, so it cannot supply the
  mūla. 4 MB of extracted text.
- **vedicheritage.gov.in** — Government of India portal; Śākala
  Saṃhitā in Mandala-krama and Aṣṭaka-krama, plus recitation audio by
  regional tradition. Rich, and worth citing; its reuse terms were not
  legible from the pages fetched and need checking before anything is
  copied.
- **sacred-texts.com** — has Griffith complete (rv01065, rv07017,
  rv10191 all resolve). Now wrapped in heavy page scripting; en.wikisource
  is the cleaner path.

---

## 8. Vedic accents and the Kannada script — not a blocker

> **Correction.** An earlier draft of this document called this a
> blocker and claimed the Kannada fonts cannot draw the accent marks.
> That was wrong, and the correction is recorded here rather than
> quietly deleted.

**What actually happens.** Vedic accent marks pass through the site's
Devanagari → Kannada transliteration unchanged — **by design, and
correctly.**

`devanagariToKannada()` in `src/lib/script.ts` maps U+0900–U+096F by a
+0x380 offset and passes through anything whose target slot is
unassigned in Kannada. Udātta (U+0951) and anudātta (U+0952) land on
Kannada holes, so they pass through **as Devanagari combining marks**.

Verified against the real function, on RV 1.1.1 exactly as sa.wikisource
prints it:

```
IN    : अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म्
OUT   : ಅ॒ಗ್ನಿಮೀ॑ಳೇ ಪು॒ರೋಹಿ॑ತಂ ಯ॒ಜ್ಞಸ್ಯ॑ ದೇ॒ವಮೃ॒ತ್ವಿಜ॑ಮ್
LEAK  : 9 chars still Devanagari -> U+0952 U+0951 U+0952 …
```

The marks stay in the Devanagari block while the letters become
Kannada. That is the intended behaviour: U+0951 and U+0952 are
script-neutral in Unicode and are meant to combine with other Indic
scripts. `tests/unit/script.test.ts` asserts it deliberately —
"dandas and Vedic stress marks pass through unchanged" — and the
audit regex excludes them with the note that "Kannada text borrows
[them] unchanged."

**And the fonts carry them.** Both Kannada faces the site loads list
the stress marks first in their Kannada subset:

```
Tiro Kannada / Noto Sans Kannada  /* kannada */
unicode-range: U+0951-0952, U+0964-0965, U+0C80-0CF3,
               U+1CD0, U+1CD2-1CD3, U+1CDA, U+1CF2, U+1CF4, …
Tiro Devanagari Sanskrit          /* devanagari */
unicode-range: U+0900-097F, U+1CD0-1CF9, …
```

Google puts U+0951–0952 in the *Kannada* subset because Kannada Vedic
texts use them. The sa.wikisource saṃhitā uses **only** those two marks
and no Vedic Extensions characters at all, so every face the site loads
covers everything the corpus contains.

Unaccented Devanagari converts cleanly; so do `ळ` (→ ಳ) and avagraha
(→ ಽ).

**So the choice is editorial, not technical.**

### What was decided, and why

RV 1.1.1–2 was rendered in the site's own type, accented and
unaccented, in all three languages at desktop and phone widths, and
Chrome was asked which font drew each glyph:

```
en / hi : Tiro Devanagari Sanskrit (custom: true) — 118 glyphs
kn      : Tiro Kannada (custom: true) — 55 glyphs
        + Noto Sans Kannada (custom: true) — 61 glyphs
```

No system font anywhere, in any language — so the marks genuinely
render, and the font audit would pass either way.

Seen rendered, though, the two scripts behave differently. Devanagari
holds the marks well: Tiro's Devanagari was drawn for Sanskrit, and the
strokes sit against the letterforms without crowding. Kannada does not.
Its forms are open and headline-less, and marks positioned for
Devanagari's headline sit tight against them — the anudātta bars crowd
the baseline, and at phone width the marks read as noise. The split
above is probably why: the letters and the marks come from two
different faces that were never designed together.

**Decision (2026-09-21): accented Devanagari and IAST, plain Kannada.**

Implemented as `stripVedicAccents()` in `src/lib/script.ts`, applied by
`scriptFor()` on the Kannada path only. It deliberately does **not**
live inside `devanagariToKannada()`, which is documented as a
reversible script transliteration and must stay one — so the
conversion stays faithful, the existing test that asserts the marks
pass through it stays green, and the editorial choice sits at the
display layer where it can be changed without touching the script
conversion.

---

## 9. What has actually been harvested

Run 2026-09-21 against sa.wikisource. Titles were **enumerated** with
`list=allpages` rather than constructed, so the Vālakhilya numbering in
mandala 8 needed no special case, and content was pulled in batched
title queries — about fifty requests, not 1,028.

| | |
|---|---|
| Sūkta pages fetched | **1,028** (canonical 1,028) |
| With ṛṣi | 1,016 |
| With devatā | 1,003 |
| With metre | 1,014 |
| With Sāyaṇa's bhāṣya | 1,019 |

**Caveats, all in the parsing rather than the source — now resolved:**

- **The stanza count from the pages is wrong.** It reported 11,632
  against the canonical 10,552, because it tallies `॥१॥` marks across
  the whole page and Sāyaṇa's bhāṣya quotes other verses inline. Verse
  counts are therefore taken from the sasvara saṃhitā (§2), never from
  the pages. Do not use the page figure for anything.
- **Every devatā is now resolved — 1,028 of 1,028.** 1,003 came from
  the Anukramaṇī notes; the remaining 25 were read out of **Sāyaṇa's
  opening paragraph**, which states the devatā for every hymn. They
  were read by hand, not parsed: the statements take a dozen
  grammatical forms (`इन्द्रावरुणौ देवता`, `त्रैष्टुभमैन्द्रम्`,
  `विश्वकर्मदेवत्यम्`, `कशब्दाभिधेयः प्रजापतिर्देवता`) and no regex
  would catch that set honestly.
- **RV 6.68 is the only sūkta with no header notes at all.** Sāyaṇa
  supplies everything: eleven verses, Bharadvāja, Indrā-Varuṇau,
  Triṣṭubh with verses 9–10 in Jagatī.
- **The notes field does not always hold what its name suggests.** For
  ~12 hymns whose ṛṣi attribution is complicated, `notes` carries the
  **ṛṣi clause instead of the devatā and metre** — 9.86 reads
  `ऋ. १-१० अकृष्टा माषाः, ११-२० सिकता निवावरी…`. Those are not parse
  failures; the source simply records something different there.
- **The field carries three markers, not one:** `दे.` devatā, `ऋ.` /
  `ऋषि` ṛṣi, and `छ.` chandas (2 hymns: 10.94, 10.134).
- **The source has its own typos.** Four hymns write Devanagari
  numerals with a Latin digit mixed in — 10.94 has `१4`, 3.53 has `१0`.
  Two hymns carry wikitext links inside the metadata (2.36, 8.102), and
  one devatā string had a stray virāma (`इ्न्द्राग्नी`).
- Several hymns legitimately have **per-verse** ṛṣis and devatās rather
  than one — RV 9.107 lists the seven ṛṣis verse by verse, RV 1.23
  addresses six deities across 24 verses. **127 sūktas change devatā
  mid-hymn.** A single column cannot represent them honestly, so the
  full attribution string is kept alongside the principal value and
  printed on the sūkta's own page.

**Result:** 291 raw devatā strings normalise to 114 canonical values —
96 deities, 18 subjects (`ज्ञानम्`, `श्रद्धा`, and other topics the
Anukramaṇī names in the devatā slot), and one hymn-type (`आप्रीसूक्तम्`,
which covers ten hymns under several spellings). Indra 259, Agni 187,
Soma Pavamāna 113, Viśve Devāḥ 72 and the Aśvins 55 account for 67%;
the 15 devatās with ten or more hymns cover ~81%.

**Where it lives right now:** a session scratchpad —
`rv-spine.json` plus 1,028 `.wiki` files, and `rv-sasvara-raw.txt`
holding the complete accented saṃhitā. **That directory is temporary.**
This must be moved into Postgres, or committed, before it is lost;
re-harvesting is cheap but not free, and Wikimedia rate-limits.

---

## 10. What is settled, and what is not

**Settled:**
- Mūla: sa.wikisource sasvara, complete and verified.
- Hymn metadata (ṛṣi, devatā, metre) and Sāyaṇa: sa.wikisource per-sūkta pages.
- Word-by-word: Zurich corpus, CC BY 4.0.
- English reference: Griffith 1896, public domain.
- Excluded: Jamison–Brereton (©), VedaWeb's unlicensed nine, GRETIL for
  any commercial use.

**Open, pending the owner's decision:**
- vedicheritage.gov.in's reuse terms, if we cite or embed anything from it.
- Who holds rights to the Venkata Rao Kannada and Trivedi Hindi editions.

**Decided 2026-09-21 by the owner:**
- Scope: the complete spine (all 1,028 sūktas) plus deeply written selections.
- Storage: migrate the whole site to Postgres.
- Accents: accented Devanagari and IAST; plain, unaccented Kannada.
- Kannada/Hindi: pursue permission for a published translation.

**Rights-holder leads (unconfirmed):**
- *Trivedi, Hindi* — Chaukhamba Vidya Bhawan, K 37/117 Gopal Mandir Lane,
  Golghar, Maidagin, Varanasi 221001. They published the 1992 and 2016
  reprints, so they are the likely rights-holder.
- *Venkata Rao, Kannada* — the Jayachamarajendra Vedaratnamālā, 36 vols,
  first volume 24 October 1947, last 1961, printed by Sharada Press and
  Vinayak Printing Works, Mysore, sponsored by the Maharaja. Rights most
  likely sit with the University of Mysore / Oriental Research Institute
  (Kautilya Circle, Chamarajapuram, Mysuru 570005) or the Government of
  Karnataka. To be established before writing.
