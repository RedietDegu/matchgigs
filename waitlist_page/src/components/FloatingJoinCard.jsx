import { useRef, useState } from "react";

function InlineMailchimpForm() {
  const [email, setEmail] = useState("");
  const [wantsResources, setWantsResources] = useState(false);
  const [submitted, setSubmitted] = useState(false);   // user clicked submit
  const [completed, setCompleted] = useState(false);   // iframe loaded after submit
  const iframeRef = useRef(null);

  const tagsValue = wantsResources ? "waitlist 2,resources" : "waitlist 2";

  // When the iframe loads AFTER we've submitted, we treat it as success.
  const handleIframeLoad = () => {
    if (submitted && !completed) setCompleted(true);
  };

  return (
    <div>
      {/* Hidden iframe to catch Mailchimp response */}
      <iframe
        ref={iframeRef}
        name="mc_iframe"
        onLoad={handleIframeLoad}
        style={{ display: "none" }}
        title="mailchimp_iframe"
      />

      {!completed ? (
        <form
          action="https://matchagig.us6.list-manage.com/subscribe/post?u=a279e57126977a33994fb450b&amp;id=1badf82333&amp;f_id=006519e2f0"
          method="post"
          target="mc_iframe"
          noValidate
          onSubmit={() => setSubmitted(true)}
          className="space-y-3"
        >
          {/* IMPORTANT: name must be EMAIL */}
          <input
            type="email"
            name="EMAIL"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Default tags */}
          <input type="hidden" name="tags" value={tagsValue} />

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-1"
              checked={wantsResources}
              onChange={(e) => setWantsResources(e.target.checked)}
            />
            I would like to receive helpful resources like tutorials, templates and hiring advice.
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          <p className="font-semibold mb-1">🎉 Thanks for joining the waitlist!</p>
          <p className="text-sm">
            You're all set. We'll notify you as soon as early access opens.
          </p>
        </div>
      )}
    </div>
  );
}

export default function FloatingJoinCard() {
  return (
    <aside className="rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 border border-slate-200
                      w-[400px] max-w-[88vw] p-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Submit your info to join the waitlist</h3>
      <h4 className="text-lg font-bold text-slate-800 mb-6">Join the waitlist to get first access</h4>

      <InlineMailchimpForm />
    </aside>
  );
}
