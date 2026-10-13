import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { ritualStrings } from "@/i18n/rituals";
import { rfStrings } from "@/i18n/rf";
import { getRitualGroups, getSamskaras, getFestivals } from "@/lib/data";
import { RfHead, JumpBar } from "@/components/rf/RfHead";
import { RiteArt } from "@/components/rituals/RiteArt";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Rituals — Rituals & Festivals",
  description:
    "Rites of passage, daily rites, vows, the fire, the ancestors and pilgrimage — what is done, in order, and what is used.",
};

/**
 * The Rituals half of Rituals & Festivals.
 *
 * The section's two halves are now two tabs under one head, each at
 * its own address. This one is arranged by kind of rite — the six
 * groups the tradition itself uses — because a reader arriving here
 * wants "what happens at a naming" or "what is done at dusk", and a
 * group is the shortest way to that.
 *
 * Each group is a band: its name and what it is on the left, held in
 * place on a wide screen while its rites scroll past on the right.
 * The rites of passage open with all sixteen saṃskāras, since eight
 * of them have no page and the list is only honest when it is whole.
 */
export default function RitualsPage() {
  const { locale } = getTranslations();
  const s = ritualStrings(locale);
  const rf = rfStrings(locale);
  const sc = scriptClass(locale);

  const groups = getRitualGroups(locale);
  const samskaras = getSamskaras(locale);
  const ritesCount = groups.reduce((n, g) => n + g.rituals.length, 0);
  const festivalsCount = getFestivals(locale).length;
  const keptLabel = { common: s.keptCommon, rare: s.keptRare, lapsed: s.keptLapsed };

  return (
    <>
      <RfHead
        active="rituals"
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
        items={groups.map((g) => ({ id: g.id, name: g.name, count: g.rituals.length }))}
      />

      {groups.map((g, gi) => (
        <section key={g.id} id={g.id} className="rf-band" aria-labelledby={`h-${g.id}`}>
          <div className="shell rf-band-inner">
            <header className="rf-band-head">
              <div className="rf-band-art">
                <RiteArt art={g.id} label={g.name} />
              </div>
              <span className="rf-band-n">{String(gi + 1).padStart(2, "0")}</span>
              <h2 className="rf-band-title" id={`h-${g.id}`}>
                {g.name}
              </h2>
              <p className={`rf-band-sanskrit ${sc}`}>{g.sanskrit}</p>
              <p className="rf-band-lede">{g.lede}</p>
              <p className="rf-band-count">
                {rf.countRites.replace("{n}", g.rituals.length.toLocaleString("en-IN"))}
              </p>
            </header>

            <div className="rf-band-body">
              {/* All sixteen, so the eight with no page are still named. */}
              {g.id === "samskara" && (
                <div className="rf-sixteen">
                  <div className="rf-sixteen-head">
                    <h3 className="rf-sixteen-title">{rf.sixteenTitle}</h3>
                    <p className="rf-sixteen-lede">{rf.sixteenLede}</p>
                  </div>
                  <ol className="rf-sixteen-grid">
                    {samskaras.map((k) => {
                      const inner = (
                        <>
                          <span className="rf-k-n">{k.step.toLocaleString("en-IN")}</span>
                          <span className="rf-k-name">{k.name}</span>
                          <span className="rf-k-marks">{k.marks}</span>
                          <span className="rf-k-kept" data-kept={k.kept}>
                            {keptLabel[k.kept]}
                          </span>
                        </>
                      );
                      return (
                        <li key={k.id}>
                          {k.slug ? (
                            <Link href={`/rituals/${k.slug}`} className="rf-k is-link">
                              {inner}
                            </Link>
                          ) : (
                            <span className="rf-k">{inner}</span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}

              <ul className="rf-cards">
                {g.rituals.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/rituals/${r.slug}`} className="rf-card has-art">
                      <span className="rf-card-art" aria-hidden="true">
                        <RiteArt art={r.slug} label="" />
                      </span>
                      <span className="rf-card-name">{r.name}</span>
                      <span className={`rf-card-sanskrit ${sc}`}>{r.sanskrit}</span>
                      <span className="rf-card-lede">{r.lede}</span>
                      <span className="rf-card-when">{r.when}</span>
                      <span className="rf-card-foot">
                        {r.depth && (
                          <span className="rf-card-meta">
                            {rf.stepsCount.replace("{n}", r.depth.steps.length.toLocaleString("en-IN"))}
                          </span>
                        )}
                        <span className="rf-card-go">
                          {s.read} <Arrow />
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

      <section className="shell rf-closing">
        <p className="rf-closing-text">{s.standing}</p>
      </section>
    </>
  );
}
