import type { CSSProperties } from "react";

/**
 * A sentence that fills in, word by word, as it scrolls past.
 *
 * Each word carries its index; the stylesheet derives the word's
 * opacity from that index and one scroll-driven number (see `--fill`
 * in styles/home.css). A Server Component with no script: where scroll
 * timelines are unsupported, the sentence is simply fully drawn.
 */
export function FillQuote({ text }: { text: string }) {
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <p className="fillquote" style={{ ["--n" as string]: words.length } as CSSProperties}>
      {words.map((word, i) => (
        <span key={i} style={{ ["--i" as string]: i } as CSSProperties}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
