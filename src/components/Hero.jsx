/**
 * Hero Component - Completely Redesigned
 * Premium split layout with bold aspirational messaging
 * Modern glassmorphism and gradient highlights
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, TrendingUp, Globe, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bgVideo from "../assets/video.mp4";

export default function Hero() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const videoRef = useRef(null);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Bold Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-indigo-200/50 shadow-luxury-lg"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
              <span className="text-sm font-bold text-indigo-700 tracking-wider uppercase">
                Premier Academic Excellence Platform
              </span>
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl"
            >
              Join an exclusive community of accomplished leaders who elevated their careers through 
              <span className="font-semibold text-indigo-700"> world-class academic credentials</span> and 
              <span className="font-semibold text-purple-700"> personalized executive mentorship</span>.
            </motion.p>

            {/* Rotating Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-luxury">
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
                    <span className="text-base font-semibold text-slate-900">
                      {highlights[currentHighlight].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-lg shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <span className="relative z-10">Begin Your Journey</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-guidance-modal'))}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/90 backdrop-blur-xl border-2 border-indigo-200 text-indigo-700 font-bold text-lg shadow-luxury hover:shadow-luxury-lg hover:border-indigo-300 transition-all duration-300"
              >
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Schedule Consultation</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-8 pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">15,000+ Elite Graduates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">200+ Global Partners</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Panel - Premium Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-10 shadow-luxury-xl border border-gray-200/50">
              {/* Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Distinguished Excellence
                    </h3>
                    <p className="text-sm text-slate-600">Proven Track Record</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Users, value: "15,000+", label: "Elite Professionals", sublabel: "Global Network", gradient: "from-indigo-500 to-purple-600" },
                  { icon: Award, value: "200+", label: "Prestigious Partners", sublabel: "Institutions", gradient: "from-purple-500 to-pink-600" },
                  { icon: Globe, value: "75+", label: "Countries Served", sublabel: "Worldwide Reach", gradient: "from-pink-500 to-rose-600" },
                  { icon: TrendingUp, value: "94%", label: "Career Advancement", sublabel: "Success Rate", gradient: "from-emerald-500 to-teal-600" },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="bg-gradient-to-br from-white to-indigo-50/50 rounded-2xl p-6 border border-indigo-100/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</div>
                      <div className="text-xs text-slate-600">{stat.sublabel}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-slate-600 text-center mb-4">
                  Trusted by executives, entrepreneurs, and leaders worldwide
                </p>
                <div className="flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">4.8/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
