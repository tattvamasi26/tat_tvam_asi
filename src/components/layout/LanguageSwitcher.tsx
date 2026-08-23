"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_META, LOCALE_COOKIE, type Locale } from "@/i18n/config";

/**
 * Writes the locale cookie, then asks Next to re-render the current
 * route on the server so every string — chrome AND content — comes
 * back in the new language. No page reload, no per-language URLs.
 */
export function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  function choose(next: Locale) {
    // One year, site-wide. SameSite=Lax so it survives normal navigation.
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
    startTransition(() => router.refresh());
  }

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        data-pending={pending ? "" : undefined}
      >
        <span className="lang-globe" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
          </svg>
        </span>
        <span className="lang-current">{LOCALE_META[current].native}</span>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label={label}>
          {LOCALES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === current}
                className="lang-option"
                data-active={code === current ? "" : undefined}
                onClick={() => choose(code)}
              >
                <span className="lang-native">{LOCALE_META[code].native}</span>
                <span className="lang-label">{LOCALE_META[code].label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
