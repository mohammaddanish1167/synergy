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
  Cpu
} from 'lucide-react';

// Fallback for missing Certificate icon
const Certificate = Award;

function HonoraryDoctorate() {
  const stats = [
    { icon: <Trophy className="w-5 h-5" />, number: '2,500+', label: 'Doctorates Conferred', color: 'from-blue-500 to-cyan-500' },
    { icon: <Award className="w-5 h-5" />, number: '95%', label: 'Success Rate', color: 'from-emerald-500 to-green-500' },
    { icon: <Globe className="w-5 h-5" />, number: '40+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
    { icon: <Building className="w-5 h-5" />, number: '20+', label: 'Partner Universities', color: 'from-amber-500 to-orange-500' },
  ];

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Globally Recognized',
      description: 'Accredited by top-tier universities worldwide with full international validity.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'No Coursework',
      description: 'Awarded purely on merit and real-world achievements, no classes required.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Rigorous Evaluation',
      description: 'Multi-tier review process by international academic panels.',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Elite Network',
      description: 'Join a distinguished community of global leaders and innovators.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50'
    },
  ];

  const timelineSteps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description: 'Free consultation to evaluate your eligibility and achievements.',
      icon: <FileText className="w-5 h-5" />,
      duration: '1-2 days'
    },
    {
      number: '02',
      title: 'Portfolio Curation',
      description: 'Expert guidance in compiling your comprehensive achievement portfolio.',
      icon: <Award className="w-5 h-5" />,
      duration: '2-3 weeks'
    },
    {
      number: '03',
      title: 'Academic Review',
      description: 'Evaluation by international university boards and expert panels.',
      icon: <GraduationCap className="w-5 h-5" />,
      duration: '4-6 weeks'
    },
    {
      number: '04',
      title: 'Conferment',
      description: 'Official degree conferment and optional convocation ceremony.',
      icon: <FileCheck className="w-5 h-5" />,
      duration: '1-2 weeks'
    },
  ];

  const benefits = [
    {
      title: 'Global Prestige',
      description: 'Internationally recognized title that elevates your professional standing.',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Speaking Opportunities',
      description: 'Invitations to keynote at global conferences and academic events.',
      icon: <Lightbulb className="w-5 h-5" />,
      color: 'text-amber-600'
    },
    {
      title: 'Research Collaboration',
      description: 'Access to exclusive academic networks and research partnerships.',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600'
    },
    {
      title: 'Legacy Building',
      description: 'Cement your life\'s work with formal academic recognition.',
      icon: <Heart className="w-5 h-5" />,
      color: 'text-emerald-600'
    },
  ];

  const eligibilityPoints = [
    'Minimum 10 years of distinguished professional experience',
    'Significant contributions to industry or society',
    'Published works, patents, or recognized innovations',
    'Leadership roles with measurable impact',
    'International recognition or awards',
    'Strong professional endorsements'
  ];

  const faqs = [
    {
      question: 'Is the Honorary Doctorate internationally recognized?',
      answer: 'Yes, all our partner universities are accredited institutions recognized worldwide. The degree carries the same prestige as traditional doctorates.'
    },
    {
      question: 'What is the typical duration of the process?',
      answer: 'The complete process typically takes 3-6 months, depending on document preparation and university review schedules.'
    },
    {
      question: 'Can I attend a physical graduation ceremony?',
      answer: 'Yes, you can choose between virtual conferment or attending a physical convocation ceremony at one of our partner university campuses.'
    },
    {
      question: 'What documents are required?',
      answer: 'Professional CV, achievement portfolio, publications/media coverage, recommendation letters, and evidence of impact.'
    }
  ];

  // Areas of Specialization Data
  const specializationAreas = [
    'Advertising Management',
    'Information Technology',
    'Agriculture Management',
    'Intellectual Property Rights',
    'Air Transport Management',
    'Interior Management',
    'Animation Management',
    'International Finance Management',
    'Architectural Management',
    'International Management',
    'Asset Management',
    'International Trade',
    'Audit Management',
    'Investment Analysis Management',
    'Banking Management',
    'Investment Management',
    'Bio-Technology Management',
    'Labour Law Management',
    'BPO Management',
    'Library Management',
    'Business Administration',
    'Logistics Management',
    'Call Center Management',
    'Market Risk Management',
    'Chartered Finance Management',
    'Marketing Management',
    'Clinical Pharmacology',
    'Mass Communication',
    'Clinical Research',
    'Materials Management',
    'Communication Management',
    'Media Management',
    'Construction Management',
    'Mutual Funds Management',
    'Consumer Behavior',
    'Networking Management',
    'Contemporary Auditing',
    'Operations Management',
    'Co-operative Management',
    'Packaging Management',
    'Corporate Finance Management',
    'Pathological Lab Management',
    'Corporate Law',
    'Personnel Management',
    'Corporate Training',
    'Petroleum Management',
    'Cost and Management Accounting',
    'Pharmacology Management',
    'Customer Care Management',
    'Portfolio Management',
    'Customer Relations Management',
  ];

  // Duplicate the array for seamless infinite scroll
  const infiniteSpecializations = [...specializationAreas, ...specializationAreas];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-semibold text-white">Prestigious Academic Recognition</span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Honorary
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Doctorate
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-8 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                The pinnacle of academic honor for visionaries, innovators, and leaders 
                transforming our world through extraordinary contributions.
              </p>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#application"
                  className="group relative px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Begin Your Journey
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#specializations"
                  className="px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  View Specializations
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas of Specialization Section */}
      <section id="specializations" className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4" />
              Comprehensive Coverage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Areas of <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Specialization</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognizing excellence across diverse fields and industries worldwide.
            </p>
          </motion.div>

          {/* Infinite Scrolling Specializations */}
          <div className="relative">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10" />
            
            {/* Infinite Scroll Container */}
            <motion.div
              className="flex space-x-4 py-8"
              animate={{
                x: [0, -1032],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {infiniteSpecializations.map((area, index) => (
                <motion.div
                  key={`${area}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.01 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                  className="flex-shrink-0 bg-white rounded-xl px-6 py-4 shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      {index % 5 === 0 ? <Briefcase className="w-4 h-4" /> : 
                       index % 5 === 1 ? <Cpu className="w-4 h-4" /> : 
                       index % 5 === 2 ? <Zap className="w-4 h-4" /> : 
                       index % 5 === 3 ? <Target className="w-4 h-4" /> : 
                       <Globe className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {area}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Static Grid for Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Business & Management</h3>
              </div>
              <p className="text-slate-600">Recognition for leaders transforming industries through innovative business strategies.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Technology & Innovation</h3>
              </div>
              <p className="text-slate-600">Honoring pioneers driving technological advancements and digital transformation.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Global Specializations</h3>
              </div>
              <p className="text-slate-600">International recognition across diverse fields with worldwide impact.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Elite Recognition Program
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                The Highest <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Academic Honor</span>
              </h2>
              
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                The Honorary Doctorate represents the apex of academic recognition, reserved exclusively for individuals 
                who have made transformative contributions to their fields. Unlike traditional degrees, this prestigious 
                title celebrates real-world impact, innovation, and leadership that shapes our global future.
              </p>
              
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Awarded through our exclusive network of world-class universities, this distinction carries international 
                prestige and opens doors to elite academic and professional circles worldwide.
              </p>

              {/* Eligibility Highlights */}
              <div className="mt-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-emerald-500" />
                  Ideal Candidate Profile
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {eligibilityPoints.slice(0, 4).map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`${feature.gradient} rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-white shadow-sm mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Process */}
      <section id="process" className="py-20 bg-white">
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
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 hidden lg:block" />

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
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 mb-6">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformative <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">Benefits</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Elevate your professional standing with exclusive advantages and recognition.
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
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-white/10 ${benefit.color} mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-100/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Common <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about the Honorary Doctorate program.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-r from-white to-blue-50/50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl" />

            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-8">
                <Award className="w-8 h-8" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready for Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Academic Legacy?</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Join the elite circle of distinguished professionals recognized for their 
                transformative contributions to society and industry.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="group relative px-10 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Application Process
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="px-10 py-5 rounded-xl text-lg font-semibold text-blue-700 border-2 border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                </motion.a>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                Limited nominations available • Next review cycle begins April 15, 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HonoraryDoctorate;