import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { ritualStrings } from "@/i18n/rituals";
import { getRitual, getRituals } from "@/lib/data";
import { RITUALS } from "@/lib/seed/rituals";
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
 * The head is a full-bleed photograph where there is one and the
 * rite's own name on paper where there is not — see
 * seed/ritual-images.ts for why the second case is the common one.
 *
 * Below it the page answers the same four questions in the same order
 * as a festival's page, so a reader moving between the two halves of
 * the section is never re-learning the layout: when, what is done,
 * why, and where it differs. The fourth is an aside rather than a
 * paragraph, because on these pages it usually carries a live
 * disagreement rather than a regional variation.
 */
export default function RitualPage({ params }: { params: { ritual: string } }) {
  const { locale } = getTranslations();
  const s = ritualStrings(locale);
  const r = getRitual(params.ritual, locale);
  if (!r) notFound();

  const sc = scriptClass(locale);

  const all = getRituals(locale);
  const at = all.findIndex((x) => x.slug === r.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  return (
    <>
      <section className={`ri-hero${r.image ? "" : " is-plain"}`}>
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
            <div className="ri-hero-scrim" aria-hidden="true" />
          </>
        )}

        <div className="shell ri-hero-inner">
          <Link href="/rituals" className="ri-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>

          <p className="ri-hero-kicker">{r.groupName}</p>
          <h1 className="ri-hero-title">{r.name}</h1>
          <p className={`ri-hero-sanskrit ${sc}`}>{r.sanskrit}</p>
          <p className="ri-hero-when">{r.when}</p>
        </div>
      </section>

      <section className="shell ri-body">
        <p className="lede ri-lede-big">{r.lede}</p>

        <div className="ri-section">
          <h2 className="ri-h2">{s.labelObserved}</h2>
          <p>{r.observed}</p>
        </div>

        <div className="ri-section">
          <h2 className="ri-h2">{s.labelWhy}</h2>
          <p>{r.significance}</p>
        </div>

        {/* Usually a disagreement rather than a variation, so it is set
            apart instead of running on at the end of the body. */}
        {r.regional && (
          <div className="ri-aside">
            <p className="fact-label">{s.labelRegional}</p>
            <p>{r.regional}</p>
          </div>
        )}

        {r.words.length > 0 && (
          <div className="ri-section">
            <h2 className="ri-h2">{s.labelWords}</h2>
            <ul className="ri-chips">
              {r.words.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip chip-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {r.links.length > 0 && (
          <div className="ri-section">
            <h2 className="ri-h2">{s.labelElsewhere}</h2>
            <ul className="ri-chips">
              {r.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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

        {/* A picture here, if there ever is one, will be one the site's
            owner chose or supplied — and an owner-supplied credit links
            nowhere, the way the stutis' pictures already work. */}
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
      </section>
    </>
  );
}
