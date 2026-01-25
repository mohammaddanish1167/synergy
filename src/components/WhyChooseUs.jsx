import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Globe,
  Users,
  Target,
  Briefcase,
  Shield,
  Star,
  Check,
  ChevronRight,
  Trophy,
  Award,
  TrendingUp,
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
    <section className="relative py-24 bg-gradient-to-b from-white via-indigo-50/10 to-purple-50/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-100/80 backdrop-blur-sm border border-indigo-200/50 rounded-full mb-8 shadow-luxury">
            <Shield className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-indigo-700 font-medium">
              Trusted by Elite Professionals Worldwide
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Synergy Scholars Academia
            </span>
          </h2>

          <p className="text-slate-700 text-xl max-w-3xl mx-auto">
            Join an elite community of accomplished professionals who transformed their careers through our world-class programs and exceptional mentorship.
          </p>
        </motion.div>

        {/* ================= TRUSTPILOT PROMINENT SECTION ================= */}
        
        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Rotating Feature Card */}
          <div className="relative h-[320px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-10 shadow-luxury-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mb-8 text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-700 text-lg">{feature.description}</p>
                
                {/* Indicator Dots */}
                <div className="absolute bottom-8 left-10 flex gap-2">
                  {features.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === dotIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>What You'll Get</h3>
            {[
              "Industry-leading curriculum aligned with cutting-edge trends",
              "Elite 1:1 Mentorship from distinguished industry leaders",
              "Flexible learning schedule designed for ambitious professionals",
              "Career-accelerating programs with executive placement support",
              "Globally recognized credentials from prestigious institutions",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 bg-white/80 border border-gray-200/50 rounded-xl p-6 hover:bg-white hover:shadow-luxury transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-indigo-600" />
                </div>
                <p className="text-slate-700 text-lg">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "98%", label: "Success Rate", icon: <Trophy className="w-6 h-6" /> },
            { value: "15K+", label: "Global Learners", icon: <Globe className="w-6 h-6" /> },
            { value: "5K+", label: "Career Advancements", icon: <TrendingUp className="w-6 h-6" /> },
            { value: "150+", label: "Countries", icon: <Award className="w-6 h-6" /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center hover:border-indigo-300/50 hover:shadow-luxury transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ================= FINAL CTA ================= */}
        
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .bg-grid {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}