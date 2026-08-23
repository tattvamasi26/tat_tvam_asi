import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getAllConcepts } from "@/lib/data";

export const metadata: Metadata = { title: "Concepts" };

export default function ConceptsPage() {
  const { locale, t } = getTranslations();
  const concepts = getAllConcepts(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.navConcepts}</p>
          <h1 className="title">{t.conceptsTitle}</h1>
          <p className="lede">{t.conceptsBlurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="grid-cards">
          {concepts.map((c) => (
            <Link key={c.id} href={`/concepts/${c.slug}`} className="card">
              <div className="card-body">
                <p className="sanskrit" style={{ fontSize: "2.1rem" }}>{c.termSanskrit}</p>
                <h2 className="card-title" style={{ marginTop: "0.3rem" }}>{c.term}</h2>
                <p className="translit">{c.termIast}</p>
                <p className="card-text" style={{ marginTop: "0.75rem" }}>{c.definition}</p>
                <div className="card-foot">
                  <span className="btn-ghost">{t.readMore} →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
