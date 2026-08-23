// Client-safe Supabase client — no next/headers import, so this is the only
// module client components (e.g. the admin login form) may import from.
// Everything else (server-side session reads, the service-role client) lives
// in lib/supabase.ts, which is server-only.
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function supabaseBrowser() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
