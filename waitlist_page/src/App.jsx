import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900 overflow-x-hidden">
      <main className="mx-auto max-w-screen-md md:max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 space-y-8 sm:space-y-12">
        <Hero />
        <footer className="border-t border-slate-200 bg-emerald-50">
          <div className="py-10 text-sm text-slate-500">
            © {new Date().getFullYear()} MatchAGig • Privacy • Terms
          </div>
        </footer>
      </main>
    </div>
  );
}

