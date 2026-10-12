import type { Depth } from "@/lib/seed/rite-depth";

/**
 * The deep half of a rite's or a festival's page: what is done in
 * order, what is used, and — for a festival kept over several days —
 * each day. Shared by both halves of the section, so a reader moving
 * from a rite to a festival meets the same shapes in the same places.
 *
 * Plain semantic markup throughout: an ordered list for the steps,
 * because order is the content; an unordered one for what is used,
 * because it has none.
 */
export function StepList({ title, steps }: { title: string; steps: Depth["steps"] }) {
  return (
    <section className="rf-block" aria-labelledby="rf-steps">
      <h2 className="rf-h2" id="rf-steps">
        {title}
      </h2>
      <ol className="rf-steps">
        {steps.map(([name, text], i) => (
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
  );
}

export function NeedList({ title, needs }: { title: string; needs: string[] }) {
  return (
    <section className="rf-block" aria-labelledby="rf-needs">
      <h2 className="rf-h2" id="rf-needs">
        {title}
      </h2>
      <ul className="rf-needs">
        {needs.map((n) => (
          <li key={n} className="rf-need">
            {n}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DayList({ title, days }: { title: string; days: NonNullable<Depth["days"]> }) {
  return (
    <section className="rf-block" aria-labelledby="rf-days">
      <h2 className="rf-h2" id="rf-days">
        {title}
      </h2>
      <ol className="rf-days">
        {days.map(([name, text], i) => (
          <li key={name} className="rf-day">
            <span className="rf-day-n">{(i + 1).toLocaleString("en-IN")}</span>
            <h3 className="rf-day-name">{name}</h3>
            <p className="rf-day-text">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** The aside: the facts a reader wants before reading anything. */
export function Glance({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <aside className="rf-glance" aria-label={title}>
      <p className="rf-glance-title">{title}</p>
      <dl className="rf-glance-list">
        {rows.map(([k, v]) => (
          <div key={k} className="rf-glance-row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
