import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

/**
 * The head both halves of Rituals & Festivals share.
 *
 * The section used to be one long page that opened on a year wheel
 * and buried the festivals behind a link at the bottom of it. Now it
 * says what it is first: two halves, side by side, each a large tab
 * with its count and one line on what it holds. The tab for the page
 * the reader is on is filled; the other is the way across.
 *
 * Both tabs are real links to real routes — /rituals and /festivals —
 * so each half has its own address, prerenders, and works with no
 * JavaScript at all.
 */
export function RfHead({
  active,
  strings,
  ritesCount,
  festivalsCount,
}: {
  active: "rituals" | "festivals";
  strings: {
    title: string;
    lede: string;
    rituals: string;
    ritualsBlurb: string;
    festivals: string;
    festivalsBlurb: string;
    countRites: string;
    countFestivals: string;
  };
  ritesCount: number;
  festivalsCount: number;
}) {
  const tab = (
    id: "rituals" | "festivals",
    href: string,
    label: string,
    count: string,
    blurb: string,
  ) => (
    <Link
      href={href}
      className="rf-tab"
      data-active={active === id ? "yes" : "no"}
      aria-current={active === id ? "page" : undefined}
    >
      <span className="rf-tab-top">
        <span className="rf-tab-label">{label}</span>
        <span className="rf-tab-go" aria-hidden="true">
          <Arrow />
        </span>
      </span>
      <span className="rf-tab-count">{count}</span>
      <span className="rf-tab-blurb">{blurb}</span>
    </Link>
  );

  return (
    <section className="rf-head">
      <div className="shell rf-head-inner">
        <h1 className="title rf-head-title">{strings.title}</h1>
        <p className="lede rf-head-lede">{strings.lede}</p>

        <nav className="rf-tabs" aria-label={strings.title}>
          {tab(
            "rituals",
            "/rituals",
            strings.rituals,
            strings.countRites.replace("{n}", ritesCount.toLocaleString("en-IN")),
            strings.ritualsBlurb,
          )}
          {tab(
            "festivals",
            "/festivals",
            strings.festivals,
            strings.countFestivals.replace("{n}", festivalsCount.toLocaleString("en-IN")),
            strings.festivalsBlurb,
          )}
        </nav>
      </div>
    </section>
  );
}

/**
 * The bar of in-page jumps under the head. On a wide screen it sticks
 * below the masthead while the reader scrolls a long half. On a phone
 * it wraps and stays in place instead: the rendering audit forbids a
 * sideways-scrolling strip, and a sticky bar three rows deep would
 * take a third of the screen.
 */
export function JumpBar({
  label,
  items,
}: {
  label: string;
  items: { id: string; name: string; count: number }[];
}) {
  return (
    <nav className="rf-jump" aria-label={label}>
      <div className="shell rf-jump-inner">
        <span className="rf-jump-label">{label}</span>
        <ul className="rf-jump-list">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className="rf-jump-pill">
                {i.name}
                <span className="rf-jump-n">{i.count.toLocaleString("en-IN")}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
