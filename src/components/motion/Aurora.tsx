"use client";

import { useEffect, useRef } from "react";

/**
 * The ambient field behind the text.
 *
 * A slow drift of warm light on near-black, drawn to a canvas rather
 * than built from CSS gradients, because what makes it read as depth
 * is that the blobs move at genuinely different rates and overlap
 * additively — which stacked CSS backgrounds cannot do without
 * repainting the whole layer every frame.
 *
 * Deliberately cheap, because it runs for as long as the page is open:
 *
 *   · the canvas is a fraction of viewport size and is scaled up by
 *     CSS, so it fills a large screen while filling very few pixels
 *   · it renders at ~30fps, not 60 — nothing here moves fast enough
 *     for the difference to be visible
 *   · it stops entirely when the tab is hidden, and never starts if
 *     the visitor asked for reduced motion
 *
 * It is decorative and aria-hidden. Nothing on the page depends on it.
 */
export function Aurora({ opacity = 0.55 }: { opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const maybeCtx = canvas.getContext("2d", { alpha: true });
    if (!maybeCtx) return;
    // Bound to a const so the narrowing survives into the rAF closure —
    // TypeScript re-widens a captured `let`/outer binding inside it.
    const ctx = maybeCtx;

    // Small buffer, scaled up by CSS. At this blur radius nobody can
    // tell, and it costs a fraction of the fill rate.
    const W = 220;
    const H = 260;
    canvas.width = W;
    canvas.height = H;

    // Warm ink, cool ink, and gold — the site's own palette.
    const blobs = [
      { x: 0.28, y: 0.22, r: 0.42, hue: 38, sat: 62, light: 26, sx: 0.00013, sy: 0.00009, p: 0 },
      { x: 0.74, y: 0.38, r: 0.38, hue: 22, sat: 55, light: 21, sx: -0.00009, sy: 0.00012, p: 2.1 },
      { x: 0.48, y: 0.74, r: 0.46, hue: 205, sat: 45, light: 18, sx: 0.00011, sy: -0.00008, p: 4.2 },
      { x: 0.14, y: 0.62, r: 0.3, hue: 45, sat: 70, light: 22, sx: 0.00007, sy: -0.00011, p: 1.3 },
    ];

    let raf = 0;
    let last = 0;
    let running = true;

    function frame(t: number) {
      if (!running) return;
      raf = window.requestAnimationFrame(frame);

      // ~30fps is plenty for something this slow.
      if (t - last < 33) return;
      last = t;

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        // Lissajous drift — two incommensurate frequencies, so the
        // pattern never visibly repeats.
        const cx = (b.x + Math.sin(t * b.sx + b.p) * 0.1) * W;
        const cy = (b.y + Math.cos(t * b.sy + b.p) * 0.1) * H;
        const r = b.r * W * (1 + Math.sin(t * 0.00007 + b.p) * 0.12);

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0.85)`);
        g.addColorStop(0.55, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0.25)`);
        g.addColorStop(1, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    raf = window.requestAnimationFrame(frame);

    // A background animation has no business running behind a tab
    // nobody is looking at.
    function onVisibility() {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        last = 0;
        raf = window.requestAnimationFrame(frame);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="aurora" aria-hidden="true" style={{ ["--aurora-o" as string]: opacity }}>
      <canvas ref={ref} className="aurora-canvas" />
      <div className="aurora-grain" />
    </div>
  );
}
