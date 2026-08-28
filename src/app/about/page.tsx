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
          <h1 className="title">{t.siteName}</h1>
          <p className="lede">{t.footerTagline}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <p className="prose" style={{ fontSize: "1.1rem", color: "var(--ink-0)" }}>
          {t.aboutIntro}
        </p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="eyebrow">{t.aboutCitationHeading}</p>
        <p className="prose" style={{ marginTop: "0.9rem" }}>
          {t.aboutCitationBody}
        </p>

        <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />

        <p className="eyebrow">{t.language}</p>
        <p className="prose" style={{ marginTop: "0.9rem" }}>
          {t.aboutLanguageBody}
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
