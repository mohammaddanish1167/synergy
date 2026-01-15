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
  MessageCircle,
  ArrowRight,
  CalendarDays,
  Crown,
  Globe2,
  Brain,
  Users2,
  BadgeCheck,
  Stethoscope,
  Rocket,
  TargetIcon,
  BarChart3,
  BookMarked,
  FileCheck,
  Search,
  Mic,
  Newspaper,
  Layers,
  ClipboardCheck
} from 'lucide-react';
import { useState } from 'react';

function PhD() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const programStats = [
    { icon: <GraduationCap className="w-5 h-5" />, number: '800+', label: 'PhD Graduates', color: 'from-blue-500 to-cyan-500' },
    { icon: <Award className="w-5 h-5" />, number: '97%', label: 'Success Rate', color: 'from-emerald-500 to-green-500' },
    { icon: <Target className="w-5 h-5" />, number: '60+', label: 'Research Areas', color: 'from-purple-500 to-pink-500' },
    { icon: <Building className="w-5 h-5" />, number: '25+', label: 'Partner Universities', color: 'from-amber-500 to-orange-500' },
  ];

  const programHighlights = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'Awarded by Top Universities',
      description: 'Partnered with globally accredited institutions across India, USA, Europe, and Asia.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Global Recognition',
      description: 'Your research contributions validated by internationally respected academic institutions.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: 'Research-Focused Approach',
      description: 'Dedicated to advancing knowledge through groundbreaking research and innovation.',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'End-to-End Support',
      description: 'Comprehensive guidance from proposal development to dissertation defense.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Expert Panel Evaluation',
      description: 'Rigorous review by distinguished academic and industry expert panels.',
      gradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
      iconColor: 'text-rose-600'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Flexible Learning Options',
      description: 'Choose between virtual research supervision or campus-based convocation events.',
      gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      iconColor: 'text-cyan-600'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Eligibility Assessment',
      description: 'Comprehensive evaluation of your academic background and research potential.',
      icon: <Search className="w-5 h-5" />,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      step: '02',
      title: 'Research Proposal Development',
      description: 'Expert guidance in crafting innovative and feasible research proposals.',
      icon: <FileText className="w-5 h-5" />,
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      step: '03',
      title: 'University Panel Review',
      description: 'Evaluation by distinguished academic committees and research boards.',
      icon: <Users2 className="w-5 h-5" />,
      gradient: 'from-emerald-400 to-green-400'
    },
    {
      step: '04',
      title: 'Supervision & Research',
      description: 'Dedicated mentorship throughout your research journey.',
      icon: <GraduationCap className="w-5 h-5" />,
      gradient: 'from-amber-400 to-orange-400'
    },
    {
      step: '05',
      title: 'Dissertation & Defense',
      description: 'Support for final research submission and defense preparation.',
      icon: <ClipboardCheck className="w-5 h-5" />,
      gradient: 'from-rose-400 to-pink-400'
    },
  ];

  const targetAudience = [
    'Academic researchers and scholars',
    'Industry professionals advancing knowledge',
    'University faculty seeking research advancement',
    'Professionals with Master\'s degree seeking doctoral recognition',
    'Research scientists and innovators',
    'Thought leaders contributing to academic discourse'
  ];

  const whyChooseUs = [
    {
      title: 'Research Excellence',
      description: 'Focus on groundbreaking research with real-world impact and academic significance.',
      icon: <TargetIcon className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Global Academic Network',
      description: 'Access to prestigious universities and research institutions worldwide.',
      icon: <Globe2 className="w-5 h-5" />,
      color: 'text-emerald-600'
    },
    {
      title: 'Expert Mentorship',
      description: 'Guidance from experienced researchers and academic supervisors.',
      icon: <Users2 className="w-5 h-5" />,
      color: 'text-purple-600'
    },
    {
      title: 'Academic Rigor',
      description: 'Maintaining highest standards of research quality and scholarly contribution.',
      icon: <Award className="w-5 h-5" />,
      color: 'text-amber-600'
    },
  ];

  const achievementStats = [
    { number: '500+', label: 'Research Publications' },
    { number: '30+', label: 'Countries Represented' },
    { number: '200+', label: 'Industry Partnerships' },
    { number: '1000+', label: 'Research Citations' },
  ];

  const researchImpact = [
    {
      icon: '📈',
      title: 'Knowledge Advancement',
      description: 'Contribute to cutting-edge research that pushes the boundaries of your field.'
    },
    {
      icon: '🌍',
      title: 'Global Influence',
      description: 'Join international research communities and make global scholarly impact.'
    },
    {
      icon: '💡',
      title: 'Innovation Catalyst',
      description: 'Drive innovation through original research and discovery.'
    },
    {
      icon: '🎓',
      title: 'Academic Leadership',
      description: 'Establish yourself as an authority and leader in your research domain.'
    },
  ];

  const admissionProcess = [
    {
      step: '1',
      title: 'Research Proposal',
      description: 'Submit detailed research proposal with methodology and objectives'
    },
    {
      step: '2',
      title: 'Academic Evaluation',
      description: 'Comprehensive review of qualifications and research potential'
    },
    {
      step: '3',
      title: 'Interview & Assessment',
      description: 'Panel interview to discuss research interests and academic fit'
    },
    {
      step: '4',
      title: 'Supervisor Matching',
      description: 'Assignment of expert research supervisor for your doctoral journey'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'PhD in Artificial Intelligence, 2024',
      quote: 'The research mentorship and academic support transformed my career trajectory.',
      rating: 5,
      badge: 'RESEARCH EXCELLENCE'
    },
    {
      name: 'Prof. James Wilson',
      role: 'PhD in Biotechnology, 2022',
      quote: 'Exceptional research facilities and global academic network were instrumental.',
      rating: 5,
      badge: 'INNOVATION LEADER'
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'PhD in Sustainable Development, 2024',
      quote: 'The program challenged me to produce research with meaningful societal impact.',
      rating: 5,
      badge: 'IMPACT SCHOLAR'
    },
  ];

  const faqs = [
    {
      question: 'What distinguishes a PhD from an Honorary Doctorate?',
      answer: 'A PhD involves original research and dissertation, while an Honorary Doctorate recognizes lifetime achievements without traditional academic requirements.'
    },
    {
      question: 'What research support is provided?',
      answer: 'We provide expert supervision, research methodology guidance, data analysis support, and publication assistance throughout your doctoral journey.'
    },
    {
      question: 'How long does the PhD program take?',
      answer: 'Typically 3-5 years, depending on research complexity, publication requirements, and dissertation completion timeline.'
    },
    {
      question: 'Are PhDs internationally recognized?',
      answer: 'Yes, our partner universities are accredited institutions with global recognition and academic standing.'
    },
    {
      question: 'What are the publication requirements?',
      answer: 'Typically requires original research contributions and publications in peer-reviewed academic journals.'
    }
  ];

  const researchFields = [
    'Artificial Intelligence & Machine Learning',
    'Sustainable Energy Systems',
    'Biotechnology & Medical Research',
    'Data Science & Analytics',
    'Environmental Science',
    'Business Analytics & Strategy',
    'Cybersecurity & Information Systems',
    'Public Health & Epidemiology',
    'Educational Technology',
    'Financial Technology',
    'Urban Planning & Development',
    'Creative Industries & Media'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage('Application submitted successfully! Our admissions team will review your application and contact you shortly.');
        form.reset();
        
        // Reset file name display
        const fileNameDisplay = document.getElementById('file-name');
        if (fileNameDisplay) {
          fileNameDisplay.textContent = 'No file selected';
        }
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Scroll to show message
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Clear message after 10 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 10000);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus('error');
        setSubmitMessage('File size must be less than 5MB');
        e.target.value = '';
        return;
      }
      
      // Validate file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx|txt)$/i)) {
        setSubmitStatus('error');
        setSubmitMessage('Please upload a PDF, DOC, DOCX, or TXT file');
        e.target.value = '';
        return;
      }
      
      // Display file name
      const fileNameDisplay = document.getElementById('file-name');
      if (fileNameDisplay) {
        fileNameDisplay.textContent = file.name;
      }
      
      // Clear any previous error messages
      if (submitStatus === 'error') {
        setSubmitStatus(null);
        setSubmitMessage('');
      }
    }
  };

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
                <span className="text-sm font-semibold text-white tracking-wide">ADVANCED RESEARCH PROGRAM</span>
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                  Doctor of Philosophy
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
                  (PhD) Program
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-8 text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto font-light leading-relaxed">
                The pinnacle of academic achievement for researchers, scholars, and innovators 
                dedicated to advancing knowledge and making significant contributions to their fields.
              </p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              >
                {programStats.map((stat, index) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
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
                    <GraduationCap className="w-5 h-5" />
                    Begin Research Journey
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
                className="mt-12 flex items-center justify-center gap-6 text-sm text-blue-200/80 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>Globally Accredited Research</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>25+ Partner Universities</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>97% Success Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Research Fields Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6">
              <TargetIcon className="w-5 h-5" />
              RESEARCH DOMAINS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Specialized <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Research Areas</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore cutting-edge research opportunities across diverse academic disciplines.
            </p>
          </motion.div>

          {/* Research Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {researchFields.slice(0, 6).map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                    {index % 4 === 0 ? <Cpu className="w-5 h-5" /> : 
                     index % 4 === 1 ? <BarChart3 className="w-5 h-5" /> : 
                     index % 4 === 2 ? <Stethoscope className="w-5 h-5" /> : 
                     <Globe2 className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {field}
                  </h3>
                </div>
              </motion.div>
            ))}
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
              Program <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced features designed for serious researchers and academic innovators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`absolute inset-0 ${highlight.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl ${highlight.gradient} ${highlight.iconColor} mb-6`}>
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Your Research <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured pathway from research conception to doctoral achievement.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 hidden lg:block" />
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-sm opacity-50 hidden lg:block" />

            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
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
                      {step.step}
                    </div>

                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.gradient} bg-opacity-10 text-blue-600 mb-6`}>
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section with Resume Upload */}
      <section id="application" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form with Resume Upload */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Begin Your <span className="text-blue-600">Research Journey</span>
              </h2>
              
              {/* Web3Forms Form */}
              <form onSubmit={handleSubmit} className="space-y-6" id="phdApplicationForm">
                {/* Web3Forms Hidden Inputs */}
                <input type="hidden" name="access_key" value="3a244af2-b695-4c44-939a-c4411ee35f37" />
                <input type="hidden" name="subject" value="New PhD Program Application" />
                <input type="hidden" name="from_name" value="PhD Program Website" />
                <input type="hidden" name="redirect" value="true" />
                <input type="hidden" name="redirect_url" value="https://yourdomain.com/thank-you" />
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${submitStatus === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-red-50 border border-red-200 text-red-700'}`}
                  >
                    <div className="flex items-center gap-3">
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-red-500">⚠️</span>
                      )}
                      <p className="font-medium">{submitMessage}</p>
                    </div>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      id="name"
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      id="phone"
                      type="tel" 
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="research_interest" className="block text-sm font-medium text-slate-700 mb-2">Research Interest *</label>
                  <input 
                    id="research_interest"
                    type="text" 
                    name="research_interest"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                    placeholder="Your primary research area"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-slate-700 mb-2">Program Selection *</label>
                  <select 
                    id="program"
                    name="program"
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white"
                  >
                    <option value="">Select a program</option>
                    <option value="PhD in Management">PhD in Management</option>
                    <option value="PhD in Technology">PhD in Technology</option>
                    <option value="PhD in Social Sciences">PhD in Social Sciences</option>
                    <option value="PhD in Healthcare">PhD in Healthcare</option>
                    <option value="PhD in Education">PhD in Education</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-slate-700 mb-2">Highest Qualification *</label>
                    <select 
                      id="qualification"
                      name="qualification"
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select qualification</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Professional Certification">Professional Certification</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Doctoral Candidate">Doctoral Candidate</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">Research Experience *</label>
                    <select 
                      id="experience"
                      name="experience"
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select experience</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>
                
                {/* Resume Upload Section - Optional */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Resume/CV (Optional) <span className="text-slate-500 font-normal">(PDF, DOC, DOCX up to 5MB)</span>
                  </label>
                  <div className="mt-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative"
                    >
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx,.txt"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="resume"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-xl cursor-pointer bg-blue-50 hover:bg-blue-100 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <FileText className="w-10 h-10 text-blue-400 mb-3 group-hover:text-blue-500 transition-colors" />
                          <p className="text-sm text-slate-700 mb-2">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-slate-500">PDF, DOC, DOCX (MAX. 5MB) - Optional</p>
                        </div>
                      </label>
                    </motion.div>
                    
                    {/* Selected file name display */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <FileText className="w-4 h-4" />
                      <span id="file-name" className="font-medium">No file selected (Optional)</span>
                    </div>
                    
                    {/* Upload tips */}
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs text-slate-600 flex items-start gap-2">
                        <Lightbulb className="w-3 h-3 mt-0.5 text-blue-500 flex-shrink-0" />
                        <span>
                          <strong>Tip:</strong> Include your academic publications, research experience, 
                          and any previous scholarly work in your resume for better evaluation.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div>
                  <label htmlFor="additional_info" className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea 
                    id="additional_info"
                    name="additional_info"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                    placeholder="Tell us about your research interests, publications, or any other relevant information..."
                  />
                </div>
                
                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600">
                    I consent to having my academic credentials and research proposal reviewed by the 
                    university panel and agree to the terms of the PhD program.
                  </label>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-6 h-6" />
                      Submit Research Application
                    </>
                  )}
                </motion.button>

                {/* Spam Protection Note */}
                <p className="text-xs text-slate-500 text-center">
                  Protected by reCAPTCHA and Web3Forms. Your information is secure.
                </p>
              </form>
            </motion.div>

            {/* Who Is It For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Ideal Candidate Profile
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our PhD program is designed for dedicated researchers committed to advancing knowledge and making significant contributions to their academic fields.
              </p>
              
              <div className="space-y-4 mb-12">
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

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6">
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
                    <h3 className="text-xl font-bold">Research Consultation</h3>
                    <p className="text-emerald-100">Get expert guidance for your research proposal</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Research <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Impact</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your academic identity and make meaningful contributions to your field.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchImpact.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-slate-100 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              ACADEMIC EXCELLENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">PhD Program</span>
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Distinguished features that set our doctoral program apart in academic excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-white/10 ${item.color} mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed">{item.description}</p>
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
                  <GraduationCap className="w-10 h-10" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Ready to Advance <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Knowledge?</span>
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join our community of scholars dedicated to groundbreaking research and academic excellence.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#application"
                    className="group relative px-12 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <GraduationCap className="w-6 h-6" />
                      Begin Application
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.a>
                </div>

                <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Next admission cycle begins • Limited research positions available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PhD;