/**
 * The bell that opens and closes a sitting.
 *
 * It is synthesised rather than played from a file, and that is a
 * deliberate choice rather than a clever one. An audio file would be
 * a request the page makes on its own, which this section does not
 * do — the recitation loads nothing from YouTube until it is pressed,
 * and a bell that fetched an mp3 on load would quietly break that.
 * Synthesised, it also works with no network at all, which is the
 * state a phone on a mat at six in the morning is often in.
 *
 * What it sounds like: a struck bowl, not a beep. A bowl's partials
 * are not whole multiples of its fundamental — that inharmonicity is
 * what makes it sound like metal rather than a sine wave — and each
 * one dies away at its own rate, the high ones first.
 *
 * Every browser refuses to start audio until the reader has pressed
 * something, so the context is created on the first press and kept.
 */

type Ctx = AudioContext & { resume: () => Promise<void> };

let ctx: Ctx | null = null;

/** Called from a click handler, where the browser will allow it. */
export function wakeAudio(): Ctx | null {
  try {
    if (!ctx) {
      const C =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!C) return null;
      ctx = new C() as Ctx;
    }
    // Suspended is the normal state after a tab has been in the
    // background; resuming is cheap and safe to call every time.
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    // No Web Audio, or it is blocked. The sitting works in silence.
    return null;
  }
}

// ratio to the fundamental, relative loudness, seconds to decay
const PARTIALS: [number, number, number][] = [
  [1, 1, 6.5],
  [2.76, 0.4, 3.4],
  [5.4, 0.18, 1.8],
  [8.9, 0.08, 0.9],
];

/**
 * Strike once. `strength` is 0–1; the halfway bell is struck softer
 * than the two that open and close the sitting.
 */
export function strike(strength = 1): void {
  const c = wakeAudio();
  if (!c) return;

  try {
    const at = c.currentTime + 0.02;
    const base = 174; // low enough not to startle somebody sitting still
    const out = c.createGain();
    out.gain.value = 0.28 * strength;
    out.connect(c.destination);

    for (const [ratio, amp, decay] of PARTIALS) {
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = "sine";
      osc.frequency.value = base * ratio;
      // A quick attack and a long exponential tail. Ramping to exactly
      // zero is undefined for an exponential ramp, hence the epsilon.
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(amp, at + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, at + decay);
      osc.connect(g);
      g.connect(out);
      osc.start(at);
      osc.stop(at + decay + 0.05);
    }
  } catch {
    /* audio unavailable mid-sitting; the timer is unaffected */
  }
}
