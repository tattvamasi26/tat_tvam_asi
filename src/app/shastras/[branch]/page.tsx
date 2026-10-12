import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { shastraStrings } from "@/i18n/shastras";
import { shastraUi } from "@/i18n/shastra-ui";
import { rfStrings } from "@/i18n/rf";
import { ritualStrings } from "@/i18n/rituals";
import { getShastraBranch, getShastraMap } from "@/lib/data";
import { BRANCHES_WITH_PAGES } from "@/lib/seed/shastra-pages";
import { Glance } from "@/components/rf/Depth";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return BRANCHES_WITH_PAGES.map((branch) => ({ branch }));
}

export async function generateMetadata({
  params,
}: {
  params: { branch: string };
}): Promise<Metadata> {
  const b = getShastraBranch(params.branch, LOCALES[0]);
  return b ? { title: `${b.name} — Shastras & Puranas`, description: b.lede } : { title: "Shastras & Puranas" };
}

/**
 * One branch of the map, for the six that have no section of their
 * own: what the branch is, then every text in it with a paragraph of
 * its own, its status on this site, and — where it is readable — the
 * way to the section that holds it.
 *
 * A branch that does have a section (the Vedas, the Upaniṣads, the
 * darśanas, the Purāṇas) redirects there, so there is never a second
 * page about the same thing.
 */
export default function ShastraBranchPage({ params }: { params: { branch: string } }) {
  const { locale } = getTranslations();
  const s = shastraStrings(locale);
  const u = shastraUi(locale);
  const rf = rfStrings(locale);
  const r = ritualStrings(locale);

  const b = getShastraBranch(params.branch, locale);
  if (!b) {
    const section = getShastraMap(locale).find((x) => x.id === params.branch)?.href;
    if (section) redirect(section);
    notFound();
  }

  const sc = scriptClass(locale);
  const status = { live: s.statusLive, partial: s.statusPartial, planned: s.statusPlanned };

  const glance: [string, string][] = [
    [u.labelTier, b.tier],
    [u.labelTexts, u.countTexts.replace("{n}", b.total.toLocaleString("en-IN"))],
    [
      u.labelOnSite,
      b.readable > 0
        ? s.readableOf(b.readable.toLocaleString("en-IN"), b.total.toLocaleString("en-IN"))
        : s.noneYet,
    ],
  ];

  return (
    <>
      <section className="rf-dhero">
        <div className="shell rf-dhero-inner">
          <nav className="rf-crumbs" aria-label={s.title}>
            <Link href="/shastras">{s.title}</Link>
          </nav>
          <h1 className="rf-dhero-title">{b.name}</h1>
          <p className={`rf-dhero-sanskrit ${sc}`}>{b.sanskrit}</p>
          <p className="rf-dhero-lede">{b.lede}</p>
        </div>
      </section>

      <section className="shell rf-detail">
        <Glance title={rf.labelAtAGlance} rows={glance} />

        <div className="rf-main">
          {b.about.map((p, i) => (
            <p key={i} className={i === 0 ? "rf-intro-lede" : "rf-intro"}>
              {p}
            </p>
          ))}

          <section className="rf-block" aria-labelledby="sh2-texts">
            <h2 className="rf-h2" id="sh2-texts">
              {u.textsTitle}
            </h2>
            <ol className="sh2-texts">
              {b.details.map((t) => (
                <li key={t.id} className="sh2-text" data-status={t.status}>
                  <div className="sh2-text-head">
                    <h3 className="sh2-text-name">{t.name}</h3>
                    <span className={`sh2-text-sanskrit ${sc}`}>{t.sanskrit}</span>
                    <span className="sh2-status" data-status={t.status}>
                      {status[t.status]}
                    </span>
                  </div>
                  <p className="sh2-text-note">{t.note}</p>
                  {t.detail && <p className="sh2-text-detail">{t.detail}</p>}
                  {t.href && (
                    <Link href={t.href} className="sh2-open">
                      {u.readHere} <Arrow />
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {b.rites > 0 && (
            <Link href="/rituals" className="sh2-rites">
              {r.doneBecause(b.rites.toLocaleString("en-IN"))} <Arrow />
            </Link>
          )}

          <nav className="rf-chips" aria-label={s.title}>
            <Link href={`/shastras#${b.id}`} className="chip">
              <Arrow dir="left" /> {s.title}
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
