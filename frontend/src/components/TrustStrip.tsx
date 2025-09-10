import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ThumbsUp, ShieldCheck } from 'lucide-react';

const TrustStrip = () => {
  const trustItems = [
    {
      icon: Timer,
      title: "8× faster screening",
      subtitle: "avg from weeks → minutes",
      color: "text-emerald-600"
    },
    {
      icon: ThumbsUp,
      title: "95% recruiter satisfaction",
      subtitle: "from pilot feedback",
      color: "text-emerald-600"
    },
    {
      icon: ShieldCheck,
      title: "GDPR + ISO ready",
      subtitle: "private by default",
      color: "text-emerald-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <section className="border-t border-b border-gray-200 bg-white my-12 md:my-16 min-h-[260px] md:min-h-[320px]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="sr-only">Trusted results</h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center"
        >
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center space-y-3"
              >
                <div className="mb-5 rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
