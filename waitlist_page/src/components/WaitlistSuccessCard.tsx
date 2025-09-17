import { CheckCircle } from "lucide-react";
import { track } from "../lib/analytics";

const CONTINUE_URL = import.meta.env.VITE_CONTINUE_URL || "https://matchgigs.vercel.app";

export default function WaitlistSuccessCard({
  continueHref = CONTINUE_URL,
}: { continueHref?: string }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
        <CheckCircle className="h-7 w-7 text-emerald-600" />
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        Thanks for joining the waitlist!
      </h3>
      <p className="mt-2 text-slate-600">
        You're all set. We'll notify you as soon as early access opens.
      </p>

      {/* Use <a>, not a <button type="submit"> */}
      <a
        href={continueHref}
        target="_self"
        rel="noopener noreferrer"
        onClick={() => track("cta_continue_website_click", { to: continueHref })}
        className="hidden mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 md:w-auto"
      >
        Continue to website
      </a>

      <p className="mt-3 text-xs text-slate-500">
        You can update your preferences anytime.
      </p>
    </div>
  );
}
