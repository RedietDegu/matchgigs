import { useEffect, useMemo, useState } from "react";

export default function DemoFlip({ initialFrame = "JD", cycleMs = 5000 }) {
  const [frame, setFrame] = useState(initialFrame);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame(f => (f === "JD" ? "UPLOAD" : f === "UPLOAD" ? "RANKED" : "JD"));
    }, cycleMs);
    return () => clearInterval(id);
  }, [cycleMs]);

  const jd = `Technical Sales Representative — IT Staffing Startup
• Own outbound pipeline and close SMB deals
• Tools: HubSpot, LinkedIn, G-Suite
• Strong English communication, discovery, CRM hygiene
• Experience selling services or SaaS to US/EU`;

  const tags = ["Prospecting", "Client-facing English", "HubSpot", "B2B SaaS"];
  const processing = [
    "omar.hassan@…","barbara.novak@…","angela.martin@…",
    "arjun.patel@…","karim.abdallah@…","alexandra.novak@…","lina.khaled@…",
  ];
  const ranked = useMemo(() => ([
    { name: "John Smith", role: "Senior Developer",  score: 95, why: "Advanced SQL; stakeholder comms; fintech analytics", risk: "Limited AWS depth" },
    { name: "Maria Johnson", role: "Full-stack Engineer", score: 78, why: "ETL + dbt; culture fit from startup tenure",  risk: "Short tenure past 12m" },
    { name: "Alex Davis", role: "Frontend Developer", score: 45, why: "Reporting/Excel foundation; learning React/TS",   risk: "Light production React" },
  ]), []);

  return (
    <div className="relative w-full">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <span className="text-sm text-slate-600">
            {frame === "JD" && "Step 1 — Paste Job Description"}
            {frame === "UPLOAD" && "Step 2 — Upload Résumés"}
            {frame === "RANKED" && "Ranked candidates (with explanations)"}
          </span>
          <div className="flex gap-1.5">
            {["JD","UPLOAD","RANKED"].map(f => (
              <span key={f} className={`h-2.5 w-6 rounded-full ${frame===f?"bg-emerald-500":"bg-slate-200"}`} />
            ))}
          </div>
        </div>

        {/* Body (taller to match your box) */}
        <div className="relative min-h-[420px]">
          {/* JD */}
          <div className={`absolute inset-0 p-6 transition-opacity duration-300 ${frame==="JD"?"opacity-100":"opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col h-full">
              <label className="block text-xs font-medium text-slate-500 mb-2">Job Description</label>
              <textarea readOnly value={jd} className="flex-1 min-h-[200px] rounded-lg border border-slate-200 p-3 text-sm text-slate-700 bg-slate-50" />
              <div className="mt-3 text-sm text-slate-600">Parsing key requirements…</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Upload */}
          <div className={`absolute inset-0 p-6 transition-opacity duration-300 ${frame==="UPLOAD"?"opacity-100":"opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col h-full gap-4">
              <div className="flex-1 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 flex items-center justify-center">
                <div className="text-sm text-slate-600">Drag &amp; drop PDFs</div>
              </div>
              <div className="text-sm text-slate-600">Processing {processing.length} candidates…</div>
              <div className="flex flex-wrap gap-2">
                {processing.map(p => (
                  <span key={p} className="text-xs rounded-md border border-slate-200 bg-white px-2 py-1 shadow-sm">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Ranked */}
          <div className={`absolute inset-0 p-6 transition-opacity duration-300 ${frame==="RANKED"?"opacity-100":"opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col h-full">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {[{label:"Candidates",value:127},{label:"Shortlisted",value:23},{label:"Interviews",value:5},{label:"Hired",value:2}].map(s=>(
                  <div key={s.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                    <span className="font-semibold mr-2">{s.value}</span>
                    <span className="text-slate-500">{s.label}</span>
                  </div>
                ))}
                <button className="ml-auto text-xs rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50">Score + Why</button>
              </div>

              <div className="flex-1 grid gap-3 overflow-y-auto">
                {ranked.map(c=>(
                  <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-xs text-slate-500">{c.role}</p>
                      </div>
                      <span className={`text-xs rounded-md px-2 py-0.5 border ${
                        c.score>=85 ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                        c.score>=60 ? "bg-amber-50 text-amber-700 border-amber-200" :
                                       "bg-rose-50 text-rose-700 border-rose-200"}`}>
                        {c.score}% Match
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">
                      Why: {c.why} <span className="text-rose-600">• Risk: {c.risk}</span>
                    </p>
                  </div>
                ))}

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-medium mb-1">AI Analysis</p>
                  <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li>Strong technical skills match across top candidates</li>
                    <li>Risks: domain depth varies; probe AWS + tenure in interviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
