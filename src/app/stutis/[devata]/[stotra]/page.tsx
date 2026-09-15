import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { DEFAULT_LOCALE } from "@/i18n/config";
import {
  getDevata,
  getStotraNeighbours,
  getStotraParams,
  getStotraVerses,
  getStotraView,
} from "@/lib/data";
import { LanguageChoice } from "@/components/content/LanguageChoice";
import { StotraText } from "@/components/stotra/StotraText";
import { StotraVideo } from "@/components/stotra/StotraVideo";
import { Arrow } from "@/components/ui/Arrow";

/**
 * A stotra: the reader's head, as the Upanishads have it, a recitation
 * to listen to (StotraVideo, which loads nothing from YouTube until
 * played), then the whole text in one column (StotraText), the meaning
 * closed until the reader opens it, and the stotras either side of it.
 *
 * A stotra registers itself in seed/stotras.ts and needs no page code.
 */

export function generateStaticParams() {
  return getStotraParams();
}

export function generateMetadata({ params }: { params: { stotra: string } }): Metadata {
  const s = getStotraView(params.stotra, DEFAULT_LOCALE);
  return s ? { title: s.name, description: s.summary } : {};
}

export default function StotraPage({ params }: { params: { devata: string; stotra: string } }) {
  const { locale, t } = getTranslations();
  const s = getStotraView(params.stotra, locale);
  if (!s || s.devata !== params.devata) notFound();
  const d = getDevata(s.devata, locale);
  if (!d) notFound();

  const verses = getStotraVerses(s.slug, locale);
  const { prev, next } = getStotraNeighbours(s.slug, locale);

  return (
    <div className="reader stotra-page">
      <header className="reader-head shell">
        {s.image && (
          <Link href={`/stutis/${d.slug}`} className="stotra-thumb" aria-label={d.name}>
            <Image
              src={s.image.src}
              alt=""
              fill
              priority
              sizes="112px"
              style={{ objectFit: "cover", objectPosition: s.image.position }}
            />
          </Link>
        )}
        <Link href={`/stutis/${d.slug}`} className="reader-kicker">
          {d.name}
        </Link>

        <h1 className={`reader-title stotra-title ${s.scriptClass}`}>{s.nameSanskrit}</h1>
        <p className="reader-name">{s.name}</p>
        {locale === "en" && <p className="translit reader-iast">{s.nameIast}</p>}
        <p className="reader-lede">{s.summary}</p>

        <div className="reader-facts">
          <span>{s.origin}</span>
          {s.composer && <span>{s.composer}</span>}
        </div>

        <LanguageChoice current={locale} label={t.chooseLanguage} />

        {s.coverage && (
          <p className="reader-partial">
            <strong>{t.labelSelections}</strong> {s.coverage}
          </p>
        )}
      </header>

      <div className="shell-narrow">
        {s.video && (
          <StotraVideo
            video={s.video}
            labels={{ listen: t.labelListen, play: t.labelPlayVideo, watch: t.labelWatchOnYouTube }}
          />
        )}
        <StotraText
          verses={verses}
          showIast={locale === "en"}
          labels={{
            showMeaning: t.labelShowMeaning,
            hideMeaning: t.labelHideMeaning,
            verse: t.labelVerse,
            invocation: t.labelInvocation,
            phala: t.labelPhala,
            uncited: t.uncitedNotice,
          }}
        />
      </div>

      <footer className="shell-narrow stotra-foot">
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
          <p className="credit">
            {t.labelSource}: {verses[0]?.sourceTitle}
          </p>
          {s.image && (
            <p className="credit">
              {t.imageCredit}:{" "}
              {s.image.sourceUrl ? (
                <a href={s.image.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {s.image.credit}
                </a>
              ) : (
                s.image.credit
              )}
            </p>
          )}
        </div>

        <Link href={`/stutis/${d.slug}`} className="btn-ghost">
          <Arrow dir="left" /> {d.name}
        </Link>
      </footer>
    </div>
  );
}
