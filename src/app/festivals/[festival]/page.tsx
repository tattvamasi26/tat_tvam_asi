import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { festivalStrings } from "@/i18n/festivals";
import { getFestival, getFestivals } from "@/lib/data";
import { FESTIVALS } from "@/lib/seed/festivals";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
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
 * A full-bleed photograph carries the head, with the name and the
 * lunar date over it. Everything below sits on the site's paper and
 * answers four questions in order: when, what is done, why, and —
 * whenever the answer is not the same everywhere — where it differs.
 * Flattening that last one into a single national version is the
 * commonest way pages like this go wrong.
 */
export default function FestivalPage({ params }: { params: { festival: string } }) {
  const { locale } = getTranslations();
  const s = festivalStrings(locale);
  const festival = getFestival(params.festival, locale);
  if (!festival) notFound();

  const sc = scriptClass(locale);

  const all = getFestivals(locale);
  const at = all.findIndex((x) => x.slug === festival.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  return (
    <>
      <section className="fe-hero">
        {festival.image && (
          <Image
            src={festival.image.src}
            alt={festival.image.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: festival.image.position }}
          />
        )}
        <div className="fe-hero-scrim" aria-hidden="true" />

        <div className="shell fe-hero-inner">
          <Link href="/festivals" className="fe-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>

          <h1 className="fe-hero-title">{festival.name}</h1>
          <p className={`fe-hero-sanskrit ${sc}`}>{festival.sanskrit}</p>

          {/* The date, given the way the tradition gives it. */}
          <p className="fe-hero-when">{festival.when || festival.whenNote}</p>
          <p className="fe-hero-kind">{festival.reckoning === "solar" ? s.solar : s.lunar}</p>
        </div>
      </section>

      <section className="shell fe-body">
        <p className="lede fe-lede-big">{festival.lede}</p>

        {festival.when && festival.whenNote && (
          <p className="fe-when-note">{festival.whenNote}</p>
        )}

        {/* A lunar month ends at the new moon in the south and the full
            moon in the north, so the same night carries two month
            names. A reader in either place should find what they know. */}
        {festival.alsoCalled && (
          <div className="fe-aside">
            <p className="fact-label">{s.labelAlsoCalled}</p>
            <p>{festival.alsoCalled}</p>
          </div>
        )}

        <div className="fe-section">
          <h2 className="fe-h2">{s.labelObserved}</h2>
          <p>{festival.observed}</p>
        </div>

        <div className="fe-section">
          <h2 className="fe-h2">{s.labelWhy}</h2>
          <p>{festival.significance}</p>
        </div>

        {festival.regional && (
          <div className="fe-section">
            <h2 className="fe-h2">{s.labelRegional}</h2>
            <p>{festival.regional}</p>
          </div>
        )}

        {festival.links.length > 0 && (
          <div className="fe-section">
            <h2 className="fe-h2">{s.labelElsewhere}</h2>
            <ul className="fe-links">
              {festival.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip chip-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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

        {festival.image && (
          <p className="stutis-credit fe-credit">
            <a href={festival.image.sourceUrl} target="_blank" rel="noopener noreferrer">
              {festival.image.credit}
            </a>
          </p>
        )}
      </section>
    </>
  );
}
