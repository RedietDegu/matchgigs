import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookDemo() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to your backend/email service (e.g., /api/demo-request)
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="py-16">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          {sent ? (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-8 text-center">
              <div className="text-2xl mb-4">✅</div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Request received</h1>
              <p className="text-slate-600 mb-6">
                We'll email you shortly to schedule your demo.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className="block rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700 text-center"
                >
                  Back to Home
                </Link>
                <a 
                  href="/#demo" 
                  className="block rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50 text-center"
                >
                  Try the interactive demo
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Book a Demo</h1>
              <p className="text-slate-600 mb-6">
                Get a personalized walkthrough of MatchAGig's AI-powered candidate matching.
              </p>
              
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Work email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="jane@company.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full name
                  </label>
                  <input 
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="Jane Doe" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send me the calendar link"}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <Link 
                  to="/" 
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
