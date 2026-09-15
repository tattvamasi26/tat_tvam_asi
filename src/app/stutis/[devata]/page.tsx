import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { getDevata, getDevatas, getStotraGroups, type ImageView, type StotraGroup } from "@/lib/data";
import { Arrow } from "@/components/ui/Arrow";

/**
 * One devata: their picture beside their name (the site's feature
 * block), a festival of theirs if they have one, then their stotras in
 * sections — daily prayers, Vedic mantras, longer stotras — numbered
 * straight through in the order they are said. The sections alternate
 * between plain paper and the deeper paper band, each with a picture of
 * the devata beside it where one has been chosen. Only devatas with at
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
  const groups = getStotraGroups(d.slug, locale);
  const sectioned = groups.length > 1;
  const section = sectionsFor(locale).find((s) => s.id === "stutis")!;

  const heading: Record<StotraGroup, string> = {
    daily: t.labelGroupDaily,
    vedic: t.labelGroupVedic,
    stotra: t.labelGroupStotra,
  };
  const note: Record<StotraGroup, string> = {
    daily: t.labelGroupDailyNote,
    vedic: t.labelGroupVedicNote,
    stotra: t.labelGroupStotraNote,
  };

  // Numbered straight through the sections, in the order they are said.
  const starts: number[] = [];
  groups.forEach((g, i) => starts.push(i === 0 ? 1 : starts[i - 1] + groups[i - 1].stotras.length));

  // Every picture on the page, credited once.
  const pictures = [d.image, d.festival?.image ?? null, ...groups.map((g) => (sectioned ? g.image : null))]
    .filter((p): p is ImageView => p !== null)
    .filter((p, i, all) => all.findIndex((q) => q.src === p.src) === i);

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

      {d.festival && (
        <section className="stutis-band festival" aria-labelledby="festival-title">
          <div className="shell festival-inner">
            {d.festival.image && (
              <div className="festival-media">
                <Image
                  src={d.festival.image.src}
                  alt={d.festival.image.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 340px"
                  style={{ objectFit: "cover", objectPosition: d.festival.image.position }}
                />
              </div>
            )}
            <div className="festival-body">
              <p className="eyebrow">{t.labelFestival}</p>
              <h2 id="festival-title" className="festival-title">
                {d.festival.name}
              </h2>
              <p className="festival-when">{d.festival.when}</p>
              <p className="festival-text">{d.festival.text}</p>
              {d.festival.stotra && (
                <Link href={d.festival.stotra.href} className="btn">
                  {d.festival.stotra.name} <Arrow />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {groups.map((g, gi) => (
        <section
          key={g.group}
          className="stotra-group"
          data-tone={gi % 2 === 1 ? "tint" : undefined}
          aria-labelledby={`stotras-${g.group}`}
        >
          <div className="shell stotra-group-inner" data-pictured={sectioned && g.image ? "" : undefined}>
            {sectioned && g.image && (
              <figure className="stotra-group-media">
                <Image
                  src={g.image.src}
                  alt={g.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 240px"
                  style={{ objectFit: "cover", objectPosition: g.image.position }}
                />
              </figure>
            )}
            <div className="stotra-group-body">
              <h2 id={`stotras-${g.group}`} className="stutis-h2">
                {sectioned ? heading[g.group] : t.labelStotras}
              </h2>
              {sectioned && <p className="stotra-group-note">{note[g.group]}</p>}
              <ol className="stotra-list" start={starts[gi]}>
                {g.stotras.map((s, i) => (
                  <li key={s.slug}>
                    <Link href={s.href} className="stotra-row">
                      <span className="stotra-row-num">{starts[gi] + i}</span>
                      <span className="stotra-row-body">
                        <span className="stotra-row-name">{s.name}</span>
                        <span className={`stotra-row-sanskrit ${s.scriptClass}`}>{s.nameSanskrit}</span>
                        <span className="stotra-row-summary">{s.summary}</span>
                      </span>
                      <span className="stotra-row-meta">
                        {s.video && <span className="chip chip-video">{t.labelVideo}</span>}
                        {s.verseCount != null && (
                          <span className="chip">
                            {s.verseCount} {s.verseCount === 1 ? t.labelVerse : t.labelVerseCount}
                          </span>
                        )}
                        <Arrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

      <section className="shell stutis-foot">
        {pictures.length > 0 && (
          <div className="stutis-credit">
            {pictures.map((p) => (
              <p key={p.src} className="credit">
                {t.imageCredit}:{" "}
                {p.sourceUrl ? (
                  <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {p.credit}
                  </a>
                ) : (
                  p.credit
                )}
              </p>
            ))}
          </div>
        )}

        <Link href="/stutis" className="btn-ghost stutis-back">
          <Arrow dir="left" /> {t.labelAllDevatas}
        </Link>
      </section>
    </>
  );
}
