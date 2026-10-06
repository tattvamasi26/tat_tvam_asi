import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { storyStrings } from "@/i18n/stories";
import { puranaStrings } from "@/i18n/puranas";
import { getStories } from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Stories from the Puranas",
  description:
    "Nine of the Puranas' stories, each told plainly and each saying which text it is told in.",
};

/**
 * The stories, under /puranas because that is where they come from.
 *
 * The address is the point of the section. A story told with no
 * source is folklore — which is a fine thing to be and a different
 * thing from what this claims — so the text and the place in it sit
 * on every card rather than being buried on the page behind it.
 */
export default function StoriesPage() {
  const { locale } = getTranslations();
  const s = storyStrings(locale);
  const pu = puranaStrings(locale);
  const stories = getStories(locale);
  const sc = scriptClass(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{s.count(stories.length.toLocaleString("en-IN"))}</p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
          <Link href="/puranas" className="chip" style={{ marginTop: "0.5rem" }}>
            <Arrow dir="left" /> {pu.title}
          </Link>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="pu-standing">
          <p className="pu-standing-text">{s.standing}</p>
        </div>

        <ol className="st-grid">
          {stories.map((x) => (
            <li key={x.slug}>
              <Link href={`/puranas/stories/${x.slug}`} className="st-card">
                <span className="st-body">
                  <span className="st-name">{x.name}</span>
                  <span className={`st-sanskrit ${sc}`}>{x.sanskrit}</span>
                  <span className="st-lede">{x.lede}</span>
                  {/* The address, on the card rather than behind it. */}
                  <span className="st-told">{x.told}</span>
                </span>
                <span className="st-more">
                  {s.read} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
