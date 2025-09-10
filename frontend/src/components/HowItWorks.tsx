import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, ListChecks } from 'lucide-react';
import Lottie from 'lottie-react';

const HowItWorks = () => {
  const [animationData, setAnimationData] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Lazy load the Lottie animation
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/animations/match-flow.json');
        if (response.ok) {
          const data = await response.json();
          setAnimationData(data);
        }
      } catch (error) {
        console.log('Animation file not found, using fallback');
      }
    };

    loadAnimation();
  }, []);

  const steps = [
    {
      icon: Upload,
      title: "Upload résumés",
      description: "Upload candidate résumés or use our sample data to get started instantly.",
      color: "text-emerald-600"
    },
    {
      icon: FileText,
      title: "Paste job description",
      description: "Copy and paste your job description to define the role requirements.",
      color: "text-blue-600"
    },
    {
      icon: ListChecks,
      title: "Get ranked shortlist",
      description: "Receive a ranked shortlist with pros/cons and evidence for each match.",
      color: "text-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Soft dividers */}
      <div className="border-t border-gray-200 my-12"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            How MatchAGig Works
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            From JD to ranked shortlist—with clear reasons behind every match.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Animation placeholder */}
          <motion.div 
            className="md:col-span-1 flex items-center justify-center mb-8 md:mb-0"
            variants={itemVariants}
          >
            <div className="w-32 h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-24 h-24"
                  aria-label="Animated flow from JD to ranked shortlist"
                />
              ) : (
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                  className="flex space-x-1"
                >
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full" style={{ animationDelay: '0.4s' }}></div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Steps */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className={`p-3 rounded-lg bg-gray-50 ${step.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <a 
            href="#demo" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Watch 30-second demo
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Soft divider */}
      <div className="border-t border-gray-200 my-12"></div>
    </section>
  );
};

export default HowItWorks;
