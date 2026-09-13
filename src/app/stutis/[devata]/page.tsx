import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDevata, getDevatas, getStotraViews } from "@/lib/data";
import { Shrine } from "@/components/stotra/Shrine";
import { SanctumField } from "@/components/stotra/SanctumField";
import { EMBER_HUES } from "@/components/stotra/themes";
import { Arrow } from "@/components/ui/Arrow";

/**
 * One devata: the picture in its shrine, who they are, and their
 * stotras in the order they are said. Only devatas with at least one
 * stotra entered in full have a page; the rest 404 until they do.
 */

export function generateStaticParams() {
  return getDevatas(DEFAULT_LOCALE).map((d) => ({ devata: d.slug }));
}

export function generateMetadata({ params }: { params: { devata: string } }): Metadata {
  const d = getDevata(params.devata, DEFAULT_LOCALE);
  return d ? { title: `${d.name} stutis`, description: d.blurb } : {};
}

export default function DevataPage({ params }: { params: { devata: string } }) {
  const { locale, t } = getTranslations();
  const d = getDevata(params.devata, locale);
  if (!d) notFound();
  const stotras = getStotraViews(d.slug, locale);
  const section = sectionsFor(locale).find((s) => s.id === "stutis")!;

  return (
    <div className="sanctum" data-theme={d.theme}>
      <section className="sanctum-hero devata-hero">
        <SanctumField hues={EMBER_HUES[d.theme]} />
        <div className="shell devata-hero-inner">
          <div className="devata-hero-text">
            <Link href="/stutis" className="sanctum-kicker">
              {section.label}
            </Link>
            <h1 className={`devata-title ${d.scriptClass}`}>{d.nameSanskrit}</h1>
            <p className="devata-name">{d.name}</p>
            <p className="devata-epithet">{d.epithet}</p>
            <p className="sanctum-lede">{d.blurb}</p>
          </div>
          {d.image && (
            <div className="devata-hero-media">
              <Shrine image={d.image} sizes="(min-width: 900px) 360px, 72vw" priority />
              <p className="sanctum-credit">
                {t.imageCredit}:{" "}
                <a href={d.image.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {d.image.credit}
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="shell stotra-section">
        <h2 className="sanctum-h2">{t.labelInOrder}</h2>
        <ol className="stotra-list">
          {stotras.map((s, i) => (
            <li key={s.slug}>
              <Link href={s.href} className="stotra-card">
                <span className="stotra-card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="stotra-card-head">
                  <span className={`stotra-card-sanskrit ${s.scriptClass}`}>{s.nameSanskrit}</span>
                  <span className="stotra-card-name">{s.name}</span>
                  <span className="translit stotra-card-iast">{s.nameIast}</span>
                </span>
                <span className={`stotra-card-line ${s.scriptClass}`}>{s.firstLine}</span>
                <span className="stotra-card-summary">{s.summary}</span>
                <span className="stotra-card-meta">
                  <span className="sanctum-chip">{s.origin}</span>
                  {s.verseCount != null && (
                    <span className="sanctum-chip">
                      {s.verseCount} {t.labelVerseCount}
                    </span>
                  )}
                </span>
                <span className="sanctum-cta">
                  {t.labelReadNow} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <Link href="/stutis" className="sanctum-back">
          <Arrow dir="left" /> {t.labelAllDevatas}
        </Link>
      </section>
    </div>
  );
}
