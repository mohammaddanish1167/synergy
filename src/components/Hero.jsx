import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, BookOpen } from "lucide-react";
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
          className="w-full h-full object-cover blur-sm scale-105"
        />

        {/* overlays */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/25 border border-white/40 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm tracking-wide font-medium">
              Globally Trusted Academic Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl"
          >
            Elevating Education
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200 bg-clip-text text-transparent">
              Beyond Boundaries
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-100 max-w-xl">
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
                className="text-xl font-semibold text-blue-100"
              >
                {programs[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold shadow-2xl hover:shadow-blue-500/30 transition"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white/25 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">
              Why Learners Choose Us
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "5K+", label: "Global Learners" },
                { icon: Award, value: "100+", label: "Accreditations" },
                { icon: BookOpen, value: "10+", label: "Programs" },
                { icon: Sparkles, value: "98%", label: "Satisfaction" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/25 backdrop-blur-md rounded-2xl p-4 border border-white/30"
                  >
                    <Icon className="w-6 h-6 text-blue-200 mb-2" />
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm text-gray-100">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
