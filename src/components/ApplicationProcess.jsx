import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  BarChart3, 
  PhoneCall,
  Sparkles,
  CheckCircle,
  Clock,
  UserCheck,
  ChevronRight
} from 'lucide-react';

function ApplicationProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: FileText,
      title: 'Submit Your Credentials',
      subtitle: 'Share your professional profile and academic achievements for comprehensive evaluation',
      color: '#6366f1',
      gradient: 'from-blue-500 to-cyan-500',
      accentGradient: 'from-blue-600/20 to-cyan-600/20',
      details: [
        'Upload comprehensive CV/Resume',
        'Provide LinkedIn professional profile',
        'Submit academic transcripts and certifications',
        'Share notable professional accomplishments'
      ],
      duration: '5 minutes',
      iconBg: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Users,
      title: 'Expert Committee Review',
      subtitle: 'Our distinguished academic panel conducts thorough profile assessment',
      color: '#8b5cf6',
      gradient: 'from-violet-500 to-fuchsia-500',
      accentGradient: 'from-violet-600/20 to-fuchsia-600/20',
      details: [
        'Comprehensive academic credentials analysis',
        'Research excellence and potential evaluation',
        'Professional trajectory and impact assessment',
        'Holistic profile strength determination'
      ],
      duration: '2-4 business days',
      iconBg: 'bg-gradient-to-br from-violet-50 to-fuchsia-50'
    },
    {
      icon: BarChart3,
      title: 'Personalized Program Matching',
      subtitle: 'Receive tailored recommendations aligned with your career objectives',
      color: '#ec4899',
      gradient: 'from-rose-500 to-pink-500',
      accentGradient: 'from-rose-600/20 to-pink-600/20',
      details: [
        'Optimal program pathway identification',
        'Prestigious university partnership options',
        'Scholarship and funding opportunity analysis',
        'Customized academic roadmap development'
      ],
      duration: 'Detailed assessment',
      iconBg: 'bg-gradient-to-br from-rose-50 to-pink-50'
    },
    {
      icon: PhoneCall,
      title: 'Comprehensive Application Support',
      subtitle: 'Receive end-to-end guidance throughout your application journey',
      color: '#6366f1',
      gradient: 'from-indigo-500 to-purple-500',
      accentGradient: 'from-indigo-600/20 to-purple-600/20',
      details: [
        'Complete application process navigation',
        'Essential documentation preparation',
        'Strategic timeline and deadline management',
        'Continuous mentorship and support'
      ],
      duration: 'Dedicated assistance',
      iconBg: 'bg-gradient-to-br from-indigo-50 to-purple-50'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.01] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl mb-10 shadow-2xl shadow-violet-500/5 hover:shadow-violet-500/10 transition-all duration-300"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-violet-600" />
              <div className="absolute inset-0 w-5 h-5 text-violet-600/40 animate-ping" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">
              ELITE APPLICATION PATHWAY
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gray-900">Simplified</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Admission Excellence
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              A refined four-step pathway designed to streamline your journey toward academic distinction with dedicated expert guidance
            </motion.p>
          </motion.div>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Animated Connecting Line */}
            <div className="absolute left-16 right-16 top-1/2 h-0.5 bg-gradient-to-r from-blue-200/50 via-violet-200/50 to-fuchsia-200/50 transform -translate-y-1/2 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative"
                >
                  {/* Step Number & Icon */}
                  <motion.div
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2"
                    animate={{
                      scale: activeIndex === index ? [1, 1.15, 1] : hoveredStep === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl shadow-current/30`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center"
                        animate={{ scale: activeIndex === index ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xs font-bold text-gray-900">{index + 1}</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Step Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                      {/* Header */}
                      <div className="p-8 border-b border-gray-200/30">
                        <div className="text-center space-y-4">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{step.subtitle}</p>
                          
                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50/80 rounded-xl border border-gray-200/50">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-semibold text-gray-700">{step.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-8">
                        <div className="space-y-5">
                          {step.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-4 group/item"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-7 h-7 rounded-lg ${step.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
                              >
                                <CheckCircle className="w-4 h-4" style={{ color: step.color }} />
                              </motion.div>
                              <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Step Indicator */}
                      <div className="px-8 py-6 border-t border-gray-200/30 bg-gradient-to-r from-gray-50/50 to-white/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">STEP {index + 1} OF {steps.length}</span>
                          <motion.div
                            className="flex items-center gap-1"
                            animate={{
                              opacity: activeIndex === index ? [0.5, 1, 0.5] : hoveredStep === index ? 1 : 0.5,
                            }}
                            transition={{ duration: 1.5, repeat: activeIndex === index ? Infinity : 0 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                  {/* Step Header */}
                  <div className={`p-8 ${step.iconBg} border-b border-gray-200/30`}>
                    <div className="flex items-start gap-6">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.subtitle}</p>
                        
                        {/* Duration */}
                        <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 rounded-xl border border-gray-200/50 shadow-sm">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-semibold text-gray-700">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="p-8">
                    <div className="space-y-5">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`w-7 h-7 rounded-lg ${step.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <CheckCircle className="w-4 h-4" style={{ color: step.color }} />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeIndex === index && (
                    <motion.div
                      className="h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative h-2 bg-gradient-to-r from-blue-200/30 via-violet-200/30 to-fuchsia-200/30 rounded-full max-w-md mx-auto mt-20"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full"
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-xl">
            <UserCheck className="w-6 h-6 text-violet-600" />
            <span className="text-lg font-semibold text-gray-900">Ready to begin your application?</span>
            <button className="group flex items-center gap-2 ml-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all duration-300">
              Start Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ApplicationProcess;