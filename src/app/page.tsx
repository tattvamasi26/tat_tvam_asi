import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "@/i18n/server";
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
import { HeroStage } from "@/components/home/HeroStage";
import { Counter } from "@/components/home/Counter";
import { Reveal } from "@/components/motion/Reveal";

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

  const pillars = [
    { href: "/verses", label: t.versesTitle, blurb: t.versesBlurb },
    { href: "/upanishads", label: t.upanishadsTitle, blurb: t.upanishadsBlurb },
    { href: "/teachers", label: t.teachersTitle, blurb: t.teachersBlurb },
    { href: "/temples", label: t.templesTitle, blurb: t.templesBlurb },
    { href: "/concepts", label: t.conceptsTitle, blurb: t.conceptsBlurb },
    { href: "/mathas", label: t.mathasTitle, blurb: t.mathasBlurb },
  ];

  // The ticker needs its list twice: the track translates -50%, so the
  // second copy is what occupies the viewport as the first scrolls away.
  const tickerItems = [...concepts, ...concepts];

  return (
    <>
      {/* ── 01 · Hero ─────────────────────────────────── */}
      <section className="hero-full">
        <HeroStage images={HERO_IMAGES} />

        <div className="shell hero-core">
          <span className="om hero-in hero-in-1">ॐ</span>
          <h1 className="hero-title hero-in hero-in-2">तत् त्वम् असि</h1>
          <div className="hero-rule" />
          <p className="hero-gloss hero-in hero-in-3">{t.heroTagline}</p>
          <p className="eyebrow hero-in hero-in-4">{t.heroSubtitle}</p>

          <div
            className="hero-in hero-in-5"
            style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.75rem" }}
          >
            <Link href="/verses" className="btn">{t.heroEnter}</Link>
            <Link href="/concepts" className="btn-ghost">{t.heroExplore} →</Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>{t.explorePillars}</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* ── 02 · Scale of the archive ─────────────────── */}
      <section className="tally-strip" id="scale">
        <Counter value={verses.length} label={t.navVerses} />
        <Counter value={upanishads.length} label={t.navUpanishads} />
        <Counter value={temples.length} label={t.navTemples} />
        <Counter value={concepts.length} label={t.navConcepts} />
        <Counter value={teachers.length} label={t.navTeachers} />
        <Counter value={mathas.length} label={t.navMathas} />
      </section>

      {/* ── 03 · Verse of the day ─────────────────────── */}
      <section className="band shell" id="verse">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">01</span>
              <p className="eyebrow">{t.verseOfTheDay}</p>
            </div>
            <Link href="/verses" className="btn-ghost">{t.viewAll} →</Link>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <article className="verse-stage">
            <p className="verse-sanskrit-xl">{verse.sanskrit}</p>
            <p className="translit" style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
              {verse.transliteration}
            </p>
            <p
              className="prose"
              style={{ marginTop: "1.8rem", fontSize: "1.2rem", color: "var(--ink-0)", maxWidth: "58ch" }}
            >
              {verse.translation}
            </p>
            <div className="card-foot" style={{ marginTop: "2rem" }}>
              <span className="meta">{verse.source} · {verse.locator}</span>
              <Link href={`/verses/${verse.id}`} className="btn-ghost">{t.readMore} →</Link>
            </div>
            {!verse.isCited && <p className="notice-uncited">⚠ {t.uncitedNotice}</p>}
          </article>
        </Reveal>
      </section>

      {/* ── 04 · The four Mahavakyas ──────────────────── */}
      <section className="band band-hair shell" id="mahavakyas">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">02</span>
              <h2 className="title">{t.mahavakyas}</h2>
              <p className="lede">{t.mahavakyasBlurb}</p>
            </div>
          </div>
        </Reveal>

        <div className="vakya-grid">
          {mahavakyas.map((m, i) => (
            <Reveal key={m.id} delay={i * 80}>
              <Link href={`/verses/${m.id}`} className="vakya" style={{ height: "100%" }}>
                <p className="vakya-sanskrit">{m.sanskrit}</p>
                <p className="translit">{m.transliteration}</p>
                <p className="card-text clamp-3" style={{ marginTop: "0.5rem" }}>{m.translation}</p>
                <span className="vakya-veda">{m.source}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 05 · Temples, as an editorial mosaic ──────── */}
      <section className="band band-hair shell" id="temples">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">03</span>
              <h2 className="title">{t.templesTitle}</h2>
              <p className="lede">{t.templesBlurb}</p>
            </div>
            <Link href="/temples" className="btn-ghost">{t.viewAll} →</Link>
          </div>
        </Reveal>

        <div className="mosaic">
          {/* Reveal is the grid item itself — a display:contents wrapper
              could not be faded or translated. */}
          {temples.map((tp, i) => (
            <Reveal key={tp.id} delay={i * 70}>
              <Link href={`/temples/${tp.slug}`} className="tile" style={{ height: "100%" }}>
                {tp.imageUrl && (
                  <Image
                    src={tp.imageUrl}
                    alt={tp.name}
                    fill
                    sizes="(max-width: 900px) 50vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <div className="tile-body">
                  <h3 className="tile-name">{tp.name}</h3>
                  <p className="tile-meta">{tp.location} · {tp.centuryBuilt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 06 · Citation promise, over the Rigveda MS ── */}
      <section className="band band-hair shell" id="sources">
        <div className="split">
          <Reveal>
            <div className="split-media">
              <Image
                src={TEXTURE.manuscript.src}
                alt="A page of the Rigveda in manuscript"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="band-head-text">
              <span className="band-index">04</span>
              <h2 className="title">{t.labelSource}</h2>
              <p className="prose" style={{ fontSize: "1.05rem" }}>
                {t.uncitedNotice}
              </p>
              <p className="prose">
                Every translation and every commentary entry on this site must name where it came
                from. That rule is enforced in the database itself — a translation without a source
                cannot be stored — so the citation is a fact about the record, not a promise about
                the editor.
              </p>
              <p className="credit">{TEXTURE.manuscript.credit}</p>
              <Link href="/about" className="btn-ghost" style={{ marginTop: "0.5rem" }}>
                {t.navAbout} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 07 · Acharyas ─────────────────────────────── */}
      <section className="band band-hair shell" id="acharyas">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">05</span>
              <h2 className="title">{t.teachersTitle}</h2>
              <p className="lede">{t.teachersBlurb}</p>
            </div>
            <Link href="/teachers" className="btn-ghost">{t.viewAll} →</Link>
          </div>
        </Reveal>

        <div className="grid-cards">
          {teachers.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link href={`/teachers/${p.slug}`} className="card" style={{ height: "100%" }}>
                {p.imageUrl && (
                  <div className="card-img">
                    <Image
                      src={p.imageUrl}
                      alt={p.name}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                    />
                  </div>
                )}
                <div className="card-body">
                  <h3 className="card-title">{p.name}</h3>
                  <p className="translit">{p.nameSanskrit}</p>
                  <p className="card-text clamp-3" style={{ marginTop: "0.4rem" }}>{p.biography}</p>
                  <div className="card-foot">
                    <span className="meta">{p.era}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 08 · Concept ticker ───────────────────────── */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((c, i) => (
            <span key={`${c.id}-${i}`} className="ticker-item">
              <span className="ticker-sanskrit">{c.termSanskrit}</span>
              <span className="ticker-term">{c.term}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 09 · The pillars ──────────────────────────── */}
      <section className="band shell" id="pillars">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">06</span>
              <h2 className="title">{t.explorePillars}</h2>
              <p className="lede">{t.pillarsBlurb}</p>
            </div>
          </div>
        </Reveal>

        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.href} delay={i * 60}>
              <Link href={p.href} className="pillar" style={{ height: "100%" }}>
                <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pillar-name">{p.label}</h3>
                <p className="card-text">{p.blurb}</p>
                <span className="pillar-arrow">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
