import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { getDevatas, getPlannedDevatas, getStotraViews, getStotraVerses } from "@/lib/data";
import { Shrine } from "@/components/stotra/Shrine";
import { SanctumField } from "@/components/stotra/SanctumField";
import { EMBER_HUES } from "@/components/stotra/themes";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Devatha Stutis",
  description: "Stotras arranged by the devata they praise — beginning with the Gayatri mantra, then Ganesha.",
};

/**
 * The stutis, devata by devata.
 *
 * Opens on the Gāyatrī — the mantra itself, set large beside her
 * picture — then a card for each devata whose stotras can be read,
 * then a plain list of the devatas still being entered. The page is a
 * dark sanctum rather than paper, lit by one soft glow from above, so
 * that the pictures and the gold of the mūla are the only bright things
 * on it.
 */
export default function StutisPage() {
  const { locale, t } = getTranslations();
  const section = sectionsFor(locale).find((s) => s.id === "stutis")!;
  const devatas = getDevatas(locale);
  const planned = getPlannedDevatas(locale);

  const first = devatas[0];
  const firstStotra = first ? getStotraViews(first.slug, locale)[0] : undefined;
  const mantra = firstStotra ? getStotraVerses(firstStotra.slug, locale).flatMap((v) => v.sanskrit) : [];

  return (
    <div className="sanctum" data-theme="savitr">
      <section className="sanctum-hero">
        <SanctumField hues={EMBER_HUES.savitr} />
        <div className="shell sanctum-hero-inner">
          <p className="sanctum-kicker">{section.label}</p>
          <h1 className="sanctum-title">
            {t.stutisHeadline} <span className="accent">{t.stutisAccent}</span>
          </h1>
          <p className="sanctum-lede">{t.stutisLede}</p>
        </div>
      </section>

      {first && firstStotra && (
        <section className="shell">
          <Link href={firstStotra.href} className="dawn-card" data-theme={first.theme}>
            <span className="dawn-text">
              <span className="sanctum-chip">{t.labelBeginHere}</span>
              <span className={`dawn-mantra ${firstStotra.scriptClass}`}>
                {mantra.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </span>
              <span className="dawn-name">{firstStotra.name}</span>
              <span className="dawn-summary">{firstStotra.summary}</span>
              <span className="sanctum-cta">
                {t.labelReadNow} <Arrow />
              </span>
            </span>
            {first.image && (
              <Shrine image={first.image} sizes="(min-width: 900px) 300px, 64vw" priority className="dawn-shrine" />
            )}
          </Link>
        </section>
      )}

      <section className="shell devata-grid" aria-label={section.label}>
        {devatas.map((d) => {
          const stotras = getStotraViews(d.slug, locale);
          return (
            <Link key={d.slug} href={`/stutis/${d.slug}`} className="devata-card" data-theme={d.theme}>
              {d.image && (
                <span className="devata-card-media">
                  <Image
                    src={d.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 900px) 34vw, 92vw"
                    style={{ objectFit: "cover", objectPosition: d.image.position }}
                  />
                </span>
              )}
              <span className={`devata-card-glyph ${d.scriptClass}`} aria-hidden="true">
                {d.nameSanskrit}
              </span>
              <span className="devata-card-body">
                <span className="devata-card-epithet">{d.epithet}</span>
                <span className="devata-card-name">{d.name}</span>
                <span className="devata-card-count">
                  {d.stotraCount} {d.stotraCount === 1 ? t.labelTextOne : t.labelTextMany}
                </span>
                <span className="devata-card-list">
                  {stotras.map((s) => (
                    <span key={s.slug}>{s.name}</span>
                  ))}
                </span>
                <span className="sanctum-cta">
                  {t.labelOpenDevata} <Arrow />
                </span>
              </span>
            </Link>
          );
        })}
      </section>

      {planned.length > 0 && (
        <section className="shell coming">
          <h2 className="sanctum-h2">{t.labelComing}</h2>
          <p className="coming-note">{t.labelComingNote}</p>
          <ul className="coming-list">
            {planned.map(({ devata, stotras }) => (
              <li key={devata.slug} className="coming-item" data-theme={devata.theme}>
                <span className={`coming-glyph ${devata.scriptClass}`} aria-hidden="true">
                  {devata.glyph}
                </span>
                <span className="coming-name">{devata.name}</span>
                <span className="coming-epithet">{devata.epithet}</span>
                <span className="coming-texts">
                  {stotras.map((s) => (
                    <span key={s.slug}>{s.name}</span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
