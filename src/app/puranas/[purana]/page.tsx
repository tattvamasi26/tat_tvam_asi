import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { puranaStrings } from "@/i18n/puranas";
import { getPurana, getPuranas } from "@/lib/data";
import { PURANAS } from "@/lib/seed/puranas";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return PURANAS.map((p) => ({ purana: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { purana: string };
}): Promise<Metadata> {
  const p = getPurana(params.purana, LOCALES[0]);
  return p ? { title: `${p.name} — The Puranas`, description: p.lede } : { title: "The Puranas" };
}

/**
 * One Purāṇa.
 *
 * Four questions in the same order every time: what it leans to and
 * how long it is; what is in it; what came out of it into practice;
 * and — where there is one — what about it is disputed. That last
 * section is absent on most of them and present on five, which is
 * itself informative: the list of eighteen is less settled than it is
 * usually printed.
 */
export default function PuranaPage({ params }: { params: { purana: string } }) {
  const { locale } = getTranslations();
  const s = puranaStrings(locale);
  const p = getPurana(params.purana, locale);
  if (!p) notFound();

  const sc = scriptClass(locale);
  const all = getPuranas(locale);
  const at = all.findIndex((x) => x.slug === p.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  const gunaLabel: Record<string, string> = {
    sattvika: s.gunaSattvika,
    rajasa: s.gunaRajasa,
    tamasa: s.gunaTamasa,
  };

  return (
    <>
      <section className="pu-hero">
        <div className="shell pu-hero-inner">
          <Link href="/puranas" className="pu-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>
          <p className="pu-hero-kicker">{p.order.toLocaleString("en-IN")}</p>
          <h1 className="pu-hero-title">{p.name}</h1>
          <p className={`pu-hero-sanskrit ${sc}`}>{p.sanskrit}</p>
          <p className="pu-hero-lede">{p.lede}</p>
        </div>
      </section>

      <section className="shell pu-body">
        <div className="pu-facts">
          <div className="fact">
            <div className="fact-label">{s.labelDeity}</div>
            <div className="fact-value">{p.deity}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{s.labelVerses}</div>
            <div className="fact-value">{p.verses.toLocaleString("en-IN")}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{s.labelGuna}</div>
            <div className="fact-value">{gunaLabel[p.guna]}</div>
          </div>
        </div>

        <div className="pu-section">
          <h2 className="pu-h2">{s.labelAbout}</h2>
          <p>{p.about}</p>
        </div>

        <div className="pu-section">
          <h2 className="pu-h2">{s.labelKnown}</h2>
          <p>{p.known}</p>
        </div>

        {/* Present on five of the eighteen, absent on the rest — which
            is itself worth noticing. */}
        {p.note && (
          <div className="pu-aside">
            <p className="fact-label">{s.labelNote}</p>
            <p>{p.note}</p>
          </div>
        )}

        {p.links.length > 0 && (
          <div className="pu-section">
            <h2 className="pu-h2">{s.labelElsewhere}</h2>
            <ul className="pu-chips">
              {p.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip chip-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="pu-note">{s.verseNote}</p>

        <nav className="stotra-pager">
          {prev ? (
            <Link href={`/puranas/${prev.slug}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.previous}
              </span>
              <span className="pager-name">{prev.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/puranas/${next.slug}`} className="pager-link" data-dir="next">
              <span className="pager-label">
                {s.next} <Arrow dir="right" />
              </span>
              <span className="pager-name">{next.name}</span>
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}
