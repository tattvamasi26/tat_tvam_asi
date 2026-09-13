import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { DEFAULT_LOCALE } from "@/i18n/config";
import {
  getDevata,
  getStotraNeighbours,
  getStotraParams,
  getStotraVerses,
  getStotraView,
} from "@/lib/data";
import { LanguageChoice } from "@/components/content/LanguageChoice";
import { VerseStage } from "@/components/content/VerseStage";
import { VerseSpine } from "@/components/content/VerseSpine";
import { Shrine } from "@/components/stotra/Shrine";
import { SanctumField } from "@/components/stotra/SanctumField";
import { EMBER_HUES } from "@/components/stotra/themes";
import { Arrow } from "@/components/ui/Arrow";

/**
 * A stotra, verse by verse, in its devata's sanctum.
 *
 * The verses use the same VerseStage and spine as the Upanishad reader
 * — mūla in the reader's script, IAST, translation, glossed words,
 * commentary on request — restyled for the dark in styles/stotra.css.
 * A stotra registers itself in seed/stotras.ts and needs no page code.
 */

export function generateStaticParams() {
  return getStotraParams();
}

export function generateMetadata({ params }: { params: { stotra: string } }): Metadata {
  const s = getStotraView(params.stotra, DEFAULT_LOCALE);
  return s ? { title: s.name, description: s.summary } : {};
}

/** The faint numeral behind each verse: its number, or a double danda. */
function ghostFor(locator: string) {
  return /^\d+$/.test(locator) ? locator.padStart(2, "0") : "॥";
}

export default function StotraReader({ params }: { params: { devata: string; stotra: string } }) {
  const { locale, t } = getTranslations();
  const s = getStotraView(params.stotra, locale);
  if (!s || s.devata !== params.devata) notFound();
  const d = getDevata(s.devata, locale);
  if (!d) notFound();

  const verses = getStotraVerses(s.slug, locale);
  const { prev, next } = getStotraNeighbours(s.slug, locale);
  const section = sectionsFor(locale).find((x) => x.id === "stutis")!;

  return (
    <div className="sanctum reader stotra-reader" data-theme={d.theme}>
      <section className="sanctum-hero stotra-hero">
        <SanctumField hues={EMBER_HUES[d.theme]} />

        <header className="shell stotra-hero-inner">
          <div className="stotra-hero-text">
            <nav className="sanctum-crumbs" aria-label={section.label}>
              <Link href="/stutis">{section.label}</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/stutis/${d.slug}`}>{d.name}</Link>
            </nav>

            <h1 className={`stotra-title ${s.scriptClass}`}>{s.nameSanskrit}</h1>
            <p className="stotra-name">{s.name}</p>
            <p className="translit stotra-iast">{s.nameIast}</p>
            <p className="sanctum-lede">{s.summary}</p>

            <dl className="stotra-facts">
              <div>
                <dt>{t.labelFrom}</dt>
                <dd>{s.origin}</dd>
              </div>
              {s.composer && (
                <div>
                  <dt>{t.labelComposer}</dt>
                  <dd>{s.composer}</dd>
                </div>
              )}
              {s.metre && (
                <div>
                  <dt>{t.labelMetre}</dt>
                  <dd className="translit">{s.metre}</dd>
                </div>
              )}
            </dl>

            <LanguageChoice current={locale} label={t.chooseLanguage} />

            {s.coverage && (
              <p className="reader-partial">
                <strong>{t.labelSelections}</strong> {s.coverage}
              </p>
            )}
          </div>

          {d.image && (
            <div className="stotra-hero-media">
              <Shrine image={d.image} sizes="(min-width: 1000px) 280px, 52vw" priority />
            </div>
          )}
        </header>
      </section>

      <div className="reader-body shell">
        <VerseSpine
          ids={verses.map((v) => ({ id: v.id, locator: v.locator }))}
          labels={{ index: t.navIndex, verse: t.labelVerse, invocation: t.labelInvocation, phala: t.labelPhala }}
        />

        <div className="reader-verses">
          {verses.map((v, i) => (
            <VerseStage
              key={v.id}
              verse={v}
              index={i}
              ghost={ghostFor(v.locator)}
              labels={{
                verse: t.labelVerse,
                invocation: t.labelInvocation,
                phala: t.labelPhala,
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

      <footer className="shell stotra-foot">
        {(prev || next) && (
          <nav className="stotra-pager" aria-label={d.name}>
            {prev ? (
              <Link href={prev.href} className="pager-link" data-dir="prev">
                <span className="pager-label">
                  <Arrow dir="left" /> {t.labelPrevious}
                </span>
                <span className="pager-name">{prev.name}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={next.href} className="pager-link" data-dir="next">
                <span className="pager-label">
                  {t.labelNext} <Arrow />
                </span>
                <span className="pager-name">{next.name}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}

        <div className="stotra-foot-notes">
          <p className="sanctum-credit">
            {t.labelSource}: {verses[0]?.sourceTitle}
          </p>
          {d.image && (
            <p className="sanctum-credit">
              {t.imageCredit}:{" "}
              <a href={d.image.sourceUrl} target="_blank" rel="noopener noreferrer">
                {d.image.credit}
              </a>
            </p>
          )}
        </div>

        <div className="stotra-foot-links">
          <Link href={`/stutis/${d.slug}`} className="sanctum-back">
            <Arrow dir="left" /> {d.name}
          </Link>
          <Link href="/stutis" className="sanctum-back">
            {t.labelAllDevatas}
          </Link>
        </div>
      </footer>
    </div>
  );
}
