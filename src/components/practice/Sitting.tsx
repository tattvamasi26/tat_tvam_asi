"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { strike, wakeAudio } from "./bell";

/**
 * The timer, and the only interactive thing on the site.
 *
 * It counts down, it draws a ring, it strikes a bell, and when it
 * finishes it writes one line to this browser's localStorage. There
 * is no account and no server: nothing leaves the machine, which is
 * both the honest thing for a page about sitting quietly and the
 * reason this section needed no new privacy surface.
 *
 * Five things worth knowing if you change it:
 *
 *  - localStorage is read in an effect, never during render. Reading
 *    it while rendering makes the server and the client disagree and
 *    React throws a hydration error.
 *  - The countdown works off a wall-clock end time, not by
 *    decrementing a counter each tick. A background tab throttles
 *    timers to once a minute, and a decrementing counter would lose
 *    most of the sitting.
 *  - The bell is synthesised (see bell.ts), so the page still fetches
 *    nothing on its own. Audio can only start inside a click handler,
 *    which is why `wakeAudio` is called from the button rather than
 *    from the effect that needs it.
 *  - Full screen is an overlay first and the Fullscreen API second.
 *    The API is refused often enough — an iframe, an older iOS — that
 *    the overlay has to be the thing that actually works; the request
 *    is a bonus that hides the browser chrome when it is granted.
 *  - The screen wake lock is released on pause, on finishing and on
 *    unmount, and re-taken when the tab comes back. A lock left held
 *    would keep somebody's phone lit all day.
 *
 * An open sitting counts up instead of down. It is there because a
 * timer that only offers three fixed lengths quietly tells the reader
 * those are the lengths that count, and the tradition says no such
 * thing.
 */

const STORE = "tta_practice_v1";
const PREFS = "tta_practice_prefs_v1";

/** Chosen instead of a length, not alongside one. */
const OPEN = 0;

interface Record_ {
  /** ISO date (YYYY-MM-DD) of the last completed sitting. */
  last: string;
  streak: number;
  total: number;
}

interface Prefs {
  sound: boolean;
  halfway: boolean;
  /** The length last chosen, per sitting. */
  minutes: Record<string, number>;
}

const DEFAULT_PREFS: Prefs = { sound: true, halfway: false, minutes: {} };

const today = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD, local

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? ({ ...fallback, ...(JSON.parse(raw) as T) } as T) : fallback;
  } catch {
    // Private mode, or storage disabled. Everything still works; only
    // the streak and the preferences are lost, which is the right
    // thing to degrade.
    return fallback;
  }
}

function writeJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable; the sitting still happened */
  }
}

function readRecord(): Record_ | null {
  try {
    const raw = localStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as Record_) : null;
  } catch {
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
 *  counted labels arrive as templates and are filled in here. */
const fill = (template: string, n: number) =>
  template.replace("{n}", n.toLocaleString("en-IN"));

const mmss = (s: number) => {
  const whole = Math.max(0, Math.round(s));
  const m = Math.floor(whole / 60);
  return `${m}:${String(whole % 60).padStart(2, "0")}`;
};

export interface SittingLabels {
  chooseLength: string;
  minutes: string;
  open: string;
  openNote: string;
  begin: string;
  pause: string;
  resume: string;
  reset: string;
  finish: string;
  done: string;
  doneNote: string;
  bell: string;
  halfwayBell: string;
  focus: string;
  leaveFocus: string;
  awake: string;
  /** Both carry {n}, substituted here. */
  streak: string;
  streakNote: string;
  sittings: string;
}

export function Sitting({
  slug,
  name,
  durations,
  labels,
  children,
}: {
  /** So each sitting remembers its own last length. */
  slug: string;
  /** Shown on the full-screen surface, which has nothing else on it. */
  name: string;
  durations: number[];
  labels: SittingLabels;
  /** The recitation, passed in from the server component. */
  children?: React.ReactNode;
}) {
  const [minutes, setMinutes] = useState(durations[0]);
  const [left, setLeft] = useState(durations[0] * 60);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [record, setRecord] = useState<Record_ | null>(null);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [focus, setFocus] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isOpen = minutes === OPEN;

  // The wall-clock moment the sitting ends (or began, when open), so a
  // throttled background tab cannot lose time.
  const mark = useRef<number | null>(null);
  const rangHalfway = useRef(false);
  const lock = useRef<WakeLockSentinel | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setRecord(readRecord());
    const p = readJSON<Prefs>(PREFS, DEFAULT_PREFS);
    setPrefs(p);
    const remembered = p.minutes?.[slug];
    if (remembered === OPEN || (typeof remembered === "number" && durations.includes(remembered))) {
      setMinutes(remembered);
      setLeft(remembered === OPEN ? 0 : remembered * 60);
    }
    // durations and slug are fixed for the life of the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── the screen wake lock ──────────────────────────────────
  const releaseLock = useCallback(() => {
    lock.current?.release().catch(() => {});
    lock.current = null;
  }, []);

  const takeLock = useCallback(async () => {
    try {
      lock.current = (await navigator.wakeLock?.request("screen")) ?? null;
    } catch {
      // Refused, unsupported, or the tab is not visible. The sitting
      // is unaffected; the screen simply dims as it normally would.
    }
  }, []);

  useEffect(() => {
    if (running) void takeLock();
    else releaseLock();
    return releaseLock;
  }, [running, takeLock, releaseLock]);

  // A lock is dropped when the tab is hidden and is not given back.
  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === "visible" && running && !lock.current) void takeLock();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [running, takeLock]);

  // ── the clock ─────────────────────────────────────────────
  useEffect(() => {
    if (!running) return;

    const tick = () => {
      if (mark.current === null) return;

      if (isOpen) {
        setElapsed(Math.max(0, (Date.now() - mark.current) / 1000));
        return;
      }

      const remaining = (mark.current - Date.now()) / 1000;

      if (prefs.halfway && !rangHalfway.current && remaining <= (minutes * 60) / 2) {
        rangHalfway.current = true;
        if (prefs.sound) strike(0.5);
      }

      if (remaining <= 0) {
        setLeft(0);
        setRunning(false);
        setFinished(true);
        mark.current = null;
        if (prefs.sound) strike(1);
        setRecord((prev) => {
          const next = complete(prev);
          writeJSON(STORE, next);
          return next;
        });
      } else {
        setLeft(remaining);
      }
    };

    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [running, isOpen, minutes, prefs.halfway, prefs.sound]);

  // ── full screen ───────────────────────────────────────────
  useEffect(() => {
    if (!focus) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFocus(false);
    };
    // The browser's own Escape leaves fullscreen without firing a
    // keydown here, so the overlay follows the document instead.
    const onFsChange = () => {
      if (!document.fullscreenElement) setFocus(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFsChange);
    const scroll = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stage.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.body.style.overflow = scroll;
    };
  }, [focus]);

  const enterFocus = useCallback(() => {
    setFocus(true);
    // Best effort. Refused in an iframe and on older iOS, where the
    // overlay alone does the job.
    document.documentElement.requestFullscreen?.().catch(() => {});
  }, []);

  const leaveFocus = useCallback(() => {
    setFocus(false);
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }, []);

  // ── controls ──────────────────────────────────────────────
  const savePrefs = useCallback((next: Prefs) => {
    setPrefs(next);
    writeJSON(PREFS, next);
  }, []);

  const choose = useCallback(
    (m: number) => {
      setMinutes(m);
      setLeft(m === OPEN ? 0 : m * 60);
      setElapsed(0);
      setRunning(false);
      setFinished(false);
      mark.current = null;
      rangHalfway.current = false;
      savePrefs({ ...prefs, minutes: { ...prefs.minutes, [slug]: m } });
    },
    [prefs, savePrefs, slug],
  );

  const start = useCallback(() => {
    // Audio has to be woken inside the gesture that starts it.
    if (prefs.sound) {
      wakeAudio();
      strike(1);
    }
    mark.current = isOpen ? Date.now() - elapsed * 1000 : Date.now() + left * 1000;
    setFinished(false);
    setRunning(true);
  }, [isOpen, elapsed, left, prefs.sound]);

  const pause = useCallback(() => {
    setRunning(false);
    mark.current = null;
  }, []);

  const reset = useCallback(() => choose(minutes), [choose, minutes]);

  /** An open sitting ends when the reader says so. */
  const finishOpen = useCallback(() => {
    setRunning(false);
    setFinished(true);
    mark.current = null;
    if (prefs.sound) strike(1);
    setRecord((prev) => {
      const next = complete(prev);
      writeJSON(STORE, next);
      return next;
    });
  }, [prefs.sound]);

  // ── the drawing ───────────────────────────────────────────
  const total = minutes * 60;
  const gone = isOpen ? 0 : total > 0 ? (total - left) / total : 0;
  // A 2πr circumference for r = 54.
  const C = 339.292;
  const clock = finished ? labels.done : mmss(isOpen ? elapsed : left);
  const untouched = isOpen ? elapsed === 0 : left === minutes * 60;

  const primary = running
    ? { label: labels.pause, onClick: pause, ghost: true }
    : finished
      ? { label: labels.reset, onClick: reset, ghost: false }
      : { label: untouched ? labels.begin : labels.resume, onClick: start, ghost: false };

  const ring = (
    <div className="sit-ring">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle className="sit-ring-track" cx="60" cy="60" r="54" />
        {!isOpen && (
          <circle
            className="sit-ring-arc"
            cx="60"
            cy="60"
            r="54"
            style={{ strokeDasharray: C, strokeDashoffset: C * (1 - gone) }}
          />
        )}
      </svg>
      <p className="sit-clock" role="timer" aria-live="off">
        {clock}
      </p>
    </div>
  );

  const controls = (
    <div className="sit-controls">
      <button
        type="button"
        className={`${primary.ghost ? "btn-ghost" : "btn"} sit-go`}
        onClick={primary.onClick}
      >
        {primary.label}
      </button>

      {isOpen && running && (
        <button type="button" className="btn-ghost sit-secondary" onClick={finishOpen}>
          {labels.finish}
        </button>
      )}

      {!finished && !untouched && !(isOpen && running) && (
        <button type="button" className="btn-ghost sit-secondary" onClick={reset}>
          {labels.reset}
        </button>
      )}
    </div>
  );

  return (
    <>
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
          {/* No end time. A timer offering only three lengths implies
              those are the lengths that count. */}
          <button
            type="button"
            className="sit-length"
            aria-pressed={isOpen}
            onClick={() => choose(OPEN)}
          >
            {labels.open}
          </button>
        </div>

        {isOpen && <p className="sit-open-note">{labels.openNote}</p>}

        {ring}
        {controls}

        {/* The two switches that change how a sitting sounds, and the
            one that changes what it looks like. Small, and out of the
            way of the control that matters. */}
        <div className="sit-switches">
          <button
            type="button"
            className="sit-switch"
            aria-pressed={prefs.sound}
            onClick={() => {
              const next = { ...prefs, sound: !prefs.sound };
              savePrefs(next);
              if (next.sound) strike(0.7);
            }}
          >
            {labels.bell}
          </button>
          <button
            type="button"
            className="sit-switch"
            aria-pressed={prefs.halfway}
            disabled={isOpen}
            onClick={() => savePrefs({ ...prefs, halfway: !prefs.halfway })}
          >
            {labels.halfwayBell}
          </button>
          <button type="button" className="sit-switch" onClick={enterFocus}>
            {labels.focus}
          </button>
        </div>

        {finished && <p className="sit-done">{labels.doneNote}</p>}

        {/* The recitation, so it can be started with the timer instead
            of found further down the page. */}
        {children && <div className="sit-track">{children}</div>}

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

      {mounted &&
        focus &&
        createPortal(
          <div
            className="sit-stage"
            ref={stage}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={name}
          >
            <button type="button" className="sit-stage-leave" onClick={leaveFocus}>
              {labels.leaveFocus}
            </button>
            <p className="sit-stage-name">{name}</p>
            {ring}
            {controls}
            {/* One line at most. A full screen with a paragraph on it
                is not a full screen. */}
            <p className="sit-stage-note">{running ? labels.awake : isOpen ? labels.openNote : ""}</p>
          </div>,
          document.body,
        )}
    </>
  );
}
