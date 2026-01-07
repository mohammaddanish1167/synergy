import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  Users, 
  Trophy, 
  CheckCircle, 
  GraduationCap, 
  Star,
  Shield,
  FileText,
  Target,
  Book,
  Lightbulb,
  Heart,
  Sparkles,
  ChevronRight,
  Calendar,
  Clock,
  Building,
  FileCheck,
  UserCheck,
  BookOpen,
  ShieldCheck,
  Briefcase,
  Zap,
  Cpu,
  ArrowRight,
  CalendarDays,
  Crown,
  Globe2,
  Brain,
  TrendingUp,
  Users2,
  BadgeCheck,
  Pill,
  Activity,
  Stethoscope
} from 'lucide-react';

// Fallback for missing Certificate icon
const Certificate = Award;

function HonoraryDoctorate() {
  const stats = [
    { icon: <Trophy className="w-5 h-5" />, number: '3,200+', label: 'Doctorates Conferred', color: 'from-blue-500 to-cyan-500' },
    { icon: <Award className="w-5 h-5" />, number: '98%', label: 'Success Rate', color: 'from-emerald-500 to-green-500' },
    { icon: <Globe className="w-5 h-5" />, number: '60+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
    { icon: <Building className="w-5 h-5" />, number: '25+', label: 'Partner Universities', color: 'from-amber-500 to-orange-500' },
  ];

  const features = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'Globally Accredited',
      description: 'Internationally recognized by accredited universities with full global validity.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: 'Merit-Based Honor',
      description: 'Awarded purely on lifetime achievements and exceptional contributions.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Rigorous Evaluation',
      description: 'Multi-tier review by international academic and industry panels.',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Elite Network',
      description: 'Join distinguished community of global leaders and visionaries.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconColor: 'text-amber-600'
    },
  ];

  const timelineSteps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive eligibility review and achievement evaluation.',
      icon: <FileText className="w-5 h-5" />,
      duration: '1-3 days',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      number: '02',
      title: 'Portfolio Development',
      description: 'Expert curation of your professional achievements portfolio.',
      icon: <Award className="w-5 h-5" />,
      duration: '2-4 weeks',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      number: '03',
      title: 'Academic Review',
      description: 'Evaluation by international university boards and expert panels.',
      icon: <GraduationCap className="w-5 h-5" />,
      duration: '3-6 weeks',
      gradient: 'from-emerald-400 to-green-400'
    },
    {
      number: '04',
      title: 'Conferment',
      description: 'Official degree conferment with optional global convocation.',
      icon: <FileCheck className="w-5 h-5" />,
      duration: '1-2 weeks',
      gradient: 'from-amber-400 to-orange-400'
    },
  ];

  const benefits = [
    {
      title: 'Global Recognition',
      description: 'Internationally recognized title that elevates professional standing worldwide.',
      icon: <Globe2 className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      title: 'Speaking Platforms',
      description: 'Keynote invitations at global conferences and academic summits.',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-amber-400'
    },
    {
      title: 'Research Collaboration',
      description: 'Access to exclusive academic networks and research partnerships.',
      icon: <Users2 className="w-5 h-5" />,
      color: 'text-purple-400'
    },
    {
      title: 'Legacy Establishment',
      description: 'Cement lifetime achievements with formal academic recognition.',
      icon: <Crown className="w-5 h-5" />,
      color: 'text-emerald-400'
    },
  ];

  const eligibilityPoints = [
    '15+ years of distinguished professional experience',
    'Significant contributions to industry or society',
    'Published works, patents, or recognized innovations',
    'Leadership roles with measurable global impact',
    'International awards and recognitions',
    'Strong endorsements from industry leaders'
  ];

  const faqs = [
    {
      question: 'Is the Honorary Doctorate internationally recognized?',
      answer: 'Yes, all our partner universities are accredited institutions recognized worldwide. The degree carries the same prestige as traditional doctorates and is accepted globally.'
    },
    {
      question: 'What is the typical duration of the process?',
      answer: 'The complete process typically takes 3-6 months, depending on document preparation, portfolio development, and university review schedules. We provide dedicated support throughout.'
    },
    {
      question: 'Can I attend a physical graduation ceremony?',
      answer: 'Yes, you can choose between virtual conferment or attending a physical convocation ceremony at prestigious university campuses worldwide. Many choose to participate in our global convocation events.'
    },
    {
      question: 'What documents are required?',
      answer: 'Comprehensive professional CV, achievement portfolio, publications/media coverage, recommendation letters, evidence of impact, and any awards or recognitions received.'
    }
  ];

  // Updated Areas of Specialization with Icons
  const specializationAreas = [
    { name: 'Business Administration', icon: '📊', category: 'Business' },
    { name: 'Technology Management', icon: '💻', category: 'Technology' },
    { name: 'Healthcare Leadership', icon: '🏥', category: 'Healthcare' },
    { name: 'Education Innovation', icon: '🎓', category: 'Education' },
    { name: 'Sustainable Development', icon: '🌱', category: 'Environment' },
    { name: 'Financial Strategy', icon: '💰', category: 'Finance' },
    { name: 'Creative Arts', icon: '🎨', category: 'Arts' },
    { name: 'Public Policy', icon: '🏛️', category: 'Government' },
    { name: 'Engineering Excellence', icon: '⚙️', category: 'Engineering' },
    { name: 'Pharmaceutical Sciences', icon: '💊', category: 'Science' },
    { name: 'Hospitality Management', icon: '🏨', category: 'Hospitality' },
    { name: 'Artificial Intelligence', icon: '🤖', category: 'Technology' },
  ];

  const specializationCategories = [
    {
      name: 'Business & Management',
      icon: <Briefcase className="w-6 h-6" />,
      count: '15+ specializations',
      color: 'from-blue-500 to-cyan-500',
      examples: ['Strategic Leadership', 'Corporate Governance', 'Innovation Management']
    },
    {
      name: 'Technology & Innovation',
      icon: <Cpu className="w-6 h-6" />,
      count: '12+ specializations',
      color: 'from-purple-500 to-pink-500',
      examples: ['Digital Transformation', 'AI Ethics', 'Cybersecurity Leadership']
    },
    {
      name: 'Healthcare & Sciences',
      icon: <Stethoscope className="w-6 h-6" />,
      count: '10+ specializations',
      color: 'from-emerald-500 to-teal-500',
      examples: ['Medical Research', 'Public Health', 'Biotechnology']
    },
    {
      name: 'Arts & Humanities',
      icon: <Sparkles className="w-6 h-6" />,
      count: '8+ specializations',
      color: 'from-amber-500 to-orange-500',
      examples: ['Cultural Leadership', 'Creative Writing', 'Performing Arts']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/90 to-purple-900/90">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <section className="relative py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-white tracking-wide">PRESTIGIOUS ACADEMIC RECOGNITION</span>
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                  Honorary
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Doctorate
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-8 text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto font-light leading-relaxed">
                The ultimate academic honor for visionary leaders, innovators, and trailblazers 
                transforming industries and societies through extraordinary achievements.
              </p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-200/80 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#application"
                  className="group relative px-10 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Crown className="w-5 h-5" />
                    Begin Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>


              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 flex items-center justify-center gap-4 text-sm text-blue-200/80"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>Globally Accredited</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>60+ Countries</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>98% Success Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`absolute inset-0 ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.gradient} ${feature.iconColor} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">Learn more →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specializations Section */}
      <section id="specializations" className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6">
              <Briefcase className="w-5 h-5" />
              COMPREHENSIVE SPECIALIZATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Areas of <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognizing distinguished achievements across diverse fields and industries worldwide.
            </p>
          </motion.div>

          {/* Specialization Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {specializationCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{category.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-4">{category.count}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 font-semibold hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                    Explore More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialization Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specializationAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{area.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {area.name}
                    </h4>
                    <span className="text-xs text-slate-500">{area.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Your Journey to <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Recognition</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined, transparent process designed for distinguished professionals.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 hidden lg:block" />
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-sm opacity-50 hidden lg:block" />

            <div className="grid lg:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${step.gradient} shadow-lg hidden lg:block z-10`} />
                  
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 group">
                    <div className={`absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.number}
                    </div>

                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.gradient} bg-opacity-10 text-blue-600 mb-6`}>
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{step.duration}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/95 to-purple-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
              <TrendingUp className="w-5 h-5" />
              TRANSFORMATIVE ADVANTAGES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Exclusive <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">Benefits</span>
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Elevate your professional standing with unparalleled recognition and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 ${benefit.color} mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed">{benefit.description}</p>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-sm text-blue-200/60">Explore benefit →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />

            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-slate-100 overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>

              <div className="relative text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-8">
                  <Crown className="w-10 h-10" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Ready for Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Academic Legacy?</span>
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join the distinguished circle of global leaders recognized for their 
                  transformative impact on industries and societies worldwide.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="group relative px-12 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Crown className="w-6 h-6" />
                      Begin Application
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.a>


                </div>

                <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Next review cycle begins: April 15, 2024 • Limited nominations available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HonoraryDoctorate;