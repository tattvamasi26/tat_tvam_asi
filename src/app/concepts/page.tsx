import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getConceptGroups, getAllConcepts } from "@/lib/data";
import { scriptFor, scriptClass } from "@/lib/script";

export const metadata: Metadata = {
  title: "Concepts",
  description:
    "The vocabulary of the tradition — what is there, what you are, action and its consequence, how a life is ordered, and the way out.",
};

/**
 * The concepts, in five groups.
 *
 * A flat alphabet of terms is a glossary, and a glossary is the one
 * shape in which none of these words make sense: brahman, karma and
 * āśrama are not three entries of the same kind. So they are read in
 * groups that answer a question each — what is there, what you are,
 * action and its consequence, how a life is ordered, and the way out
 * — which is also roughly the order the tradition itself takes them
 * in.
 *
 * A term where the three Vedānta schools disagree is marked here, and
 * its page prints all three readings. That mark is the most useful
 * thing on this index: it tells a reader, before they read a word,
 * which of these are settled and which are still being argued.
 */
export default function ConceptsPage() {
  const { locale, t } = getTranslations();
  const groups = getConceptGroups(locale);
  const all = getAllConcepts(locale);
  const sc = scriptClass(locale);

  const heading: Record<string, string> = {
    reality: t.conceptGroupReality,
    self: t.conceptGroupSelf,
    action: t.conceptGroupAction,
    life: t.conceptGroupLife,
    path: t.conceptGroupPath,
  };

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.conceptCount.replace("{n}", all.length.toLocaleString("en-IN"))}</p>
          <h1 className="title">{t.conceptsTitle}</h1>
          <p className="lede">{t.conceptsBlurb}</p>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="cn-group" aria-labelledby={`cg-${g.id}`}>
          <div className="shell cn-group-inner">
            <h2 className="cn-group-title" id={`cg-${g.id}`}>
              {heading[g.id]}
            </h2>

            <ul className="cn-grid">
              {g.concepts.map((c) => (
                <li key={c.id}>
                  <Link href={`/concepts/${c.slug}`} className="cn-card">
                    <span className={`cn-term ${sc}`}>{scriptFor(c.termSanskrit, locale)}</span>
                    <span className="cn-name">{c.term}</span>
                    <span className="cn-iast">{c.termIast}</span>
                    <span className="cn-def">{c.definition}</span>
                    {/* Said on the index, not only on the page: it tells
                        a reader which of these are settled before they
                        have read a word. */}
                    {c.schools && <span className="cn-contested">{t.labelSchools}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
