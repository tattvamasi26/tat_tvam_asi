import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "@/i18n/server";
import { getVerseOfTheDay, getMahavakyas, getAllTemples, getAllTeachers, getAllConcepts } from "@/lib/data";

export default function HomePage() {
  const { locale, t } = getTranslations();

  const verse = getVerseOfTheDay(locale);
  const mahavakyas = getMahavakyas(locale);
  const temples = getAllTemples(locale);
  const teachers = getAllTeachers(locale);
  const concepts = getAllConcepts(locale);

  const hero = temples.find((x) => x.slug === "brihadeeswarar-temple") ?? temples[0];

  const pillars = [
    { href: "/verses", label: t.versesTitle, blurb: t.versesBlurb },
    { href: "/upanishads", label: t.upanishadsTitle, blurb: t.upanishadsBlurb },
    { href: "/teachers", label: t.teachersTitle, blurb: t.teachersBlurb },
    { href: "/temples", label: t.templesTitle, blurb: t.templesBlurb },
    { href: "/concepts", label: t.conceptsTitle, blurb: t.conceptsBlurb },
    { href: "/mathas", label: t.mathasTitle, blurb: t.mathasBlurb },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        {hero?.imageUrl && (
          <div className="hero-bg">
            <Image src={hero.imageUrl} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
        )}

        <div className="shell hero-inner reveal">
          <span className="om">ॐ</span>
          <h1 className="display deva">तत् त्वम् असि</h1>
          <p className="subtitle" style={{ color: "var(--gold)", fontStyle: "italic" }}>
            {t.heroTagline}
          </p>
          <p className="eyebrow">{t.heroSubtitle}</p>

          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.75rem" }}>
            <Link href="/verses" className="btn">
              {t.heroEnter}
            </Link>
            <Link href="/concepts" className="btn-ghost">
              {t.heroExplore} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Verse of the day ─────────────────────────────── */}
      <section className="shell stack-lg">
        <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
          {t.verseOfTheDay}
        </p>

        <article className="verse verse-mahavakya">
          <p className="sanskrit">{verse.sanskrit}</p>
          <p className="translit" style={{ marginTop: "0.6rem", fontSize: "1.05rem" }}>
            {verse.transliteration}
          </p>
          <p className="prose" style={{ marginTop: "1.4rem", fontSize: "1.1rem", color: "var(--ink-0)" }}>
            {verse.translation}
          </p>
          <div className="card-foot">
            <span className="meta">
              {verse.source} · {verse.locator}
            </span>
            <Link href={`/verses/${verse.id}`} className="btn-ghost">
              {t.readMore} →
            </Link>
          </div>
          {!verse.isCited && <p className="notice-uncited">⚠ {t.uncitedNotice}</p>}
        </article>
      </section>

      {/* ── Mahavakyas ───────────────────────────────────── */}
      <section className="shell stack-lg">
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="eyebrow">{t.mahavakyas}</p>
          <p className="lede" style={{ marginTop: "0.9rem" }}>
            {t.mahavakyasBlurb}
          </p>
        </div>

        <div className="grid-cards">
          {mahavakyas.map((m) => (
            <Link key={m.id} href={`/verses/${m.id}`} className="verse" style={{ display: "block" }}>
              <p className="sanskrit" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>
                {m.sanskrit}
              </p>
              <p className="translit" style={{ marginTop: "0.45rem" }}>{m.transliteration}</p>
              <p className="card-text clamp-3" style={{ marginTop: "1rem" }}>
                {m.translation}
              </p>
              <span className="meta" style={{ display: "block", marginTop: "1.1rem" }}>
                {m.source}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured temple ──────────────────────────────── */}
      {hero && (
        <section className="shell stack-lg">
          <div className="feature">
            <div className="feature-media">
              {hero.imageUrl && (
                <Image
                  src={hero.imageUrl}
                  alt={hero.name}
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            <div className="feature-body">
              <p className="eyebrow">{t.templesTitle}</p>
              <h2 className="title">{hero.name}</h2>
              <p className="subtitle" style={{ color: "var(--ink-2)" }}>{hero.nameLocal}</p>
              <p className="prose">{hero.description}</p>
              <div className="chips" style={{ marginTop: "0.35rem" }}>
                <span className="chip">{hero.location}</span>
                <span className="chip">{hero.dynasty}</span>
                <span className="chip chip-gold">{hero.centuryBuilt}</span>
              </div>
              <Link href="/temples" className="btn-ghost" style={{ marginTop: "0.75rem" }}>
                {t.viewAll} →
              </Link>
              {hero.imageCredit && <p className="credit">{t.imageCredit}: {hero.imageCredit}</p>}
            </div>
          </div>
        </section>
      )}

      {/* ── Acharyas ─────────────────────────────────────── */}
      <section className="shell stack-lg">
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="eyebrow">{t.teachersTitle}</p>
          <p className="lede" style={{ marginTop: "0.9rem" }}>{t.teachersBlurb}</p>
        </div>

        <div className="grid-cards">
          {teachers.map((p) => (
            <Link key={p.id} href={`/teachers/${p.slug}`} className="card">
              {p.imageUrl && (
                <div className="card-img">
                  <Image src={p.imageUrl} alt={p.name} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: "cover" }} />
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
          ))}
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────── */}
      <section className="shell stack-xl">
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="eyebrow">{t.explorePillars}</p>
          <p className="lede" style={{ marginTop: "0.9rem" }}>{t.pillarsBlurb}</p>
        </div>

        <div className="grid-cards">
          {pillars.map((p) => (
            <Link key={p.href} href={p.href} className="card">
              <div className="card-body">
                <h3 className="card-title">{p.label}</h3>
                <p className="card-text">{p.blurb}</p>
                <div className="card-foot">
                  <span className="btn-ghost">{t.viewAll} →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Concepts strip ───────────────────────────────── */}
      <section className="shell stack-lg">
        <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>{t.conceptsTitle}</p>
        <div className="chips">
          {concepts.map((c) => (
            <Link key={c.id} href={`/concepts/${c.slug}`} className="chip chip-gold" style={{ fontSize: "0.72rem", padding: "0.5rem 1rem" }}>
              <span className="deva">{c.termSanskrit}</span>
              <span style={{ color: "var(--ink-2)" }}>{c.term}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
