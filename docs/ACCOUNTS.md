# Readers' accounts

Readers can sign in with Google. An account is optional: every page
reads the same without one. Today it tells the site who its readers
are. It is built so that payment can be added later.

## How it works

```
/signin ──link──▶ /auth/google ──302──▶ Supabase ──▶ Google
                                                       │
/account ◀──302── /auth/callback?code=… ◀──────────────┘
```

- **The whole flow runs on the server.**
  - `/auth/google` asks Supabase for the Google address, and leaves the
    PKCE verifier in a cookie.
  - `/auth/callback` exchanges Google's one-time code for a session.
  - There is no client component, no Supabase code in the browser and
    no CSP exception.
- **The start is a plain link, not a form.** Chrome applies
  `form-action 'self'` to a form's redirects too. A form posting to
  `/auth/google` would be stopped on its way to Google.
- **`next` is checked** (`src/lib/auth-paths.ts`). Only a path on this
  site is accepted. That rules out `//host`, a backslash, a control
  character and the sign-in routes themselves. Otherwise the sign-in
  would be an open redirect.
- **The server trusts `getUser()`, never `getSession()`.** The first
  asks Supabase to verify the token. The second only decodes a cookie,
  which anyone can write.
- **The middleware refreshes the session** on `/account`, `/signin`,
  `/auth/*` and `/admin` only.
  - A Server Component cannot write cookies. A refresh there would be
    lost, and the spent token would fail the next time.
  - Elsewhere no page reads the session. So a reader on an ordinary
    page never costs the site a call to Supabase.
- **Sign-out is POST only**, from the account page. It refuses a request
  from another site's origin.
- The masthead's account button is the same link for everybody. The
  account page sends a signed-out reader to sign in.

## What is stored

`profiles` (in `supabase/schema.sql`) holds one row per account. A
database trigger makes the row when Supabase creates the user.

| column | from |
|---|---|
| `id` | the Supabase user id; deleting the user deletes the row |
| `email`, `full_name` | Google |
| `locale` | `en` by default |
| `created_at`, `updated_at` | the database |

Supabase itself keeps the login in `auth.users`. That includes the last
sign-in time the account page shows.

- **No public read.** `profiles` is the one table with no `using (true)`
  policy. A reader can read and update only their own row.
- **Column grants, not row policies, limit what a reader may change.**
  Only `full_name` and `locale` are granted.
  - A column added later for payments (a customer id, a plan, a
    paid-until date) is therefore writable only by the service role.
    That means behind `requireAdmin()` or a verified payment webhook.
  - Add such columns without granting them.
- The sign-in page says what is kept, in three languages. If anything
  else is ever collected, that sentence changes in the same commit.

## Switching it on

The code is done. These are settings, made once:

1. **A Supabase project.** The project URL in `.env.local` no longer
   resolves (checked 2026-10-21), so it was deleted or paused.
   - Create or restore a project.
   - Run `supabase/schema.sql` in its SQL editor.
   - Put its URL and keys in `.env.local` and in the host's
     environment.
2. **A Google OAuth client.** In Google Cloud Console, go to *APIs &
   Services*, then *Credentials*, then *Create credentials*, then *OAuth
   client ID*. Choose type *Web application*.
   - Authorised JavaScript origins: `https://tattvamasi.in`, and
     `http://localhost:3000` for development.
   - Authorised redirect URI:
     `https://<project-ref>.supabase.co/auth/v1/callback`. This is the
     Supabase address, not the site's.
   - On the consent screen, give the site's name and logo. List only
     the `email`, `profile` and `openid` scopes.
3. **In Supabase, go to Authentication, then Providers, then Google.**
   Turn it on and paste the client ID and secret.
4. **In Supabase, go to Authentication, then URL Configuration.**
   - Site URL: `https://tattvamasi.in`.
   - Redirect URLs: `https://tattvamasi.in/auth/callback` and
     `http://localhost:3000/auth/callback`. Supabase refuses to return
     a reader anywhere not on this list.
5. **Set `NEXT_PUBLIC_SITE_URL=https://tattvamasi.in`** in production.
   Then the return address never depends on the request's `Host`
   header.
6. **Keep email sign-ups disabled.** Readers come in through Google. The
   admin's password account is made by hand.

The admin is unchanged: `/admin` still requires `user.email ===
ADMIN_EMAIL`. A reader who signs in with Google gets their own account
page and nothing more.

## Before taking payment

- **Add a privacy notice** and link it from the sign-in page. It lists
  what is collected, why, and how to have an account deleted. India's
  DPDP Act 2023 expects one once personal data is collected.
- **Let a reader delete their own account.** Use a server action that
  calls `supabaseAdmin().auth.admin.deleteUser(id)`, for the signed-in
  user only. The cascade removes the profile.
- **Keep payment data with the provider.**
  - Store the provider's customer id on `profiles`, in a column with no
    grant to `authenticated`.
  - Never store card data.
  - Take every payment through the provider's hosted checkout.
  - Treat only the provider's signed webhook as proof of payment.
