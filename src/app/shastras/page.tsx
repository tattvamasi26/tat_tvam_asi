import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { shastraStrings } from "@/i18n/shastras";
// The count of rites a branch lays down is the rites section's own
// sentence, so it is kept with the rest of that vocabulary.
import { ritualStrings } from "@/i18n/rituals";
import { getShastraMap } from "@/lib/data";
import { shastraProgress } from "@/lib/seed/shastras";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Shastras & Puranas",
  description:
    "The whole tradition in one place — Veda, Upaniṣads, Vedānta, Vedāṅga, Darśana, Dharma, Āgama, Purāṇa, Itihāsa and the teaching texts.",
};

/**
 * Shastras and Puranas — the section that holds the texts.
 *
 * The Vedas, the Upaniṣads and the Gītā are reached through here
 * rather than from the top-level nav, because listing them in both
 * places was the site saying the same thing twice.
 *
 * What it is not is a second home for those texts. A branch card
 * links to the section that already holds it; a hymn keeps one
 * address, /vedas/rigveda, and never gains a second under /shastras.
 *
 * The first two cards are the Vedas and the Upaniṣads, and they are
 * wider than the rest. That is not decoration — they are the two
 * branches with real depth behind them, and the page should say so
 * before it says anything else.
 */
export default function ShastrasPage() {
  const { locale } = getTranslations();
  const s = shastraStrings(locale);
  const r = ritualStrings(locale);
  const branches = getShastraMap(locale);
  const { live, partial, total } = shastraProgress();
  const sc = scriptClass(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">
            {branches.length.toLocaleString("en-IN")} {s.branches}
          </p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="sh-standing">
          <p className="sh-standing-count">
            {s.progress((live + partial).toLocaleString("en-IN"), total.toLocaleString("en-IN"))}
          </p>
          <p className="sh-standing-text">{s.standing}</p>
        </div>

        <ul className="sh-grid">
          {branches.map((branch, i) => {
            // The two developed branches lead, at double width.
            const wide = i < 2;
            const head = (
              <>
                <span className={`sh-art tone-${i % 7}`} aria-hidden="true">
                  <span className={`sh-art-glyph ${sc}`}>{branch.glyph}</span>
                </span>
                <span className="sh-card-body">
                  <span className="sh-card-title">
                    <span className="sh-card-name">{branch.name}</span>
                    {branch.href && <Arrow />}
                  </span>
                  <span className="sh-card-lede">{branch.lede}</span>
                </span>
              </>
            );

            return (
              <li
                key={branch.id}
                id={branch.id}
                className={`sh-cell${wide ? " is-wide" : ""}`}
              >
                <article className="sh-card">
                  {branch.href ? (
                    <Link href={branch.href} className="sh-card-head">
                      {head}
                    </Link>
                  ) : (
                    <div className="sh-card-head">{head}</div>
                  )}

                  <div className="sh-card-foot">
                    <p className="sh-count">
                      {branch.readable > 0
                        ? s.readableOf(
                            branch.readable.toLocaleString("en-IN"),
                            branch.total.toLocaleString("en-IN"),
                          )
                        : s.noneYet}
                    </p>
                    <ul className="sh-chips">
                      {branch.texts.map((text) =>
                        text.href ? (
                          <li key={text.id}>
                            <Link href={text.href} className="chip chip-gold" title={text.note}>
                              {text.name}
                            </Link>
                          </li>
                        ) : (
                          <li key={text.id}>
                            <span className="chip sh-chip-quiet" title={text.note}>
                              {text.name}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>

                    {/* The return leg of the bridge. A branch that lays
                        rites down says so and points at them, so the
                        map of what is written and the section on what
                        is done are not two strangers. */}
                    {branch.rites > 0 && (
                      <Link href="/rituals" className="sh-rites">
                        {r.doneBecause(branch.rites.toLocaleString("en-IN"))} <Arrow />
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
