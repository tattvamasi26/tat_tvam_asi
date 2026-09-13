import { test } from "node:test";
import assert from "node:assert/strict";
import { ui } from "../../src/i18n/ui";
import { LOCALES } from "../../src/i18n/config";
import { kollur } from "../../src/i18n/kollur";
import { SECTIONS } from "../../src/i18n/sections";

const TEXT_ARROWS = /[←-⇿]/;

/** Every string anywhere inside a (possibly nested) dictionary. */
function strings(value: unknown, path = ""): [string, string][] {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => strings(v, path ? `${path}.${k}` : k));
  }
  return [];
}

test("every interface string is present and non-empty in every language", () => {
  const keys = Object.keys(ui("en"));
  for (const l of LOCALES) {
    const dict = ui(l) as unknown as Record<string, unknown>;
    for (const k of keys) {
      assert.equal(typeof dict[k], "string", `${l}.${k} is missing`);
      assert.ok((dict[k] as string).trim(), `${l}.${k} is blank`);
    }
  }
});

test("Kannada and Hindi strings are translated, not English left in place", () => {
  const en = ui("en") as unknown as Record<string, string>;
  // Strings that are legitimately the same in every language.
  const sameEverywhere = new Set<string>();
  for (const l of ["kn", "hi"] as const) {
    const dict = ui(l) as unknown as Record<string, string>;
    for (const [k, v] of Object.entries(dict)) {
      if (sameEverywhere.has(k)) continue;
      assert.notEqual(v, en[k], `${l}.${k} is still the English “${en[k]}”`);
    }
  }
});

test("no interface string carries a typed arrow — arrows are drawn (components/ui/Arrow)", () => {
  for (const l of LOCALES) {
    for (const [k, v] of strings(ui(l))) assert.ok(!TEXT_ARROWS.test(v), `${l}.${k}: “${v}”`);
    for (const [k, v] of strings(kollur(l))) assert.ok(!TEXT_ARROWS.test(v), `kollur ${l}.${k}: “${v}”`);
  }
});

test("every section has a label and a blurb in every language", () => {
  for (const s of SECTIONS) {
    for (const l of LOCALES) {
      assert.ok(s.label[l]?.trim(), `${s.id}: no ${l} label`);
      assert.ok(s.blurb[l]?.trim(), `${s.id}: no ${l} blurb`);
    }
  }
});

test("headlines with an italic turn have both halves in every language", () => {
  const pairs = [
    ["heroHeadline", "heroAccent"],
    ["homeSpaceTitle", "homeSpaceAccent"],
    ["homeReadTitle", "homeReadAccent"],
    ["homeCtaTitle", "homeCtaAccent"],
    ["stutisHeadline", "stutisAccent"],
  ] as const;
  for (const l of LOCALES) {
    const t = ui(l);
    for (const [a, b] of pairs) assert.ok(t[a].trim() && t[b].trim(), `${l}: ${a}/${b}`);
  }
});
