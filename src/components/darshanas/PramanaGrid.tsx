import Link from "next/link";
import type { PramanaRowView, PramanaView } from "@/lib/data";

/**
 * Which school accepts which means of knowledge.
 *
 * This is the sharpest single comparison available between the six,
 * and it is a real table — a `<table>`, with row and column headers
 * and a caption — rather than an SVG. Three scripts decided that: a
 * matrix whose row labels are "ವೈಶೇಷಿಕ" and "पूर्वमीमांसा" needs text
 * that wraps and a font the audit can account for, and SVG text gives
 * neither. The cosmos drawings are SVG because they show quantities;
 * this one shows labelled structure, and the acharya pages' drawn
 * blocks are the precedent for doing that in CSS.
 *
 * The columns are numbered rather than named, with the names in a
 * legend below. A six-column header carrying "Non-apprehension" in
 * Kannada would be unreadable at any width this site supports.
 *
 * A row with `accepts: null` is the Jain row, and it is blank on
 * purpose — see CONTRAST in seed/darshanas.ts.
 */
export function PramanaGrid({
  pramanas,
  schools,
  others,
  scriptClass,
  strings,
}: {
  pramanas: PramanaView[];
  schools: PramanaRowView[];
  others: PramanaRowView[];
  scriptClass: string;
  strings: {
    caption: string;
    accepts: string;
    yes: string;
    no: string;
    ownList: string;
    colSchool: string;
    colCount: string;
    legendTitle: string;
  };
}) {
  const row = (r: PramanaRowView, kind: "school" | "other") => (
    <tr key={r.id} data-kind={kind}>
      <th scope="row" className="da-grid-row-head">
        {r.href ? (
          <Link href={r.href} className="da-grid-link">
            {r.name}
          </Link>
        ) : (
          <span>{r.name}</span>
        )}
        <span className={`da-grid-row-sanskrit ${scriptClass}`}>{r.sanskrit}</span>
      </th>

      {pramanas.map((p) => {
        // Three states, not two: accepted, not accepted, and "this
        // list does not apply to me".
        const state = r.accepts === null ? "na" : r.accepts.includes(p.id as never) ? "yes" : "no";
        return (
          <td key={p.id} data-state={state}>
            <span className="da-dot" aria-hidden="true" />
            <span className="sr-only">
              {p.name}: {state === "yes" ? strings.yes : state === "no" ? strings.no : strings.ownList}
            </span>
          </td>
        );
      })}

      <td className="da-grid-count">
        {r.accepts === null
          ? strings.ownList
          : strings.accepts.replace("{n}", r.accepts.length.toLocaleString("en-IN"))}
      </td>
    </tr>
  );

  return (
    <figure className="da-grid-figure">
      <div className="da-grid-scroll">
        <table className="da-grid">
          <caption className="sr-only">{strings.caption}</caption>
          <thead>
            <tr>
              <th scope="col">{strings.colSchool}</th>
              {pramanas.map((p) => (
                <th scope="col" key={p.id} title={p.name}>
                  {p.n.toLocaleString("en-IN")}
                </th>
              ))}
              <th scope="col">{strings.colCount}</th>
            </tr>
          </thead>
          <tbody>{schools.map((s) => row(s, "school"))}</tbody>
          {/* The rule between the six and everything else is a
              separate tbody, so it is structure and not a border. */}
          <tbody className="da-grid-others">{others.map((o) => row(o, "other"))}</tbody>
        </table>
      </div>

      <figcaption className="da-grid-caption">{strings.caption}</figcaption>

      <div className="da-legend">
        <p className="fact-label">{strings.legendTitle}</p>
        <ol className="da-legend-list">
          {pramanas.map((p) => (
            <li key={p.id}>
              <span className="da-legend-n">{p.n.toLocaleString("en-IN")}</span>
              <span className="da-legend-body">
                <span className="da-legend-name">{p.name}</span>
                <span className={`da-legend-sanskrit ${scriptClass}`}>{p.sanskrit}</span>
                <span className="da-legend-gloss">{p.gloss}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
