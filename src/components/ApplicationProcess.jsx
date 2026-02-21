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
    <section className="relative py-24 lg:py-32 bg-slate-50">
      {/* Clean, minimal background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-emerald-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-indigo-50/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal section header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Application Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6"
          >
            Your journey to
            <span className="block font-medium mt-2 text-emerald-600">academic excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            A refined four-step pathway designed to streamline your journey toward academic distinction with dedicated expert guidance
          </motion.p>
        </div>

        {/* Desktop Layout - Vertical Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-indigo-200 to-emerald-200" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="relative group">
                        {/* Card */}
                        <div className={`bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${hoveredStep === index ? 'scale-[1.02] border-emerald-200' : ''}`}>
                          {/* Duration badge */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl mb-6 ${isEven ? 'ml-auto' : ''}`}>
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium text-slate-600">{step.duration}</span>
                          </div>

                          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {step.subtitle}
                          </p>

                          {/* Details list */}
                          <div className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600">{detail}</span>
                              </div>
                            ))}
                          </div>

                          {/* Step indicator */}
                          <div className={`mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 ${isEven ? 'justify-end' : ''}`}>
                            <span className="text-xs font-medium text-slate-400">Step {index + 1}</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <div className="w-2 h-2 rounded-full bg-indigo-400" />
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: activeIndex === index ? [1, 1.2, 1] : hoveredStep === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg ${hoveredStep === index ? 'shadow-emerald-200' : ''}`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Card Grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                        <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                          {index + 1}/4
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs text-slate-500">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">
                    {step.subtitle}
                  </p>

                  {/* Details preview */}
                  <div className="space-y-2 mb-4">
                    {step.details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600">{detail}</span>
                      </div>
                    ))}
                    {step.details.length > 2 && (
                      <div className="text-xs text-slate-400 pl-6">
                        +{step.details.length - 2} more
                      </div>
                    )}
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-1.5 pt-4 border-t border-slate-100">
                    <div className={`h-1.5 flex-1 rounded-full bg-emerald-100 ${activeIndex === index ? 'bg-emerald-400' : ''}`} />
                    <div className={`h-1.5 flex-1 rounded-full bg-indigo-100 ${activeIndex === index ? 'bg-indigo-400' : ''}`} />
                    <div className={`h-1.5 flex-1 rounded-full bg-emerald-100 ${activeIndex === index ? 'bg-emerald-400' : ''}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mt-16 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Overall Progress</span>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-full"
                animate={{
                  width: [`${(activeIndex / steps.length) * 100}%`]
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm font-medium text-slate-700">
              {Math.round(((activeIndex + 1) / steps.length) * 100)}%
            </span>
          </div>
        </div>

        {/* CTA - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 lg:mt-24"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-left">
                <span className="block text-sm text-slate-500 mb-1">Ready to begin?</span>
                <span className="text-lg font-semibold text-slate-900">Start your application today</span>
              </div>
            </div>
            <button className="group flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md">
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ApplicationProcess;