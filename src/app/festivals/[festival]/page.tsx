import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { festivalStrings } from "@/i18n/festivals";
import { rfStrings } from "@/i18n/rf";
import { getFestival, getFestivals } from "@/lib/data";
import { FESTIVALS } from "@/lib/seed/festivals";
import { RTUS, SOLAR_RTU, rtuForMonth } from "@/lib/seed/rtus";
import { StepList, NeedList, DayList, Glance } from "@/components/rf/Depth";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { toneStyle } from "@/lib/seed/picture-tones";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ festival: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { festival: string };
}): Promise<Metadata> {
  const f = getFestival(params.festival, LOCALES[0]);
  return f ? { title: `${f.name} — Festivals`, description: f.lede } : { title: "Festivals" };
}

/**
 * One festival.
 *
 * The same shapes in the same places as a rite's page — the date and
 * the season at a glance, then how the day is kept step by step, what
 * is used, the days where there are several, and why — under a head
 * that is the owner's chosen picture where there is one and the
 * festival's own name, large, in the reader's script where there is
 * not.
 */
export default function FestivalPage({ params }: { params: { festival: string } }) {
  const { locale } = getTranslations();
  const s = festivalStrings(locale);
  const rf = rfStrings(locale);
  const festival = getFestival(params.festival, locale);
  if (!festival) notFound();

  const sc = scriptClass(locale);

  const all = getFestivals(locale);
  const at = all.findIndex((x) => x.slug === festival.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  const season =
    rtuForMonth(festival.month) ?? RTUS.find((r) => r.id === SOLAR_RTU[festival.slug]);

  const glance: [string, string][] = [[s.labelWhen, festival.when || festival.whenNote || ""]];
  if (season) glance.push([rf.labelSeason, season.name[locale]]);
  glance.push([rf.labelKind, festival.reckoning === "solar" ? s.solar : s.lunar]);
  if (festival.depth?.days) {
    glance.push([rf.labelDays, rf.daysCount.replace("{n}", festival.depth.days.length.toLocaleString("en-IN"))]);
  }
  if (festival.alsoCalled) glance.push([s.labelAlsoCalled, festival.alsoCalled]);

  // Full-bleed only for a picture wide enough to cover the screen.
  const framed = festival.image && festival.image.width < 1400 ? festival.image : null;

  return (
    <>
      <section
        className={`rf-dhero${framed ? " has-art has-tone" : festival.image ? " has-image" : " is-plate"}`}
        style={framed ? toneStyle(framed.src) : undefined}
      >
        {festival.image && !framed ? (
          <>
            <Image
              src={festival.image.src}
              alt={festival.image.alt}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover", objectPosition: festival.image.position }}
            />
            <div className="rf-dhero-scrim" aria-hidden="true" />
          </>
        ) : null}

        <div className="shell rf-dhero-inner">
          <nav className="rf-crumbs" aria-label={rf.sectionTitle}>
            <Link href="/rituals">{rf.sectionTitle}</Link>
            <span aria-hidden="true">/</span>
            <Link href={season ? `/festivals#${season.id}` : "/festivals"}>{rf.tabFestivals}</Link>
          </nav>
          <h1 className="rf-dhero-title">{festival.name}</h1>
          <p className={`rf-dhero-sanskrit ${sc}`}>{festival.sanskrit}</p>
          <p className="rf-dhero-when">{festival.when || festival.whenNote}</p>
          {framed && (
            <figure className="rf-dhero-art is-photo">
              <span className="rf-dhero-frame">
                <Image
                  src={framed.src}
                  alt={framed.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 45vw"
                  priority
                  style={{ objectFit: "cover", objectPosition: framed.position }}
                />
              </span>
              <figcaption>{framed.credit}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="shell rf-detail">
        <Glance title={rf.labelAtAGlance} rows={glance} />

        <div className="rf-main">
          <p className="rf-intro-lede">{festival.lede}</p>

          {festival.when && festival.whenNote && <p className="rf-para rf-muted">{festival.whenNote}</p>}

          <p className="rf-intro">{festival.observed}</p>

          {festival.depth?.days && <DayList title={rf.labelDays} days={festival.depth.days} />}
          {festival.depth && <StepList title={rf.labelSteps} steps={festival.depth.steps} />}
          {festival.depth && festival.depth.needs.length > 0 && (
            <NeedList title={rf.labelNeeds} needs={festival.depth.needs} />
          )}

          <section className="rf-block">
            <h2 className="rf-h2">{s.labelWhy}</h2>
            <p className="rf-para">{festival.significance}</p>
          </section>

          {festival.regional && (
            <div className="rf-callout">
              <p className="rf-callout-label">{s.labelRegional}</p>
              <p>{festival.regional}</p>
            </div>
          )}

          {festival.links.length > 0 && (
            <section className="rf-block">
              <h2 className="rf-h2">{s.labelElsewhere}</h2>
              <ul className="rf-chips">
                {festival.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="chip chip-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav className="stotra-pager">
            {prev ? (
              <Link href={`/festivals/${prev.slug}`} className="pager-link" data-dir="prev">
                <span className="pager-label">
                  <Arrow dir="left" /> {s.previous}
                </span>
                <span className="pager-name">{prev.name}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/festivals/${next.slug}`} className="pager-link" data-dir="next">
                <span className="pager-label">
                  {s.next} <Arrow dir="right" />
                </span>
                <span className="pager-name">{next.name}</span>
              </Link>
            )}
          </nav>

          {festival.image && !framed && (
            <p className="stutis-credit fe-credit">
              {festival.image.sourceUrl ? (
                <a href={festival.image.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {festival.image.credit}
                </a>
              ) : (
                festival.image.credit
              )}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
