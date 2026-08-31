# Bringing every Upanishad into the reader

The reader is finished as a piece of engineering. `Īśa` and `Māṇḍūkya`
are complete. What remains is **1,313 verses**, and at three
translations and three commentaries each that is **7,878 pieces of
authored prose**.

This document is the plan for the rest, and it is tiered by something
more important than length.

---

## The constraint is accuracy, not effort

The mūla is scripture. It has been transmitted without alteration for
two and a half thousand years, and a site whose entire claim is that it
cites its sources cannot be the place a wrong syllable enters that
transmission.

So the limit on how fast this goes is **not** how much prose can be
written. It is how much of a text can be set down with confidence that
every syllable is right. For a short, heavily-memorised text that
confidence is high. For six hundred verses of Chāndogya it is not, and
the correct response to that is to say so rather than to produce
plausible-looking Sanskrit.

This is the same rule the citation policy already encodes: it is better
to publish less and label it honestly than to publish more and be
quietly wrong.

---

## Tiers

### Tier 1 — complete, high confidence

Short texts, densely memorised, recited daily in thousands of homes.
These can be entered complete and verified line by line.

| Text | Verses | Notes |
|---|---:|---|
| **Kena** | 35 | Four khaṇḍas. Two prose, two verse. The "eye of the eye". |
| **Aitareya** | 33 | Three chapters. Carries *Prajñānaṃ Brahma*. |
| **Muṇḍaka** | 64 | Three muṇḍakas. Two birds; *Satyameva jayate*. |

**132 verses · 792 prose pieces.** This is the immediate work.

### Tier 2 — complete, needs care

| Text | Verses | Notes |
|---|---:|---|
| **Kaṭha** | 119 | Two adhyāyas, six vallīs. Naciketas and Yama. |

Long enough that it should be entered valli by valli with each one
checked before the next, rather than in a single pass. The famous
sections (the three boons, the chariot of the body, the razor's edge)
are secure; the linking passages need more care.

### Tier 3 — selections, labelled as selections

| Text | Verses | Position |
|---|---:|---|
| **Chāndogya** | 628 | Complete entry is not honest work for now |
| **Bṛhadāraṇyaka** | 434 | Same |

These two are half the Upanishadic corpus by volume, and neither can be
set down complete with the confidence the rest of the site is held to.

What they get instead is **curated selections** — the sections that are
actually studied, entered to the same standard as a complete text and
**marked in the interface as selections, never as the whole work**:

- **Chāndogya**: chapter 6 entire (Uddālaka and Śvetaketu, *Tat Tvam
  Asi* given nine times), the Sanatkumāra–Nārada dialogue (ch. 7), and
  *Sarvaṃ khalvidaṃ brahma* (3.14).
- **Bṛhadāraṇyaka**: the Yājñavalkya–Maitreyī dialogue (2.4 and 4.5),
  *Ahaṃ brahmāsmi* (1.4.10), *neti neti* (2.3.6), and the Yājñavalkya–
  Janaka exchanges (4.3–4.4).

A text in this tier renders with an explicit banner saying which
sections are present and which are not. `completeness: "selections"`
in the registry drives that, so a partial text cannot silently appear
complete — the same belt-and-braces principle as the citation rule.

---

## Order of execution

1. **Kena** — shortest of the remaining, and the natural pair to
   Māṇḍūkya on the question of what consciousness is.
2. **Aitareya** — completes the Mahāvākya set. With Isha, Māṇḍūkya,
   Kena and Aitareya done, all four Mahāvākyas have their home text
   readable except *Tat Tvam Asi*, which arrives with Chāndogya 6.
3. **Muṇḍaka** — the largest Tier 1 text.
4. **Kaṭha** — valli by valli.
5. **Chāndogya selections** — chapter 6 first; it is the one everybody
   comes for.
6. **Bṛhadāraṇyaka selections**.

After step 2, four of the eight texts are readable and every Mahāvākya
but one is in place. That is the first point at which the section feels
finished to a visitor rather than partial.

---

## What each text costs

Per verse: mūla, IAST aligned line-for-line, two or three key terms
glossed in three languages, a translation in three languages, and
commentary in three languages that says what the verse is doing rather
than restating it.

Roughly six substantial prose pieces per verse, plus the Sanskrit. Isha
at nineteen verses came to about 2,100 lines of authored content. That
is the unit to reason with: **a Tier 1 text is a session's work, Kaṭha
is several, and the Tier 3 selections are a session each.**

---

## What does not need doing again

Nothing on this list needs new engineering. The reader, the script
transliteration, the language layer, the spine, the commentary
disclosure, the lecture links and the seed-script wiring are all
finished and text-agnostic. Every entry above is content into
`registerText()`.

The one exception is the `completeness` flag and its banner, which
Tier 3 requires and which is built alongside Kena.
