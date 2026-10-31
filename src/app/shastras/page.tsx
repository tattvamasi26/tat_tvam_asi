import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { shastraStrings } from "@/i18n/shastras";
import { shastraUi } from "@/i18n/shastra-ui";
// The count of rites a branch lays down is the rites section's own
// sentence, so it is kept with the rest of that vocabulary.
import { ritualStrings } from "@/i18n/rituals";
import { getShastraTiers } from "@/lib/data";
import { shastraProgress } from "@/lib/seed/shastras";
import { JumpBar } from "@/components/rf/RfHead";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { Thumb } from "@/components/content/Thumb";

export const metadata: Metadata = {
  title: "Shastras & Puranas",
  description:
    "The whole tradition in one place — what is heard, what is remembered, and what is built on them: Veda, Upaniṣads, Vedāṅga, Dharma, Itihāsa, Purāṇa, Vedānta, Darśana, Āgama and the teaching texts.",
};

/**
 * Shastras and Puranas — the map of the whole tradition.
 *
 * Arranged by the distinction the tradition itself draws first: what
 * is heard (śruti), what is remembered (smṛti), and what is built on
 * both. Each tier is a band in the shape the rest of the site now
 * uses, and each branch a card in the site's own palette — the pastel
 * art panels it replaced were the one place the site's colours went
 * off.
 *
 * Every branch now leads somewhere. Four have sections of their own;
 * the other six have a page here that says what the branch is and
 * gives a paragraph on each of its texts. Neither ever holds a second
 * copy of a text that lives elsewhere: a readable text's chip still
 * links to the section that holds it.
 */
export default function ShastrasPage() {
  const { locale } = getTranslations();
  const s = shastraStrings(locale);
  const u = shastraUi(locale);
  const r = ritualStrings(locale);
  const tiers = getShastraTiers(locale);
  const { live, partial, total } = shastraProgress();
  const sc = scriptClass(locale);
  const branchCount = tiers.reduce((n, t) => n + t.branches.length, 0);
  const pct = (n: number, of: number) => `${of > 0 ? Math.round((n / of) * 100) : 0}%`;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{u.countBranches.replace("{n}", branchCount.toLocaleString("en-IN"))}</p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
          <div className="sh2-progress-wrap">
            <p className="sh2-progress">
              {s.progress((live + partial).toLocaleString("en-IN"), total.toLocaleString("en-IN"))}
            </p>
            <span className="sh2-meter is-big" aria-hidden="true">
              <span className="sh2-meter-fill" style={{ width: pct(live + partial, total) }} />
            </span>
          </div>
          {/* What the two kinds of chip on every card mean. */}
          <p className="sh2-key">
            <span className="chip chip-gold">{u.readHere}</span>
            <span className="chip sh-chip-quiet">{s.noneYet}</span>
          </p>
        </div>
      </section>

      <JumpBar
        label={u.labelTier}
        items={tiers.map((t) => ({ id: t.id, name: t.name, count: t.branches.length }))}
      />

      {tiers.map((tier, ti) => (
        <section key={tier.id} id={tier.id} className="rf-band" aria-labelledby={`h-${tier.id}`}>
          <div className="shell rf-band-inner">
            <header className="rf-band-head">
              <span className="rf-band-n">{String(ti + 1).padStart(2, "0")}</span>
              <h2 className="rf-band-title" id={`h-${tier.id}`}>
                {tier.name}
              </h2>
              {tier.sanskrit && <p className={`rf-band-sanskrit ${sc}`}>{tier.sanskrit}</p>}
              <p className="rf-band-lede">{tier.lede}</p>
            </header>

            <ul className="sh2-cards">
              {tier.branches.map((b) =>
                b.id === "upanishads" ? (
                  <li key={b.id} id={b.id} className="is-feature">
                    <article className="sh2-card sh2-feature">
                      <Link href={b.page ?? "/upanishads"} className="sh2-pic" tabIndex={-1} aria-hidden="true">
                        <Thumb kind="branch" slug={b.id} label="" locale={locale} />
                      </Link>
                      <div className="sh2-feature-body">
                        <p className="sh2-feature-tag">{u.featureTag}</p>
                        <div className="sh2-card-head">
                          <h3 className="sh2-name">
                            <Link href={b.page ?? "/upanishads"}>{b.name}</Link>
                          </h3>
                          <p className={`sh2-sanskrit ${sc}`}>{b.sanskrit}</p>
                        </div>
                        <p className="sh2-lede">{b.lede}</p>
                        <p className="sh2-feature-lede">{u.featureLede}</p>

                        {/* What can be read now, as the way in to each. */}
                        <ul className="sh2-reads">
                          {b.texts
                            .filter((t) => t.href)
                            .map((t) => (
                              <li key={t.id}>
                                <Link href={t.href!} className="sh2-read">
                                  <span className="sh2-read-name">{t.name}</span>
                                  <span className={`sh2-read-sanskrit ${sc}`}>{t.sanskrit}</span>
                                  <span className="sh2-read-foot">
                                    <span className="sh2-status" data-status={t.status}>
                                      {t.status === "live" ? s.statusLive : s.statusPartial}
                                    </span>
                                    <Arrow />
                                  </span>
                                </Link>
                              </li>
                            ))}
                        </ul>

                        <div className="sh2-later">
                          <span className="sh2-later-label">{u.featureLater}</span>
                          <ul className="sh2-chips">
                            {b.texts
                              .filter((t) => !t.href)
                              .map((t) => (
                                <li key={t.id}>
                                  <span className="chip sh-chip-quiet" title={t.note}>
                                    {t.name}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>

                        <div className="sh2-foot">
                          <span className="sh2-meter" aria-hidden="true">
                            <span className="sh2-meter-fill" style={{ width: pct(b.readable, b.total) }} />
                          </span>
                          <span className="sh2-count">
                            {s.readableOf(b.readable.toLocaleString("en-IN"), b.total.toLocaleString("en-IN"))}
                          </span>
                          <Link href={b.page ?? "/upanishads"} className="btn sh2-cta">
                            {u.featureCta} <Arrow />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                ) : (
                <li key={b.id} id={b.id}>
                  <article className="sh2-card">
                    {/* The picture repeats the card's own link, so it is
                        hidden from the keyboard and from screen readers. */}
                    {b.page ? (
                      <Link href={b.page} className="sh2-pic" tabIndex={-1} aria-hidden="true">
                        <Thumb kind="branch" slug={b.id} label="" locale={locale} />
                      </Link>
                    ) : (
                      <span className="sh2-pic" aria-hidden="true">
                        <Thumb kind="branch" slug={b.id} label="" locale={locale} />
                      </span>
                    )}
                    <div className="sh2-card-head">
                      <h3 className="sh2-name">
                        {b.page ? <Link href={b.page}>{b.name}</Link> : b.name}
                      </h3>
                      <p className={`sh2-sanskrit ${sc}`}>{b.sanskrit}</p>
                    </div>

                    <p className="sh2-lede">{b.lede}</p>

                    <ul className="sh2-chips">
                      {b.texts.map((t) =>
                        t.href ? (
                          <li key={t.id}>
                            <Link href={t.href} className="chip chip-gold" title={t.note}>
                              {t.name}
                            </Link>
                          </li>
                        ) : (
                          <li key={t.id}>
                            <span className="chip sh-chip-quiet" title={t.note}>
                              {t.name}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>

                    {/* The return leg of the bridge into the rites. */}
                    {b.rites > 0 && (
                      <Link href="/rituals" className="sh2-rites">
                        {r.doneBecause(b.rites.toLocaleString("en-IN"))} <Arrow />
                      </Link>
                    )}

                    <div className="sh2-foot">
                      <span className="sh2-meter" aria-hidden="true">
                        <span className="sh2-meter-fill" style={{ width: pct(b.readable, b.total) }} />
                      </span>
                      <span className="sh2-count">
                        {b.readable > 0
                          ? s.readableOf(b.readable.toLocaleString("en-IN"), b.total.toLocaleString("en-IN"))
                          : s.noneYet}
                      </span>
                      {b.page && (
                        <Link href={b.page} className="sh2-open">
                          {u.open} <Arrow />
                        </Link>
                      )}
                    </div>
                  </article>
                </li>
                ),
              )}
            </ul>
          </div>
        </section>
      ))}

      <section className="shell rf-closing">
        <p className="rf-closing-text">{s.standing}</p>
      </section>
    </>
  );
}
