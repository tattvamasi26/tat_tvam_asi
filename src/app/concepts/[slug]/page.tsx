import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
// The link out to the three commentators is labelled with the
// acharyas section's own name, so the two never disagree.
import { sectionsFor } from "@/i18n/sections";
import { getConceptBySlug, getAllConcepts } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";
import { scriptFor, scriptClass } from "@/lib/script";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getConceptBySlug(params.slug, "en");
  return c ? { title: c.term, description: c.definition } : {};
}

/**
 * One concept.
 *
 * The page used to be a definition, a paragraph and some chips, and
 * the paragraph spoke in Advaita's voice without saying so — "Brahman
 * is the sole reality", with no hint that two of the three great
 * commentators on those same verses denied it.
 *
 * So two things are added. Where the schools divide, all three
 * readings are printed side by side in their own terms; and every
 * term says where it is chiefly set out, so a reader can go and check
 * rather than take this site's word for any of it.
 */
export default function ConceptDetailPage({ params }: { params: { slug: string } }) {
  const { locale, t } = getTranslations();
  const c = getConceptBySlug(params.slug, locale);
  if (!c) notFound();

  const all = getAllConcepts(locale);
  const related = c.relatedConcepts
    .map((slug) => all.find((x) => x.slug === slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const sc = scriptClass(locale);
  const acharyas = sectionsFor(locale).find((x) => x.id === "acharyas")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <Link href="/concepts" className="btn-ghost" style={{ marginBottom: "0.5rem" }}>
            <Arrow dir="left" /> {t.conceptsTitle}
          </Link>
          <p className={`sanskrit ${sc} cn-hero-term`}>{scriptFor(c.termSanskrit, locale)}</p>
          <h1 className="title">{c.term}</h1>
          <p className="subtitle translit">{c.termIast}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <p className="eyebrow">{t.labelDefinition}</p>
        <p className="cn-definition">{c.definition}</p>

        <hr className="rule" style={{ margin: "2.4rem 0 1.8rem" }} />

        <p className="prose" style={{ fontSize: "1.05rem" }}>{c.detailedExplanation}</p>

        {/* The three readings, in the order the commentaries were
            written. None is given the last word. */}
        {c.schools && (
          <div className="cn-schools">
            <h2 className="cn-schools-title">{t.labelSchools}</h2>
            <p className="cn-schools-note">{t.labelSchoolsNote}</p>
            <ul className="cn-schools-list">
              <li>
                <span className="cn-school-name">{t.schoolAdvaita}</span>
                <span className="cn-school-says">{c.schools.advaita}</span>
              </li>
              <li>
                <span className="cn-school-name">{t.schoolVishishtadvaita}</span>
                <span className="cn-school-says">{c.schools.vishishtadvaita}</span>
              </li>
              <li>
                <span className="cn-school-name">{t.schoolDvaita}</span>
                <span className="cn-school-says">{c.schools.dvaita}</span>
              </li>
            </ul>
            <Link href="/acharyas" className="cn-schools-link">
              {acharyas.label} <Arrow />
            </Link>
          </div>
        )}

        {c.sourceText && (
          <div className="cn-source">
            <p className="fact-label">{t.labelSourceText}</p>
            <p>{c.sourceText}</p>
          </div>
        )}

        {related.length > 0 && (
          <div style={{ marginTop: "2.4rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>{t.labelRelated}</p>
            <div className="chips">
              {related.map((r) => (
                <Link key={r.slug} href={`/concepts/${r.slug}`} className="chip chip-gold" style={{ padding: "0.5rem 1rem" }}>
                  <span className={sc}>{scriptFor(r.termSanskrit, locale)}</span>
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
