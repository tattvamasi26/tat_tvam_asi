import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getAllTeachers } from "@/lib/data";

export const metadata: Metadata = { title: "Acharyas" };

export default function TeachersPage() {
  const { locale, t } = getTranslations();
  const teachers = getAllTeachers(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.navTeachers}</p>
          <h1 className="title">{t.teachersTitle}</h1>
          <p className="lede">{t.teachersBlurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gap: "clamp(2.5rem, 6vw, 5rem)" }}>
          {teachers.map((p, i) => (
            <article key={p.id} className="feature" data-flip={i % 2 === 1 ? "" : undefined}>
              <div className="feature-media">
                {p.imageUrl && (
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                )}
              </div>

              <div className="feature-body">
                <p className="eyebrow">{p.era}</p>
                <h2 className="title" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>
                  {p.name}
                </h2>
                <p className="sanskrit" style={{ fontSize: "1.4rem" }}>{p.nameSanskrit}</p>

                <p className="prose clamp-4">{p.biography}</p>

                <blockquote className="lede" style={{ borderLeft: "2px solid var(--gold-dim)", paddingLeft: "1.1rem" }}>
                  {p.quote}
                </blockquote>

                <div className="chips">
                  <span className="chip chip-gold">{p.tradition}</span>
                  {p.keyWorks.slice(0, 3).map((w) => (
                    <span key={w} className="chip">{w}</span>
                  ))}
                </div>

                <Link href={`/acharyas/${p.slug}`} className="btn-ghost" style={{ marginTop: "0.5rem" }}>
                  {t.readMore} →
                </Link>

                {p.imageCredit && <p className="credit">{t.imageCredit}: {p.imageCredit}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
