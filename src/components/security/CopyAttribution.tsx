"use client";
import { useEffect } from "react";

/**
 * When a reader copies a passage, the clipboard gets the passage and,
 * under it, where it came from and the terms for reusing it.
 *
 * Copying is not blocked. The rights notice allows a short quotation
 * with a link back, and blocking selection stops no copier (the text is
 * in the page source) while breaking it for every student and every
 * screen reader. What this does is make the link travel with the text:
 * a passage pasted into another site arrives carrying its source and
 * the notice that says it may not be republished.
 *
 * A few words (under MIN_CHARS) are left alone, so copying a single
 * term or a name never drags a footer along with it. Form fields and
 * the admin screens are left alone too.
 */
const MIN_CHARS = 40;

export function CopyAttribution({ sourceLabel, termsLabel }: { sourceLabel: string; termsLabel: string }) {
  useEffect(() => {
    function onCopy(e: ClipboardEvent) {
      if (!e.clipboardData || location.pathname.startsWith("/admin")) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("input, textarea, select, [contenteditable='true']")) return;

      const selection = document.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const text = selection.toString();
      if (text.trim().length < MIN_CHARS) return;

      const pageUrl = location.origin + location.pathname;
      const termsUrl = location.origin + "/rights";

      const html = document.createElement("div");
      for (let i = 0; i < selection.rangeCount; i++) {
        html.appendChild(selection.getRangeAt(i).cloneContents());
      }
      const note = document.createElement("p");
      note.append(`${sourceLabel}: Tat Tvam Asi, `);
      const a = document.createElement("a");
      a.href = pageUrl;
      a.textContent = pageUrl;
      note.append(a, document.createElement("br"), `${termsLabel}: `);
      const r = document.createElement("a");
      r.href = termsUrl;
      r.textContent = termsUrl;
      note.append(r);
      html.appendChild(note);

      e.clipboardData.setData(
        "text/plain",
        `${text}\n\n${sourceLabel}: Tat Tvam Asi, ${pageUrl}\n${termsLabel}: ${termsUrl}`,
      );
      e.clipboardData.setData("text/html", html.innerHTML);
      e.preventDefault();
    }
    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, [sourceLabel, termsLabel]);

  return null;
}
