"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_META, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/**
 * The reading-language selector, given real estate.
 *
 * The masthead already has a switcher, but on a text you are going to
 * sit and read for an hour, the choice of language is not a piece of
 * site chrome — it is the first decision you make. So it gets stated
 * plainly at the top of the text, as a segmented control, before any
 * verse appears.
 *
 * Picking a language writes the same cookie the masthead switcher
 * writes and asks the server to re-render, so EVERYTHING on the page
 * comes back in that language: headings, verse translations,
 * commentary, buttons, video captions. There is no split state where
 * some of the page follows the choice and some does not.
 *
 * The sliding indicator is driven off the selected index rather than
 * measuring the DOM, so it cannot desynchronise on a font swap.
 */
export function LanguageChoice({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const index = LOCALES.indexOf(current);

  function choose(next: Locale) {
    if (next === current) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  }

  return (
    <div className="langchoice" data-pending={pending ? "" : undefined}>
      <span className="langchoice-label">{label}</span>

      <div
        className="langchoice-track"
        role="radiogroup"
        aria-label={label}
        style={{ ["--count" as string]: LOCALES.length, ["--i" as string]: index }}
      >
        <span className="langchoice-thumb" aria-hidden="true" />
        {LOCALES.map((l) => (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={l === current}
            className="langchoice-opt"
            data-active={l === current ? "" : undefined}
            onClick={() => choose(l)}
          >
            <span className={l === "kn" ? "kannada" : l === "hi" ? "deva" : undefined}>
              {LOCALE_META[l].native}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
