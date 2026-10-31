import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { gitaStrings } from "@/i18n/gita";
import Link from "next/link";
import { getGita, getGitaChapters, getGitaVerseCounts } from "@/lib/data";
import { TextIndex } from "@/components/content/TextIndex";
import { Reveal } from "@/components/motion/Reveal";
import { scriptFor, scriptClass } from "@/lib/script";
import Image from "next/image";
import { HeadPicture } from "@/components/content/HeadPicture";
import { GITA_HEAD_IMAGE, gitaChapterImage } from "@/lib/seed/gita-images";
import { toneStyle } from "@/lib/seed/picture-tones";

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

  return (
    <>
      <section className="rf-dhero has-art has-tone" style={toneStyle(GITA_HEAD_IMAGE.src)}>
        <div className="shell rf-dhero-inner">
          <h1 className="rf-dhero-title">{work.name}</h1>
          <p className={`rf-dhero-sanskrit ${scriptClass(locale)}`}>{scriptFor(work.nameSanskrit, locale)}</p>
          <p className="rf-dhero-lede">{work.summary}</p>
          <HeadPicture locale={locale} image={GITA_HEAD_IMAGE} label={work.name} drawnCredit="" />
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
          {chapterNotes.map((c) => {
            const pic = gitaChapterImage(c.n);
            return (
            <li key={c.n}>
              <Link href={`/gita/${c.n}`} className={`gi-card${pic ? " has-pic" : ""}`}>
                {pic && (
                  <span className="gi-card-pic">
                    <Image
                      src={pic.src}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: pic.position }}
                    />
                  </span>
                )}
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
            );
          })}
        </ol>

        <p className="gi-scenes-credit">{GITA_HEAD_IMAGE.credit}</p>

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
