import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, BookOpen, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ IMPORT VIDEO PROPERLY
import bgVideo from "../assets/video.mp4";

export default function Hero() {
  const programs = [
    "Artificial Intelligence & Data Science",
    "MBA & Executive Leadership",
    "Engineering & Technology",
    "Medical & Healthcare Programs",
    "Law, Research & Doctorates",
    "Global Certification Pathways",
  ];

  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % programs.length);
    }, 2800);
    return () => clearInterval(i);
  }, []);

  // ✅ Force autoplay safely
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050A18] text-white">

      {/* ===================== VIDEO BACKGROUND ===================== */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={bgVideo}              // ✅ USING IMPORTED VIDEO
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Enhanced overlays for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18]/90 via-[#050A18]/40 to-transparent" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/20 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium tracking-wide text-blue-100">
              Globally Recognized Academic Excellence
            </span>
            <Globe className="w-4 h-4 text-blue-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
          >
            Redefining
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-xl leading-relaxed"
          >
            Internationally accredited programs, expert-led mentorship, and 
            transformative learning pathways for visionary professionals.
          </motion.p>

          {/* Rotating programs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <div className="text-sm font-medium text-blue-100 tracking-wide">
                Featured Program
              </div>
            </div>
            <div className="h-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-2xl font-semibold text-white"
                >
                  {programs[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 font-semibold text-lg shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Schedule Academic Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Connect with our academic advisors for personalized guidance
            </p>
          </motion.div>
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-blue-900/20">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Institutional Excellence
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Users, value: "5,000+", label: "Global Learners", suffix: "Active" },
                { icon: Award, value: "150+", label: "Accreditations", suffix: "International" },
                { icon: BookOpen, value: "25+", label: "Programs", suffix: "Specialized" },
                { icon: Sparkles, value: "98.2%", label: "Satisfaction", suffix: "Rate" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
                        <Icon className="w-5 h-5 text-blue-300" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                    <div className="text-base font-semibold text-gray-100">{item.label}</div>
                    <div className="text-xs text-gray-300 mt-1">{item.suffix}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-300 text-center">
                Partnered with 50+ global universities & accreditation bodies
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}