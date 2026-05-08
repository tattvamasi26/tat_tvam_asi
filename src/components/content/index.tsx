import Link from "next/link";
import { Section, SectionHeader, VerseCard, Badge } from "@/components/ui";
import type { Verse, Temple, Teacher } from "@/types";

// ── Four Pillars ─────────────────────────────
const pillars = [
  { title: "Advaita Vedanta", sub: "The Path of Non-Duality", desc: "The teaching that Atman and Brahman are one — individual self not separate from infinite consciousness.", icon: "☽", href: "/concepts", accent: "saffron" },
  { title: "Shruti & Smriti", sub: "Vedas and Upanishads",   desc: "The revealed scriptures and remembered tradition that have guided seekers across millennia.", icon: "✦", href: "/verses",   accent: "gold" },
  { title: "The Living Stones", sub: "Glory of Hindu Temples", desc: "Temples are cosmograms — sacred maps of the universe in stone, encoding cosmology and the divine.", icon: "◈", href: "/temples", accent: "saffron" },
  { title: "Dharma & Daily Life", sub: "Sanatana Dharma", desc: "The eternal order present in every breath, every action, every relationship.", icon: "◉", href: "/concepts?category=dharma", accent: "gold" },
];

export function PillarsGrid() {
  return (
    <Section className="bg-[#0a0a0a]">
      <SectionHeader label="Four Pillars" title="Rivers of Wisdom" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2218]">
        {pillars.map((p) => (
          <Link key={p.title} href={p.href} className="group bg-obsidian hover:bg-[#141414] transition-all duration-300 hover:-translate-y-px block p-10 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-0.5 h-full ${p.accent==="saffron"?"bg-saffron/60":"bg-gold/60"}`}/>
            <p className={`text-3xl mb-5 ${p.accent==="saffron"?"text-saffron":"text-gold"}`}>{p.icon}</p>
            <h3 className="font-serif text-2xl font-light text-parchment">{p.title}</h3>
            <p className={`font-sans text-xs tracking-widest uppercase mt-1 ${p.accent==="saffron"?"text-saffron":"text-gold"}`}>{p.sub}</p>
            <div className="w-10 h-px bg-[#3a2e1a] my-5"/>
            <p className="font-sans text-sm text-ash/60 leading-relaxed">{p.desc}</p>
            <div className="flex items-center gap-2 mt-6">
              <span className={`font-sans text-xs tracking-widest uppercase ${p.accent==="saffron"?"text-saffron":"text-gold"}`}>Explore</span>
              <div className={`flex-1 h-px ${p.accent==="saffron"?"bg-saffron/20":"bg-gold/20"}`}/>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

// ── Verse of the Day ──────────────────────────
export function VerseOfTheDay({ verse }: { verse: Verse }) {
  return (
    <Section className="bg-[#111010]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="label-saffron mb-12">Verse of the Day</p>
        <div className="relative px-8 md:px-16">
          <span className="absolute -top-6 left-2 font-serif text-7xl text-gold/15 leading-none select-none">"</span>
          <p className="devanagari text-3xl md:text-4xl text-parchment leading-relaxed mb-4">{verse.sanskrit}</p>
          <p className="font-sans text-xs italic text-ash/50 tracking-widest mb-8">{verse.transliteration}</p>
          <p className="font-serif text-xl md:text-2xl italic font-light text-parchment/80 leading-relaxed">
            "{verse.translation_en}"
          </p>
          <span className="absolute -bottom-8 right-2 font-serif text-7xl text-gold/15 leading-none select-none">"</span>
        </div>
        <div className="mt-12">
          <p className="font-sans text-xs tracking-widest text-gold">{verse.source}</p>
          {verse.chapter && <p className="font-sans text-xs text-ash/40 mt-1">{verse.chapter}</p>}
          {verse.is_mahavakya && <Badge variant="gold" classname="mt-4">Mahavakya</Badge>}
        </div>
      </div>
    </Section>
  );
}

// ── Mahavakyas Grid ───────────────────────────
export function MahavakyaGrid({ verses }: { verses: Verse[] }) {
  if (verses.length === 0) return null;
  return (
    <Section>
      <SectionHeader label="The Four Great Sayings" title="Mahavakyas" subtitle="The four great declarations of the Upanishads — each a complete teaching on the identity of Atman and Brahman." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2218]">
        {verses.map((v) => (
          <div key={v.id} className="bg-obsidian"><VerseCard verse={v} /></div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/verses" className="font-sans text-xs tracking-widest uppercase text-ash/50 hover:text-saffron transition-colors">
          Explore all verses →
        </Link>
      </div>
    </Section>
  );
}

// ── Temple Gallery ────────────────────────────
export function TempleGallery({ temples }: { temples: Temple[] }) {
  if (temples.length === 0) return null;
  return (
    <Section className="bg-[#0a0a0a]">
      <SectionHeader label="Deva-Sthanam" title="The Living Stones" subtitle="Hindu temples are not buildings — they are the universe crystallised in stone." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2218]">
        {temples.slice(0,3).map((t, i) => (
          <Link key={t.id} href={`/temples/${t.slug}`} className={`group bg-obsidian hover:bg-[#141414] transition-colors block ${i===0?"md:col-span-2":""}`}>
            <div className={`bg-[#1a1510] flex items-center justify-center relative overflow-hidden ${i===0?"aspect-[16/9]":"aspect-square"}`}>
              <span className="font-serif text-6xl text-gold/10">◈</span>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif text-lg text-parchment">{t.name}</p>
                <p className="font-sans text-xs text-gold tracking-widest uppercase mt-1">{t.location} · {t.dynasty}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/temples" className="font-sans text-xs tracking-widest uppercase text-ash/50 hover:text-saffron transition-colors">
          Explore all temples →
        </Link>
      </div>
    </Section>
  );
}

// ── Teacher Row ───────────────────────────────
export function TeacherRow({ teachers }: { teachers: Teacher[] }) {
  if (teachers.length === 0) return null;
  return (
    <Section>
      <SectionHeader label="Guru Parampara" title="The Acharyas" subtitle="The unbroken lineage of teachers who kept the lamp of Advaita burning." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2218]">
        {teachers.map((t) => (
          <Link key={t.id} href={`/teachers/${t.slug}`} className="group bg-obsidian hover:bg-[#141414] transition-colors block p-8">
            <p className="font-sans text-xs tracking-widest text-saffron uppercase mb-4">{t.era}</p>
            <h3 className="font-serif text-2xl font-light text-parchment group-hover:text-gold transition-colors">{t.name}</h3>
            {t.name_sanskrit && <p className="devanagari text-lg text-ash/40 mt-1">{t.name_sanskrit}</p>}
            {t.quote && (
              <blockquote className="font-serif text-sm italic text-ash/50 mt-5 border-l border-gold/20 pl-4 leading-relaxed line-clamp-3">
                "{t.quote}"
              </blockquote>
            )}
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/teachers" className="font-sans text-xs tracking-widest uppercase text-ash/50 hover:text-saffron transition-colors">
          All teachers →
        </Link>
      </div>
    </Section>
  );
}
