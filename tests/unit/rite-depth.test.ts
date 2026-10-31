import { test } from "node:test";
import assert from "node:assert/strict";
import { DEPTH } from "../../src/lib/seed/rite-depth";
import { RITUALS } from "../../src/lib/seed/rituals";
import { FESTIVALS } from "../../src/lib/seed/festivals";
import { RTUS, SOLAR_RTU, rtuForMonth } from "../../src/lib/seed/rtus";
import { getFestivalSeasons, getRitual, getFestival } from "../../src/lib/data";
import { RF_STRINGS } from "../../src/i18n/rf";
import { LOCALES } from "../../src/i18n/config";
import { gregorianDateIn } from "./support/gregorian";

// The depth of the rites and festivals, and the seasons the festival
// half is arranged by.
//
// The depth is the part of the section a reader actually came for —
// the sequence — so it is held to three rules: every rite and every
// festival has it, the three languages agree step for step, and none
// of it slips from describing a rite into teaching one.

const IMPERATIVE = /\b(you should|you must|recite the|repeat after|follow these steps)\b/i;
const SLUGS = [...RITUALS.map((r) => r.slug), ...FESTIVALS.map((f) => f.slug)];

test("every rite and every festival has its steps and what is used", () => {
  for (const slug of SLUGS) {
    const d = DEPTH.en[slug];
    assert.ok(d, `${slug} has no depth`);
    assert.ok(d.steps.length >= 4, `${slug} has fewer than four steps`);
    assert.ok(d.needs.length >= 1, `${slug} says nothing about what is used`);
    for (const [name, text] of d.steps) {
      assert.ok(name.trim() && text.trim().length > 15, `${slug}: a step is empty or thin`);
    }
  }
  // And nothing in the depth books is orphaned.
  for (const slug of Object.keys(DEPTH.en)) {
    assert.ok(SLUGS.includes(slug), `depth for ${slug}, which is neither a rite nor a festival`);
  }
});

test("the three languages agree step for step", () => {
  for (const slug of SLUGS) {
    const en = DEPTH.en[slug];
    for (const locale of LOCALES) {
      const d = DEPTH[locale][slug];
      assert.ok(d, `${slug} has no ${locale} depth`);
      assert.equal(d.steps.length, en.steps.length, `${slug}: ${locale} has a different number of steps`);
      assert.equal(d.needs.length, en.needs.length, `${slug}: ${locale} lists a different number of things`);
      assert.equal(d.days?.length ?? 0, en.days?.length ?? 0, `${slug}: ${locale} has a different number of days`);
    }
  }
});

test("the steps describe a rite, they never teach one", () => {
  for (const locale of LOCALES) {
    for (const slug of SLUGS) {
      const d = DEPTH[locale][slug];
      const text = [...d.steps.flat(), ...d.needs, ...(d.days ?? []).flat()].join(" ");
      assert.equal(IMPERATIVE.test(text), false, `${slug} (${locale}) slips into instruction`);
    }
  }
});

test("no Gregorian date creeps into the steps", () => {
  // The section's rule on both halves: an occasion is a tithi, an hour
  // or a stage of life, never a date that holds for one year.
  for (const slug of SLUGS) {
    const d = DEPTH.en[slug];
    const text = [...d.steps.flat(), ...(d.days ?? []).flat()].join(" ");
    assert.equal(gregorianDateIn(text), null, `${slug} carries a Gregorian date: ${gregorianDateIn(text)}`);
  }
});

test("the depth reaches the views", () => {
  for (const locale of LOCALES) {
    assert.ok(getRitual("upanayana", locale)?.depth?.steps.length, `upanayana has no ${locale} depth in the view`);
    const deepavali = getFestival("deepavali", locale)!;
    assert.equal(deepavali.depth?.days?.length, 5, `Dīpāvali must keep its five days in ${locale}`);
  }
});

test("the six seasons cover the twelve months once each", () => {
  assert.equal(RTUS.length, 6);
  const months = RTUS.flatMap((r) => r.months);
  assert.equal(months.length, 12);
  assert.equal(new Set(months).size, 12, "a month sits in two seasons");
  for (const r of RTUS) {
    for (const locale of LOCALES) {
      assert.ok(r.name[locale]?.trim(), `${r.id} has no ${locale} name`);
      assert.ok(r.character[locale]?.trim().length > 30, `${r.id}: ${locale} character is thin`);
    }
  }
});

test("every festival lands in exactly one season", () => {
  for (const f of FESTIVALS) {
    const season = f.month ? rtuForMonth(f.month) : RTUS.find((r) => r.id === SOLAR_RTU[f.slug]);
    assert.ok(season, `${f.slug} falls in no season`);
  }
  for (const locale of LOCALES) {
    const placed = getFestivalSeasons(locale).flatMap((s) => s.festivals.map((x) => x.slug));
    assert.equal(placed.length, FESTIVALS.length, `${locale}: a festival is missing or doubled`);
    assert.equal(new Set(placed).size, FESTIVALS.length);
  }
});

test("the section's new strings are written in every language", () => {
  const keys = Object.keys(RF_STRINGS.en) as (keyof typeof RF_STRINGS.en)[];
  for (const locale of LOCALES) {
    for (const k of keys) {
      assert.ok(RF_STRINGS[locale][k]?.trim(), `${locale}.${k} is blank`);
    }
    for (const k of ["countRites", "countFestivals", "timesAYear", "stepsCount", "daysCount"] as const) {
      assert.ok(RF_STRINGS[locale][k].includes("{n}"), `${locale}.${k} drops its number`);
    }
  }
});
