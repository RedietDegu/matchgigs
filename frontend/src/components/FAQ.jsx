import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Is my data secure?",
    answer: "Yes — GDPR compliant, encryption at rest and in transit."
  },
  {
    id: 2,
    question: "Do I need to install anything?",
    answer: "No — runs fully in your browser."
  },
  {
    id: 3,
    question: "Is there a free trial?",
    answer: "Yes — 14 days free, no credit card required."
  },
  {
    id: 4,
    question: "How many résumés can I upload?",
    answer: "Starter includes up to 100; Pro is unlimited."
  },
  {
    id: 5,
    question: "Can I export shortlists?",
    answer: "Yes — CSV export and ATS integrations are available."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="py-16 bg-slate-900/20">
      <div className="mx-auto w-[92%] max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-200 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
