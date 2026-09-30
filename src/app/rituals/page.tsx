import Link from "next/link";
// Nothing on this page carries a photograph today. The group plate
// keeps its branch so an owner-supplied picture is one entry in
// seed/ritual-images.ts rather than a re-wiring; see the note there.
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { ritualStrings } from "@/i18n/rituals";
import { festivalStrings } from "@/i18n/festivals";
import { getRitualGroups, getSamskaras, getFestivals, getLunarYear } from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Rituals & Festivals",
  description:
    "What is actually done — at a birth, at dusk, on the eleventh day of the moon, and once a year in the order of the lunar calendar.",
};

/**
 * The front door of the section.
 *
 * Four things, in this order: what these pages are and are not; the
 * sixteen rites of passage drawn as one arc across a life; the year,
 * which is the festivals; and then the rites themselves, grouped.
 *
 * The arc comes before the groups because it is the one view of the
 * material that a list cannot give — the sixteen are a sequence, and
 * seeing which links are missing is the point rather than a defect of
 * the drawing.
 */
export default function RitualsPage() {
  const { locale } = getTranslations();
  const s = ritualStrings(locale);
  const f = festivalStrings(locale);
  const groups = getRitualGroups(locale);
  const samskaras = getSamskaras(locale);
  const festivals = getFestivals(locale);
  const sc = scriptClass(locale);

  const rites = groups.reduce((n, g) => n + g.rituals.length, 0);
  const months = getLunarYear(locale);

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

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="ri-standing">
          <p className="ri-standing-text">{s.standing}</p>
        </div>

        {/* The sixteen, as one sequence. */}
        <div className="ri-arc-block">
          <div className="ri-arc-head">
            <h2 className="ri-arc-title">{s.arcTitle}</h2>
            <p className="ri-arc-lede">{s.arcLede}</p>
          </div>

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
        </div>

        {/* The year. */}
        <Link href="/festivals" className="ri-year">
          <span className="ri-year-words">
            <span className="ri-year-title">{s.yearTitle}</span>
            <span className="ri-year-lede">{s.yearLede}</span>
            <span className="ri-row-more">
              {s.yearLink} <Arrow />
            </span>
          </span>
          {/* The twelve lunar months, the ones carrying a festival set
              in the sacred ink. It shows the shape of the year from the
              section's own data rather than illustrating it with four
              photographs of crowds. */}
          <span className="ri-year-months" aria-hidden="true">
            {months.map((m) => (
              <span key={m.id} className="ri-year-month" data-has={m.count > 0 ? "yes" : "no"}>
                {m.name}
              </span>
            ))}
          </span>
        </Link>

        {/* The year's own rule about dates belongs beside the year, not
            stranded at the foot of the page. It is the festivals'
            string, not a second copy of it. */}
        <div className="ri-standing">
          <p className="ri-standing-text">{f.standing}</p>
        </div>
      </section>

      {/* One section per group, alternating on the paper the way a
          devata's page alternates its sections. */}
      {groups.map((g) => (
        <section key={g.id} className="ri-group" aria-labelledby={`g-${g.id}`}>
          <div className="shell ri-group-inner">
            <div className="ri-group-head">
              <div className="ri-plate">
                {g.image ? (
                  <Image
                    src={g.image.src}
                    alt={g.image.alt}
                    fill
                    sizes="(max-width: 560px) 100vw, 150px"
                    style={{ objectFit: "cover", objectPosition: g.image.position }}
                  />
                ) : (
                  <span className={`ri-plate-glyph ${sc}`} aria-hidden="true">
                    {g.glyph}
                  </span>
                )}
              </div>

              <div className="ri-group-words">
                <p className="ri-group-count">{s.groupCount(g.rituals.length.toLocaleString("en-IN"))}</p>
                <h2 className="ri-group-name" id={`g-${g.id}`}>
                  {g.name}
                </h2>
                <span className={`ri-group-sanskrit ${sc}`}>{g.sanskrit}</span>
                <p className="ri-group-lede">{g.lede}</p>
              </div>
            </div>

            <ul className="ri-rows">
              {g.rituals.map((r) => (
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
      ))}

    </>
  );
}
