/**
 * Hero Component - Render Safe Version (No Local Video)
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
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20">
      
      {/* Gradient Background Instead of Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-indigo-200/50 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
              <span className="text-sm font-bold text-indigo-700 tracking-wider uppercase">
                Premier Academic Excellence Platform
              </span>
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1]"
            >
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Professional Legacy
              </span>
              <br />
              <span className="text-slate-900">Through Elite Education</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-700 max-w-2xl"
            >
              Join an exclusive community of accomplished leaders who elevated their careers through
              <span className="font-semibold text-indigo-700"> world-class academic credentials</span> and
              <span className="font-semibold text-purple-700"> personalized executive mentorship</span>.
            </motion.p>

            {/* Rotating Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-indigo-100 shadow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHighlight}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${highlights[currentHighlight].color}`}>
                      {(() => {
                        const Icon = highlights[currentHighlight].icon;
                        return <Icon className="w-5 h-5 text-white" />;
                      })()}
                    </div>
                    <span className="font-semibold text-slate-900">
                      {highlights[currentHighlight].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-indigo-200 text-indigo-700 font-bold text-lg shadow hover:border-indigo-300 transition"
              >
                <Zap className="w-5 h-5" />
                Schedule Consultation
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">15,000+ Elite Graduates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">200+ Global Partners</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
