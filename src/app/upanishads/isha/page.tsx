import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getIshaVerses, getIshaText } from "@/lib/data";
import { VIDEO_SERIES } from "@/lib/seed/isha-video";
import { Aurora } from "@/components/motion/Aurora";
import { LanguageChoice } from "@/components/content/LanguageChoice";
import { VerseStage } from "@/components/content/VerseStage";
import { VerseSpine } from "@/components/content/VerseSpine";

export const metadata: Metadata = {
  title: "Isha Upanishad",
  description:
    "The complete Īśāvāsya Upaniṣad — eighteen verses and the śānti mantra, with Sanskrit, transliteration, translation and a full commentary on every verse, readable in English, Kannada or Hindi.",
};

export default function IshaPage() {
  const { locale, t } = getTranslations();
  const work = getIshaText(locale);
  const verses = getIshaVerses(locale);

  if (!work) return null;

  const spineIds = verses.map((v) => ({ id: v.id, locator: v.locator }));

  return (
    <div className="reader">
      <Aurora />

      {/* ── Title ─────────────────────────────────────── */}
      <header className="reader-head shell">
        <p className="reader-kicker">{t.navUpanishads}</p>

        <h1 className="reader-title deva">{work.nameSanskrit}</h1>
        <p className="reader-name">{work.name}</p>
        <p className="translit reader-iast">{work.nameIast}</p>

        <p className="reader-lede">{work.summary}</p>

        <div className="reader-facts">
          <span>
            <i>{t.labelVeda}</i> {work.veda}
          </span>
          <span>
            <i>{t.labelVerseCount}</i> {work.verseCount}
          </span>
          <span>
            <i>{t.labelKeyTeaching}</i> {work.keyTeaching}
          </span>
        </div>

        {/* The first decision the reader makes, given real estate
            rather than buried in the masthead. */}
        <LanguageChoice current={locale} label={t.chooseLanguage} />

        <p className="reader-note">{t.readerHint}</p>
      </header>

      {/* ── The verses ────────────────────────────────── */}
      <div className="reader-body shell">
        <VerseSpine
          ids={spineIds}
          labels={{
            index: t.navIndex,
            verse: t.labelVerse,
            invocation: t.labelInvocation,
          }}
        />

        <div className="reader-verses">
          {verses.map((v, i) => (
            <VerseStage
              key={v.id}
              verse={v}
              index={i}
              labels={{
                verse: t.labelVerse,
                invocation: t.labelInvocation,
                explanation: t.labelExplanation,
                hideExplanation: t.labelHideExplanation,
                terms: t.labelTerms,
                uncited: t.uncitedNotice,
                watch: t.labelWatch,
                talk: t.labelTalk,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Out ───────────────────────────────────────── */}
      <footer className="shell reader-foot">
        <div className="reader-credit">
          <p className="fact-label">{t.labelLectures}</p>
          <p className="card-text">
            {VIDEO_SERIES.speaker} · {VIDEO_SERIES.org}
          </p>
          <a
            className="btn-ghost"
            href={VIDEO_SERIES.channel}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.labelWatch} ↗
          </a>
        </div>

        <div>
          <p className="meta">
            {t.labelSource}: {verses[0]?.sourceTitle}
          </p>
          <Link href="/upanishads" className="btn-ghost" style={{ marginTop: "0.8rem" }}>
            ← {t.upanishadsTitle}
          </Link>
        </div>
      </footer>
    </div>
  );
}
