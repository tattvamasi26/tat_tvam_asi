import Link from "next/link";
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
} from "@/lib/data";
import { HERO_IMAGES, TEXTURE } from "@/lib/hero";
import { HeroCinema } from "@/components/home/HeroCinema";
import { ScrollScene } from "@/components/home/ScrollScene";
import { Counter } from "@/components/home/Counter";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The homepage is built as a sequence of full-viewport scenes rather
 * than a stack of bands. Each scene holds one idea and one photograph,
 * and the photograph stays pinned while the words move over it — so
 * the page reads as a descent through the material rather than a list
 * of links to it.
 *
 * Everything below the hero is a Server Component. The only client
 * code on this page is the hero's scroll-depth handler.
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

  // The pillars come from the shared SECTIONS list, so this index, the
  // nav overlay and the footer can never disagree about what exists.
  const pillars = sectionsFor(locale);

  const featured = temples[0];

  return (
    <>
      {/* ── 01 · The opening frame ─────────────────────── */}
      <HeroCinema
        images={HERO_IMAGES}
        title={t.siteName}
        titleClass={nameScriptClass(locale)}
        tagline={t.heroTagline}
        subtitle={t.heroSubtitle}
        enter={{ href: "/verses", label: t.heroEnter }}
        explore={{ href: "/concepts", label: t.heroExplore }}
        scrollCue={t.explorePillars}
      />

      {/* ── 02 · Verse of the day, over carved stone ───── */}
      <ScrollScene
        id="verse"
        src={TEXTURE.wheel.src}
        alt=""
        credit={TEXTURE.wheel.credit}
        position="50% 50%"
        height={2.4}
      >
        <p className="scene-eyebrow">{t.verseOfTheDay}</p>
        <p className="scene-display">{verse.sanskrit}</p>
        <p className="scene-lede">{verse.translation}</p>
        <div className="scene-meta">
          <span>
            {verse.source} · {verse.locator}
          </span>
          <Link href={`/verses/${verse.id}`} className="btn-ghost">
            {t.readMore} →
          </Link>
        </div>
        {!verse.isCited && <p className="notice-uncited">⚠ {t.uncitedNotice}</p>}
      </ScrollScene>

      {/* ── 03 · The citation promise, as a statement ──── */}
      <section className="shell statement" id="sources">
        <Reveal>
          <p className="scene-eyebrow">{t.labelSource}</p>
          <h2 className="statement-text">{t.uncitedNotice}</h2>
          <p className="statement-sub">{t.citationPromise}</p>
          <div className="scene-meta">
            <Link href="/about" className="btn-ghost">
              {t.navAbout} →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── 04 · The four Mahavakyas ───────────────────── */}
      <section className="shell" style={{ paddingBlock: "clamp(3rem, 8vh, 6rem)" }}>
        <Reveal>
          <p className="scene-eyebrow">{t.mahavakyas}</p>
          <h2 className="statement-text" style={{ maxWidth: "18ch" }}>
            {t.mahavakyasBlurb}
          </h2>
        </Reveal>
      </section>

      <div className="vakya-cinema" id="mahavakyas">
        {mahavakyas.map((m) => (
          <Link key={m.id} href={`/verses/${m.id}`} className="vakya-cell">
            <p className="vakya-cell-sanskrit">{m.sanskrit}</p>
            <p className="vakya-cell-translit">{m.transliteration}</p>
            <p className="vakya-cell-text">{m.translation}</p>
          </Link>
        ))}
      </div>

      {/* ── 05 · Temples, pinned ───────────────────────── */}
      {featured?.imageUrl && (
        <ScrollScene
          id="temples"
          src={featured.imageUrl}
          alt={featured.name}
          credit={featured.imageCredit ?? undefined}
          height={2.2}
        >
          <p className="scene-eyebrow">{t.templesTitle}</p>
          <h2 className="statement-text">{t.templesBlurb}</h2>
          <div className="scene-meta">
            <span>
              {featured.name} · {featured.centuryBuilt}
            </span>
            <Link href="/temples" className="btn-ghost">
              {t.viewAll} →
            </Link>
          </div>
        </ScrollScene>
      )}

      {/* ── 06 · The scale of the archive ──────────────── */}
      <div className="tally-cinema">
        <div className="tally-cell">
          <Counter value={verses.length} label={t.navVerses} />
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

      {/* ── 07 · The index of pillars ──────────────────── */}
      <section className="shell" id="pillars" style={{ paddingBlock: "clamp(4rem, 12vh, 9rem)" }}>
        <Reveal>
          <p className="scene-eyebrow">{t.explorePillars}</p>
          <h2 className="statement-text" style={{ marginBottom: "clamp(2rem, 5vh, 4rem)" }}>
            {t.pillarsBlurb}
          </h2>
        </Reveal>

        <ol className="index-list">
          {pillars.map((p, i) => (
            <li key={p.id} className="index-row">
              <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
              <span>
                {/* The whole row is the target: the ::before overlay sits
                    above the row, so a stretched link keeps it clickable. */}
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
              <span className="index-glyph deva" aria-hidden="true">
                {p.glyph}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
