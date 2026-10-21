/**
 * Where a reader is sent after signing in. The `next` parameter comes
 * from the URL, so anyone can write it; taken as given it would make
 * the sign-in flow an open redirect ("sign in, then off to a look-alike
 * site"). Only a path on this site is accepted.
 *
 * Kept free of Next and Node APIs so it can be unit-tested and used in
 * the middleware.
 */
export const AFTER_SIGNIN = "/account";

export function safeNext(raw: string | null | undefined): string {
  if (!raw || raw.length > 512) return AFTER_SIGNIN;
  // One leading slash, then not a second one or a backslash, which
  // browsers read as "//evil.example" — another host.
  if (!/^\/(?![/\\])/.test(raw)) return AFTER_SIGNIN;
  if (/[\\\u0000-\u001f\u007f]/.test(raw)) return AFTER_SIGNIN;
  // Never back into the sign-in machinery itself.
  if (/^\/(auth|signin)(\/|\?|#|$)/.test(raw)) return AFTER_SIGNIN;
  return raw;
}

/** Paths whose pages read the session, so the middleware keeps it fresh. */
export function readsSession(pathname: string): boolean {
  return /^\/(account|signin|admin|auth)(\/|$)/.test(pathname);
}
