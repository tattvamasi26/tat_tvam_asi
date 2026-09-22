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
import { FillQuote } from "@/components/home/FillQuote";
import { Marquee } from "@/components/home/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Rosette } from "@/components/brand/Mark";
import { Arrow } from "@/components/ui/Arrow";

/**
 * The homepage: one photographic moment, then a run of bands that
 * each have a different shape and a different job — the sections as a
 * bento, the texts you can read today as miniature pages, the numbers,
 * the citation promise as a quote that fills as you read it, the verse
 * of the day, the Mahavakyas, a shelf of terms, the temples, and a
 * closing call to begin.
 *
 * Nothing here is counted or listed by hand. Sections, readable texts,
 * tallies and tones all come from the data, so the page grows with it.
 */

// The bento's rhythm on a 12-column grid. It repeats, so an eighth
// section lands in a sensible cell without anyone editing this.
const SPANS = [7, 5, 4, 4, 4, 6, 6];

// The Mahavakyas are always four; each gets its own wash.
const VAKYA_TONES = [0, 2, 3, 5];

export default function HomePage() {
  const { locale, t } = getTranslations();
  const sc = scriptClass(locale);

  const verse = getVerseOfTheDay(locale);
  const mahavakyas = getMahavakyas(locale);
  const temples = getAllTemples(locale);
  const teachers = getAllTeachers(locale);
  const concepts = getAllConcepts(locale);
  const upanishads = getAllUpanishads(locale);
  const verses = getAllVerses(locale);
  const mathas = getAllMathas(locale);
  const pillars = sectionsFor(locale);

  // Texts with a complete verse-by-verse reader, from the registry — a
  // fourth text appears here the day it is entered.
  const readable = getReadableSlugs()
    .map((slug) => {
      const head = upanishads.find((u) => u.slug === slug);
      if (!head) return null;
      const all = getUpanishadVerses(slug, locale);
      const sample = all.find((v) => v.locator !== "invocation") ?? all[0];
      return { ...head, entries: all.length, sample };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const totalEntries = readable.reduce((n, r) => n + r.entries, 0);

  // The two sections about people and places get a photograph instead
  // of a glyph. Any other section falls back to its glyph.
  const pillarMedia: Record<string, { src: string; position?: string } | undefined> = {
    temples: temples[0]?.imageUrl ? { src: temples[0].imageUrl } : undefined,
    acharyas: teachers[0]?.imageUrl ? { src: teachers[0].imageUrl, position: "50% 18%" } : undefined,
  };

  const stats = [
    { value: verses.length + totalEntries, label: t.navVerses },
    { value: upanishads.length, label: t.navUpanishads },
    { value: temples.length, label: t.navTemples },
    { value: concepts.length, label: t.navConcepts },
    { value: teachers.length, label: t.navTeachers },
    { value: mathas.length, label: t.navMathas },
  ];

  const locatorLabel = (locator: string) =>
    locator === "invocation" ? t.labelInvocation : `${t.labelVerse} ${locator}`;

  return (
    <>
      {/* ── 01 · The opening frame ─────────────────────── */}
      <HeroCinema
        images={HERO_IMAGES}
        siteName={t.siteName}
        nameClass={nameScriptClass(locale)}
        tagline={t.heroTagline !== t.siteName ? t.heroTagline : undefined}
        headline={t.heroHeadline}
        accent={t.heroAccent}
        lede={t.heroLede}
        enter={{ href: "/upanishads", label: t.ctaStartReading }}
        explore={{ href: "/concepts", label: t.heroExplore }}
        badges={[
          { icon: "sources", title: t.badgeSources, note: t.badgeSourcesNote },
          { icon: "languages", title: t.badgeLanguages, note: t.badgeLanguagesNote },
          { icon: "reader", title: t.badgeReader, note: t.badgeReaderNote },
        ]}
      />

      {/* ── 02 · Every section, as a bento ─────────────── */}
      <section className="shell home-band" id="pillars">
        <div className="home-intro">
          <Reveal>
            <h2 className="home-title">
              {t.homeSpaceTitle} <span className="accent">{t.homeSpaceAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede">{t.pillarsBlurb}</p>
          </Reveal>
        </div>

        <div className="bento">
          {pillars.map((p, i) => {
            const media = pillarMedia[p.id];
            return (
              <Reveal key={p.id} delay={(i % 3) * 60} className={`span-${SPANS[i % SPANS.length]}`}>
                <Link href={p.href} className={`pillar tone-${i % 7}`}>
                  <span className="pillar-art">
                    {media ? (
                      <Image
                        src={media.src}
                        alt=""
                        fill
                        sizes="(max-width: 980px) 100vw, 40vw"
                        style={{ objectFit: "cover", objectPosition: media.position ?? "50% 50%" }}
                      />
                    ) : (
                      <span className={`pillar-glyph ${sc}`} aria-hidden="true">
                        {scriptFor(p.glyph, locale)}
                      </span>
                    )}
                  </span>
                  <span className="pillar-body">
                    <span className="pillar-name">{p.label}</span>
                    <span className="pillar-blurb">{p.blurb}</span>
                  </span>
                  <span className="pillar-go" aria-hidden="true">
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── 03 · What you can read right now ───────────── */}
      {readable.length > 0 && (
        <section className="shell home-band" id="read">
          <Reveal>
            <div className="home-head">
              <div>
                <p className="eyebrow">{t.labelReadNow}</p>
                <h2 className="home-title">
                  {t.homeReadTitle} <span className="accent">{t.homeReadAccent}</span>
                </h2>
              </div>
              <Link href="/upanishads" className="btn-outline">
                {t.viewAll} <Arrow />
              </Link>
            </div>
          </Reveal>

          <div className="readgrid">
            {readable.map((r, i) => (
              <Reveal key={r.slug} delay={i * 70}>
                <Link href={`/upanishads/${r.slug}`} className={`readcard tone-${(i + 1) % 7}`}>
                  <span className="readcard-stage" aria-hidden="true">
                    <span className={`readcard-glyph ${sc}`}>{scriptFor(r.nameSanskrit, locale)}</span>
                    <span className="readcard-page">
                      <span className="readcard-page-top">
                        <span className="readcard-dots">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span>{r.sample ? locatorLabel(r.sample.locator) : ""}</span>
                      </span>
                      {r.sample?.sanskrit.slice(0, 2).map((line, k) => (
                        <span key={k} className={`readcard-mula ${sc}`}>
                          {line}
                        </span>
                      ))}
                      {r.sample?.iast[0] && <span className="translit readcard-iast">{r.sample.iast[0]}</span>}
                      <span className="readcard-line" />
                      <span className="readcard-line" />
                    </span>
                  </span>

                  <span className="readcard-body">
                    <span className="readcard-name">{r.name}</span>
                    <span className="readcard-teaching">{r.keyTeaching}</span>
                    <span className="readcard-foot">
                      <span className="chip chip-gold">
                        {r.entries} {t.labelVerseCount}
                      </span>
                      {r.veda && <span className="chip">{r.veda}</span>}
                      <span className="readcard-arrow" aria-hidden="true">
                        <Arrow />
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── 04 · The scale, in numbers ─────────────────── */}
      <section className="shell">
        <div className="tally-band">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── 05 · Why this site is different ────────────── */}
      <section className="shell home-quote" id="sources">
        <p className="eyebrow">{t.labelSource}</p>
        <FillQuote text={t.homeQuote} />
        <p className="lede">{t.citationPromise}</p>
        <Link href="/about" className="btn-ghost">
          {t.navAbout} <Arrow />
        </Link>
      </section>

      {/* ── 06 · Verse of the day ──────────────────────── */}
      <section className="shell home-band" id="verse">
        <Reveal>
          <div className="votd">
            <div>
              <p className="eyebrow">{t.verseOfTheDay}</p>
              <p className={`votd-mula ${sc}`}>{scriptFor(verse.sanskrit, locale)}</p>
              <p className="translit votd-iast">{verse.transliteration}</p>
            </div>
            <div>
              <p className="votd-text">{verse.translation}</p>
              <div className="votd-meta">
                <span className="chip">
                  {verse.source} · {verse.locator}
                </span>
                <Link href={`/verses/${verse.id}`} className="btn-dark">
                  {t.readMore} <Arrow />
                </Link>
              </div>
            </div>
            <span className={`votd-om ${sc}`} aria-hidden="true">
              {scriptFor("ॐ", locale)}
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── 07 · The four Mahavakyas ───────────────────── */}
      <section className="shell home-band" id="mahavakyas">
        <Reveal>
          <div className="home-head">
            <div>
              <p className="eyebrow">{t.mahavakyas}</p>
              <h2 className="home-title home-title-sm">{t.mahavakyasBlurb}</h2>
            </div>
          </div>
        </Reveal>

        <div className="vakya-grid">
          {mahavakyas.map((m, i) => (
            <Reveal key={m.id} delay={i * 60}>
              <Link href={`/verses/${m.id}`} className={`vakya tone-${VAKYA_TONES[i % VAKYA_TONES.length]}`}>
                <span className="vakya-num">{String(i + 1).padStart(2, "0")}</span>
                <span className={`vakya-mula ${sc}`}>{scriptFor(m.sanskrit, locale)}</span>
                <span className="translit vakya-iast">{m.transliteration}</span>
                <span className="vakya-text">{m.translation}</span>
                <span className="vakya-src">
                  {m.source} · {m.locator}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 08 · The vocabulary, as a shelf ────────────── */}
      <section className="home-band" id="concepts">
        <div className="shell">
          <Reveal>
            <div className="home-head">
              <div>
                <p className="eyebrow">{t.conceptsTitle}</p>
                <h2 className="home-title home-title-sm">{t.conceptsBlurb}</h2>
              </div>
              <Link href="/concepts" className="btn-outline">
                {t.viewAll} <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>

        <Marquee label={t.conceptsTitle}>
          {concepts.map((c) => (
            <Link key={c.id} href={`/concepts/${c.slug}`} className="term-card">
              <span className={`term-mula ${sc}`}>{scriptFor(c.termSanskrit, locale)}</span>
              <span className="term-name">{c.term}</span>
              <span className="term-def clamp-3">{c.definition}</span>
            </Link>
          ))}
        </Marquee>
      </section>

      {/* ── 09 · Temples, a mosaic ─────────────────────── */}
      <section className="shell home-band" id="temples">
        <Reveal>
          <div className="home-head">
            <div>
              <p className="eyebrow">{t.templesTitle}</p>
              <h2 className="home-title home-title-sm">{t.templesBlurb}</h2>
            </div>
            <Link href="/temples" className="btn-outline">
              {t.viewAll} <Arrow />
            </Link>
          </div>
        </Reveal>

        <div className="mosaic">
          {temples.map((tp, i) => (
            <Reveal key={tp.id} delay={i * 60}>
              <Link href={tp.href} className="tile" style={{ height: "100%" }}>
                {tp.imageUrl && (
                  <Image
                    src={tp.imageUrl}
                    alt={tp.name}
                    fill
                    sizes={i === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"}
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

      {/* ── 10 · Begin ─────────────────────────────────── */}
      <section className="shell home-band">
        <Reveal>
          <div className="cta-band">
            <span className="cta-yantra" aria-hidden="true">
              <Rosette id="cta" size={640} />
            </span>
            <h2 className="home-title">
              {t.homeCtaTitle} <span className="accent">{t.homeCtaAccent}</span>
            </h2>
            <p className="lede">{t.homeCtaBody}</p>
            <div className="cta-actions">
              <Link href="/upanishads" className="btn">
                {t.ctaStartReading} <Arrow />
              </Link>
              <Link href="/search" className="btn-outline">
                {t.navSearch}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
