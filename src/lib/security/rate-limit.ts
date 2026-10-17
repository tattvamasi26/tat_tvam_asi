/**
 * A per-client request counter with two windows: a short one against
 * bursts and a long one against a patient crawl. A reader turning pages
 * stays far under both; a copier walking all 1,028 Rigveda hymns does
 * not.
 *
 * It lives in the memory of one server process. That is enough for a
 * single `next start`, and it is the reason docs/SECURITY.md asks for
 * the host's own rate limiting once the site runs on more than one.
 */
export type Window = { limit: number; ms: number };

export class RateLimiter {
  private hits = new Map<string, number[]>();
  private blocked = new Map<string, number>();
  private lastSweep = 0;

  constructor(
    private windows: Window[],
    private maxKeys = 50_000,
  ) {}

  /** Records one request; true when the client is over a limit. */
  hit(key: string, now = Date.now()): boolean {
    this.sweep(now);
    if (this.isBlocked(key, now)) return true;

    const longest = Math.max(...this.windows.map((w) => w.ms));
    const times = (this.hits.get(key) ?? []).filter((t) => now - t < longest);
    times.push(now);
    this.hits.set(key, times);

    return this.windows.some(
      (w) => times.filter((t) => now - t < w.ms).length > w.limit,
    );
  }

  /** Refuses a client outright until `now + ms`. */
  block(key: string, ms: number, now = Date.now()): void {
    this.blocked.set(key, now + ms);
  }

  isBlocked(key: string, now = Date.now()): boolean {
    const until = this.blocked.get(key);
    if (until === undefined) return false;
    if (until > now) return true;
    this.blocked.delete(key);
    return false;
  }

  /** Drops stale entries once a minute, and everything if memory runs away. */
  private sweep(now: number): void {
    if (now - this.lastSweep < 60_000) return;
    this.lastSweep = now;
    const longest = Math.max(...this.windows.map((w) => w.ms));
    for (const [k, times] of this.hits) {
      if (times.every((t) => now - t >= longest)) this.hits.delete(k);
    }
    for (const [k, until] of this.blocked) {
      if (until <= now) this.blocked.delete(k);
    }
    if (this.hits.size > this.maxKeys) this.hits.clear();
  }
}
