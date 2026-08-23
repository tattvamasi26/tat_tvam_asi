import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Tat Tvam Asi is trying to be: a single, cited reference for the whole of Sanatana Dharma — texts, temples, teachers, practices and stotras.",
};

export default function AboutPage() {
  const { t } = getTranslations();

  const pillars = [
    { title: t.versesTitle, body: t.versesBlurb },
    { title: t.upanishadsTitle, body: t.upanishadsBlurb },
    { title: t.teachersTitle, body: t.teachersBlurb },
    { title: t.templesTitle, body: t.templesBlurb },
    { title: t.conceptsTitle, body: t.conceptsBlurb },
    { title: t.mathasTitle, body: t.mathasBlurb },
  ];

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <p className="eyebrow">{t.navAbout}</p>
          <h1 className="title">तत् त्वम् असि</h1>
          <p className="lede">{t.footerTagline}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <p className="prose" style={{ fontSize: "1.1rem", color: "var(--ink-0)" }}>
          There is no single place that holds the whole of Sanatana Dharma — the Vedic corpus, the
          Upanishads, the Gita, the bhashyas of every sampradaya, the temples and their history, the
          practices and traditions, the stotras and their recitation. This is an attempt to build one,
          incrementally and without an end date.
        </p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="eyebrow">Citation before scale</p>
        <p className="prose" style={{ marginTop: "0.9rem" }}>
          A reference is only worth as much as its sources. Every translation and every commentary
          entry must name where it came from — this is enforced in the database itself, not left to
          discipline. Content inherited from earlier drafts is labelled as an uncited editorial
          paraphrase until a properly attributed translation replaces it, rather than quietly passed
          off as scholarship.
        </p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="eyebrow">{t.language}</p>
        <p className="prose" style={{ marginTop: "0.9rem" }}>
          The site reads in Kannada, English and Hindi, and the switch changes the content, not only
          the menus. Each language is a row in the database rather than a separate copy of the site,
          so a fourth language is a data task and not an engineering one.
        </p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="eyebrow">{t.explorePillars}</p>
        <div className="grid-cards" style={{ marginTop: "1.5rem" }}>
          {pillars.map((p) => (
            <div key={p.title} className="card">
              <div className="card-body">
                <h3 className="card-title" style={{ fontSize: "1.2rem" }}>{p.title}</h3>
                <p className="card-text">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <Link href="/verses" className="btn">{t.heroEnter}</Link>
        </div>
      </section>
    </>
  );
}
