import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { ritualStrings } from "@/i18n/rituals";
import { rfStrings } from "@/i18n/rf";
// The chip pointing into the map is labelled with the map's own name,
// so the two sections never call it two different things.
import { shastraStrings } from "@/i18n/shastras";
import { getRitual, getRituals } from "@/lib/data";
import { RITUALS } from "@/lib/seed/rituals";
import { StepList, NeedList, Glance } from "@/components/rf/Depth";
import { RiteArt, hasRiteArt } from "@/components/rituals/RiteArt";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return RITUALS.map((r) => ({ ritual: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { ritual: string };
}): Promise<Metadata> {
  const r = getRitual(params.ritual, LOCALES[0]);
  return r ? { title: `${r.name} — Rituals`, description: r.lede } : { title: "Rituals" };
}

/**
 * One rite.
 *
 * The page answers what a reader came for, in the order they want it:
 * what this is, then how it is done step by step, then what is used,
 * then why, then where it is argued over. An at-a-glance panel holds
 * the facts beside the text on a wide screen and above it on a phone.
 *
 * A festival's page has the same shapes in the same places, so moving
 * between the two halves of the section is never re-learning a
 * layout.
 */
export default function RitualPage({ params }: { params: { ritual: string } }) {
  const { locale } = getTranslations();
  const s = ritualStrings(locale);
  const rf = rfStrings(locale);
  const sh = shastraStrings(locale);
  const r = getRitual(params.ritual, locale);
  if (!r) notFound();

  const sc = scriptClass(locale);

  const all = getRituals(locale);
  const at = all.findIndex((x) => x.slug === r.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  const glance: [string, string][] = [
    [s.labelWhen, r.when],
    [rf.labelKind, r.groupName],
  ];
  if (r.depth) {
    glance.push([rf.labelSteps, rf.stepsCount.replace("{n}", r.depth.steps.length.toLocaleString("en-IN"))]);
  }

  return (
    <>
      <section className={`rf-dhero${r.image ? " has-image" : hasRiteArt(r.slug) ? " has-art" : ""}`}>
        {r.image && (
          <>
            <Image
              src={r.image.src}
              alt={r.image.alt}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover", objectPosition: r.image.position }}
            />
            <div className="rf-dhero-scrim" aria-hidden="true" />
          </>
        )}
        <div className="shell rf-dhero-inner">
          <nav className="rf-crumbs" aria-label={rf.sectionTitle}>
            <Link href="/rituals">{rf.sectionTitle}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/rituals#${r.group}`}>{r.groupName}</Link>
          </nav>
          <h1 className="rf-dhero-title">{r.name}</h1>
          <p className={`rf-dhero-sanskrit ${sc}`}>{r.sanskrit}</p>
          <p className="rf-dhero-lede">{r.lede}</p>
          {!r.image && hasRiteArt(r.slug) && (
            <figure className="rf-dhero-art">
              <RiteArt art={r.slug} label={r.name} />
              <figcaption>{rf.drawnCredit}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="shell rf-detail">
        <Glance title={rf.labelAtAGlance} rows={glance} />

        <div className="rf-main">
          <p className="rf-intro">{r.observed}</p>

          {r.depth && <StepList title={rf.labelSteps} steps={r.depth.steps} />}
          {r.depth && r.depth.needs.length > 0 && <NeedList title={rf.labelNeeds} needs={r.depth.needs} />}

          <section className="rf-block">
            <h2 className="rf-h2">{s.labelWhy}</h2>
            <p className="rf-para">{r.significance}</p>
          </section>

          {/* Usually a disagreement rather than a variation, so it is set
              apart instead of running on at the end of the body. */}
          {r.regional && (
            <div className="rf-callout">
              <p className="rf-callout-label">{s.labelRegional}</p>
              <p>{r.regional}</p>
            </div>
          )}

          {r.prescribedBy && (
            <section className="rf-block">
              <h2 className="rf-h2">{s.labelPrescribed}</h2>
              <p className="rf-para">{r.prescribedBy.note}</p>
              <ul className="rf-chips">
                <li>
                  <Link href={r.prescribedBy.href} className="chip">
                    {sh.title} <Arrow />
                  </Link>
                </li>
              </ul>
            </section>
          )}

          {(r.words.length > 0 || r.links.length > 0) && (
            <section className="rf-block">
              <h2 className="rf-h2">{s.labelElsewhere}</h2>
              <ul className="rf-chips">
                {r.words.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="chip chip-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
                {r.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="chip">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav className="stotra-pager">
            {prev ? (
              <Link href={`/rituals/${prev.slug}`} className="pager-link" data-dir="prev">
                <span className="pager-label">
                  <Arrow dir="left" /> {s.previous}
                </span>
                <span className="pager-name">{prev.name}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/rituals/${next.slug}`} className="pager-link" data-dir="next">
                <span className="pager-label">
                  {s.next} <Arrow dir="right" />
                </span>
                <span className="pager-name">{next.name}</span>
              </Link>
            )}
          </nav>

          {r.image && (
            <p className="stutis-credit ri-credit">
              {r.image.sourceUrl ? (
                <a href={r.image.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {r.image.credit}
                </a>
              ) : (
                r.image.credit
              )}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
