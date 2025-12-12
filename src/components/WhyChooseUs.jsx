import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe, Users, Target, Briefcase, Award, Clock, Zap, Rocket, TrendingUp, Star } from 'lucide-react';

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Accredited programs recognized worldwide"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Faculty",
      description: "Learn from industry-leading professionals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Focused",
      description: "Direct pathways to high-growth careers"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Practical Learning",
      description: "Real-world projects and hands-on experience"
    }
  ];

  // Auto rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full border border-gray-800 mb-4"
            animate={{
              boxShadow: ["0 0 10px rgba(59,130,246,0.3)", "0 0 20px rgba(59,130,246,0.5)", "0 0 10px rgba(59,130,246,0.3)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-300">PREMIER EDTECH</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Qualify Learn</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Transforming careers through innovative learning and industry partnerships
          </motion.p>
        </motion.div>

        {/* Main Features with Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Rotating Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px]"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.8,
                  rotateY: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl ${
                  activeIndex === index ? 'z-10' : 'z-0'
                }`}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                    index === 1 ? 'bg-gradient-to-r from-emerald-600 to-emerald-700' :
                    index === 2 ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                    'bg-gradient-to-r from-orange-600 to-orange-700'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: <Zap className="w-5 h-5" />, text: "Cutting-edge curriculum aligned with industry trends" },
              { icon: <Rocket className="w-5 h-5" />, text: "Accelerated learning paths for faster career growth" },
              { icon: <TrendingUp className="w-5 h-5" />, text: "Proven track record of student success and placements" },
              { icon: <Star className="w-5 h-5" />, text: "Personalized mentorship and career guidance" },
              { icon: <Award className="w-5 h-5" />, text: "Industry-recognized certifications and credentials" },
              { icon: <Clock className="w-5 h-5" />, text: "Flexible learning schedules for working professionals" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <motion.div
                  className="mt-1 text-blue-400 group-hover:text-blue-300 transition-colors"
                  whileHover={{ rotate: 15 }}
                >
                  {item.icon}
                </motion.div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: "98%", label: "Success Rate", color: "from-green-600 to-emerald-500" },
            { value: "15K+", label: "Active Learners", color: "from-blue-600 to-blue-500" },
            { value: "5000+", label: "Placements", color: "from-purple-600 to-purple-500" },
            { value: "50+", label: "Countries", color: "from-orange-600 to-orange-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className={`inline-block p-1 rounded-lg bg-gradient-to-r ${stat.color} mb-3`}
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.3)",
                "0 0 40px rgba(59,130,246,0.5)",
                "0 0 20px rgba(59,130,246,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-lg overflow-hidden group"
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <span className="relative z-10">Start Your Transformation Journey</span>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mt-4 text-sm"
          >
            Join thousands who have transformed their careers
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;