import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { puranaStrings } from "@/i18n/puranas";
import { puranaUi } from "@/i18n/purana-ui";
import { rfStrings } from "@/i18n/rf";
import { storyStrings } from "@/i18n/stories";
import { getPurana, getPuranas, getStoriesFromPurana } from "@/lib/data";
import { PURANAS } from "@/lib/seed/puranas";
import { Glance } from "@/components/rf/Depth";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { HeadPicture, hasHeadPicture } from "@/components/content/HeadPicture";
import { sectionImage } from "@/lib/seed/section-images";
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
 * The same page shape as a rite or a festival: a head, an at-a-glance
 * panel beside the text, then the body in the order a reader wants
 * it — what is in it, how it is arranged, the passages they have
 * probably already met, what came out of it, and where it is disputed.
 * That last section is present on five of the eighteen, which is
 * itself informative: the list is less settled than it is usually
 * printed.
 */
export default function PuranaPage({ params }: { params: { purana: string } }) {
  const { locale } = getTranslations();
  const s = puranaStrings(locale);
  const u = puranaUi(locale);
  const rf = rfStrings(locale);
  const st = storyStrings(locale);
  const p = getPurana(params.purana, locale);
  if (!p) notFound();

  const sc = scriptClass(locale);
  const picture = sectionImage("purana", p.slug);
  const all = getPuranas(locale);
  const stories = getStoriesFromPurana(params.purana, locale);
  const at = all.findIndex((x) => x.slug === p.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  const gunaLabel: Record<string, string> = {
    sattvika: s.gunaSattvika,
    rajasa: s.gunaRajasa,
    tamasa: s.gunaTamasa,
  };

  const glance: [string, string][] = [
    [s.labelDeity, p.deity],
    [s.labelVerses, s.verseUnit(p.verses.toLocaleString("en-IN"))],
    [u.labelOrder, `${p.order.toLocaleString("en-IN")} / ${all.length.toLocaleString("en-IN")}`],
    [s.labelGuna, gunaLabel[p.guna]],
  ];

  return (
    <>
      <section className={`rf-dhero${hasHeadPicture(picture) ? " has-art" : ""}`}>
        <div className="shell rf-dhero-inner">
          <nav className="rf-crumbs" aria-label={s.title}>
            <Link href="/puranas">{s.title}</Link>
          </nav>
          <h1 className="rf-dhero-title">{p.name}</h1>
          <p className={`rf-dhero-sanskrit ${sc}`}>{p.sanskrit}</p>
          <p className="rf-dhero-lede">{p.lede}</p>
          <HeadPicture locale={locale} image={picture} label={p.name} drawnCredit={rf.drawnCredit} />
        </div>
      </section>

      <section className="shell rf-detail">
        <Glance title={rf.labelAtAGlance} rows={glance} />

        <div className="rf-main">
          <p className="rf-intro">{p.about}</p>

          {p.depth && (
            <section className="rf-block" aria-labelledby="pu-parts">
              <h2 className="rf-h2" id="pu-parts">
                {u.labelParts}
              </h2>
              <ol className="rf-steps">
                {p.depth.parts.map(([name, text], i) => (
                  <li key={name} className="rf-step">
                    <span className="rf-step-n" aria-hidden="true">
                      {(i + 1).toLocaleString("en-IN")}
                    </span>
                    <div className="rf-step-body">
                      <h3 className="rf-step-name">{name}</h3>
                      <p className="rf-step-text">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {p.depth && p.depth.passages.length > 0 && (
            <section className="rf-block" aria-labelledby="pu-passages">
              <h2 className="rf-h2" id="pu-passages">
                {u.labelPassages}
              </h2>
              <ul className="rf-days">
                {p.depth.passages.map(([name, text]) => (
                  <li key={name} className="rf-day">
                    <h3 className="rf-day-name">{name}</h3>
                    <p className="rf-day-text">{text}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="rf-block">
            <h2 className="rf-h2">{s.labelKnown}</h2>
            <p className="rf-para">{p.known}</p>
          </section>

          {/* Present on five of the eighteen, absent on the rest — which
              is itself worth noticing. */}
          {p.note && (
            <div className="rf-callout">
              <p className="rf-callout-label">{s.labelNote}</p>
              <p>{p.note}</p>
            </div>
          )}

          {/* The stories this one carries, which is the commonest
              reason anybody arrives at a Purāṇa at all. */}
          {stories.length > 0 && (
            <section className="rf-block">
              <h2 className="rf-h2">{st.fromThis}</h2>
              <ul className="rf-chips">
                {stories.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/puranas/stories/${x.slug}`} className="chip chip-gold">
                      {x.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {p.links.length > 0 && (
            <section className="rf-block">
              <h2 className="rf-h2">{s.labelElsewhere}</h2>
              <ul className="rf-chips">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="chip">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <p className="rf-para rf-muted">{s.verseNote}</p>

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
        </div>
      </section>
    </>
  );
}
