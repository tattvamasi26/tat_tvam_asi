"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` when scrolled into view.
 *
 * The final number is rendered server-side and only replaced once the
 * animation starts, so the real figure is in the HTML for crawlers and
 * for anyone with JS off — and under reduced-motion it never moves.
 */
export function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        setStarted(true);
        observer.unobserve(entry.target);

        const duration = 1100;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutCubic — fast first, settling rather than stopping dead
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        setShown(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div className="tally" ref={ref}>
      <div className="tally-num">{shown}</div>
      <div className="tally-label">{label}</div>
    </div>
  );
}
