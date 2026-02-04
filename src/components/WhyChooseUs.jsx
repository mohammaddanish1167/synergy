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
  const [hoveredStat, setHoveredStat] = useState(null);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Programs aligned with international standards and valued by employers worldwide.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Experts",
      description: "Learn directly from professionals with real-world industry experience.",
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Advancement",
      description: "Focused learning paths designed for faster career growth.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Practical Learning",
      description: "Hands-on projects, case studies, and job-ready skills.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/20 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.01] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl mb-10 shadow-2xl shadow-violet-500/5 hover:shadow-violet-500/10 transition-all duration-300"
          >
            <div className="relative">
              <Shield className="w-5 h-5 text-violet-600" />
              <div className="absolute inset-0 w-5 h-5 text-violet-600/40 animate-ping" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">
              TRUSTED BY ELITE PROFESSIONALS WORLDWIDE
            </span>
            <Star className="w-4 h-4 text-amber-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Why Choose{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Synergy Scholars
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join an elite community of accomplished professionals who transformed their careers through our world-class programs and exceptional mentorship.
          </motion.p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-24">
          {/* Rotating Feature Card */}
          <div className="relative h-[380px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.92,
                  y: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full rounded-3xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl" />
                  <div className="absolute inset-0.5 bg-gradient-to-br from-white/50 to-transparent rounded-3xl" />
                  
                  <div className="relative p-10 h-full flex flex-col">
                    <motion.div
                      animate={{ rotate: activeIndex === index ? [0, 5, 0] : 0 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 shadow-lg`}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </motion.div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="absolute bottom-8 left-10 flex gap-2">
                      {features.map((_, dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          animate={{
                            width: activeIndex === dotIndex ? 32 : 8,
                            backgroundColor: activeIndex === dotIndex ? "rgb(139, 92, 246)" : "rgb(229, 231, 235)",
                          }}
                          transition={{ duration: 0.3 }}
                          className="h-2 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">
              Exclusive Benefits
            </h3>
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
                whileHover={{ x: 5 }}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-5 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 hover:border-gray-300/50 hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    animate={{ scale: hoveredStat === i ? 1.1 : 1 }}
                    className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Check className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  </motion.div>
                  <p className="text-gray-700 text-lg font-medium">{text}</p>
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { value: "98%", label: "Success Rate", icon: <Trophy className="w-6 h-6" />, color: "from-amber-500 to-orange-500" },
            { value: "15K+", label: "Global Learners", icon: <Globe className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "5K+", label: "Career Advancements", icon: <TrendingUp className="w-6 h-6" />, color: "from-emerald-500 to-teal-500" },
            { value: "150+", label: "Countries", icon: <Award className="w-6 h-6" />, color: "from-violet-500 to-fuchsia-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={() => setHoveredStat(i + 10)}
              onMouseLeave={() => setHoveredStat(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                <motion.div
                  animate={{ rotate: hoveredStat === i + 10 ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <div className="text-white">{stat.icon}</div>
                </motion.div>
                <motion.div
                  key={stat.value}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who accelerated their careers with our premium programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-fuchsia-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-white font-bold text-lg tracking-wide">
                Start Your Journey Today
              </span>
              <ChevronRight className="relative w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}