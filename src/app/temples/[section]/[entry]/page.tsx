import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { DEFAULT_LOCALE } from "@/i18n/config";
import {
  getTempleBySlug,
  getTempleEntryKind,
  getTempleMonograph,
  getTempleRoutes,
} from "@/lib/data";
import { Monograph } from "@/components/temples/Monograph";
import { ShortTemple } from "@/components/temples/ShortTemple";
import { NavaVinayakas } from "@/components/temples/NavaVinayakas";

/**
 * What sits inside a region: a temple written in depth (a module under
 * seed/temple-pages/), a temple still held as a short entry, or a
 * circuit such as the Nava Vinayakas.
 */

export function generateStaticParams() {
  return getTempleRoutes().entries;
}

export function generateMetadata({ params }: { params: { section: string; entry: string } }): Metadata {
  const temple = getTempleMonograph(params.entry, DEFAULT_LOCALE);
  if (temple) return { title: temple.name, description: temple.tagline };
  const short = getTempleBySlug(params.entry, DEFAULT_LOCALE);
  if (short) return { title: short.name, description: short.description };
  return { title: "Nava Vinayakas of Tulunadu" };
}

export default function TempleEntryPage({ params }: { params: { section: string; entry: string } }) {
  const { locale, t } = getTranslations();
  const kind = getTempleEntryKind(params.section, params.entry);
  if (!kind) notFound();

  if (kind === "collection") return <NavaVinayakas />;

  const temple = getTempleMonograph(params.entry, locale);
  if (temple) {
    return (
      <Monograph
        temple={temple}
        labels={{
          sources: t.labelSources,
          imageCredit: t.imageCredit,
          previous: t.labelPrevious,
          next: t.labelNext,
        }}
      />
    );
  }

  const short = getTempleBySlug(params.entry, locale);
  if (!short) notFound();
  return <ShortTemple temple={short} />;
}
