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
  UserCheck
} from 'lucide-react';

function ApplicationProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      icon: FileText,
      title: 'Online Application',
      subtitle: 'Apply by filling a simple online application form',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-cyan-400',
      details: [
        'Simple form with basic information',
        'Upload required documents',
        'Select preferred program',
        'Review and submit online'
      ],
      duration: '10-15 minutes',
      iconBg: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Review & Shortlisting',
      subtitle: 'Admissions committee will review and shortlist',
      color: '#8B5CF6',
      gradient: 'from-purple-500 to-pink-400',
      details: [
        'Academic background evaluation',
        'Professional experience assessment',
        'Achievements review',
        'Shortlisting notification via email'
      ],
      duration: '3-5 business days',
      iconBg: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Aptitude Test',
      subtitle: 'Shortlisted candidates need to appear for an online aptitude test',
      color: '#10B981',
      gradient: 'from-emerald-500 to-teal-400',
      details: [
        'Logical reasoning assessment',
        'Problem-solving skills evaluation',
        'Critical thinking analysis',
        'Online proctored test environment'
      ],
      duration: '60 minutes',
      iconBg: 'bg-emerald-50'
    },
    {
      icon: PhoneCall,
      title: 'Final Screening',
      subtitle: 'Screening call with Alumni/Faculty',
      color: '#F59E0B',
      gradient: 'from-amber-500 to-orange-400',
      details: [
        'Interactive discussion session',
        'Career aspirations assessment',
        'Program fit evaluation',
        'Final decision notification'
      ],
      duration: '30-45 minutes',
      iconBg: 'bg-amber-50'
    }
  ];

  // Auto-cycle through steps for visual interest
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Application Journey
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="block">Simple & Transparent</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Application Process
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Four straightforward steps to join our prestigious academic community
          </motion.p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 transform -translate-y-1/2">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
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
                  className="relative"
                >
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg"
                    animate={{
                      scale: activeIndex === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Step Card */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mt-8">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.subtitle}</p>
                        
                        {/* Duration Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details - Always Visible */}
                    <div className="p-6">
                      <div className="space-y-4">
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-6 h-6 rounded-lg ${step.iconBg} flex items-center justify-center flex-shrink-0`}>
                              <CheckCircle className="w-3 h-3" style={{ color: step.color }} />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicator */}
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Step {index + 1} of {steps.length}</span>
                        <motion.div
                          className="flex items-center gap-1"
                          animate={{
                            opacity: activeIndex === index ? [0.5, 1, 0.5] : 0.5,
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        </motion.div>
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
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Step Header */}
                <div className={`p-6 ${step.iconBg} border-b border-gray-100`}>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm font-semibold text-gray-500">Step {index + 1}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{step.subtitle}</p>
                      
                      {/* Duration */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-sm">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Details - Always Visible */}
                <div className="p-6">
                  <div className="space-y-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3" style={{ color: step.color }} />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Indicator */}
                {activeIndex === index && (
                  <motion.div
                    className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
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
          className="relative h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 rounded-full max-w-md mx-auto mt-16"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
            {[
              { value: '92%', label: 'Application Success Rate', icon: UserCheck },
              { value: '7 Days', label: 'Average Processing Time', icon: Clock },
              { value: '4.9/5.0', label: 'Student Satisfaction', icon: Sparkles }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <stat.icon className="w-5 h-5 text-blue-500" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ApplicationProcess;