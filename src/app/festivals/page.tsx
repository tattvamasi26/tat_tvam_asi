import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { festivalStrings } from "@/i18n/festivals";
import { ritualStrings } from "@/i18n/rituals";
import { getFestivals } from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Festivals",
  description: "The year as it is actually kept — what is observed, when, and why. Dates are lunar, not Gregorian.",
};

/**
 * The festivals, in the order of the lunar year.
 *
 * Image-led on purpose. A festival is a thing people *see* — lamps,
 * dolls on shelves, a clay Ganesha, a pot boiling over — and a page
 * about them that leads with type reads as a reference work rather
 * than as the year it describes.
 *
 * The lunar date still sits on every card, over the photograph, since
 * it is what makes this section different from a list of articles.
 */
export default function FestivalsPage() {
  const { locale } = getTranslations();
  const f = festivalStrings(locale);
  const r = ritualStrings(locale);
  const festivals = getFestivals(locale);
  const sc = scriptClass(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{f.count(festivals.length.toLocaleString("en-IN"))}</p>
          <h1 className="title">{f.title}</h1>
          <p className="lede">{f.lede}</p>
          {/* The year is reached through Rituals & Festivals, so it is
              no longer in the nav. A reader who arrives here from a
              search engine needs the way up printed on the page. */}
          <Link href="/rituals" className="chip" style={{ marginTop: "0.5rem" }}>
            {r.labelGroup} {r.title}
          </Link>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="fe-standing">
          <p className="fe-standing-text">{f.standing}</p>
        </div>

        <ol className="fe-grid">
          {festivals.map((x) => (
            <li key={x.slug}>
              <Link href={`/festivals/${x.slug}`} className="fe-card">
                <span className="fe-frame">
                  {x.image && (
                    <Image
                      src={x.image.src}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: x.image.position }}
                    />
                  )}
                  <span className="fe-scrim" aria-hidden="true" />

                  <span className={`fe-chip${x.reckoning === "solar" ? " is-solar" : ""}`}>
                    {x.reckoning === "solar" ? f.solar : f.lunar}
                  </span>

                  <span className="fe-frame-foot">
                    <span className="fe-frame-name">{x.name}</span>
                    <span className={`fe-frame-sanskrit ${sc}`}>{x.sanskrit}</span>
                  </span>
                </span>

                <span className="fe-card-body">
                  <span className="fe-when-date">{x.when || x.whenNote}</span>
                  <span className="fe-lede">{x.lede}</span>
                  <span className="fe-more">
                    {f.read} <Arrow />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
