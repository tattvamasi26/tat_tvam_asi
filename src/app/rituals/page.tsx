import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { ritualStrings } from "@/i18n/rituals";
import { festivalStrings } from "@/i18n/festivals";
import {
  getYearLens,
  getDayLens,
  getLifeLens,
  getOccasionRites,
  getRitesOnLens,
  getSamskaras,
  getFestivals,
} from "@/lib/data";
import { YearWheel } from "@/components/rituals/YearWheel";
import { DayBand } from "@/components/rituals/DayBand";
import { LifeLine } from "@/components/rituals/LifeLine";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Rituals & Festivals",
  description:
    "The year, the day and a life — what is actually done, and when. Dates are lunar, not Gregorian.",
};

/**
 * The front door, entered through time rather than through a
 * taxonomy.
 *
 * The first version of this page was six card lists under six group
 * headings — saṃskāra, nitya, vrata, yajña, pitṛ, kṣetra — which is a
 * librarian's shape and not how anybody meets these things. Nobody
 * wants "the pitṛ group"; they want to know what falls this month,
 * what is done at dusk, and what happens when a child is born.
 *
 * So the page is three lenses and a remainder, largest cycle first:
 * the year, the day, a life, and the four rites that sit on no
 * calendar at all. Each lens is a drawing paired with a list — the
 * drawing carries the shape, the list carries the names and every
 * link. That pairing is deliberate: it lets the drawings stay
 * decorative, which means no four-pixel tap targets and nothing
 * important available only to somebody who can see it.
 *
 * The six groups have not gone; a rite's own page still says which
 * one it belongs to. They are just no longer the way in.
 */
export default function RitualsPage() {
  const { locale } = getTranslations();
  const s = ritualStrings(locale);
  const f = festivalStrings(locale);
  const sc = scriptClass(locale);

  const year = getYearLens(locale);
  const day = getDayLens(locale);
  const dayRites = getRitesOnLens("day", locale);
  const life = getLifeLens(locale);
  const occasion = getOccasionRites(locale);
  const samskaras = getSamskaras(locale);
  const festivals = getFestivals(locale);

  const rites = day.length + occasion.length + year.recurring.length + year.spans.length + 8;
  const keptLabel = { common: s.keptCommon, rare: s.keptRare, lapsed: s.keptLapsed };

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">
            {s.count(rites.toLocaleString("en-IN"), festivals.length.toLocaleString("en-IN"))}
          </p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="shell" style={{ paddingTop: 0 }}>
        <div className="ri-standing">
          <p className="ri-standing-text">{s.standing}</p>
        </div>
      </section>

      {/* ── the year ─────────────────────────────────────── */}
      <section className="ry-lens" aria-labelledby="lens-year">
        <div className="shell ry-lens-inner">
          <div className="ry-lens-head">
            <h2 className="ry-lens-title" id="lens-year">
              {s.lensYear}
            </h2>
            <p className="ry-lens-lede">{s.lensYearLede}</p>
          </div>

          <div className="ry-figure-pair">
            <YearWheel
              year={year}
              caption={s.lensYearCaption}
              centre={{ top: s.wheelCentreTop, bottom: s.wheelCentreBottom }}
            />

            <div className="ry-aside">
              {/* What repeats, as a rhythm rather than a list of dates. */}
              <ul className="ry-legend">
                {year.recurring.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/rituals/${r.slug}`} className="ry-legend-row">
                      <span className="ry-legend-name">{r.name}</span>
                      <span className="ry-legend-count">
                        {s.timesAYear(r.timesAYear.toLocaleString("en-IN"))}
                      </span>
                    </Link>
                  </li>
                ))}
                {year.spans.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/rituals/${r.slug}`} className="ry-legend-row">
                      <span className="ry-legend-name">{r.name}</span>
                      <span className="ry-legend-count">{r.lede}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="ry-note">{f.standing}</p>
            </div>
          </div>

          <h3 className="ry-sub">{s.monthsHeading}</h3>
          <ol className="ry-months">
            {year.months.map((m) => (
              <li key={m.id} className="ry-month-row" data-empty={m.festivals.length ? "no" : "yes"}>
                <span className="ry-month-num">{m.index.toLocaleString("en-IN")}</span>
                <span className="ry-month-name">{m.name}</span>
                {m.festivals.length ? (
                  <span className="ry-month-list">
                    {m.festivals.map((x) => (
                      <Link key={x.slug} href={`/festivals/${x.slug}`} className="ry-month-fest">
                        <span className="ry-month-fest-name">{x.name}</span>
                        <span className="ry-month-fest-when">{x.when}</span>
                      </Link>
                    ))}
                  </span>
                ) : (
                  <span className="ry-month-none">{s.noFestivals}</span>
                )}
              </li>
            ))}
          </ol>

          <Link href="/festivals" className="ry-more">
            {s.yearLink} <Arrow />
          </Link>
        </div>
      </section>

      {/* ── the day ──────────────────────────────────────── */}
      <section className="ry-lens" aria-labelledby="lens-day">
        <div className="shell ry-lens-inner">
          <div className="ry-lens-head">
            <h2 className="ry-lens-title" id="lens-day">
              {s.lensDay}
            </h2>
            <p className="ry-lens-lede">{s.lensDayLede}</p>
          </div>

          <DayBand
            marks={day}
            caption={s.lensDayCaption}
            labels={{ dawn: s.dawn, noon: s.noon, dusk: s.dusk }}
          />

          <ul className="ri-rows">
            {dayRites.map((r) => (
              <li key={r.slug}>
                <Link href={`/rituals/${r.slug}`} className="ri-row">
                  <span className="ri-row-body">
                    <span className="ri-row-name">{r.name}</span>
                    <span className={`ri-row-sanskrit ${sc}`}>{r.sanskrit}</span>
                    <span className="ri-row-when">{r.when}</span>
                    <span className="ri-row-lede">{r.lede}</span>
                  </span>
                  <span className="ri-row-more">
                    {s.read} <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── a life ───────────────────────────────────────── */}
      <section className="ry-lens" aria-labelledby="lens-life">
        <div className="shell ry-lens-inner">
          <div className="ry-lens-head">
            <h2 className="ry-lens-title" id="lens-life">
              {s.lensLife}
            </h2>
            <p className="ry-lens-lede">{s.lensLifeLede}</p>
          </div>

          <LifeLine
            samskaras={life}
            caption={s.lensLifeCaption}
            labels={{ before: s.beforeBirth, years: s.years }}
          />

          <ol className="ri-arc">
            {samskaras.map((k) => {
              const inner = (
                <>
                  <span className="ri-arc-dot" aria-hidden="true" />
                  <span className="ri-arc-n">{k.step.toLocaleString("en-IN")}</span>
                  <span className="ri-arc-name">{k.name}</span>
                  <span className={`ri-arc-sanskrit ${sc}`}>{k.sanskrit}</span>
                  <span className="ri-arc-marks">{k.marks}</span>
                  <span className="ri-arc-kept">{keptLabel[k.kept]}</span>
                </>
              );
              return (
                <li key={k.id} className="ri-arc-step" data-kept={k.kept}>
                  {k.slug ? (
                    <Link href={`/rituals/${k.slug}`} className="ri-arc-node">
                      {inner}
                    </Link>
                  ) : (
                    <span className="ri-arc-node">{inner}</span>
                  )}
                </li>
              );
            })}
          </ol>

          <p className="ry-note ry-note-wide">{s.ageNote}</p>
        </div>
      </section>

      {/* ── on no calendar ───────────────────────────────── */}
      <section className="ry-lens" aria-labelledby="lens-occasion">
        <div className="shell ry-lens-inner">
          <div className="ry-lens-head">
            <h2 className="ry-lens-title" id="lens-occasion">
              {s.lensOccasion}
            </h2>
            <p className="ry-lens-lede">{s.lensOccasionLede}</p>
          </div>

          <ul className="ri-rows">
            {occasion.map((r) => (
              <li key={r.slug}>
                <Link href={`/rituals/${r.slug}`} className="ri-row">
                  <span className="ri-row-body">
                    <span className="ri-row-name">{r.name}</span>
                    <span className={`ri-row-sanskrit ${sc}`}>{r.sanskrit}</span>
                    <span className="ri-row-when">{r.when}</span>
                    <span className="ri-row-lede">{r.lede}</span>
                  </span>
                  <span className="ri-row-more">
                    {s.read} <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
