import { NextResponse } from "next/server";
import { VERSES, TEMPLES, CONCEPTS, TEACHERS } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase().trim() ?? "";
  if (q.length < 2) return NextResponse.json({ verses: [], temples: [], concepts: [], teachers: [] });

  return NextResponse.json({
    verses:   VERSES.filter(v => v.translation_en.toLowerCase().includes(q) || v.source.toLowerCase().includes(q)).slice(0, 5),
    temples:  TEMPLES.filter(t => t.name.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)).slice(0, 5),
    concepts: CONCEPTS.filter(c => c.term_en.toLowerCase().includes(q) || c.definition.toLowerCase().includes(q)).slice(0, 5),
    teachers: TEACHERS.filter(t => t.name.toLowerCase().includes(q)).slice(0, 5),
  });
}
