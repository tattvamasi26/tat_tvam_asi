import { cn } from "@/lib/utils";

// ── Section wrapper ───────────────────────────
export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("py-24 px-6", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

// ── Section header ────────────────────────────
export function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-16", center && "text-center")}>
      {label && <p className="label-saffron mb-4">{label}</p>}
      <h2 className="heading-display">{title}</h2>
      {subtitle && (
        <p className="font-sans text-sm text-ash/70 mt-4 max-w-xl leading-relaxed mx-auto">{subtitle}</p>
      )}
      <div className={cn("gold-divider mt-6", center && "mx-auto")} />
    </div>
  );
}

// ── Badge ─────────────────────────────────────
export function Badge({ children, variant = "gold" }: { children: React.ReactNode; variant?: "gold" | "saffron" | "ash" }) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-0.5 text-[10px] tracking-widest uppercase border rounded-sm font-sans",
        variant === "gold" && "border-gold/30 text-gold",
        variant === "saffron" && "border-saffron/30 text-saffron",
        variant === "ash" && "border-ash/20 text-ash/60"
      )}
    >
      {children}
    </span>
  );
}

// ── Verse card ────────────────────────────────
export function VerseCard({ verse }: { verse: { id: string; sanskrit: string; transliteration: string; translation_en: string; source: string; chapter?: string; is_mahavakya: boolean } }) {
  return (
    <div className="card-dark p-8 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gold/50" />
      {verse.is_mahavakya && <Badge variant="gold">Mahavakya</Badge>}
      <p className="devanagari text-2xl text-parchment mt-4 mb-2">{verse.sanskrit}</p>
      <p className="font-sans text-xs italic text-ash/60 tracking-wider mb-4">{verse.transliteration}</p>
      <p className="font-serif text-lg font-light italic text-parchment/80 leading-relaxed mb-6">
        "{verse.translation_en}"
      </p>
      <p className="font-sans text-xs tracking-widest text-gold uppercase">
        {verse.source}{verse.chapter ? ` · ${verse.chapter}` : ""}
      </p>
    </div>
  );
}

// ── Page hero (inner pages) ───────────────────
export function PageHero({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="pt-32 pb-16 px-6 text-center border-b border-gold/10">
      <div className="max-w-3xl mx-auto">
        {label && <p className="label-saffron mb-4">{label}</p>}
        <h1 className="font-serif text-5xl md:text-6xl font-light text-parchment">{title}</h1>
        {subtitle && <p className="font-sans text-sm text-ash/60 mt-5 leading-relaxed">{subtitle}</p>}
        <div className="gold-divider mx-auto mt-8" />
      </div>
    </div>
  );
}

// ── Loading skeleton ──────────────────────────
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse bg-white/5 rounded", className)} />;
}

// ── Empty state ───────────────────────────────
export function EmptyState({ message = "No content found" }: { message?: string }) {
  return (
    <div className="py-24 text-center">
      <p className="font-serif text-3xl text-gold/20 mb-3">ॐ</p>
      <p className="font-sans text-sm text-ash/40">{message}</p>
    </div>
  );
}
