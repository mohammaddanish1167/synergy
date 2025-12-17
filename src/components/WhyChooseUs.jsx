import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe, Users, Target, Briefcase, Award, Clock, Zap, Rocket, TrendingUp, Star, Shield, CheckCircle, Trophy, BookOpen } from 'lucide-react';

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Internationally accredited programs recognized by employers worldwide"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Experts",
      description: "Learn from professionals with real-world industry experience"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Advancement",
      description: "Direct pathways to high-growth careers and leadership positions"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world case studies"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-gray-800 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-300">Trusted by Professionals Worldwide</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              QualifyLearn
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Premier education partner for professionals seeking career advancement and global recognition
          </motion.p>
        </motion.div>

        {/* Ratings Section - Clean and Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Rating */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center group"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900/30 to-blue-700/30 flex items-center justify-center border border-blue-800/30 group-hover:border-blue-700/50 transition-colors">
                  <div className="text-3xl font-bold text-white">4.7</div>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Google Rating</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold text-white mb-2">1,100+ reviews</div>
              <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                See all our reviews
              </div>
            </motion.div>

            {/* TrustPilot Rating */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center group"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-900/30 to-emerald-700/30 flex items-center justify-center border border-emerald-800/30 group-hover:border-emerald-700/50 transition-colors">
                  <div className="text-3xl font-bold text-white">4.8</div>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Trustpilot</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold text-white mb-2">91+ reviews</div>
              <a 
                href="https://www.trustpilot.com/review/qualifylearn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
              >
                See all our reviews <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Excellent Rating */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center group"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-900/30 to-purple-700/30 flex items-center justify-center border border-purple-800/30 group-hover:border-purple-700/50 transition-colors">
                  <div className="text-3xl font-bold text-white">4.9</div>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Student Rating</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-purple-400 fill-purple-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold text-white mb-2">Excellent</div>
              <div className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                See all our reviews
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Rotating Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative h-[340px]"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10 shadow-2xl ${
                  activeIndex === index ? 'z-10' : 'z-0'
                }`}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-900 to-blue-700' :
                    index === 1 ? 'bg-gradient-to-r from-emerald-900 to-emerald-700' :
                    index === 2 ? 'bg-gradient-to-r from-purple-900 to-purple-700' :
                    'bg-gradient-to-r from-amber-900 to-amber-700'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {[
              { icon: <Zap className="w-6 h-6" />, text: "Cutting-edge curriculum aligned with industry trends" },
              { icon: <Rocket className="w-6 h-6" />, text: "Accelerated learning paths for career progression" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Proven track record with 95% career advancement rate" },
              { icon: <Star className="w-6 h-6" />, text: "Personalized mentorship from industry veterans" },
              { icon: <Award className="w-6 h-6" />, text: "Globally recognized certifications and credentials" },
              { icon: <BookOpen className="w-6 h-6" />, text: "Flexible schedules for working professionals" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-blue-800/50 hover:shadow-2xl transition-all group"
              >
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-700/30 group-hover:from-blue-800/40 group-hover:to-blue-600/40 transition-colors"
                  whileHover={{ rotate: 15 }}
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {item.icon}
                  </div>
                </motion.div>
                <p className="text-gray-300 group-hover:text-white transition-colors text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "98%", label: "Program Success Rate", icon: <Trophy className="w-5 h-5" />, color: "from-emerald-700 to-emerald-600" },
            { value: "15K+", label: "Active Professionals", icon: <Users className="w-5 h-5" />, color: "from-blue-700 to-blue-600" },
            { value: "5K+", label: "Career Advancements", icon: <TrendingUp className="w-5 h-5" />, color: "from-purple-700 to-purple-600" },
            { value: "50+", label: "Countries Reached", icon: <Globe className="w-5 h-5" />, color: "from-amber-700 to-amber-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-black rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {stat.icon}
                  <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.2)",
                "0 0 40px rgba(59,130,246,0.4)",
                "0 0 20px rgba(59,130,246,0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative px-10 py-5 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold rounded-xl text-lg overflow-hidden group"
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <span className="relative z-10">Start Your Journey Today</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;