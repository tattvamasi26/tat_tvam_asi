"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The timer, and the only interactive thing on the site.
 *
 * Deliberately small. It counts down, it draws a ring, and when it
 * finishes it writes one line to this browser's localStorage. There
 * is no account, no server, nothing leaves the machine — which is
 * both the honest thing for a page about sitting quietly and the
 * reason this section needed no new privacy surface.
 *
 * Two things worth knowing if you change it:
 *
 *  - localStorage is read in an effect, never during render. Reading
 *    it while rendering makes the server and the client disagree and
 *    React throws a hydration error.
 *  - The countdown works off a wall-clock end time, not by
 *    decrementing a counter each tick. A background tab throttles
 *    timers to once a minute, and a decrementing counter would lose
 *    most of the sitting.
 */

const STORE = "tta_practice_v1";

interface Record_ {
  /** ISO date (YYYY-MM-DD) of the last completed sitting. */
  last: string;
  streak: number;
  total: number;
}

const today = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD, local

function read(): Record_ | null {
  try {
    const raw = localStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as Record_) : null;
  } catch {
    // Private mode, or storage disabled. The timer still works; only
    // the streak is lost, and that is the right thing to degrade.
    return null;
  }
}

function complete(prev: Record_ | null): Record_ {
  const day = today();
  if (prev?.last === day) return { ...prev, total: prev.total + 1 };

  // Yesterday in local time, compared as a date string.
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const ran = prev?.last === yesterday.toLocaleDateString("en-CA");

  return {
    last: day,
    streak: ran ? (prev?.streak ?? 0) + 1 : 1,
    total: (prev?.total ?? 0) + 1,
  };
}

/** Server Components cannot pass functions to client ones, so the
 *  two counted labels arrive as templates and are filled in here. */
const fill = (template: string, n: number) =>
  template.replace("{n}", n.toLocaleString("en-IN"));

const mmss = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;

export function Sitting({
  durations,
  labels,
}: {
  durations: number[];
  labels: {
    chooseLength: string;
    minutes: string;
    begin: string;
    pause: string;
    resume: string;
    reset: string;
    done: string;
    doneNote: string;
    /** Both carry {n}, substituted here. */
    streak: string;
    streakNote: string;
    sittings: string;
  };
}) {
  const [minutes, setMinutes] = useState(durations[0]);
  const [left, setLeft] = useState(durations[0] * 60);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [record, setRecord] = useState<Record_ | null>(null);

  // The wall-clock moment the sitting ends, so a throttled background
  // tab cannot lose time.
  const endAt = useRef<number | null>(null);

  useEffect(() => setRecord(read()), []);

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      if (endAt.current === null) return;
      const remaining = Math.round((endAt.current - Date.now()) / 1000);
      if (remaining <= 0) {
        setLeft(0);
        setRunning(false);
        setFinished(true);
        endAt.current = null;
        setRecord((prev) => {
          const next = complete(prev);
          try {
            localStorage.setItem(STORE, JSON.stringify(next));
          } catch {
            /* storage unavailable; the sitting still happened */
          }
          return next;
        });
      } else {
        setLeft(remaining);
      }
    };
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [running]);

  const choose = useCallback((m: number) => {
    setMinutes(m);
    setLeft(m * 60);
    setRunning(false);
    setFinished(false);
    endAt.current = null;
  }, []);

  const start = useCallback(() => {
    endAt.current = Date.now() + left * 1000;
    setFinished(false);
    setRunning(true);
  }, [left]);

  const pause = useCallback(() => {
    setRunning(false);
    endAt.current = null;
  }, []);

  const reset = useCallback(() => choose(minutes), [choose, minutes]);

  const total = minutes * 60;
  const gone = total > 0 ? (total - left) / total : 0;
  // A 2πr circumference for r = 54.
  const C = 339.292;

  return (
    <div className="sit">
      <div className="sit-lengths" role="group" aria-label={labels.chooseLength}>
        <span className="sit-lengths-label">{labels.chooseLength}</span>
        {durations.map((m) => (
          <button
            key={m}
            type="button"
            className="sit-length"
            aria-pressed={m === minutes}
            onClick={() => choose(m)}
          >
            {m} {labels.minutes}
          </button>
        ))}
      </div>

      <div className="sit-ring">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle className="sit-ring-track" cx="60" cy="60" r="54" />
          <circle
            className="sit-ring-arc"
            cx="60"
            cy="60"
            r="54"
            style={{ strokeDasharray: C, strokeDashoffset: C * (1 - gone) }}
          />
        </svg>
        <p className="sit-clock" role="timer" aria-live="off">
          {finished ? labels.done : mmss(left)}
        </p>
      </div>

      <div className="sit-controls">
        {!running ? (
          <button type="button" className="btn sit-go" onClick={start} disabled={left === 0 && !finished}>
            {finished ? labels.reset : left === minutes * 60 ? labels.begin : labels.resume}
          </button>
        ) : (
          <button type="button" className="btn-ghost sit-go" onClick={pause}>
            {labels.pause}
          </button>
        )}
        {!finished && left !== minutes * 60 && (
          <button type="button" className="btn-ghost sit-secondary" onClick={reset}>
            {labels.reset}
          </button>
        )}
      </div>

      {finished && <p className="sit-done">{labels.doneNote}</p>}

      {/* Rendered only after the effect has read storage, so the
          server and the client never disagree about it. */}
      {record && record.total > 0 && (
        <div className="sit-record">
          <p className="sit-record-line">
            {record.streak > 1 && <strong>{fill(labels.streak, record.streak)}</strong>}
            {record.streak > 1 && " · "}
            {fill(labels.sittings, record.total)}
          </p>
          <p className="sit-record-note">{labels.streakNote}</p>
        </div>
      )}
    </div>
  );
}
