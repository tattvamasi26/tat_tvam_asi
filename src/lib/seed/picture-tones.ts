import tones from "./picture-tones.json";

// The colour each picture is "about", read from the picture itself by
// scripts/images/tones.mjs. A page head washes itself in its picture's
// tone (`--tone`), so a Śiva song and a Lakṣmī song do not open on the
// same paper. Re-run the script after adding pictures.
const TONES = tones as Record<string, string>;

export function toneFor(src: string | undefined | null): string | undefined {
  return src ? TONES[src] : undefined;
}

/** A style object setting --tone, or nothing when there is none. */
export function toneStyle(src: string | undefined | null): Record<string, string> | undefined {
  const tone = toneFor(src);
  return tone ? { "--tone": tone } : undefined;
}
