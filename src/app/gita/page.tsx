import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { gitaStrings } from "@/i18n/gita";
import Link from "next/link";
import { getGita, getGitaChapters, getGitaVerseCounts } from "@/lib/data";
import { TextIndex } from "@/components/content/TextIndex";
import { Reveal } from "@/components/motion/Reveal";
import { scriptFor, scriptClass } from "@/lib/script";

export const metadata: Metadata = {
  title: "Geetha Rasa Dhara",
  description:
    "The Bhagavad Gita — seven hundred verses in eighteen chapters, and the one text on which Shankara, Ramanuja and Madhva each wrote a bhashya on the same verses.",
};

export default function GitaPage() {
  const { locale, t } = getTranslations();
  const { work } = getGita(locale);
  const g = gitaStrings(locale);
  const chapterNotes = getGitaChapters(locale);
  const counts = getGitaVerseCounts();
  const section = sectionsFor(locale).find((s) => s.id === "gita")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${scriptClass(locale)} pagehead-glyph`} aria-hidden="true">{scriptFor(section.glyph, locale)}</span>
          <h1 className="title">{work.name}</h1>
          <p className={`sanskrit ${scriptClass(locale)}`} style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            {scriptFor(work.nameSanskrit, locale)}
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
            <div className="fact-value">{chapterNotes.length.toLocaleString("en-IN")}</div>
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
              <span className="band-index">{chapterNotes.length.toLocaleString("en-IN")}</span>
              <h2 className="title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                {g.chaptersTitle}
              </h2>
            </div>
          </div>
        </Reveal>

        <p className="gi-lede">{g.chaptersLede}</p>

        <ol className="gi-grid">
          {chapterNotes.map((c) => (
            <li key={c.n}>
              <Link href={`/gita/${c.n}`} className="gi-card">
                <span className="gi-n">{c.n.toLocaleString("en-IN")}</span>
                <span className="gi-body">
                  <span className="gi-name">{c.name}</span>
                  <span className={`gi-sanskrit ${scriptClass(locale)}`}>{c.sanskrit}</span>
                  <span className="gi-card-lede">{c.lede}</span>
                  <span className="gi-verses">
                    {c.verses.toLocaleString("en-IN")} {g.labelVerses}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Why the chapters add up to one more than seven hundred. */}
        <p className="gi-note">
          {g.verseNote
            .replace("{summed}", counts.summed.toLocaleString("en-IN"))
            .replace("{traditional}", counts.traditional.toLocaleString("en-IN"))}
        </p>

        {/* And why there are no verses here yet. */}
        <div className="gi-mula">
          <p className="gi-mula-text">{g.mulaNote}</p>
        </div>
      </section>

    </>
  );
}
