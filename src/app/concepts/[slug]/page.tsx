import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getConceptBySlug, getAllConcepts } from "@/lib/data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getConceptBySlug(params.slug, "en");
  return c ? { title: c.term, description: c.definition } : {};
}

export default function ConceptDetailPage({ params }: { params: { slug: string } }) {
  const { locale, t } = getTranslations();
  const c = getConceptBySlug(params.slug, locale);
  if (!c) notFound();

  const all = getAllConcepts(locale);
  const related = c.relatedConcepts
    .map((slug) => all.find((x) => x.slug === slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <Link href="/concepts" className="btn-ghost" style={{ marginBottom: "0.5rem" }}>
            ← {t.conceptsTitle}
          </Link>
          <p className="sanskrit" style={{ fontSize: "clamp(2.6rem, 7vw, 4.5rem)" }}>{c.termSanskrit}</p>
          <h1 className="title">{c.term}</h1>
          <p className="subtitle translit">{c.termIast}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <p className="eyebrow">{t.labelDefinition}</p>
        <p className="lede" style={{ marginTop: "0.8rem", fontSize: "1.25rem", color: "var(--gold)" }}>
          {c.definition}
        </p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="prose" style={{ fontSize: "1.05rem" }}>{c.detailedExplanation}</p>

        {related.length > 0 && (
          <div style={{ marginTop: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{t.labelRelated}</p>
            <div className="chips">
              {related.map((r) => (
                <Link key={r.slug} href={`/concepts/${r.slug}`} className="chip chip-gold" style={{ padding: "0.5rem 1rem" }}>
                  <span className="deva">{r.termSanskrit}</span>
                  <span style={{ color: "var(--ink-2)" }}>{r.term}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
