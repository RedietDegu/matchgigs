import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-emerald-50 text-slate-900">
      <Hero />
      <footer className="border-t border-slate-200 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} MatchAGig • Privacy • Terms
        </div>
      </footer>
    </main>
  );
}

