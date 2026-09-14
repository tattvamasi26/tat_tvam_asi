"use client";

import { useEffect, useState } from "react";

/**
 * The reading spine: where you are in the text, and a way to move.
 *
 * Two jobs. It shows progress through nineteen verses as a column of
 * ticks, and it makes the text navigable by keyboard — J/K or the
 * arrow keys step between verses, Home and End jump to the ends.
 * On a text this long, having to scroll past a full viewport per
 * verse to find verse 14 is the difference between a document and a
 * reader.
 *
 * Which verse is "current" comes from an IntersectionObserver rather
 * than a scroll handler, so the browser does the work and no layout
 * is read during scrolling. If the observer never fires — no JS, old
 * engine — the spine simply renders with nothing marked current,
 * which is inert rather than broken.
 */
export function VerseSpine({
  ids,
  labels,
}: {
  ids: { id: string; locator: string }[];
  labels: { index: string; verse: string; invocation: string };
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = ids
      .map((v) => document.getElementById(v.id))
      .filter((n): n is HTMLElement => !!n);
    if (!nodes.length) return;

    // A band across the middle of the viewport: whatever is crossing
    // it is what the reader is looking at.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ids]);

  useEffect(() => {
    function go(delta: number) {
      const i = active ? ids.findIndex((v) => v.id === active) : -1;
      const next = ids[Math.min(ids.length - 1, Math.max(0, i + delta))];
      if (next) document.getElementById(next.id)?.scrollIntoView({ block: "start" });
    }

    function onKey(e: KeyboardEvent) {
      // Never hijack typing.
      const t = e.target as HTMLElement | null;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "j" || e.key === "ArrowDown") { e.preventDefault(); go(1); }
      else if (e.key === "k" || e.key === "ArrowUp") { e.preventDefault(); go(-1); }
      else if (e.key === "Home") { e.preventDefault(); document.getElementById(ids[0].id)?.scrollIntoView(); }
      else if (e.key === "End") { e.preventDefault(); document.getElementById(ids[ids.length - 1].id)?.scrollIntoView(); }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, ids]);

  const activeIndex = active ? ids.findIndex((v) => v.id === active) : -1;

  return (
    <nav className="spine" aria-label={labels.index}>
      <span className="spine-count">
        {activeIndex >= 0 ? String(activeIndex).padStart(2, "0") : "··"}
        <i>/</i>
        {String(ids.length - 1).padStart(2, "0")}
      </span>

      <ol className="spine-ticks">
        {ids.map((v, i) => (
          <li key={v.id}>
            <a
              href={`#${v.id}`}
              className="spine-tick"
              data-active={v.id === active ? "" : undefined}
              data-passed={activeIndex > i ? "" : undefined}
              aria-label={
                v.locator === "invocation"
                  ? labels.invocation
                  : `${labels.verse} ${v.locator}`
              }
            >
              <span />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
