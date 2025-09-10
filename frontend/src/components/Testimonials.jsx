import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Cut screening time by 60% — and candidates actually fit.",
    name: "Liya G.",
    role: "HR Lead, SaaS"
  },
  {
    id: 2,
    quote: "Finally, a tool that shows why a CV matches. Game-changer.",
    name: "Samuel A.",
    role: "Agency Recruiter"
  },
  {
    id: 3,
    quote: "We send client shortlists in minutes, not days.",
    name: "Nora K.",
    role: "Recruitment Agency Owner"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-16 bg-white relative overflow-hidden">
      {/* Subtle animated mint gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/20 to-white animate-pulse-slow"></div>
      
      <div className="mx-auto w-[92%] max-w-6xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-slate-900">Recruiters are already saving hours.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.25, ease: "easeInOut" }
              }}
              className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 text-slate-800 hover:bg-emerald-50/30 hover:shadow-emerald-200/40 hover:ring-emerald-200 transition-all duration-250 ease-in-out"
            >
              <div className="text-6xl text-slate-300 mb-4">"</div>
              <blockquote className="text-lg sm:text-xl text-slate-900 mb-6 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <footer className="text-sm text-slate-500 mt-3">
                <div className="font-semibold text-slate-800">{testimonial.name}</div>
                <div>{testimonial.role}</div>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
