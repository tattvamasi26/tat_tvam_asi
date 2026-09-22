import type { Locale } from "@/i18n/config";
import { kollur } from "@/i18n/kollur";
import { registerTemplePage, type TempleContent, type TemplePicture } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Sri Mookambika Temple, Kollur.
//
//  The guide was written first as its own page, with its prose in
//  src/i18n/kollur.ts. The prose stays there — it is already in all
//  three languages — and this module shapes it into the monograph
//  every temple page now uses. Nothing was rewritten in the move;
//  the passages, the daily order and the travel notes are as they
//  were, and the page they render on is the site's own paper rather
//  than the dark one-off it had before.
// ─────────────────────────────────────────────────────────

const LOCALES: Locale[] = ["en", "kn", "hi"];

/** The same field, in each language, as the picture types want it. */
function perLocale(pick: (k: ReturnType<typeof kollur>) => string): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((l) => [l, pick(kollur(l))])) as Record<Locale, string>;
}

function content(locale: Locale): TempleContent {
  const k = kollur(locale);
  return {
    tagline: k.tagline,
    place: k.region,
    facts: k.facts,
    quote: k.quote,
    sections: [
      {
        id: "katha",
        eyebrow: k.kathaEyebrow,
        title: k.kathaTitle,
        blocks: [
          { kind: "sub", title: k.demonTitle, paras: [k.demonP1, k.demonP2] },
          { kind: "sub", title: k.shankaraTitle, paras: [k.shankaraP1, k.shankaraP2] },
        ],
      },
      {
        id: "deity",
        eyebrow: k.deityEyebrow,
        title: k.deityTitle,
        blocks: [
          { kind: "para", text: k.deityBody },
          { kind: "rows", rows: k.forms.map((f) => ({ when: f.time, name: f.form, text: f.aspect })) },
          { kind: "sub", title: k.deepaTitle, paras: [k.deepaBody] },
        ],
      },
      {
        id: "agama",
        eyebrow: k.agamaEyebrow,
        title: k.agamaTitle,
        blocks: [
          { kind: "para", text: k.agamaIntro },
          { kind: "list", items: k.practices.map((p) => ({ label: p.title, text: p.desc })) },
        ],
      },
      {
        id: "schedule",
        eyebrow: k.scheduleEyebrow,
        title: k.scheduleTitle,
        blocks: [
          { kind: "rows", rows: k.rituals.map((r) => ({ when: r.time, name: r.name, text: r.desc })) },
          { kind: "list", title: k.timingsTitle, items: k.timings.map(([label, text]) => ({ label, text })) },
        ],
      },
      {
        id: "festivals",
        eyebrow: k.festivalsEyebrow,
        title: k.festivalsTitle,
        blocks: [{ kind: "rows", rows: k.festivals.map((f) => ({ when: f.when, name: f.name, text: f.desc })) }],
      },
      {
        id: "land",
        eyebrow: k.landEyebrow,
        title: k.landTitle,
        blocks: [
          { kind: "para", text: k.landP1 },
          { kind: "para", text: k.landP2 },
          { kind: "list", items: k.places.map(([label, text]) => ({ label, text })) },
        ],
      },
      {
        id: "visit",
        eyebrow: k.visitEyebrow,
        title: k.visitTitle,
        blocks: [
          {
            kind: "sub",
            title: k.addressLabel,
            // The address, phone and website are the temple's own and
            // stay as they are in every language.
            paras: [
              "Sri Mookambika Temple, Kollur, Byndoor Taluk, Udupi District, Karnataka — 576 220",
              "82542 58221 · kollurmookambikatemple.org",
            ],
          },
          { kind: "list", title: k.bestTimeLabel, items: k.bestTime.map((b) => ({ label: b.strong, text: b.rest.replace(/^\s*—\s*/, "") })) },
          { kind: "list", items: k.travel.map((t) => ({ label: t.mode, text: t.detail })) },
        ],
      },
    ],
  };
}

const HERO: TemplePicture = {
  src: "/images/mookambika/deity-main.jpg",
  width: 474,
  height: 711,
  position: "50% 20%",
  credit: "Supplied by the site owner",
  alt: perLocale((k) => k.alts.hero),
};

const GALLERY: TemplePicture[] = [
  {
    src: "/images/mookambika/flowers-entrance.jpg",
    width: 735,
    height: 1124,
    credit: "Supplied by the site owner",
    alt: perLocale((k) => k.alts.flowers),
    caption: perLocale((k) => k.captions.flowers),
  },
  {
    src: "/images/mookambika/deity-gold.jpg",
    width: 484,
    height: 722,
    credit: "Supplied by the site owner",
    alt: perLocale((k) => k.alts.gold),
    caption: perLocale((k) => k.captions.gold),
  },
  {
    src: "/images/mookambika/deity-silver-palanquin.jpg",
    width: 640,
    height: 960,
    credit: "Supplied by the site owner",
    alt: perLocale((k) => k.alts.silver),
    caption: perLocale((k) => k.captions.silver),
  },
  {
    src: "/images/mookambika/deepasthambha.jpg",
    width: 735,
    height: 985,
    credit: "Supplied by the site owner",
    alt: perLocale((k) => k.alts.deepa),
    caption: perLocale((k) => k.captions.deepa),
  },
];

registerTemplePage({
  slug: "kollur-mookambika",
  region: "tulunadu",
  order: 1,
  name: perLocale((k) => k.title),
  nameLocal: "ಕೊಲ್ಲೂರು ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನ",
  nameLocalLang: "kn",
  hero: HERO,
  gallery: GALLERY,
  sources: [
    { title: "Sri Mookambika Temple, Kollur — the temple's own site", url: "https://kollurmookambikatemple.org/" },
    { title: "Mookambika Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Mookambika_Temple" },
  ],
  content: { en: content("en"), kn: content("kn"), hi: content("hi") },
});
