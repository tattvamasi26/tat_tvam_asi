import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { getDevatas, getPlannedDevatas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Devatha Stutis",
  description: "Stotras and mantras, arranged by devata.",
};

/**
 * The stutis, devata by devata — laid out like the Temples index: the
 * page head, then a card for each devata with their picture, then the
 * devatas still to come.
 */
export default function StutisPage() {
  const { locale, t } = getTranslations();
  const section = sectionsFor(locale).find((s) => s.id === "stutis")!;
  const devatas = getDevatas(locale);
  const planned = getPlannedDevatas(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{section.label}</p>
          <h1 className="title">{section.label}</h1>
          <p className="lede">{section.blurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="grid-cards">
          {devatas.map((d) => (
            <Link key={d.slug} href={`/stutis/${d.slug}`} className="card devata-card">
              {d.image && (
                <div className="card-img devata-card-img">
                  <Image
                    src={d.image.src}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: d.image.position }}
                  />
                </div>
              )}
              <div className="card-body">
                <h2 className="card-title">{d.name}</h2>
                <p className={`devata-sanskrit ${d.scriptClass}`}>{d.nameSanskrit}</p>
                <p className="card-text">{d.epithet}</p>
                <div className="card-foot">
                  <span className="chip chip-gold">
                    {d.stotraCount} {d.stotraCount === 1 ? t.labelStotraOne : t.labelStotraMany}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {planned.length > 0 && (
          <div className="coming-soon">
            <p className="fact-label">{t.labelComingSoon}</p>
            <ul className="coming-soon-list">
              {planned.map(({ devata }) => (
                <li key={devata.slug} className="chip">
                  {devata.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
