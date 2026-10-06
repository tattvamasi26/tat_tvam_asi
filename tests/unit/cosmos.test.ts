import { test } from "node:test";
import assert from "node:assert/strict";
import {
  TIME_UNITS,
  YUGAS,
  LOKAS,
  DVIPAS,
  PRALAYAS,
  NOW,
  mahayugaYears,
  yugaById,
} from "../../src/lib/seed/cosmos";
import { COSMOS_TOPICS, topicBySlug, topicsInOrder } from "../../src/lib/seed/cosmos-topics";
import {
  getTimeUnits,
  getYugas,
  getLokas,
  getDvipas,
  getPralayas,
  getNow,
  getCosmosTopic,
  getCosmosTopics,
} from "../../src/lib/data";
import { COSMOS_STRINGS } from "../../src/i18n/cosmos";
import { SECTIONS } from "../../src/i18n/sections";
import { LOCALES } from "../../src/i18n/config";

// Time and the cosmos.
//
// The arithmetic tests are not pedantry. This scheme is quoted
// constantly and quoted wrong, and the whole claim of the section is
// that the figures hang together — so if an edit ever breaks the
// 4:3:2:1 ratio or the multiple of 432,000, that has to fail loudly
// rather than ship as a number nobody checks.

const DEVANAGARI = /[ऀ-ॿ]/;
const KANNADA = /[ಀ-೿]/;

test("the ladder of time is complete and strictly increasing", () => {
  assert.ok(TIME_UNITS.length >= 10, `only ${TIME_UNITS.length} rungs`);

  let last = 0;
  for (const u of TIME_UNITS) {
    assert.ok(u.seconds > last, `${u.id} is not longer than the rung below it`);
    last = u.seconds;
    assert.match(u.sanskrit, DEVANAGARI, `${u.id}: Sanskrit must be in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(u.name[locale]?.trim(), `${u.id} has no ${locale} name`);
      // Low on purpose. A definition by multiple is genuinely short —
      // "Eighteen nimesas" is the whole of what a kastha is — and a
      // threshold that forced padding would be making the prose worse
      // to satisfy the test.
      assert.ok(u.defined[locale]?.trim().length > 8, `${u.id}: ${locale} does not define it`);
    }
  }

  // The chain Manu gives closes exactly on a day: 18 × 30 × 30 × 30
  // nimesas. If the nimesa is edited, this catches the day drifting.
  const nimesha = TIME_UNITS.find((u) => u.id === "nimesha")!;
  const day = TIME_UNITS.find((u) => u.id === "ahoratra")!;
  const chained = nimesha.seconds * 18 * 30 * 30 * 30;
  assert.ok(
    Math.abs(chained - day.seconds) / day.seconds < 0.02,
    `the chain gives ${Math.round(chained)}s for a day, not ${day.seconds}s`,
  );
});

test("the four ages keep the ratio the whole scheme is built from", () => {
  assert.equal(YUGAS.length, 4);
  assert.deepEqual(
    YUGAS.map((y) => y.parts),
    [4, 3, 2, 1],
    "the ages run 4:3:2:1 and in that order",
  );

  const kali = yugaById("kali")!;
  assert.equal(kali.years, 432000, "Kali is the unit the rest is built from");

  for (const y of YUGAS) {
    assert.equal(
      y.years,
      kali.years * y.parts,
      `${y.id} is not ${y.parts} times Kali, which breaks the ratio`,
    );
    // The claim the section makes about every figure in the scheme.
    assert.equal(y.years % 432000, 0, `${y.id} is not a multiple of 432,000`);
  }

  assert.equal(mahayugaYears(), 4320000, "a mahayuga is 43,20,000 years");
  assert.equal(mahayugaYears(), kali.years * 10);
});

test("the larger figures follow from the smaller ones", () => {
  const seconds = (id: string) => TIME_UNITS.find((u) => u.id === id)!.seconds;
  const year = seconds("varsha");

  // A kalpa is a thousand mahayugas.
  assert.ok(
    Math.abs(seconds("kalpa") - mahayugaYears() * 1000 * year) / seconds("kalpa") < 0.02,
    "a kalpa is not a thousand mahayugas",
  );
  // A manvantara is seventy-one mahayugas and a joint.
  assert.ok(
    Math.abs(seconds("manvantara") - 308448000 * year) / seconds("manvantara") < 0.02,
    "a manvantara is not 30,84,48,000 years",
  );
  // Brahma's life is a hundred of his years, each of 360 day-nights.
  assert.ok(
    Math.abs(seconds("brahma-life") - seconds("kalpa") * 2 * 360 * 100) / seconds("brahma-life") <
      0.05,
    "Brahma's life does not follow from the kalpa",
  );
});

test("the fourteen worlds are fourteen, with ours in the middle", () => {
  assert.equal(LOKAS.length, 14);
  const levels = LOKAS.map((l) => l.level).sort((a, b) => a - b);
  assert.deepEqual(levels, [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]);

  // Seven above and seven below, which is the structural fact the
  // drawing exists to get right.
  assert.equal(LOKAS.filter((l) => l.level > 0).length, 6);
  assert.equal(LOKAS.filter((l) => l.level < 0).length, 7);
  assert.equal(LOKAS.filter((l) => l.level === 0).length, 1);
  assert.equal(LOKAS.find((l) => l.level === 0)!.id, "bhu");

  for (const l of LOKAS) {
    assert.match(l.sanskrit, DEVANAGARI, `${l.id}: Sanskrit must be in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(l.name[locale]?.trim(), `${l.id} has no ${locale} name`);
      assert.ok(l.gloss[locale]?.trim(), `${l.id} has no ${locale} gloss`);
    }
  }
});

test("the seven islands are seven, each with its own sea", () => {
  assert.equal(DVIPAS.length, 7);
  assert.deepEqual(
    [...DVIPAS].map((d) => d.ring).sort((a, b) => a - b),
    [1, 2, 3, 4, 5, 6, 7],
  );
  assert.equal(DVIPAS.find((d) => d.ring === 1)!.id, "jambu", "Jambu is the innermost");

  for (const d of DVIPAS) {
    assert.match(d.sanskrit, DEVANAGARI, `${d.id}: Sanskrit must be in Devanagari`);
    for (const locale of LOCALES) {
      assert.ok(d.name[locale]?.trim(), `${d.id} has no ${locale} name`);
      assert.ok(d.sea[locale]?.trim(), `${d.id} does not name its sea in ${locale}`);
    }
  }

  // The drawing is not to scale and the caption has to say so, because
  // each ring is twice the one inside it and drawn truly the inner six
  // would vanish.
  for (const locale of LOCALES) {
    assert.ok(
      COSMOS_STRINGS[locale].dvipaCaption.trim().length > 80,
      `${locale}: the caption does not admit the drawing is not to scale`,
    );
  }
});

test("there are four dissolutions and liberation is one of them", () => {
  assert.equal(PRALAYAS.length, 4);
  const ids = PRALAYAS.map((p) => p.id);
  assert.deepEqual(ids, ["nitya", "naimittika", "prakritika", "atyantika"]);
  // The move the section calls the most interesting one in the whole
  // construction: moksha on the same list as the end of everything.
  assert.ok(ids.includes("atyantika"));

  for (const p of PRALAYAS) {
    for (const locale of LOCALES) {
      assert.ok(p.when[locale]?.trim(), `${p.id} does not say when, in ${locale}`);
      assert.ok(p.what[locale]?.trim().length > 40, `${p.id}: ${locale} is too thin`);
    }
  }
});

test("the present moment is placed, and the date is disowned", () => {
  assert.ok(NOW.brahmaYear > 0 && NOW.manvantara > 0 && NOW.mahayuga > 0);
  assert.equal(NOW.yuga, "kali");
  assert.ok(yugaById(NOW.yuga), "the present yuga is not one of the four");
  assert.equal(NOW.kaliStartBCE, 3102);

  // 3102 BCE is a back-calculation, not something the early texts
  // give, and every language has to say so.
  for (const locale of LOCALES) {
    assert.ok(
      COSMOS_STRINGS[locale].nowNote.trim().length > 60,
      `${locale}: nothing says where 3102 BCE comes from`,
    );
  }

  const now = getNow("en");
  assert.equal(now.yuga?.id, "kali");
  assert.ok(now.manu.trim());
});

test("the section refuses to be read as a measurement", () => {
  // The one thing a reader has almost certainly met before arriving is
  // the kalpa compared to the age of the earth. The standing note
  // exists to refuse that, and it has to exist in all three.
  for (const locale of LOCALES) {
    const s = COSMOS_STRINGS[locale];
    assert.ok(s.standing.trim().length > 200, `${locale}: the section does not state its limits`);
    assert.ok(s.title.trim() && s.lede.trim(), `${locale}: the section has no head`);
    assert.ok(s.scaleCaption.trim().length > 60, `${locale}: the log scale is not explained`);
  }
});

test("the four arguments are written the same way in every language", () => {
  assert.equal(COSMOS_TOPICS.length, 4);
  assert.deepEqual(
    topicsInOrder().map((t) => t.order),
    [1, 2, 3, 4],
  );

  for (const t of COSMOS_TOPICS) {
    assert.match(t.slug, /^[a-z][a-z0-9-]*$/, `${t.slug} is not a URL-safe slug`);
    assert.match(t.sanskrit, DEVANAGARI, `${t.slug}: Sanskrit must be in Devanagari`);
    assert.equal(topicBySlug(t.slug)?.slug, t.slug);

    // The rule the temple and acharya monographs keep: the same
    // section ids and the same block kinds in every language, so no
    // language can quietly lose a passage.
    const shape = (locale: (typeof LOCALES)[number]) =>
      t.content[locale].map((sec) => `${sec.id}:${sec.blocks.map((b) => b.kind).join(",")}`);
    const en = shape("en");
    for (const locale of LOCALES) {
      assert.ok(t.content[locale]?.length, `${t.slug} has no ${locale} prose`);
      assert.deepEqual(
        shape(locale),
        en,
        `${t.slug}: the ${locale} version has a different shape from the English`,
      );
      assert.ok(t.lede[locale]?.trim().length > 25, `${t.slug}: ${locale} lede is too thin`);
      for (const sec of t.content[locale]) {
        assert.ok(sec.title.trim() && sec.eyebrow.trim(), `${t.slug}/${sec.id}: ${locale} head`);
        for (const b of sec.blocks) {
          if (b.kind === "para") {
            assert.ok(b.text.trim().length > 150, `${t.slug}/${sec.id}: a ${locale} para is thin`);
          }
        }
      }
    }
  }
});

test("the view resolves one locale and converts the script", () => {
  for (const locale of LOCALES) {
    assert.equal(getTimeUnits(locale).length, TIME_UNITS.length);
    assert.equal(getYugas(locale).length, 4);
    assert.equal(getLokas(locale).length, 14);
    assert.equal(getDvipas(locale).length, 7);
    assert.equal(getPralayas(locale).length, 4);
    assert.equal(getCosmosTopics(locale).length, 4);
  }

  const kn = getYugas("kn")[0]!;
  assert.ok(
    KANNADA.test(kn.sanskrit) && !DEVANAGARI.test(kn.sanskrit),
    "Sanskrit must reach a Kannada page in the Kannada script",
  );
  assert.match(getYugas("en")[0]!.sanskrit, DEVANAGARI);

  assert.equal(getCosmosTopic("not-a-topic", "en"), null);
});

test("the section is reachable, and does not add a top-level entry", () => {
  const section = SECTIONS.find((s) => s.id === "cosmos");
  assert.ok(section, "the cosmos section is not registered");
  assert.equal(section!.href, "/cosmos");
  assert.equal(section!.parent, "puranas", "it is reached through the Puranas, where it is set out");
  for (const locale of LOCALES) {
    assert.ok(section!.label[locale]?.trim(), `the nav has no ${locale} label`);
    assert.ok(section!.blurb[locale]?.trim(), `the nav has no ${locale} blurb`);
  }
});
