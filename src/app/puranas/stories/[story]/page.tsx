import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { storyStrings } from "@/i18n/stories";
import { getStory, getStories } from "@/lib/data";
import { STORIES } from "@/lib/seed/stories";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return STORIES.map((s) => ({ story: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { story: string };
}): Promise<Metadata> {
  const s = getStory(params.story, LOCALES[0]);
  return s ? { title: `${s.name} — Stories`, description: s.lede } : { title: "Stories" };
}

/**
 * One story.
 *
 * The order is the argument: where it is told, then the story, then —
 * set apart — how it is read. Every one of these has a famous meaning
 * attached, the meanings are old, and they are still not what the
 * story says. Running the two together is how a page like this stops
 * being a reference and becomes a sermon, so the reading gets its own
 * block and its own heading.
 */
export default function StoryPage({ params }: { params: { story: string } }) {
  const { locale } = getTranslations();
  const s = storyStrings(locale);
  const x = getStory(params.story, locale);
  if (!x) notFound();

  const sc = scriptClass(locale);
  const all = getStories(locale);
  const at = all.findIndex((y) => y.slug === x.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  return (
    <>
      <section className="pu-hero">
        <div className="shell pu-hero-inner">
          <Link href="/puranas/stories" className="pu-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>
          <h1 className="pu-hero-title">{x.name}</h1>
          <p className={`pu-hero-sanskrit ${sc}`}>{x.sanskrit}</p>
          <p className="pu-hero-lede">{x.lede}</p>
        </div>
      </section>

      <section className="shell pu-body">
        <div className="st-told-block">
          <p className="fact-label">{s.labelTold}</p>
          <p>{x.told}</p>
          <Link href={`/puranas/${x.purana}`} className="chip chip-gold">
            {x.puranaName}
          </Link>
        </div>

        <div className="pu-section">
          <h2 className="pu-h2">{s.labelStory}</h2>
          <p className="st-prose">{x.story}</p>
        </div>

        {/* Set apart, because a reading is not what the story says. */}
        <div className="st-reading">
          <h2 className="st-reading-title">{s.labelReading}</h2>
          <p>{x.reading}</p>
        </div>

        {x.differs && (
          <div className="pu-aside">
            <p className="fact-label">{s.labelDiffers}</p>
            <p>{x.differs}</p>
          </div>
        )}

        {x.links.length > 0 && (
          <div className="pu-section">
            <h2 className="pu-h2">{s.labelElsewhere}</h2>
            <ul className="pu-chips">
              {x.links.map((l) => (
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
            <Link href={`/puranas/stories/${prev.slug}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.previous}
              </span>
              <span className="pager-name">{prev.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/puranas/stories/${next.slug}`} className="pager-link" data-dir="next">
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
