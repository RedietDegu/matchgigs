import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const LOGOS = [
  "HappySocks", "OATLY", "Porsche", "Veoneer", "Miele",
  "Acme Bank", "Northhub", "Kudu", "Riverton", "Zentro"
];

function Row({ reversed=false, speed=28 }) {
  const controls = useAnimationControls();
  const ref = useRef(null);
  useEffect(() => {
    controls.start({
      x: reversed ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: { duration: speed, repeat: Infinity, ease: "linear" }
    });
  }, [controls, reversed, speed]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="flex items-center gap-8 min-w-[200%]"
    >
      {[...LOGOS, ...LOGOS].map((name, i) => (
        <div key={name + i}
          className="shrink-0 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 text-sm font-semibold shadow-sm hover:shadow-md">
          {name}
        </div>
      ))}
    </motion.div>
  );
}

export default function LogosMarquee() {
  return (
    <section aria-label="Trusted by" className="py-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-sm font-medium text-slate-600 mb-4">
          Loved by 10,000+ recruiters & teams
        </div>
        <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200 bg-slate-50">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
          <div className="flex flex-col gap-4 p-4">
            <Row speed={28} />
            <Row speed={28} reversed />
          </div>
        </div>
      </div>
    </section>
  );
}


