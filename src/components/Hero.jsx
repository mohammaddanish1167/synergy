import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % programs.length);
    }, 2800);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050A18] text-white">
      {/* ===================== BACKGROUND ===================== */}

      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-blue-600/30 blur-[140px]"
          animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-48 w-[800px] h-[800px] rounded-full bg-indigo-500/30 blur-[160px]"
          animate={{ x: [0, -120, 0], y: [0, -100, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-300px] left-1/4 w-[900px] h-[900px] rounded-full bg-emerald-500/20 blur-[180px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="70" height="70" patternUnits="userSpaceOnUse">
              <path d="M 70 0 L 0 0 0 70" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ===================== CONTENT ===================== */}

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/10 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm tracking-wide">
              Globally Trusted Academic Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight"
          >
            Elevating Education
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Beyond Boundaries
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Experience globally recognized programs, expert mentorship, and
            future-ready learning pathways designed for ambitious professionals.
          </p>

          {/* Rotating programs */}
          <div className="mt-8 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                className="text-xl font-semibold text-blue-300"
              >
                {programs[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </Link>

            <Link
              to="/programs"
              className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition font-semibold"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        {/* RIGHT GLASS PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">
              Why Learners Choose Us
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "50K+", label: "Global Learners" },
                { icon: Award, value: "100+", label: "Accreditations" },
                { icon: BookOpen, value: "700+", label: "Programs" },
                { icon: Sparkles, value: "98%", label: "Satisfaction" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 rounded-2xl p-4 border border-white/10"
                  >
                    <Icon className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
