import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Globe,
  Users,
  Target,
  Briefcase,
  Shield,
  Zap,
  Rocket,
  TrendingUp,
  Award,
  BookOpen,
  Star,
  Trophy,
} from "lucide-react";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description:
        "Programs aligned with international standards and valued by employers worldwide.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Experts",
      description:
        "Learn directly from professionals with real-world industry experience.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Advancement",
      description:
        "Focused learning paths designed for faster career growth.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Practical Learning",
      description:
        "Hands-on projects, case studies, and job-ready skills.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-gray-800 rounded-full mb-6">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-300">
              Trusted by Professionals Worldwide
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              QualifyLearn
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A modern learning platform built for real career outcomes.
          </p>
        </motion.div>

        {/* ================= RATINGS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {/* Google */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-8 mx-auto mb-4"
            />
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-3xl font-bold text-white">4.7</div>
            <p className="text-sm text-gray-400">1,100+ Google reviews</p>
          </div>

          {/* Trustpilot */}
          <div className="relative bg-emerald-900/20 border-2 border-emerald-600/50 rounded-2xl p-6 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full">
              MOST TRUSTED
            </div>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Trustpilot_logo.svg"
              alt="Trustpilot"
              className="h-6 mx-auto mb-4"
            />

            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-emerald-400 fill-emerald-400"
                />
              ))}
            </div>

            <div className="text-4xl font-bold text-white">4.8</div>
            <p className="text-emerald-300 font-semibold">Excellent</p>
            <p className="text-sm text-gray-400 mb-4">91+ verified reviews</p>

            <a
              href="https://www.trustpilot.com/review/qualifylearn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 hover:text-white rounded-lg transition border border-emerald-500/40"
            >
              View on Trustpilot →
            </a>
          </div>

          {/* Students */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 mx-auto text-purple-400 mb-4" />
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-purple-400 fill-purple-400" />
              ))}
            </div>
            <div className="text-3xl font-bold text-white">4.9</div>
            <p className="text-sm text-gray-400">Student satisfaction</p>
          </div>
        </motion.div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Rotating Card */}
          <div className="relative h-[280px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gray-900 border border-gray-800 rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-5">
            {[
              "Industry-aligned curriculum",
              "Mentorship from professionals",
              "Flexible learning schedule",
              "Career-focused programs",
              "Globally valued certificates",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-xl p-5"
              >
                <CheckIcon />
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "98%", label: "Success Rate" },
            { value: "15K+", label: "Learners" },
            { value: "5K+", label: "Career Growths" },
            { value: "50+", label: "Countries" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl"
          >
            Start Your Journey Today
          </motion.button>
        </div>
      </div>
    </section>
  );
}

/* Small helper icon */
function CheckIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
      ✓
    </div>
  );
}
