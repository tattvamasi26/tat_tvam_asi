import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDevata, getDevatas, getStotraViews } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";

/**
 * One devata: their picture beside their name (the site's feature
 * block), then their stotras as a numbered list. Only devatas with at
 * least one stotra entered in full have a page.
 */

export function generateStaticParams() {
  return getDevatas(DEFAULT_LOCALE).map((d) => ({ devata: d.slug }));
}

export function generateMetadata({ params }: { params: { devata: string } }): Metadata {
  const d = getDevata(params.devata, DEFAULT_LOCALE);
  return d ? { title: `${d.name} stotras`, description: d.blurb } : {};
}

export default function DevataPage({ params }: { params: { devata: string } }) {
  const { locale, t } = getTranslations();
  const d = getDevata(params.devata, locale);
  if (!d) notFound();
  const stotras = getStotraViews(d.slug, locale);
  const section = sectionsFor(locale).find((s) => s.id === "stutis")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell">
          <div className="feature devata-feature">
            {d.image && (
              <div className="feature-media devata-feature-media">
                <Image
                  src={d.image.src}
                  alt={d.image.alt}
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: d.image.position }}
                />
              </div>
            )}
            <div className="feature-body">
              <Link href="/stutis" className="eyebrow">
                {section.label}
              </Link>
              <h1 className="title devata-title">{d.name}</h1>
              <p className={`devata-sanskrit devata-sanskrit-lg ${d.scriptClass}`}>{d.nameSanskrit}</p>
              <p className="lede">{d.blurb}</p>
              <span className="chip chip-gold">
                {d.stotraCount} {d.stotraCount === 1 ? t.labelStotraOne : t.labelStotraMany}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <h2 className="stutis-h2">{t.labelStotras}</h2>
        <ol className="stotra-list">
          {stotras.map((s, i) => (
            <li key={s.slug}>
              <Link href={s.href} className="stotra-row">
                <span className="stotra-row-num">{i + 1}</span>
                <span className="stotra-row-body">
                  <span className="stotra-row-name">{s.name}</span>
                  <span className={`stotra-row-sanskrit ${s.scriptClass}`}>{s.nameSanskrit}</span>
                  <span className="stotra-row-summary">{s.summary}</span>
                </span>
                <span className="stotra-row-meta">
                  {s.verseCount != null && (
                    <span className="chip">
                      {s.verseCount} {t.labelVerseCount}
                    </span>
                  )}
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {d.image && (
          <p className="credit stutis-credit">
            {t.imageCredit}:{" "}
            <a href={d.image.sourceUrl} target="_blank" rel="noopener noreferrer">
              {d.image.credit}
            </a>
          </p>
        )}

        <Link href="/stutis" className="btn-ghost stutis-back">
          <Arrow dir="left" /> {t.labelAllDevatas}
        </Link>
      </section>
    </>
  );
}
