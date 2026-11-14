"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

/**
 * The search box and filters for the bhajans.
 *
 * The results are the server's: this only writes the query into the
 * address (/bhajans?q=…&composer=…) and lets the page render it, so
 * nothing of the corpus is shipped to the browser and every search is
 * a link a reader can keep or send. Without JavaScript it is an
 * ordinary form with a Search button, and works the same.
 *
 * On the bhajans page it follows the reader as they type (`live`). On a
 * group page it waits for Enter or the button, because following there
 * would carry the reader off the page mid-word.
 */

export interface FinderOption {
  value: string;
  label: string;
  count: number;
}

export interface FinderLabels {
  searchLabel: string;
  searchPlaceholder: string;
  searchButton: string;
  filterDevata: string;
  filterComposer: string;
  filterForm: string;
  filterListen: string;
  anyDevata: string;
  anyComposer: string;
  anyForm: string;
  clear: string;
  searching: string;
}

export interface FinderValues {
  q: string;
  devata: string;
  composer: string;
  form: string;
  listen: boolean;
}

export function BhajanFinder({
  values,
  options,
  listenCount,
  labels,
  live,
}: {
  values: FinderValues;
  options: { devata: FinderOption[]; composer: FinderOption[]; form: FinderOption[] };
  listenCount: number;
  labels: FinderLabels;
  live: boolean;
}) {
  const router = useRouter();
  const [v, setV] = useState<FinderValues>(values);
  const [pending, start] = useTransition();
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  // The server's answer is the truth once it arrives (Back, a link).
  useEffect(() => setV(values), [values.q, values.devata, values.composer, values.form, values.listen]); // eslint-disable-line react-hooks/exhaustive-deps

  // "/" anywhere on the page puts the cursor in the box, as on most search pages.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key !== "/" || e.metaKey || e.ctrlKey || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      e.preventDefault();
      input.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const urlFor = (x: FinderValues) => {
    const p = new URLSearchParams();
    if (x.q.trim()) p.set("q", x.q.trim());
    if (x.devata) p.set("devata", x.devata);
    if (x.composer) p.set("composer", x.composer);
    if (x.form) p.set("form", x.form);
    if (x.listen) p.set("listen", "1");
    const qs = p.toString();
    return `/bhajans${qs ? `?${qs}` : ""}#results`;
  };

  const go = (x: FinderValues, replace: boolean) =>
    start(() => (replace ? router.replace(urlFor(x), { scroll: false }) : router.push(urlFor(x))));

  const set = (patch: Partial<FinderValues>, wait: number) => {
    const next = { ...v, ...patch };
    setV(next);
    if (!live) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => go(next, true), wait);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  // On a group page the group is where the reader is, not something they asked for.
  const active = live && !!(v.q.trim() || v.devata || v.composer || v.form || v.listen);
  const option = (o: FinderOption, current: string) => (
    <option key={o.value} value={o.value} disabled={o.count === 0 && o.value !== current}>
      {o.label} ({o.count.toLocaleString("en-IN")})
    </option>
  );

  return (
    <form
      className="bh-find"
      action="/bhajans#results"
      method="get"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        clearTimeout(timer.current);
        go(v, live);
      }}
    >
      <div className="searchbar bh-find-bar">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.4" width="19" height="19" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          ref={input}
          type="search"
          name="q"
          value={v.q}
          onChange={(e) => set({ q: e.target.value }, 320)}
          placeholder={labels.searchPlaceholder}
          aria-label={labels.searchLabel}
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
        />
        <button type="submit" className="btn bh-find-go">
          {labels.searchButton}
        </button>
      </div>

      <div className="bh-find-filters">
        <label className="bh-find-field">
          <span>{labels.filterDevata}</span>
          <select name="devata" value={v.devata} onChange={(e) => set({ devata: e.target.value }, 0)}>
            <option value="">{labels.anyDevata}</option>
            {options.devata.map((o) => option(o, v.devata))}
          </select>
        </label>
        <label className="bh-find-field">
          <span>{labels.filterComposer}</span>
          <select name="composer" value={v.composer} onChange={(e) => set({ composer: e.target.value }, 0)}>
            <option value="">{labels.anyComposer}</option>
            {options.composer.map((o) => option(o, v.composer))}
          </select>
        </label>
        <label className="bh-find-field">
          <span>{labels.filterForm}</span>
          <select name="form" value={v.form} onChange={(e) => set({ form: e.target.value }, 0)}>
            <option value="">{labels.anyForm}</option>
            {options.form.map((o) => option(o, v.form))}
          </select>
        </label>
        <label className="bh-find-check">
          <input
            type="checkbox"
            name="listen"
            value="1"
            checked={v.listen}
            onChange={(e) => set({ listen: e.target.checked }, 0)}
          />
          <span>
            {labels.filterListen} ({listenCount.toLocaleString("en-IN")})
          </span>
        </label>
        {active && (
          <a
            href="/bhajans"
            className="bh-find-clear"
            onClick={(e) => {
              e.preventDefault();
              const empty = { q: "", devata: "", composer: "", form: "", listen: false };
              setV(empty);
              start(() => router.replace("/bhajans", { scroll: false }));
            }}
          >
            {labels.clear}
          </a>
        )}
        <span className="bh-find-status" role="status" aria-live="polite">
          {pending ? labels.searching : ""}
        </span>
      </div>
    </form>
  );
}
