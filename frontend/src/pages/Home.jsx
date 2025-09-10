import { HeroPreview, Hero, DemoSection } from "../components/HeroPreview";
import { Testimonials } from "../components/Testimonials";
import ContactModal from "../components/ContactModal";
import HowItWorks from "../components/HowItWorks";
import TrustStrip from "../components/TrustStrip";
import { useState } from "react";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    // Track modal opening
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "open_contact_modal");
    }
    setIsContactModalOpen(true);
  };

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Demo lead-in */}
      <section className="py-6 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-slate-900">Got 30 seconds? See MatchAGig in action! ✨</h3>
        </div>
      </section>

      {/* Interactive Demo */}
      <DemoSection>
        <HeroPreview />
      </DemoSection>

      {/* About */}
      <section id="about" className="py-16 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-emerald-100/20 to-emerald-50/30"></div>
        
        <div className="mx-auto w-[92%] max-w-6xl relative">
          <h2 className="text-3xl font-semibold text-slate-900">Why MatchAGig</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            We help teams shortlist candidates faster with clear, explainable results.
            Built for speed, designed for clarity, and ready for your pipeline.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:bg-emerald-50/30 hover:shadow-emerald-200/40 hover:border-emerald-200 transition-all duration-250 ease-in-out">
              <div className="text-lg font-semibold mb-2 text-slate-900">Confidence at Every Step</div>
              <div className="text-slate-600">Spot red flags early and get tailored interview prompts.</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:bg-emerald-50/30 hover:shadow-emerald-200/40 hover:border-emerald-200 transition-all duration-250 ease-in-out">
              <div className="text-lg font-semibold mb-2 text-slate-900">Explainable AI Matching</div>
              <div className="text-slate-600">Not just scores — see why each candidate fits (or doesn't).</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:bg-emerald-50/30 hover:shadow-emerald-200/40 hover:border-emerald-200 transition-all duration-250 ease-in-out">
              <div className="text-lg font-semibold mb-2 text-slate-900">Time Saved</div>
              <div className="text-slate-600">From CV pile to shortlist in minutes, not weeks.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ removed */}

      {/* Try for Free */}
      <section id="demo" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle animated mint gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/20 to-white animate-pulse-slow"></div>
        
        <div className="mx-auto w-[92%] max-w-6xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <h2 className="text-3xl font-semibold text-slate-900">Get started instantly — no setup required</h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 w-fit">
              $0 — Free to start
            </span>
          </div>
          <p className="mt-1 max-w-2xl text-slate-700">
            Upload résumés, paste a job description, and watch MatchAGig create your first ranked shortlist instantly.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700 shadow-sm text-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* How MatchAGig Works */}
      <HowItWorks />

      {/* Book a Demo Banner */}
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              See it live — Book a Demo
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Book a 15-minute demo. We'll show ranked matches and the proof behind each score.
            </p>
            <a 
              href="/book-demo" 
              className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 px-6 py-3 font-semibold text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-32 mt-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-8">
              <p className="text-lg text-slate-600">
                Questions, partnerships, or feedback? We'd love to hear from you.
              </p>
              <button
                onClick={openContactModal}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 font-semibold shadow-sm transition-colors text-lg"
              >
                Contact Us
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                ISO
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                GDPR
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Secure Cloud Hosting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MatchAGig</p>
          <div className="text-sm text-slate-600">
            Email: <a className="font-medium text-slate-800 hover:underline" href="mailto:hello@matchagig.com">hello@matchagig.com</a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
