import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Upload, CheckCircle, AlertTriangle, Sheet as SheetIcon, Share2 } from "lucide-react";

// New light-theme Hero with explainer slides (Zendesk-style)
const green = {
  glowFrom: "from-emerald-400/30",
  glowTo: "to-emerald-200/10",
  ring: "ring-emerald-300/40",
  chip: "bg-emerald-50 text-emerald-900 border-emerald-200",
  accent: "text-emerald-700",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: copy */}
        <div className="relative max-w-2xl">
          {/* optional white shield if any bleed is visible on extreme sizes */}
          <div className="absolute -z-10 left-0 top-0 h-full w-[60%] bg-white/90 backdrop-blur-sm" />
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            AI shortlists you can trust.
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-medium text-slate-700 max-w-xl">
            Every score shows its proof — the exact quote from the résumé.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-emerald-600 text-white shadow-sm hover:bg-emerald-700">
              ▶︎ Try the interactive demo
            </a>
          </div>
        </div>

        {/* RIGHT: floating cards composition with local glow only */}
        <div className="relative h-[520px] sm:h-[560px]">
          {/* Local glow — ONLY behind cards */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-6rem] top-[-3rem] h-[420px] w-[420px] rounded-full bg-emerald-300/25 blur-3xl" />
            <div className="absolute right-[-2rem] bottom-[-4rem] h-[360px] w-[360px] rounded-full bg-emerald-200/20 blur-3xl" />
            <div className="absolute right-[6rem] top-[8rem] h-[220px] w-[220px] rounded-full bg-emerald-400/15 blur-2xl" />
          </div>

          {/* Cards */}
          <RightCards />
        </div>
      </div>
    </section>
  );
}

function RightCards() {
  const reduce = useReducedMotion();
  const float = (delay = 0) => ({
    initial: { y: 0, opacity: 0 },
    animate: {
      opacity: 1,
      y: reduce ? 0 : [0, -8, 0],
      transition: {
        duration: reduce ? 0.2 : 6,
        repeat: reduce ? 0 : Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  });

  return (
    <div className="relative h-[520px] sm:h-[560px]">
      {/* subtle network lines in the back */}
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
            </linearGradient>
          </defs>
          <path d="M0,420 C180,360 320,520 520,420 S840,300 1100,380" stroke="url(#g)" strokeWidth="2" fill="none" />
          <path d="M0,160 C220,220 400,120 640,180 S980,260 1200,200" stroke="url(#g)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Candidate Snapshot */}
      <motion.div {...float(0.1)} className="absolute left-2 top-4">
        <Card className="w-64">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-slate-900">Jase Silva</div>
              <div className="text-xs text-slate-500">Senior Data Analyst</div>
            </div>
            <span className="rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1 font-semibold">92% Match</span>
          </div>
          <ProofLine text="Matched: Led Python automation for quarterly reporting at Riverbank Analytics" />
        </Card>
      </motion.div>

      {/* Shortlist View */}
      <motion.div {...float(0.4)} className="absolute right-2 top-24">
        <Card className="w-72">
          <div className="text-sm font-semibold text-slate-800 mb-2">Shortlist</div>
          <ListRow name="A. Kassa" role="Data Analyst" score={94} proof="Built ETL in dbt + SQL at Northwind Retail" />
          <ListRow name="M. Johnson" role="BI Engineer" score={86} proof="Stakeholder dashboards in Mode" />
          <ListRow name="L. Chen" role="Ops Analyst" score={78} proof="Python automation; weekly KPI reports" />
        </Card>
      </motion.div>

      {/* JD vs Résumé Match */}
      <motion.div {...float(0.7)} className="absolute left-10 bottom-16">
        <Card className="w-[28rem] max-w-[90vw]">
          <div className="grid grid-cols-2 gap-3 items-start">
            <div>
              <div className="text-[11px] font-medium text-slate-500">JD says</div>
              <div className="rounded-md border border-slate-200 bg-slate-50 text-sm p-2">
                Looking for <span className="font-semibold">5+ years Python</span> & SQL
              </div>
            </div>
            <div className="relative">
              <div className="text-[11px] font-medium text-slate-500">Résumé says</div>
              <div className="rounded-md border border-emerald-200 bg-emerald-50 text-sm p-2">
                <span className="font-semibold">5 years Python</span> at <span className="font-semibold">Riverbank Analytics</span>; built ETL pipelines
              </div>
              {/* connector */}
              <div className="absolute -left-4 top-5 h-2 w-8 bg-emerald-300/60 rounded-full" />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Export/Share */}
      <motion.div {...float(1.0)} className="absolute right-8 bottom-4">
        <Card className="w-60">
          <div className="text-sm font-semibold text-slate-800 mb-2">Export & Share</div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <SheetIcon className="h-4 w-4 text-emerald-700" /> Export to Sheets
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
            <Share2 className="h-4 w-4 text-emerald-700" /> Share shortlist
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl bg-white/90 backdrop-blur ring-1 ${green.ring} shadow-md shadow-emerald-900/5 p-4 ${className}`}>
      {children}
    </div>
  );
}

function ProofLine({ text }) {
  return (
    <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 text-sm text-emerald-900 px-2 py-1">
      <span className="inline-flex items-center gap-1">
        <CheckCircle className="h-4 w-4 text-emerald-700" /> {text}
      </span>
    </div>
  );
}

function ListRow({ name, role, score, proof }) {
  return (
    <div className="mb-2 last:mb-0 rounded-lg border border-slate-200 bg-slate-50 p-2">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-slate-800">{name}</div>
          <div className="text-[11px] text-slate-500">{role}</div>
        </div>
        <span className="text-[11px] font-semibold rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">
          {score}% Match
        </span>
      </div>
      <div className="mt-1 text-[12px] text-slate-700">Proof: {proof}</div>
    </div>
  );
}

// (Removed previous SideExplainer in favor of Micro-proof block)

// New demo section wrapper for moving preview below the hero
export function DemoSection({ children }) {
  return (
    <section id="demo" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Interactive demo</h2>
          <p className="mt-2 text-slate-600">
            Paste a job description and upload résumé samples. Watch semantic matching rank candidates — with the reasons why.
          </p>
        </div>
        <div className="min-h-[650px] flex items-center justify-center transition-all duration-500">
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

const DURATION = 2600; // ms per step

export function HeroPreview() {
  const [step, setStep] = useState(0); // 0=JD, 1=CVs, 2=Results
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 3), DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      {/* progress dots */}
      <div className="mb-3 flex items-center gap-2 justify-end pr-1">
        {[0,1,2].map((i) => (
          <span key={i}
            className={`h-1.5 w-6 rounded-full transition-colors ${
              step === i ? "bg-indigo-500" : "bg-slate-400/40"
            }`}
          />
        ))}
      </div>

      {/* frameless floating card */}
      <motion.div
        layout
        className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-xl p-4 w-full"
      >
        <div className="rounded-xl border border-slate-200 bg-slate-50 text-slate-800 p-5 overflow-hidden min-h-[400px] flex flex-col">
          <div className="text-sm font-semibold mb-3">
            {step === 0 && "Step 1 — Paste Job Description"}
            {step === 1 && "Step 2 — Upload Résumés"}
            {step === 2 && "Ranked candidates (with explanations)"}
          </div>

          <div className="relative flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {step === 0 && <StepJD key="jd" />}
              {step === 1 && <StepCV key="cv" />}
              {step === 2 && <StepResults key="res" />}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function fadeCard(children) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28 }}
      className="rounded-lg bg-white border border-slate-200 p-4"
    >
      {children}
    </motion.div>
  );
}

function StepJD() {
  return fadeCard(
    <>
      <div className="text-xs text-slate-500 mb-2">Job Description</div>
      <div className="h-28 rounded-md bg-white border border-slate-200 p-3 text-slate-600 text-xs">
        Technical Sales Representative — IT Staffing Startup{'\n'}
        · Own outbound pipeline and close SMB deals{'\n'}
        · Tools: HubSpot, LinkedIn, G-Suite
      </div>
      <div className="mt-3 text-xs text-slate-500">Parsing key requirements…</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {["Prospecting","Client-facing English","HubSpot","B2B SaaS"].map(t => (
          <span key={t} className="text-xs rounded-full bg-lime-100 text-lime-700 px-2 py-0.5 border border-lime-200">{t}</span>
        ))}
      </div>
    </>
  );
}

function StepCV() {
  return fadeCard(
    <>
      <div className="text-xs text-slate-500 mb-2">Upload résumés</div>
      <div className="flex items-center justify-center h-28 rounded-md border-2 border-dashed border-slate-300">
        <div className="flex flex-col items-center text-slate-500">
          <Upload className="h-5 w-5 mb-1" />
          <span className="text-xs">Drag & drop PDFs</span>
        </div>
      </div>
      <div className="mt-3 text-xs text-slate-500">Processing 7 candidates…</div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-slate-700">
        {["omar.hassan@…","barbara.novak@…","angela.martin@…","arjun.patel@…","karim.abdallah@…","alexandra.novak@…","lina.khaled@…"].map(e => (
          <span key={e} className="truncate rounded bg-slate-100 px-2 py-1">{e}</span>
        ))}
      </div>
    </>
  );
}

function Badge({ score }) {
  const cls =
    score >= 85
      ? "bg-green-100 text-green-700"
      : score >= 70
      ? "bg-amber-100 text-amber-700"
      : "bg-rose-100 text-rose-700";
  return (
    <span className={`text-[11px] font-semibold px-2 py-1 rounded-full ${cls}`}>
      {score}% Match
    </span>
  );
}

function ReasonLine({ why, flag, dense }) {
  return (
    <div className={`text-[11px] ${dense ? "text-slate-500" : "text-slate-600"} mt-1`}>
      <span className="font-medium text-slate-700">Why:</span> {why}
      {flag && (
        <span className="ml-2 text-rose-700">
          <span className="font-medium">• Risk:</span> {flag}
        </span>
      )}
    </div>
  );
}

function StepResults() {
  const rows = useMemo(
    () => [
      {
        id: "1",
        name: "John Smith",
        role: "Senior Developer",
        score: 95,
        why: "Advanced SQL, stakeholder comms; fintech analytics impact",
        flag: "Limited AWS depth",
      },
      {
        id: "2",
        name: "Maria Johnson",
        role: "Full-stack Engineer",
        score: 78,
        why: "ETL + dbt; culture fit from startup tenure",
        flag: "Short tenure past 12m",
      },
      {
        id: "3",
        name: "Alex Davis",
        role: "Frontend Developer",
        score: 45,
        why: "Reporting/Excel foundation; learning React/TS",
        flag: "Light production React",
      },
    ],
    []
  );

  const [showReasons, setShowReasons] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28 }}
    >
      {/* Header + toggle */}
      <div className="mb-3 flex items-center justify-between">
        <div className="grid grid-cols-4 gap-3">
          {[
            { k: "Candidates", v: 127 },
            { k: "Shortlisted", v: 23 },
            { k: "Interviews", v: 5 },
            { k: "Hired", v: 2 },
          ].map((s) => (
            <div key={s.k} className="rounded-lg bg-white ring-1 ring-slate-200 p-3 text-center">
              <div className="text-lg font-bold text-slate-900">{s.v}</div>
              <div className="text-[10px] text-slate-500">{s.k}</div>
            </div>
          ))}
        </div>

        {/* toggle chip */}
        <button
          onClick={() => setShowReasons((v) => !v)}
          className="ml-3 shrink-0 text-[11px] rounded-full px-2.5 py-1 border border-slate-300 text-slate-700 hover:bg-slate-50"
          aria-pressed={showReasons}
        >
          {showReasons ? "Score + Why" : "Score only"}
        </button>
      </div>

      {/* Ranked list with reasons */}
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.id}
            className="rounded-lg bg-white border border-slate-200 p-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-[11px] text-slate-500">{r.role}</div>
              </div>
              <Badge score={r.score} />
            </div>

            {/* reason line (always show a dense summary, expand to full when toggle is on) */}
            <AnimatePresence initial={false}>
              {showReasons ? (
                <motion.div
                  key="full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <ReasonLine why={r.why} flag={r.flag} dense={false} />
                </motion.div>
              ) : (
                <ReasonLine why={r.why.split(";")[0]} flag={null} dense />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Stable AI analysis */}
      <div className="mt-3 rounded-lg ring-1 ring-slate-200 shadow-xl bg-white p-4">
        <div className="text-sm font-semibold mb-2 text-slate-900">AI Analysis</div>
        <ul className="text-xs text-slate-700 space-y-1">
          <li>• Strong technical skills match across top candidates</li>
          <li>• Risks: domain depth varies; probe AWS + tenure in interviews</li>
        </ul>
      </div>
    </motion.div>
  );
}
