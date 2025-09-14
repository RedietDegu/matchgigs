import DemoFlip from "./DemoFlip.jsx";
import FloatingJoinCard from "./FloatingJoinCard.jsx";
import WhyMatchAGig from "./WhyMatchAGig.jsx";

export default function Hero() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center text-white font-black">M</div>
            <span className="font-semibold tracking-tight">MatchAGig</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
          </nav>
        </div>
      </header>

      <section className="relative overflow-visible bg-emerald-50">
        {/* Floating card - positioned outside the grid for proper sticky behavior */}
        <div className="hidden lg:block fixed top-24 right-6 z-30">
          <div id="join" />
          <FloatingJoinCard />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-12 items-start gap-x-12 gap-y-12">
          {/* LEFT (wider) */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              AI shortlists you can trust.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Every score shows its proof — the exact quote from the résumé.
            </p>

            {/* SINGLE auto-flipping demo (no button below) */}
            <div className="mt-8">
              <DemoFlip initialFrame="JD" cycleMs={5000} />
            </div>
          </div>

          {/* RIGHT (spacer for mobile) */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[360px]">
            {/* mobile inline */}
            <div className="lg:hidden">
              <FloatingJoinCard />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <WhyMatchAGig />
    </main>
  );
}
