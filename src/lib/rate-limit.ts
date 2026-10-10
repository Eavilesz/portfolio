import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Rule = { limit: number; windowMs: number };

// Per visitor, and a global ceiling so a distributed spam run can't drain the credit.
const PER_IP: Rule = { limit: 15, windowMs: 10 * 60 * 1000 };
const GLOBAL: Rule = { limit: 500, windowMs: 24 * 60 * 60 * 1000 };

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

function upstashLimiter(prefix: string, rule: Rule) {
  return new Ratelimit({
    redis: redis!,
    limiter: Ratelimit.slidingWindow(rule.limit, `${rule.windowMs} ms`),
    prefix: `ratelimit:${prefix}`,
  });
}

const upstash = redis
  ? { ip: upstashLimiter("ip", PER_IP), global: upstashLimiter("global", GLOBAL) }
  : null;

// Fallback when Upstash isn't configured (local dev). On serverless this is
// per-instance and resets on cold starts, so it only slows spam down.
const hits = new Map<string, number[]>();

function memoryCheck(key: string, rule: Rule) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < rule.windowMs);
  if (recent.length >= rule.limit) {
    hits.set(key, recent);
    return { ok: false, retryAfter: Math.ceil((recent[0] + rule.windowMs - now) / 1000) };
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (now - v[v.length - 1] >= GLOBAL.windowMs) hits.delete(k);
    }
  }
  return { ok: true, retryAfter: 0 };
}

export async function checkRateLimit(ip: string) {
  if (upstash) {
    const [perIp, global] = await Promise.all([
      upstash.ip.limit(ip),
      upstash.global.limit("all"),
    ]);
    for (const r of [perIp, global]) {
      if (!r.success) {
        return { ok: false, retryAfter: Math.max(1, Math.ceil((r.reset - Date.now()) / 1000)) };
      }
    }
    return { ok: true, retryAfter: 0 };
  }

  const perIp = memoryCheck(`ip:${ip}`, PER_IP);
  if (!perIp.ok) return perIp;
  return memoryCheck("global", GLOBAL);
}

export function getClientIp(req: Request) {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}
