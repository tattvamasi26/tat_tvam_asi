"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { PuranaLean } from "@/lib/seed/puranas";

/**
 * The eighteen, sortable by length and narrowed by whom each leans to.
 *
 * The rows arrive already rendered by the server — pictures, names in
 * the reader's script and all — so this only reorders and hides them,
 * and nothing of the corpus is shipped to the browser. Without
 * JavaScript the controls stay hidden and the plain list in list order
 * is the page, which is what it was before.
 */

export interface PuranaListItem {
  slug: string;
  order: number;
  verses: number;
  leans: PuranaLean[];
  row: ReactNode;
}

export interface PuranaListLabels {
  sortLabel: string;
  sortOrder: string;
  sortLength: string;
  filterLabel: string;
  all: string;
  leans: Record<PuranaLean, string>;
  /** Carries {n} and {m}. */
  showing: string;
}

const LEANS: PuranaLean[] = ["vishnu", "shiva", "devi", "brahma", "other"];

export function PuranaList({ items, labels }: { items: PuranaListItem[]; labels: PuranaListLabels }) {
  const [ready, setReady] = useState(false);
  const [sort, setSort] = useState<"order" | "length">("order");
  const [lean, setLean] = useState<PuranaLean | "all">("all");

  useEffect(() => setReady(true), []);

  const shown = items
    .filter((p) => lean === "all" || p.leans.includes(lean))
    .sort((a, b) => (sort === "length" ? b.verses - a.verses || a.order - b.order : a.order - b.order));

  const count = (l: PuranaLean) => items.filter((p) => p.leans.includes(l)).length;
  const fmt = (n: number) => n.toLocaleString("en-IN");

  return (
    <>
      <div className="pu2-tools" hidden={!ready}>
        <div className="pu2-tool" role="group" aria-label={labels.sortLabel}>
          <span className="pu2-tool-label" aria-hidden="true">
            {labels.sortLabel}
          </span>
          {(["order", "length"] as const).map((k) => (
            <button
              key={k}
              type="button"
              className="pu2-pick"
              aria-pressed={sort === k}
              onClick={() => setSort(k)}
            >
              {k === "order" ? labels.sortOrder : labels.sortLength}
            </button>
          ))}
        </div>

        <div className="pu2-tool" role="group" aria-label={labels.filterLabel}>
          <span className="pu2-tool-label" aria-hidden="true">
            {labels.filterLabel}
          </span>
          <button type="button" className="pu2-pick" aria-pressed={lean === "all"} onClick={() => setLean("all")}>
            {labels.all}
          </button>
          {LEANS.map((l) => (
            <button
              key={l}
              type="button"
              className="pu2-pick"
              aria-pressed={lean === l}
              onClick={() => setLean(l)}
            >
              {labels.leans[l]} <span className="pu2-pick-n">{fmt(count(l))}</span>
            </button>
          ))}
        </div>

        <p className="pu2-showing" aria-live="polite">
          {labels.showing.replace("{n}", fmt(shown.length)).replace("{m}", fmt(items.length))}
        </p>
      </div>

      <ol className="pu2-list">
        {shown.map((p) => (
          <li key={p.slug}>{p.row}</li>
        ))}
      </ol>
    </>
  );
}
