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

`npm run setup:auth` (`scripts/setup-auth.mjs`) does the Supabase side. It finds or creates the project, applies `supabase/schema.sql`, configures sign-in and writes the keys into `.env.local`. It is safe to run again. Only two things need a person, because neither has an API.

**Step 1: a Supabase access token (2 minutes).**

1. Sign in at supabase.com. Your old project there no longer exists, so a new one will be made.
2. Click your avatar (bottom left), then **Account preferences**, then **Access Tokens**, then **Generate new token**.
3. Copy `.env.setup.example` to `.env.setup` and paste the token as `SUPABASE_ACCESS_TOKEN`.
4. Run `npm run setup:auth`. It prints the address Google will need.

**Step 2: a Google OAuth client (5 minutes).**

1. Open console.cloud.google.com and choose or create a project.
2. Go to **APIs & Services**, then **OAuth consent screen**:
   - user type **External**;
   - app name "Tat Tvam Asi", with your email as the support and developer contact;
   - scopes: leave the defaults (`email`, `profile`, `openid`);
   - then **Publish app**, so anyone can sign in, not only test users.
3. Go to **APIs & Services**, then **Credentials**, then **Create credentials**, then **OAuth client ID**, with type **Web application**:
   - **Authorised JavaScript origins**: `http://localhost:3000`, and the live address once deployed.
   - **Authorised redirect URIs**: the address step 1 printed, `https://<project-ref>.supabase.co/auth/v1/callback`.
4. Paste the client ID and secret into `.env.setup` as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
5. Run `npm run setup:auth` again, then restart the dev server.

"Continue with Google" now appears on `/signin` and works.

**Optional: sign-in by email code.** Supabase's own mailer only delivers to members of your Supabase team, so email codes for the public need an SMTP service.

1. Resend's free tier is enough: verify a domain there and create an API key.
2. Put the `SMTP_*` values in `.env.setup`, as described in the example file.
3. Run the script again.

The sign-in page offers the email form only once this is done (`SIGNIN_EMAIL=on`).

**When the site goes live.**

1. Set `SITE_URL` to the live address and run the script again.
2. Add the same `NEXT_PUBLIC_*`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL` and `SIGNIN_EMAIL` values to the host's environment.
3. Add the live address to the Google client's JavaScript origins.

**What readers see meanwhile.** The sign-in page checks Supabase before offering anything (`src/lib/auth-status.ts`). It shows Google only if Google is on, the email form only if email codes are on, and otherwise "Sign-in is not available right now". It never sends a reader to a project that does not answer.

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
