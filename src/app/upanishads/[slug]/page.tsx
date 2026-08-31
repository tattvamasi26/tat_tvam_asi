import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { DEFAULT_LOCALE } from "@/i18n/config";
import {
  getUpanishadVerses,
  getUpanishadHeader,
  getUpanishadSeries,
  getUpanishadCoverage,
  getReadableSlugs,
} from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Aurora } from "@/components/motion/Aurora";
import { LanguageChoice } from "@/components/content/LanguageChoice";
import { VerseStage } from "@/components/content/VerseStage";
import { VerseSpine } from "@/components/content/VerseSpine";

/**
 * The reader, for any Upanishad that has been entered completely.
 *
 * This was a page written for the Isha. It is now the template: a
 * text registers its verses, commentary and lectures in
 * seed/upanishads.ts and gets this whole experience — script
 * transliteration, per-verse commentary, the spine, keyboard
 * navigation, talks — without a line of new page code.
 *
 * Only registered texts resolve here. A text that exists in the
 * `texts` table but has no verses entered yet 404s rather than
 * rendering an empty reader, because an empty reader would imply a
 * completeness the content does not have.
 */

export function generateStaticParams() {
  return getReadableSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const work = getUpanishadHeader(params.slug, DEFAULT_LOCALE);
  if (!work) return {};
  return {
    title: work.name,
    description: work.summary,
  };
}

export default function UpanishadReader({ params }: { params: { slug: string } }) {
  const { locale, t } = getTranslations();

  const work = getUpanishadHeader(params.slug, locale);
  const verses = getUpanishadVerses(params.slug, locale);
  const series = getUpanishadSeries(params.slug);
  // Non-null only for a text held as selections; see seed/upanishads.ts.
  const coverage = getUpanishadCoverage(params.slug, locale);

  // No verses entered means there is no reader to show.
  if (!work || verses.length === 0) notFound();

  const spineIds = verses.map((v) => ({ id: v.id, locator: v.locator }));

  return (
    <div className="reader">
      <Aurora />

      {/* ── Title ─────────────────────────────────────── */}
      <header className="reader-head shell">
        <p className="reader-kicker">{t.navUpanishads}</p>

        <h1 className={`reader-title ${scriptClass(locale)}`}>{work.nameSanskrit}</h1>
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

        {coverage && (
          <p className="reader-partial">
            <strong>{t.labelSelections}</strong> {coverage}
          </p>
        )}

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
        {series && (
          <div className="reader-credit">
            <p className="fact-label">{t.labelLectures}</p>
            <p className="card-text">
              {series.speaker} · {series.org}
            </p>
            <a
              className="btn-ghost"
              href={series.channel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.labelWatch} ↗
            </a>
          </div>
        )}

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
