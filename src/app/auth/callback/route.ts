import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured, supabaseServer } from "@/lib/supabase";
import { siteOrigin } from "@/lib/auth";
import { safeNext } from "@/lib/auth-paths";

/**
 * Where Google sends the reader back. The one-time code is exchanged
 * for a session (checked against the PKCE verifier the start route left
 * in a cookie), the session cookies are written, and the reader goes on
 * to `next` — a path on this site, never an address someone put in the
 * link. The profile row is created by a database trigger, not here.
 */
export async function GET(request: NextRequest) {
  const origin = siteOrigin(request);
  const params = request.nextUrl.searchParams;
  const next = safeNext(params.get("next"));
  const code = params.get("code");

  if (!isSupabaseConfigured() || !code || params.has("error")) {
    return NextResponse.redirect(`${origin}/signin?error=1`);
  }

  const supabase = await supabaseServer();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(`${origin}/signin?error=1`);

  return NextResponse.redirect(`${origin}${next}`);
}
