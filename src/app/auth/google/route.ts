import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured, supabaseServer } from "@/lib/supabase";
import { siteOrigin } from "@/lib/auth";
import { safeNext } from "@/lib/auth-paths";

/**
 * Starts "Continue with Google". Supabase builds the Google address and
 * stores the PKCE verifier in a cookie here on the server, so nothing
 * about the sign-in runs in the browser and the CSP needs no exception.
 *
 * A GET reached by a plain link: a form posting here would be stopped
 * by `form-action 'self'` the moment it redirected to Google.
 */
export async function GET(request: NextRequest) {
  const origin = siteOrigin(request);
  const next = safeNext(request.nextUrl.searchParams.get("next"));
  if (!isSupabaseConfigured()) return NextResponse.redirect(`${origin}/signin`);

  const supabase = await supabaseServer();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      skipBrowserRedirect: true,
      queryParams: { prompt: "select_account" },
    },
  });
  if (error || !data?.url) {
    return NextResponse.redirect(`${origin}/signin?error=1`);
  }
  return NextResponse.redirect(data.url);
}
