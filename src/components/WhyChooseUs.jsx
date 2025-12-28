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
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-full mb-8">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-300 font-medium">
              Trusted by Professionals Worldwide
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              QualifyLearn
            </span>
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers with our globally recognized programs.
          </p>
        </motion.div>

        {/* ================= TRUSTPILOT PROMINENT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-600/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Trustpilot Logo & Rating - Left Side */}
              <div className="text-center lg:text-left lg:w-1/2">
                <div className="mb-8">
                  {/* Trustpilot Logo */}
                  <div className="w-full max-w-sm mx-auto lg:mx-0 mb-8">
                    <div className="text-white text-3xl font-bold">
                      {/* Trustpilot Logo SVG */}
                      <svg 
                        width="300" 
                        height="60" 
                        viewBox="0 0 300 60"
                        className="mx-auto lg:mx-0"
                      >
                        <defs>
                          <linearGradient id="trustpilotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00b67a" />
                            <stop offset="100%" stopColor="#5cb85c" />
                          </linearGradient>
                        </defs>
                        <text 
                          x="150" 
                          y="40" 
                          textAnchor="middle" 
                          fill="url(#trustpilotGradient)" 
                          fontFamily="Arial, sans-serif" 
                          fontSize="42" 
                          fontWeight="bold"
                        >
                          Trustpilot
                        </text>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Rating Display */}
                  <div className="flex flex-col items-center lg:items-start gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-10 h-10 text-emerald-400 fill-emerald-400"
                          />
                        ))}
                      </div>
                      <div className="text-left">
                        <div className="text-6xl font-bold text-white">4.7</div>
                        <div className="text-emerald-300 font-semibold text-xl">Excellent</div>
                      </div>
                    </div>

                    <a
                      href="https://www.trustpilot.com/review/qualifylearn.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-600/30"
                    >
                      <span className="text-lg">View Our Trustpilot</span>
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google & Student Ratings - Right Side */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  
                  {/* Google Reviews */}
                  <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
                    <div className="flex flex-col items-center">
                      {/* Google Logo */}
                      <div className="w-40 h-12 mb-6">
                        <svg 
                          width="160" 
                          height="48" 
                          viewBox="0 0 160 48"
                          className="mx-auto"
                        >
                          <text 
                            x="80" 
                            y="32" 
                            textAnchor="middle" 
                            fill="white" 
                            fontFamily="Arial, sans-serif" 
                            fontSize="32" 
                            fontWeight="bold"
                            className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
                          >
                            Google
                          </text>
                        </svg>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <div className="text-left">
                          <div className="text-3xl font-bold text-white">4.7</div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">Professional Reviews</p>
                    </div>
                  </div>

                  {/* Student Satisfaction */}
                  <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
                    <div className="flex flex-col items-center">
                      {/* Student Icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-purple-400" />
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-purple-400 fill-purple-400" />
                          ))}
                        </div>
                        <div className="text-left">
                          <div className="text-3xl font-bold text-white">4.7</div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">Student Satisfaction</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
                className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-10 shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-8 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
                
                {/* Indicator Dots */}
                <div className="absolute bottom-8 left-10 flex gap-2">
                  {features.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === dotIndex ? 'bg-blue-500 w-8' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">What You'll Get</h3>
            {[
              "Industry-aligned curriculum with latest trends",
              "1:1 Mentorship from industry professionals",
              "Flexible learning schedule (learn at your pace)",
              "Career-focused programs with job placement support",
              "Globally recognized certificates and accreditation",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-gray-300 text-lg">{text}</p>
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
              className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center mx-auto mb-4 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ================= FINAL CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-800 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of successful professionals who achieved their dreams with QualifyLearn
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl text-lg shadow-2xl shadow-blue-600/30"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
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