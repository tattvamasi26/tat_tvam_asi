# Rigveda — design brief

Written 2026-09-21, after the source survey ([RIGVEDA-SOURCES.md](RIGVEDA-SOURCES.md))
and before any Rigveda page exists. It covers what the data's shape
forces, what the site's existing design language already decides, and
the choices that are genuinely open.

---

## 1. What the data forces

Measured from the harvested corpus, not estimated:

| | |
|---|---|
| Verses per sūkta — median | **9** |
| 75th / 90th percentile | 12 / 18 |
| Longest sūkta | **58** (RV 9.97), then 1.164 (52), 6.16 (48) |
| Sūktas with ≤10 verses | 674 — **66%** |
| Sūktas over 30 verses | 21 |

**A sūkta fits on one page.** Two-thirds are shorter than the Gaṇapati
Atharvaśīrṣa already rendered on this site. Nothing needs paginating,
and nothing needs a verse-by-verse route.

| Mandala | Sūktas | Verses |
|---|---|---|
| 1 | 191 | 2,006 |
| 2 | 43 | 429 |
| 3 | 62 | 617 |
| 4 | 58 | 589 |
| 5 | 87 | 727 |
| 6 | 75 | 765 |
| 7 | 104 | 841 |
| 8 | 103 | 1,716 |
| 9 | 114 | 1,108 |
| 10 | 191 | 1,754 |

**Mandalas are uneven enough that one list design cannot serve them
all.** 43 rows is a list; 191 rows is a problem, and worst on a phone,
where a 14-verse stotra already renders 22,500px tall.

**Devatās are concentrated, but less than a first pass suggested.**

| Devatā | Sūktas |
|---|---|
| इन्द्रः Indra | 202 |
| अग्निः Agni | 151 |
| पवमानः सोमः Soma Pavamāna | 106 |
| विश्वे देवाः Viśve Devāḥ | 54 |
| अश्विनौ Aśvins | 49 |
| मरुतः Maruts | 28 |

Those six come to about **57%** of all sūktas. An earlier count here
said 62% across five deities, and Indra 245 / Agni 176; that was wrong
— it split each string at the first comma and counted only the leading
token, so compound attributions were silently folded into whichever
deity happened to be named first.

The field is far dirtier than those six rows suggest:

- **291 distinct strings**, not the 172 previously recorded.
- **198 of them are unusable as-is** — longer than 24 characters, or
  carrying digits and brackets. Only ~24 strings occur four or more
  times.
- **232 sūktas (23%) change devatā mid-hymn.** RV 1.23 addresses six
  different deities across its 24 verses. One devatā per sūkta is a
  falsification for a quarter of the collection.
- Some values are **subjects rather than deities** — `ज्ञानम्`
  (knowledge), `श्रद्धा` (faith), `भाववृत्तम्` (the Nāsadīya). This is
  traditional and correct, and it means section headings will not all
  be gods.
- One sūkta's notes carry a raw `angelfire.com` URL (8.102).

A devatā axis is still worth building — it lets a newcomer ask for the
Agni hymns without knowing a number — but only on a normalised field,
and only with an honest answer for the 23%.

---

## 2. What the existing design already decides

Read in the code and seen rendered at both widths. The site has **two
reader idioms**, and they are genuinely different:

- **The stotra idiom** (`/stutis/…`) — one white card on paper holding
  the whole text, verses separated by hairlines, a small gold numeral
  per verse, mūla in `--sacred` at `clamp(1.3rem, 2.6vw, 1.85rem)`,
  IAST beneath in grey, and the **meaning closed** behind a "Show
  meaning" toggle. Calm and continuous — built for recitation.
- **The Upanishad idiom** (`/upanishads/…`) — each verse its own card
  with a large ghosted number, **translation always visible**, terms
  and commentary attached beneath. Denser — built for study.

Fixed by the house style, not open to reinvention:

- Paper (`--paper`), white cards (`--card`), marigold for what you
  press, `--sacred` brown for Sanskrit. No dark panels — the owner
  rejected them.
- **Sanskrit elements get sizes, never faces.** `stotra.css` says so in
  its own header: these rules are unlayered and would beat
  `.deva`/`.kannada`.
- Transliteration appears **only on English pages**.
- Accented Devanagari and IAST; **plain Kannada** (see SOURCES §8).
- No typed arrows or glyphs the fonts lack — `<Arrow>`, `<Caution>`, or
  CSS shapes.
- Indic text: no letter-spacing, no faux italics, line-height ≥ 1.3.

---

## 3. Proposed information architecture

```
/vedas                                  exists — four cards
/vedas/rigveda                          NEW  the Rigveda's front door
/vedas/rigveda/[mandala]                NEW  one mandala
/vedas/rigveda/[mandala]/[sukta]        NEW  one sūkta, all its verses
/vedas/rigveda/devata/[devata]          NEW  every hymn to one deity
```

Four levels, two dynamic segments — both naturally numeric, so they
resolve without the data-driven lookup `/temples/[section]/[entry]`
needs.

**The front door** (`/vedas/rigveda`) has to do the work the Vedas
index card currently only promises. It carries: what the Rigveda is, in
plain words; how it is arranged (maṇḍala → sūkta → mantra, and what
those words mean); the ten maṇḍalas as cards with their real counts;
a handful of famous sūktas as direct ways in; the major devatās; and a
**plain statement of how much is translated**.

**A mandala page** leads with its character and its ṛṣi family, then a
few notable hymns, then the full list of its sūktas — compact rows
carrying number, devatā, ṛṣi, metre and verse count.

**A sūkta page** is the destination. One page, all its verses.

**Build note:** 1,028 sūkta routes plus 10 mandala routes. Pages render
dynamically (locale is a cookie), so `generateStaticParams` governs
prerendering only — but build time at that route count needs watching,
and may argue for not prerendering sūkta pages at all.

---

## 4. The sūkta page

Head — the existing `.reader-head`, unchanged in structure:

- kicker: `Ṛgveda · Maṇḍala 1` (a link back)
- title: the sūkta's devatā in Sanskrit, in the reader's script
- name: `Hymn 1 — to Agni`
- facts bar: ṛṣi · devatā · metre · verse count

Then the verses, in the stotra idiom's single card, because a sūkta is
one continuous hymn and reads as one — but with **the translation
visible**, because the brief is that someone who knows nothing about
the Rigveda can follow it. That is the one deliberate departure from
the stotra pattern, and it is the difference between a recitation aid
and a reference.

Per verse:

1. the number
2. the mūla — accented Devanagari, or plain Kannada
3. IAST, on English pages only
4. the translation, visible
5. word-by-word, behind a control — only where it exists

Foot: the sources, every one of them, with licences; then the sūktas
either side.

---

## 5. The honesty problem, stated plainly

The site's governing rule is that **nothing partial may look
complete**. The Vedas index already advertises "10,552 Verses" against
the Rigveda, which is a promise currently unbacked by a single page.

After this work:

- **All 1,028 sūktas** will have verified mūla, ṛṣi, devatā, metre and
  verse count. That part is genuinely complete.
- **~60 sūktas** will be written in full — translation and explanation
  in all three languages, to the standard of the Kollur guide.
- **The remaining ~968** will have the text and its metadata, and no
  translation.

That third state does not exist on the site yet. `completeness:
"selections"` covers a *text* held in part; this is a **complete text
whose translation is in part**, which is a different claim and needs
its own plain words on both the sūkta page and the front door. Getting
this wrong would be the most damaging possible outcome, because the
site's entire claim is that it does not overstate itself.

---

## 6. Decisions (owner, 2026-09-21)

1. **The translation stays closed behind a toggle**, exactly as the
   stotra pages have it. The site keeps one way of showing meaning
   rather than two, and the mūla stays uncluttered for a reader who
   wants the Sanskrit. (This overrides the recommendation in §4 above,
   which argued for showing it; §4's markup stands, its default does
   not.)
2. **An untranslated sūkta says so in a banner on its own page**, and
   the front door gives the real count translated out of 1,028.
   Individual list rows are *not* marked — the claim is made where a
   reader is actually reading.
3. **Mandala lists are grouped by devatā**, not shown as one flat run
   of numbered rows. This supersedes §3, which proposed compact rows
   carrying number, devatā, ṛṣi, metre and verse count.
4. **The devatā axis ships in the first cut.**

### What decisions 3 and 4 cost

Together they promote `devatā` from a metadata field to **visible page
structure in two places** — section headings on every mandala page, and
its own routes. The harvested field is not yet fit for that:

- 172 distinct strings for what should be a bounded set of deities
- 25 sūktas where the parse produced nothing
- artifacts that would render as headings, e.g.
  `आप्रीसूक्तं (१ इध्मः समिद्धोऽग्निर्वा`
- hymns whose devatā **changes mid-hymn**, which one string cannot
  represent honestly

**Normalising the devatā data is therefore a prerequisite for the first
cut, not follow-up work.**

### 5. How mixed hymns are handled (owner, 2026-09-21)

**Each sūkta sits in exactly one group, under the devatā the
Anukramaṇī names first**, and the heading says *principally to*. The
sūkta's own page then prints the full per-verse attribution — verses
1–3 to Vāyu, 4–6 to Indra-Vāyū, and so on — so nothing is concealed by
the grouping.

Why this one: every hymn has exactly one home, group counts still sum
to 1,028, and the detail appears where the reader is actually reading.
Listing a hymn under all six of its deities would be truer to the
Anukramaṇī but would make the counts stop adding up; a "several
deities" bucket would file a quarter of the Rigveda, famous hymns
included, under one meaningless heading.

### Sāyaṇa fills the gaps

The 25 sūktas whose header notes gave no devatā need **no external
source**. Sāyaṇa opens his commentary on every hymn by stating its ṛṣi,
devatā, metre and verse count, and all 1,028 bhāṣya blocks are already
harvested. RV 6.68, the only sūkta with no header notes at all, reads:

> `…इत्येकादशर्चं सप्तमं सूक्तं भरद्वाजस्यार्षं त्रैष्टुभमैन्द्रावरुणम्` …
> `इन्द्रावरुणौ देवता`

— eleven verses, Bharadvāja, Indrā-Varuṇau, Triṣṭubh (verses 9 and 10
in Jagatī). Its neighbours 6.66–6.70 all name the ṛṣi in the fuller
form `बार्हस्पत्यो भरद्वाजः`, which is the form to use.

These 25 are to be **read and entered by hand, not parsed**. Sāyaṇa's
prose is too variable for a regex anyone should trust, and 25 is a
small enough number to do properly — which is the same standard the
rest of the site's Sanskrit is held to.
