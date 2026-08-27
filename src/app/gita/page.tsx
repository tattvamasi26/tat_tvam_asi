import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { getGita } from "@/lib/data";
import { TextIndex } from "@/components/content/TextIndex";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Geetha Rasa Dhara",
  description:
    "The Bhagavad Gita — seven hundred verses in eighteen chapters, and the one text on which Shankara, Ramanuja and Madhva each wrote a bhashya on the same verses.",
};

export default function GitaPage() {
  const { locale, t } = getTranslations();
  const { work, chapters } = getGita(locale);
  const section = sectionsFor(locale).find((s) => s.id === "gita")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className="deva pagehead-glyph">{section.glyph}</span>
          <h1 className="title">{work.name}</h1>
          <p className="sanskrit" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            {work.nameSanskrit}
          </p>
          <p className="lede">{work.summary}</p>
        </div>
      </section>

      <section className="shell">
        <div className="factbar">
          <div className="fact">
            <div className="fact-label">{t.labelVerseCount}</div>
            <div className="fact-value">{work.verseCount}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{t.labelChapter}</div>
            <div className="fact-value">{chapters.length}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{t.labelKeyTeaching}</div>
            <div className="fact-value" style={{ fontSize: "0.95rem" }}>
              {work.keyTeaching}
            </div>
          </div>
        </div>
      </section>

      <section className="shell stack-lg">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">18</span>
              <h2 className="title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                {t.labelChapter}
              </h2>
            </div>
          </div>
        </Reveal>

        <TextIndex
          items={chapters}
          dense
          labels={{
            keyTeaching: t.labelKeyTeaching,
            verseCount: t.labelVerseCount,
            veda: t.labelVeda,
          }}
        />
      </section>
    </>
  );
}
