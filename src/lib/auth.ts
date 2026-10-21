// Server-only helpers for readers' accounts. Imports lib/supabase.ts,
// which imports next/headers, so no client component can pull this in.
import type { NextRequest } from "next/server";
import { isSupabaseConfigured, supabaseServer } from "@/lib/supabase";

export type Reader = {
  id: string;
  email: string;
  name: string | null;
  joined: string | null;
  lastSignIn: string | null;
};

/**
 * The signed-in reader, or null. Uses `getUser()`, which asks Supabase
 * to verify the token, never `getSession()`, which only decodes the
 * cookie and would believe a forged one.
 */
export async function currentReader(): Promise<Reader | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  // RLS lets a reader read only their own row.
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, created_at")
    .eq("id", user.id)
    .maybeSingle();

  const meta = user.user_metadata ?? {};
  return {
    id: user.id,
    email: user.email ?? "",
    name: profile?.full_name ?? meta.full_name ?? meta.name ?? null,
    joined: profile?.created_at ?? user.created_at ?? null,
    lastSignIn: user.last_sign_in_at ?? null,
  };
}

/**
 * The site's own origin, for the address Google sends the reader back
 * to. NEXT_PUBLIC_SITE_URL wins when set, so a forged Host header cannot
 * choose it; Supabase also refuses any return address not on its
 * allow-list (docs/ACCOUNTS.md).
 */
export function siteOrigin(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      // fall through
    }
  }
  return request.nextUrl.origin;
}
