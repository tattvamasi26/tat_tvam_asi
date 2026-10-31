import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { cosmosStrings } from "@/i18n/cosmos";
import { getCosmosTopic, getCosmosTopics } from "@/lib/data";
import { COSMOS_TOPICS } from "@/lib/seed/cosmos-topics";
import { ProseBlock } from "@/components/content/ProseBlock";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return COSMOS_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const t = getCosmosTopic(params.topic, LOCALES[0]);
  return t
    ? { title: `${t.name} — Time and the cosmos`, description: t.lede }
    : { title: "Time and the cosmos" };
}

/**
 * One of the four arguments.
 *
 * These are monographs and they use the monograph renderer: the same
 * ProseBlock the temples and the Shankara page use, with the same
 * four shapes. There is nothing here a new renderer would do better,
 * and one renderer means a change to how a passage is set reaches
 * every long-form page on the site at once.
 */
export default function CosmosTopicPage({ params }: { params: { topic: string } }) {
  const { locale } = getTranslations();
  const s = cosmosStrings(locale);
  const t = getCosmosTopic(params.topic, locale);
  if (!t) notFound();

  const sc = scriptClass(locale);
  const all = getCosmosTopics(locale);
  const at = all.findIndex((x) => x.slug === t.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  return (
    <>
      <section className="pu-hero">
        <div className="shell pu-hero-inner">
          <Link href="/cosmos" className="pu-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>
          <h1 className="pu-hero-title">{t.name}</h1>
          <p className={`pu-hero-sanskrit ${sc}`}>{t.sanskrit}</p>
          <p className="pu-hero-lede">{t.lede}</p>
        </div>
      </section>

      <section className="shell co-topic-body">
        {t.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="temple-section">
            <p className="eyebrow">{sec.eyebrow}</p>
            <h2 className="temple-section-title">{sec.title}</h2>
            {sec.blocks.map((b, i) => (
              <ProseBlock key={i} block={b} />
            ))}
          </section>
        ))}

        <nav className="stotra-pager">
          {prev ? (
            <Link href={`/cosmos/${prev.slug}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.previous}
              </span>
              <span className="pager-name">{prev.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/cosmos/${next.slug}`} className="pager-link" data-dir="next">
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
