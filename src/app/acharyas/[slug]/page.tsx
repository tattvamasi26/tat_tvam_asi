import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getTeacherBySlug } from "@/lib/data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getTeacherBySlug(params.slug, "en");
  return p ? { title: p.name, description: p.quote } : {};
}

export default function TeacherDetailPage({ params }: { params: { slug: string } }) {
  const { locale, t } = getTranslations();
  const p = getTeacherBySlug(params.slug, locale);
  if (!p) notFound();

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <Link href="/acharyas" className="btn-ghost" style={{ marginBottom: "0.5rem" }}>
            ← {t.teachersTitle}
          </Link>
          <p className="eyebrow">{p.era}</p>
          <h1 className="title">{p.name}</h1>
          <p className="sanskrit" style={{ fontSize: "1.7rem" }}>{p.nameSanskrit}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="feature" style={{ alignItems: "start" }}>
          <div className="feature-media" style={{ aspectRatio: "3 / 4" }}>
            {p.imageUrl && (
              <Image
                src={p.imageUrl}
                alt={p.name}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
            )}
          </div>

          <div className="feature-body">
            <blockquote
              className="lede"
              style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1.2rem", fontSize: "1.2rem" }}
            >
              {p.quote}
            </blockquote>

            <p className="prose">{p.biography}</p>

            <div style={{ marginTop: "1rem" }}>
              <div className="fact-label">{t.labelTradition}</div>
              <p className="fact-value">{p.tradition}</p>
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <div className="fact-label">{t.labelKeyWorks}</div>
              <div className="chips" style={{ marginTop: "0.6rem" }}>
                {p.keyWorks.map((w) => (
                  <span key={w} className="chip">{w}</span>
                ))}
              </div>
            </div>

            {p.imageCredit && <p className="credit">{t.imageCredit}: {p.imageCredit}</p>}
          </div>
        </div>
      </section>
    </>
  );
}
