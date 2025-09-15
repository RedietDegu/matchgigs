import posthog from "posthog-js";

// Fallbacks: works without a .env
const KEY  = import.meta.env.VITE_POSTHOG_KEY || "phc_RzX0Ft7S8gwvRm7Uxc9CSVkbiF85KIaejKAPYia9003";
const HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (initialized || !KEY) return;
  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: true,
    autocapture: true,
  });
  posthog.capture("app_loaded");
  initialized = true;
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
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(v));
  return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("");
}

export { posthog };
