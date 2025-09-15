import { useRef, useState, useEffect } from "react";
import WaitlistSuccessCard from "./WaitlistSuccessCard";

const CONTINUE_URL = import.meta.env.VITE_CONTINUE_URL || "https://matchgigs.vercel.app";

export default function InlineMailchimpForm() {
  const [email, setEmail] = useState("");
  const [wantsResources, setWantsResources] = useState(false);
  const [submitted, setSubmitted] = useState(false);   // user clicked submit
  const [completed, setCompleted] = useState(false);   // iframe loaded after submit
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const tagsValue = wantsResources ? "waitlist2,resources" : "waitlist2";

  // When the iframe finishes loading AFTER we've submitted, mark as completed
  const handleIframeLoad = () => {
    if (submitted && !completed) setCompleted(true);
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleIframeLoad);
    }
    return () => {
      iframeRef.current?.removeEventListener("load", handleIframeLoad);
    };
  }, [submitted, completed]);

  if (completed) {
    return (
      <div className="mx-auto max-w-xl">
        <WaitlistSuccessCard continueHref={CONTINUE_URL} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        Submit your info to join the waitlist
      </h2>
      <p className="mt-2 text-slate-600">
        Join the waitlist to get first access
      </p>

      <form
        className="mt-6 space-y-4"
        action="https://matchagig.us6.list-manage.com/subscribe/post?u=a279e57126977a33994fb450b&id=1badf82333&f_id=006419e2f0"
        method="post"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)}
      >
        {/* EMAIL */}
        <div>
          <label htmlFor="mce-EMAIL" className="sr-only">Email</label>
          <input
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            inputMode="email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-0 focus:border-slate-400"
          />
        </div>

        {/* OPTIONAL TAGS TO MAILCHIMP */}
        <input type="hidden" name="tags" value={tagsValue} />

        {/* simple checkbox if you want to control tags */}
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={wantsResources}
            onChange={(e) => setWantsResources(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
          I'd like occasional hiring resources
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-400 px-4 py-3 font-semibold text-slate-900 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!email}
        >
          Join waitlist
        </button>

        {/* Hidden iframe to capture Mailchimp response */}
        <iframe
          ref={iframeRef}
          name="hidden_iframe"
          style={{ display: "none" }}
          title="hidden-mailchimp-response"
        />
      </form>
    </div>
  );
}
