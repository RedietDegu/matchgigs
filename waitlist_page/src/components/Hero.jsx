import DemoFlip from "./DemoFlip.jsx";
import FloatingJoinCard from "./FloatingJoinCard.jsx";
import WhyMatchAGig from "./WhyMatchAGig.jsx";

export default function Hero() {
  return (
    <main className="text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="w-full max-w-screen-md md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center text-white font-black">M</div>
            <span className="font-semibold tracking-tight">MatchAGig</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
          </nav>
        </div>
      </header>

      <section className="relative overflow-x-hidden bg-emerald-50">
        {/* Floating card - positioned outside the grid for proper sticky behavior */}
        <div className="hidden lg:block fixed top-24 right-6 z-30">
          <div id="join" />
          <FloatingJoinCard />
        </div>
        
        <div className="relative py-8 sm:py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          {/* LEFT (wider) */}
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-[clamp(22px,6vw,48px)] font-bold text-gray-900 leading-tight text-center sm:text-left">
              AI shortlists you can trust.
            </h1>
            <p className="mt-2 sm:mt-3 text-[clamp(14px,3.5vw,18px)] text-gray-600 text-center sm:text-left max-w-xl">
              Every score shows its proof — the exact quote from the résumé.
            </p>

            {/* SINGLE auto-flipping demo (no button below) */}
            <div className="mt-8">
              <DemoFlip initialFrame="JD" cycleMs={5000} />
            </div>
          </div>

          {/* RIGHT (spacer for mobile) */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-24 max-w-sm w-full mx-auto md:mx-0 relative">
            {/* mobile inline */}
            <div className="md:hidden">
              <FloatingJoinCard />
            </div>
            <div className="hidden md:block lg:hidden">
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
