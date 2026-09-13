"use client";

import { useEffect, useRef } from "react";

/**
 * A few faint embers rising through the dark, as from a lamp — the one
 * moving thing on the stotra pages, and deliberately quiet. The page's
 * light is a CSS gradient and is there without it; this only adds
 * motion.
 *
 * Kept cheap for as long as the page is open:
 *   · each ember is one pre-rendered glow sprite, drawn with drawImage
 *   · ~30fps, and the pixel ratio capped at 1.5
 *   · it stops when the tab is hidden or the field scrolls out of view
 *   · it never starts for anyone who asked for reduced motion
 */
export function SanctumField({ hues }: { hues: number[] }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const key = hues.join(",");

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const maybe = canvas.getContext("2d");
    if (!maybe) return;
    const ctx = maybe;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    function resize() {
      const r = canvas!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas!.width = Math.max(1, Math.round(w * dpr));
      canvas!.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const palette = key.split(",").map(Number);
    const sprites = palette.map((hue) => {
      const s = document.createElement("canvas");
      s.width = s.height = 32;
      const g = s.getContext("2d")!;
      const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, `hsla(${hue}, 100%, 82%, 1)`);
      grad.addColorStop(0.22, `hsla(${hue}, 100%, 64%, 0.75)`);
      grad.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);
      g.fillStyle = grad;
      g.fillRect(0, 0, 32, 32);
      return s;
    });

    type Ember = { x: number; y: number; r: number; vy: number; phase: number; sway: number; sprite: number; flicker: number };
    const spawn = (anywhere: boolean): Ember => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 12,
      r: 1.2 + Math.random() * 3,
      vy: 8 + Math.random() * 20,
      phase: Math.random() * Math.PI * 2,
      sway: 5 + Math.random() * 18,
      sprite: Math.floor(Math.random() * sprites.length),
      flicker: Math.random() * Math.PI * 2,
    });
    const count = Math.round(Math.min(40, Math.max(14, (w * h) / 28000)));
    const embers = Array.from({ length: count }, () => spawn(true));

    let raf = 0;
    let last = performance.now();
    let running = true;
    let inView = true;

    function frame(t: number) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      const dt = (t - last) / 1000;
      if (dt < 1 / 32) return;
      last = t;
      const step = Math.min(dt, 0.1);

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const e of embers) {
        e.y -= e.vy * step;
        e.phase += step * 0.7;
        const x = e.x + Math.sin(e.phase) * e.sway;
        // Fade in as it rises from the floor, out as it nears the top.
        const rise = Math.min(1, (h - e.y) / (h * 0.2));
        const fall = Math.min(1, e.y / (h * 0.4));
        const glow = 0.7 + 0.3 * Math.sin(t / 240 + e.flicker);
        ctx.globalAlpha = Math.max(0, Math.min(rise, fall) * glow * 0.55);
        const s = e.r * 2;
        ctx.drawImage(sprites[e.sprite], x - s, e.y - s, s * 2, s * 2);
        if (e.y < -16) Object.assign(e, spawn(false));
      }
      ctx.globalAlpha = 1;
    }

    function start() {
      if (running || !inView || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [key]);

  return <canvas ref={ref} className="sanctum-field" aria-hidden="true" />;
}
