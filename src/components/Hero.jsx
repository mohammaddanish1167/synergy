/**
 * Hero Component - Redesigned with Clean SaaS Aesthetic
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Globe,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const highlights = [
    { icon: Award, text: "Elite Academic Credentials", color: "from-purple-500 to-indigo-600" },
    { icon: TrendingUp, text: "Career Acceleration Programs", color: "from-indigo-500 to-blue-600" },
    { icon: Users, text: "Executive Mentorship Network", color: "from-pink-500 to-rose-600" },
    { icon: Globe, text: "Global Recognition & Impact", color: "from-emerald-500 to-teal-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden">
      
      {/* Clean minimal background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Premier Academic Excellence Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6"
          >
            Transform Your
            <span className="block font-medium mt-2 text-slate-700">
              Professional Legacy
            </span>
            <span className="block text-slate-900 font-light mt-2">
              Through Elite Education
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join an exclusive community of accomplished leaders who elevated their careers through
            world-class academic credentials and personalized executive mentorship.
          </motion.p>

          {/* Rotating Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHighlight}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${highlights[currentHighlight].color} flex items-center justify-center`}>
                    {(() => {
                      const Icon = highlights[currentHighlight].icon;
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {highlights[currentHighlight].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors duration-200 shadow-sm"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors duration-200"
            >
              <Zap className="w-4 h-4" />
              Schedule Consultation
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-500">15,000+ Elite Graduates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-sm text-slate-500">200+ Global Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-sm text-slate-500">98% Success Rate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}