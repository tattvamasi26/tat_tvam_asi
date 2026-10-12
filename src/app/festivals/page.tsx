import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { festivalStrings } from "@/i18n/festivals";
import { rfStrings } from "@/i18n/rf";
import { getFestivalSeasons, getFestivals, getRituals, getYearLens } from "@/lib/data";
import { RfHead, JumpBar } from "@/components/rf/RfHead";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Festivals — Rituals & Festivals",
  description:
    "The year as it is kept, through its six seasons — what is done on each festival, in order, and why. Dates are lunar, not Gregorian.",
};

/**
 * The Festivals half of Rituals & Festivals.
 *
 * Arranged by the six seasons rather than the twelve months: twelve
 * rows of which three are empty read as a calendar with holes in it,
 * while six seasons read as the year the festivals actually describe.
 * Each season is a band in the same shape as the Rituals half's
 * groups — its name and character held on the left, its festivals on
 * the right — so the two halves are visibly one section.
 *
 * A festival with no picture gets its name set on a plate in the
 * reader's script, never a blank grey box. A picture is only ever one
 * the owner chose.
 */
export default function FestivalsPage() {
  const { locale } = getTranslations();
  const f = festivalStrings(locale);
  const rf = rfStrings(locale);
  const sc = scriptClass(locale);

  const seasons = getFestivalSeasons(locale);
  const festivalsCount = getFestivals(locale).length;
  const ritesCount = getRituals(locale).length;
  const recurring = getYearLens(locale).recurring;

  return (
    <>
      <RfHead
        active="festivals"
        ritesCount={ritesCount}
        festivalsCount={festivalsCount}
        strings={{
          title: rf.sectionTitle,
          lede: rf.sectionLede,
          rituals: rf.tabRituals,
          ritualsBlurb: rf.tabRitualsBlurb,
          festivals: rf.tabFestivals,
          festivalsBlurb: rf.tabFestivalsBlurb,
          countRites: rf.countRites,
          countFestivals: rf.countFestivals,
        }}
      />

      <JumpBar
        label={rf.jumpTo}
        items={seasons.map((x) => ({ id: x.id, name: x.name, count: x.festivals.length }))}
      />

      <section className="shell rf-note-wrap">
        <p className="rf-note">{f.standing}</p>
      </section>

      {seasons.map((season, si) => (
        <section key={season.id} id={season.id} className="rf-band" aria-labelledby={`h-${season.id}`}>
          <div className="shell rf-band-inner">
            <header className="rf-band-head">
              <span className="rf-band-n">{String(si + 1).padStart(2, "0")}</span>
              <h2 className="rf-band-title" id={`h-${season.id}`}>
                {season.name}
              </h2>
              <p className={`rf-band-sanskrit ${sc}`}>{season.sanskrit}</p>
              <p className="rf-band-months">
                {rf.seasonMonths.replace("{a}", season.months[0]).replace("{b}", season.months[1])}
              </p>
              <p className="rf-band-lede">{season.character}</p>
              <p className="rf-band-count">
                {rf.countFestivals.replace("{n}", season.festivals.length.toLocaleString("en-IN"))}
              </p>
            </header>

            <div className="rf-band-body">
              <ul className="rf-fcards">
                {season.festivals.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/festivals/${x.slug}`} className="rf-fcard">
                      <span className={`rf-fcard-frame${x.image ? "" : " is-plate"}`}>
                        {x.image ? (
                          <Image
                            src={x.image.src}
                            alt=""
                            fill
                            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 30vw"
                            style={{ objectFit: "cover", objectPosition: x.image.position }}
                          />
                        ) : (
                          <span className={`rf-plate-name ${sc}`} aria-hidden="true">
                            {x.sanskrit}
                          </span>
                        )}
                        <span className={`rf-fcard-kind${x.reckoning === "solar" ? " is-solar" : ""}`}>
                          {x.reckoning === "solar" ? f.solar : f.lunar}
                        </span>
                      </span>

                      <span className="rf-fcard-body">
                        <span className="rf-fcard-when">{x.when || x.whenNote}</span>
                        <span className="rf-fcard-name">{x.name}</span>
                        <span className="rf-fcard-lede">{x.lede}</span>
                        <span className="rf-card-foot">
                          {x.depth?.days ? (
                            <span className="rf-card-meta">
                              {rf.daysCount.replace("{n}", x.depth.days.length.toLocaleString("en-IN"))}
                            </span>
                          ) : x.depth ? (
                            <span className="rf-card-meta">
                              {rf.stepsCount.replace("{n}", x.depth.steps.length.toLocaleString("en-IN"))}
                            </span>
                          ) : null}
                          <span className="rf-card-go">
                            {f.read} <Arrow />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* The days that come round every month are vows, and live in
          the Rituals half; this is the bridge to them. */}
      <section className="shell rf-monthly">
        <div className="rf-monthly-head">
          <h2 className="rf-monthly-title">{rf.everyMonthTitle}</h2>
          <p className="rf-monthly-lede">{rf.everyMonthLede}</p>
        </div>
        <ul className="rf-monthly-list">
          {recurring.map((r) => (
            <li key={r.slug}>
              <Link href={`/rituals/${r.slug}`} className="rf-monthly-row">
                <span className="rf-monthly-name">{r.name}</span>
                <span className="rf-monthly-count">
                  {rf.timesAYear.replace("{n}", r.timesAYear.toLocaleString("en-IN"))}
                </span>
                <span className="rf-monthly-go" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/rituals#vrata" className="rf-more">
          {rf.tabRituals} <Arrow />
        </Link>
      </section>
    </>
  );
}
