import posthog from "posthog-js";

const KEY  = import.meta.env.VITE_POSTHOG_KEY || "";                  // env-first
const HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (initialized) return;

  if (!KEY) {
    if (import.meta.env.DEV) console.warn("PostHog disabled: VITE_POSTHOG_KEY missing");
    return;
  }

  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: true,
    autocapture: true,
    persistence: "localStorage+cookie",
    // debug: import.meta.env.DEV,
  });

  // confirm which config is active
  posthog.capture("config_loaded", {
    source: import.meta.env.VITE_POSTHOG_KEY ? "env" : "fallback",
    host: HOST,
  });

  posthog.capture("app_loaded");
  initialized = true;

  // quick console helper: window.ph.capture('debug_ping')
  if (typeof window !== "undefined") window.ph = posthog;
}

export function track(event, props) {
  try { posthog.capture(event, props); } catch {}
}

export async function identifyByEmailHashed(email, extra) {
  try {
    const id = await sha256Hex(email.trim().toLowerCase());
    posthog.identify(id, extra);
  } catch {}
}

async function sha256Hex(v) {
  const enc = new TextEncoder().encode(v);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export { posthog };
