export default function WhyMatchAGig() {
  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Why MatchAGig
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mb-12 max-w-2xl">
            We help teams shortlist candidates faster with clear, explainable results. Built for speed, designed for clarity, and ready for your pipeline.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl bg-white p-5 md:p-6 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Confidence at Every Step
            </h3>
            <p className="text-slate-700">
              Spot red flags early and get tailored interview prompts.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-5 md:p-6 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Explainable AI Matching
            </h3>
            <p className="text-slate-700">
              Not just scores — see why each candidate fits (or doesn't).
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-5 md:p-6 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Time Saved
            </h3>
            <p className="text-slate-700">
              From CV pile to shortlist in minutes, not weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
