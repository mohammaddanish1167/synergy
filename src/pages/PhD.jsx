import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Globe, 
  BookOpen, 
  Target,
  CheckCircle,
  FileText,
  Building,
  Sparkles,
  ChevronRight,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Star,
  Lightbulb,
  TrendingUp,
  Briefcase,
  Heart,
  Zap,
  Cpu,
  MessageCircle
} from 'lucide-react';

function PhD() {
  const programStats = [
    { icon: <GraduationCap className="w-5 h-5" />, number: '500+', label: 'PhD Graduates', color: 'from-blue-500 to-cyan-500' },
    { icon: <Award className="w-5 h-5" />, number: '95%', label: 'Success Rate', color: 'from-emerald-500 to-green-500' },
    { icon: <Target className="w-5 h-5" />, number: '50+', label: 'Research Areas', color: 'from-purple-500 to-pink-500' },
    { icon: <Building className="w-5 h-5" />, number: '20+', label: 'Partner Universities', color: 'from-amber-500 to-orange-500' },
  ];

  const programHighlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Awarded by Recognized Universities',
      description: 'Partnered with accredited institutions in India, the US, France, Switzerland, and more.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Recognition',
      description: 'Your contributions will be validated and honored by institutions respected worldwide.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'No Coursework Required',
      description: 'Awarded for your real-world impact, not academic credits.',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'End-to-End Application Assistance',
      description: 'We help you prepare your nomination file, portfolio, and supporting documents with expert precision.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Panel-Based Evaluation',
      description: 'Nominations reviewed by university-appointed academic and industry leaders for credibility.',
      gradient: 'bg-gradient-to-br from-rose-50 to-pink-50'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Hybrid Delivery Options',
      description: 'Choose to receive your degree virtually or attend a prestigious convocation event.',
      gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50'
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Eligibility Check & Consultation',
      description: 'Share your background, achievements, and goals — we\'ll advise if you qualify.',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      step: '2',
      title: 'Documentation & Nomination File Preparation',
      description: 'We help compile achievements, press coverage, work portfolio, and recommendation letters.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      step: '3',
      title: 'University Panel Review',
      description: 'Your file is submitted to university boards and reviewed by academic and industry leaders.',
      icon: <Users className="w-5 h-5" />
    },
    {
      step: '4',
      title: 'Approval & Award Letter Issued',
      description: 'Once approved, you receive formal letter of conferment and degree documentation.',
      icon: <Award className="w-5 h-5" />
    },
    {
      step: '5',
      title: 'Optional Convocation Ceremony',
      description: 'Celebrate your recognition in an international or Indian campus event — or opt for digital delivery.',
      icon: <GraduationCap className="w-5 h-5" />
    },
  ];

  const targetAudience = [
    'Business founders, leaders & entrepreneurs',
    'Social workers, educators, or NGO heads',
    'Innovators, authors, public figures',
    'Professionals with at least 10 years experience',
    'Industry pioneers and thought leaders',
    'Researchers with significant contributions'
  ];

  const whyChooseUs = [
    {
      title: 'For Established Professionals',
      description: 'Tailored for seasoned experts making significant industry impact.',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'India + International Network',
      description: 'Extensive network of prestigious universities worldwide.',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Expert File Building Support',
      description: 'Professional assistance in crafting compelling nomination documents.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: 'Prestige Without Politics',
      description: 'Recognition based purely on merit and achievements.',
      icon: <Award className="w-5 h-5" />
    },
  ];

  const achievementStats = [
    { number: '300+', label: 'Honorary Doctorates Facilitated' },
    { number: '15+', label: 'Countries' },
    { number: '100+', label: 'Press Mentions' },
    { number: '500+', label: 'Industry Experts' },
  ];

  const transformationBenefits = [
    {
      icon: '🎯',
      title: 'Research Pioneer',
      description: 'Lead groundbreaking research that shapes the future of your discipline and creates lasting impact.'
    },
    {
      icon: '🧠',
      title: 'Critical Thinker',
      description: 'Develop advanced analytical skills and innovative problem-solving approaches.'
    },
    {
      icon: '🌍',
      title: 'Global Scholar',
      description: 'Join an international community of researchers and expand your global perspective.'
    },
    {
      icon: '🚀',
      title: 'Industry Leader',
      description: 'Gain expertise that positions you as a thought leader in academia and industry.'
    },
  ];

  const admissionProcess = [
    {
      step: '1',
      title: 'Apply Online',
      description: 'Complete your application with research proposal and documents'
    },
    {
      step: '2',
      title: 'Academic Review',
      description: 'Expert committee evaluates your qualifications and research potential'
    },
    {
      step: '3',
      title: 'Interview Process',
      description: 'Meet with faculty members to discuss your research interests'
    },
    {
      step: '4',
      title: 'Final Decision',
      description: 'Receive admission confirmation and begin your academic journey'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'NextSkillEdge in Honorary Doctorates, Class of 2024',
      quote: 'The mentorship and unwavering support I received throughout my doctoral journey was truly exceptional.',
      rating: 5,
      badge: 'ALUMNI CHOICE'
    },
    {
      name: 'Prof. James Wilson',
      role: 'NextSkillEdge in Master Programs, Class of 2022',
      quote: 'The collaborative research environment and state-of-the-art facilities were crucial for my breakthrough discoveries.',
      rating: 5,
      badge: 'TOP RESEARCHER'
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'NextSkillEdge in Certification Programs, Class of 2024',
      quote: 'From day one, the program challenged me to think beyond conventional frameworks.',
      rating: 5,
      badge: 'CERTIFIED LEARNER'
    },
  ];

  const faqs = [
    {
      question: 'What exactly is an honorary doctorate?',
      answer: 'An honorary doctorate is the highest academic honor awarded to individuals for exceptional contributions to their field, without requiring traditional coursework or research.'
    },
    {
      question: 'Do I need to write a thesis or attend classes?',
      answer: 'No, honorary doctorates are awarded based on real-world achievements and contributions, not academic requirements.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Typically 3-6 months from initial consultation to conferment, depending on documentation and review timelines.'
    },
    {
      question: 'Are these honorary doctorates recognized?',
      answer: 'Yes, all our partner universities are accredited institutions with global recognition and validity.'
    },
    {
      question: 'Will there be a convocation or ceremony?',
      answer: 'Yes, you can choose to attend a physical convocation ceremony or receive your degree virtually.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-semibold text-white">Prestigious Doctoral Recognition</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Doctorate
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Programs
                </span>
              </h1>
              
              <p className="mt-8 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                Honorary doctorates recognize outstanding contributions in business, social impact, innovation, arts, education, or leadership — without academic requirements.
              </p>

              {/* Stats Grid */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {programStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-3`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#application"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Apply for Course
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Application Form Section */}
      <section id="application" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Take the first step towards <span className="text-blue-600">academic excellence</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Profession</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Your current profession"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Courses *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                    <option>Honorary Doctorate Program</option>
                    <option>PhD in Management</option>
                    <option>PhD in Technology</option>
                    <option>PhD in Social Sciences</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">State *</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                      <option>Your state</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Budget *</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                      <option>Select your budget</option>
                      <option>$10,000 - $20,000</option>
                      <option>$20,000 - $30,000</option>
                      <option>$30,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>

            {/* Who Is It For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Who Is It For?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Dreaming of a Honorary Doctorate from a top university in India or abroad? We help you go from "aspiring scholar" to "admitted doctoral candidate" — with expert-led, end-to-end guidance.
              </p>
              
              <div className="space-y-4">
                {targetAudience.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Connect on WhatsApp</h3>
                    <p className="text-emerald-100">Get instant guidance from our experts</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Program <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Highlights</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key features that make our Honorary Doctorates program exceptional and industry-leading.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`${highlight.gradient} rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="inline-flex p-3 rounded-xl bg-white shadow-sm mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{highlight.title}</h3>
                <p className="text-slate-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your Honorary Award Journey from consultation to conferment.
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 group">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 mb-6">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Why Choose Honorary Doctorate Support From NextSkillEdge
              </h2>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                {achievementStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100"
                  >
                    <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Legacy Building */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-10 text-white">
                <h3 className="text-3xl font-bold mb-6">Transform Your Legacy</h3>
                <p className="text-blue-100 mb-8">
                  Our Honorary Doctorates program stands out for its commitment to excellence, innovation, and student success.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: '🏆', title: 'Legacy Builder', desc: 'Cement your life\'s work with academic recognition that opens doors globally.' },
                    { icon: '🎙️', title: 'Thought Leader', desc: 'Become a trusted voice in your field — invited to speak, mentor, and lead.' },
                    { icon: '📚', title: 'Featured Contributor', desc: 'Contribute to books, global summits, TEDx stages, and academic platforms.' },
                    { icon: '🌐', title: 'Global Peer Network', desc: 'Connect with other honorary recipients, researchers, and leaders across industries.' },
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-blue-100/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Connect on WhatsApp</h3>
                    <p className="text-green-100">Tailored support for creators and leaders</p>
                  </div>
                  <MessageCircle className="w-8 h-8" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Guarantee */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Honorary Doctorates Programs — <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Guaranteed with Us!</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover comprehensive support and exceptional resources for your academic journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '👨‍🏫', title: 'Expert Faculty Mentorship', desc: 'Work closely with renowned faculty members who are leaders in their fields.' },
              { icon: '🔬', title: 'Advanced Research Facilities', desc: 'Access cutting-edge laboratories and research centers with latest technology.' },
              { icon: '🌍', title: 'Global Research Network', desc: 'Connect with international research communities and collaborate globally.' },
              { icon: '💰', title: 'Research Funding', desc: 'Benefit from generous funding opportunities and scholarship programs.' },
              { icon: '🤝', title: 'Collaborative Environment', desc: 'Join a vibrant community of scholars fostering intellectual growth.' },
              { icon: '📈', title: 'Career Development', desc: 'Receive comprehensive career guidance and professional development.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Identity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transform Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Identity</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationBenefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-slate-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Students Journey <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">With Us</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Thousands of learners from across the globe have transformed their careers through our programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic text-lg mb-8">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm mb-2">{testimonial.role}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                    {testimonial.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">
              Find answers to common questions about our Honorary Doctorates admission program.
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
                className="bg-gradient-to-r from-white to-blue-50/50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    Q{index + 1}
                  </div>
                  {faq.question}
                </h3>
                <p className="text-slate-600 pl-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">Doctoral Journey?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Take the first step towards your Honorary Doctorate journey today.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#application"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </motion.a>

            <div className="mt-12 grid grid-cols-4 gap-6">
              {[
                { number: '20+', label: 'Partner Universities' },
                { number: '300+', label: 'Honorary Doctorates' },
                { number: '15+', label: 'Countries' },
                { number: '100+', label: 'Press Mentions' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PhD;