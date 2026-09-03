import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "@/i18n/server";
import { nameScriptClass } from "@/i18n/config";
import { sectionsFor } from "@/i18n/sections";
import {
  getVerseOfTheDay,
  getMahavakyas,
  getAllTemples,
  getAllTeachers,
  getAllConcepts,
  getAllUpanishads,
  getAllVerses,
  getAllMathas,
  getReadableSlugs,
  getUpanishadVerses,
} from "@/lib/data";
import { scriptFor, scriptClass } from "@/lib/script";
import { HERO_IMAGES } from "@/lib/hero";
import { HeroCinema } from "@/components/home/HeroCinema";
import { Counter } from "@/components/home/Counter";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The homepage is an index of the site, not a slideshow through it.
 *
 * The previous version was three full-bleed photographs — the hero plus
 * two pinned scenes — each given the same treatment, and each consuming
 * more than two screen-heights of scroll to deliver a single verse or a
 * single sentence. Seven screens of scrolling for three pictures. It
 * read exactly as it was built: one picture stacked on another.
 *
 * So there is now ONE photographic moment, the hero, and everything
 * below it is structured and dense. Every section has a different shape
 * and a different job, and the section that matters most — the texts you
 * can actually sit down and read today — comes first instead of being
 * four clicks deep.
 */
export default function HomePage() {
  const { locale, t } = getTranslations();

  const verse = getVerseOfTheDay(locale);
  const mahavakyas = getMahavakyas(locale);
  const temples = getAllTemples(locale);
  const teachers = getAllTeachers(locale);
  const concepts = getAllConcepts(locale);
  const upanishads = getAllUpanishads(locale);
  const verses = getAllVerses(locale);
  const mathas = getAllMathas(locale);
  const pillars = sectionsFor(locale);

  // The texts with a complete verse-by-verse reader, counted from the
  // registry rather than hard-coded — a fourth text appears here the day
  // it is entered, with no edit to this page.
  const readable = getReadableSlugs()
    .map((slug) => {
      const head = upanishads.find((u) => u.slug === slug);
      if (!head) return null;
      return { ...head, entries: getUpanishadVerses(slug, locale).length };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const totalEntries = readable.reduce((n, r) => n + r.entries, 0);

  return (
    <>
      {/* ── 01 · One photographic moment ───────────────── */}
      <HeroCinema
        images={HERO_IMAGES}
        title={t.siteName}
        titleClass={nameScriptClass(locale)}
        tagline={t.heroTagline}
        subtitle={t.heroSubtitle}
        enter={{ href: "/upanishads", label: t.heroEnter }}
        explore={{ href: "/concepts", label: t.heroExplore }}
        scrollCue={t.explorePillars}
      />

      {/* ── 02 · The scale, immediately ────────────────── */}
      <div className="tally-cinema">
        <div className="tally-cell">
          <Counter value={verses.length + totalEntries} label={t.navVerses} />
        </div>
        <div className="tally-cell">
          <Counter value={upanishads.length} label={t.navUpanishads} />
        </div>
        <div className="tally-cell">
          <Counter value={temples.length} label={t.navTemples} />
        </div>
        <div className="tally-cell">
          <Counter value={concepts.length} label={t.navConcepts} />
        </div>
        <div className="tally-cell">
          <Counter value={teachers.length} label={t.navTeachers} />
        </div>
        <div className="tally-cell">
          <Counter value={mathas.length} label={t.navMathas} />
        </div>
      </div>

      {/* ── 03 · What you can read right now ───────────── */}
      {readable.length > 0 && (
        <section className="shell home-band" id="read">
          <Reveal>
            <div className="home-head">
              <div>
                <p className="scene-eyebrow">{t.labelReadNow}</p>
                <h2 className="home-title">{t.upanishadsTitle}</h2>
              </div>
              <Link href="/upanishads" className="btn-ghost">
                {t.viewAll} →
              </Link>
            </div>
          </Reveal>

          <div className="readgrid">
            {readable.map((r, i) => (
              <Reveal key={r.slug} delay={i * 70}>
                <Link href={`/upanishads/${r.slug}`} className="readcard">
                  <span className={`readcard-glyph ${scriptClass(locale)}`} aria-hidden="true">
                    {scriptFor(r.nameSanskrit, locale)}
                  </span>

                  <span className="readcard-body">
                    <span className="readcard-name">{r.name}</span>
                    <span className="translit readcard-iast">{r.nameIast}</span>
                    <span className="readcard-teaching">{r.keyTeaching}</span>
                  </span>

                  <span className="readcard-foot">
                    <span className="chip chip-gold">
                      {r.entries} {t.labelVerseCount}
                    </span>
                    {r.veda && <span className="chip">{r.veda}</span>}
                    <span className="readcard-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── 04 · Verse of the day, a band not a screen ─── */}
      <section className="verseband" id="verse">
        <div className="shell verseband-inner">
          <Reveal>
            <div>
              <p className="scene-eyebrow">{t.verseOfTheDay}</p>
              <p className={`verseband-mula ${scriptClass(locale)}`}>
                {scriptFor(verse.sanskrit, locale)}
              </p>
              <p className="translit">{verse.transliteration}</p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div>
              <p className="verseband-text">{verse.translation}</p>
              <div className="scene-meta">
                <span>
                  {verse.source} · {verse.locator}
                </span>
                <Link href={`/verses/${verse.id}`} className="btn-ghost">
                  {t.readMore} →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 05 · The four Mahavakyas ───────────────────── */}
      <section className="shell home-band home-band-tight" id="mahavakyas">
        <Reveal>
          <div className="home-head">
            <div>
              <p className="scene-eyebrow">{t.mahavakyas}</p>
              <h2 className="home-title">{t.mahavakyasBlurb}</h2>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="vakya-cinema">
        {mahavakyas.map((m) => (
          <Link key={m.id} href={`/verses/${m.id}`} className="vakya-cell">
            <p className={`vakya-cell-sanskrit ${scriptClass(locale)}`}>
              {scriptFor(m.sanskrit, locale)}
            </p>
            <p className="vakya-cell-translit">{m.transliteration}</p>
            <p className="vakya-cell-text">{m.translation}</p>
          </Link>
        ))}
      </div>

      {/* ── 06 · Temples, a mosaic not a pinned scene ──── */}
      <section className="shell home-band" id="temples">
        <Reveal>
          <div className="home-head">
            <div>
              <p className="scene-eyebrow">{t.templesTitle}</p>
              <h2 className="home-title">{t.templesBlurb}</h2>
            </div>
            <Link href="/temples" className="btn-ghost">
              {t.viewAll} →
            </Link>
          </div>
        </Reveal>

        <div className="mosaic">
          {temples.map((tp, i) => (
            <Reveal key={tp.id} delay={i * 60}>
              <Link href={`/temples/${tp.slug}`} className="tile" style={{ height: "100%" }}>
                {tp.imageUrl && (
                  <Image
                    src={tp.imageUrl}
                    alt={tp.name}
                    fill
                    sizes="(max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <div className="tile-body">
                  <h3 className="tile-name">{tp.name}</h3>
                  <p className="tile-meta">
                    {tp.location} · {tp.centuryBuilt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 07 · Why this site is different ────────────── */}
      <section className="shell citeband" id="sources">
        <Reveal>
          <p className="scene-eyebrow">{t.labelSource}</p>
          <p className="citeband-text">{t.citationPromise}</p>
          <Link href="/about" className="btn-ghost">
            {t.navAbout} →
          </Link>
        </Reveal>
      </section>

      {/* ── 08 · Everything else ───────────────────────── */}
      <section className="shell home-band" id="pillars">
        <Reveal>
          <div className="home-head">
            <div>
              <p className="scene-eyebrow">{t.explorePillars}</p>
              <h2 className="home-title">{t.pillarsBlurb}</h2>
            </div>
          </div>
        </Reveal>

        <ol className="index-list">
          {pillars.map((p, i) => (
            <li key={p.id} className="index-row">
              <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <Link href={p.href} className="index-name" style={{ display: "block" }}>
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", inset: 0, zIndex: 3 }}
                  />
                  {p.label}
                </Link>
                <span className="index-blurb" style={{ display: "block" }}>
                  {p.blurb}
                </span>
              </span>
              <span className={`index-glyph ${scriptClass(locale)}`} aria-hidden="true">
                {scriptFor(p.glyph, locale)}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
