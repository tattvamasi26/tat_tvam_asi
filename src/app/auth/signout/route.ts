import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured, supabaseServer } from "@/lib/supabase";
import { siteOrigin } from "@/lib/auth";

/**
 * Signs the reader out. POST only, from the account page's form, and
 * only from this site: another site cannot sign a reader out by
 * embedding a link or posting a form here.
 */
export async function POST(request: NextRequest) {
  const origin = siteOrigin(request);
  const from = request.headers.get("origin");
  if (from && from !== origin && from !== request.nextUrl.origin) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  if (isSupabaseConfigured()) {
    const supabase = await supabaseServer();
    await supabase.auth.signOut();
  }
  // 303: the browser follows with a GET, not a repeated POST.
  return NextResponse.redirect(`${origin}/`, 303);
}
