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
  Stethoscope,
  Rocket,
  TargetIcon,
  BarChart3,
  BookMarked,
  FileCheck as FileCheckIcon,
  Search,
  Mic,
  Newspaper,
  Layers,
  ClipboardCheck,
  BookText,
  School,
  AwardIcon,
  MessageSquare,
  BookHeart,
  UsersRound,
  TrophyIcon,
  TrendingUp as TrendingUpIcon,
  LineChart,
  Settings,
  Target as TargetIcon2,
  BookOpen as BookOpenIcon,
  BarChart as BarChartIcon,
  Briefcase as BriefcaseIcon,
  Globe as GlobeIcon,
  DollarSign,
  PieChart,
  Network,
  TrendingUp as ChartTrendingUp,
  Upload,
  File
} from 'lucide-react';
import { useState, useRef } from 'react';

function MBA() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    program: '',
    experience: '',
    specialization: '',
    resume: null
  });

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const programStats = [
    { icon: <BriefcaseIcon className="w-5 h-5" />, number: '2,500+', label: 'MBA Graduates', color: 'from-blue-500 to-cyan-500' },
    { icon: <ChartTrendingUp className="w-5 h-5" />, number: '92%', label: 'Placement Rate', color: 'from-emerald-500 to-green-500' },
    { icon: <DollarSign className="w-5 h-5" />, number: '45%', label: 'Average Salary Hike', color: 'from-purple-500 to-pink-500' },
    { icon: <GlobeIcon className="w-5 h-5" />, number: '60+', label: 'Countries', color: 'from-amber-500 to-orange-500' },
  ];

  const programHighlights = [
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: 'Industry-Relevant Curriculum',
      description: 'Cutting-edge business concepts aligned with current market demands.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Global Business Network',
      description: 'Connect with professionals and alumni across international markets.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: <TargetIcon2 className="w-6 h-6" />,
      title: 'Career-Focused Learning',
      description: 'Practical skills development for immediate workplace application.',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Specialized Concentrations',
      description: 'Tailor your MBA with focused tracks in high-demand business areas.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Expert Faculty',
      description: 'Learn from industry practitioners and academic experts.',
      gradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
      iconColor: 'text-rose-600'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Flexible Formats',
      description: 'Full-time, part-time, online, and executive MBA options available.',
      gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      iconColor: 'text-cyan-600'
    },
  ];

  const programFormats = [
    {
      title: 'Full-Time MBA',
      duration: '1-2 years',
      description: 'Intensive program for career switchers and recent graduates',
      icon: '🎓',
      features: ['Campus immersion', 'Internship opportunities', 'Career services']
    },
    {
      title: 'Executive MBA',
      duration: '18-24 months',
      description: 'Weekend/evening classes for working professionals',
      icon: '👨‍💼',
      features: ['Minimal work disruption', 'Peer learning', 'Immediate application']
    },
    {
      title: 'Online MBA',
      duration: 'Flexible',
      description: 'Complete flexibility with virtual learning platform',
      icon: '💻',
      features: ['Anywhere access', 'Self-paced learning', 'Digital networking']
    },
  ];

  const specializationTracks = [
    'Finance & Investment Banking',
    'Marketing & Brand Management',
    'Strategy & Consulting',
    'Operations & Supply Chain',
    'Human Resource Management',
    'Information Technology',
    'Entrepreneurship',
    'International Business',
    'Business Analytics',
    'Healthcare Management',
    'Digital Transformation',
    'Sustainable Business'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Application & Documentation',
      description: 'Submit academic records, test scores, and professional experience.',
      icon: <FileText className="w-5 h-5" />,
      duration: '2-4 weeks',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      step: '02',
      title: 'Admission Review',
      description: 'Comprehensive evaluation by admissions committee.',
      icon: <Search className="w-5 h-5" />,
      duration: '3-4 weeks',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      step: '03',
      title: 'Interview Process',
      description: 'Personal interviews to assess fit and potential.',
      icon: <Mic className="w-5 h-5" />,
      duration: '1-2 weeks',
      gradient: 'from-emerald-400 to-green-400'
    },
    {
      step: '04',
      title: 'Enrollment & Orientation',
      description: 'Program onboarding and academic preparation.',
      icon: <BookOpen className="w-5 h-5" />,
      duration: '2-3 weeks',
      gradient: 'from-amber-400 to-orange-400'
    },
  ];

  const benefits = [
    {
      title: 'Career Advancement',
      description: 'Accelerate your professional growth and leadership potential.',
      icon: <TrendingUpIcon className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      title: 'Leadership Skills',
      description: 'Develop strategic thinking and team management capabilities.',
      icon: <Crown className="w-5 h-5" />,
      color: 'text-amber-400'
    },
    {
      title: 'Global Network',
      description: 'Build lifelong connections with business leaders worldwide.',
      icon: <Globe2 className="w-5 h-5" />,
      color: 'text-purple-400'
    },
    {
      title: 'Business Acumen',
      description: 'Master core business functions and strategic decision-making.',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'text-emerald-400'
    },
  ];

  const eligibilityPoints = [
    'Bachelor\'s degree from recognized institution',
    'professional years of work experience (varies by program)',
    'Strong academic background',
    'GMAT/GRE scores (waivers available)',
    'English proficiency for international programs',
    'Leadership potential and professional achievements'
  ];

  const faqs = [
    {
      question: 'What is the duration of the MBA program?',
      answer: 'MBA programs typically range from 12-24 months depending on the format. Full-time programs are usually 1-2 years, while part-time and executive formats may take 18-36 months.'
    },
    {
      question: 'Is work experience required for MBA admission?',
      answer: 'Most MBA programs prefer candidates with 2-5 years of work experience, though requirements vary by program. Some schools offer early career options for recent graduates.'
    },
    {
      question: 'What career support is provided?',
      answer: 'MBA programs offer comprehensive career services including recruitment events, interview preparation, networking opportunities, alumni connections, and career counseling.'
    },
    {
      question: 'Can I specialize in a particular business area?',
      answer: 'Yes, most MBA programs offer concentrations in areas like Finance, Marketing, Strategy, Operations, and more, allowing you to tailor your degree to career goals.'
    }
  ];

  const careerOutcomes = [
    {
      title: 'Management Consultant',
      icon: '📊',
      avgSalary: '$120,000+',
      description: 'Advise organizations on strategic challenges'
    },
    {
      title: 'Product Manager',
      icon: '🚀',
      avgSalary: '$110,000+',
      description: 'Lead product development and strategy'
    },
    {
      title: 'Investment Banker',
      icon: '💼',
      avgSalary: '$150,000+',
      description: 'Manage corporate finance and investments'
    },
    {
      title: 'Marketing Director',
      icon: '🎯',
      avgSalary: '$130,000+',
      description: 'Drive brand strategy and market growth'
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'MBA Graduate, Senior Product Manager at Google',
      quote: 'The MBA program transformed my career trajectory, providing both technical skills and strategic mindset needed for tech leadership.',
      rating: 5,
      badge: 'TECH LEADER'
    },
    {
      name: 'Michael Rodriguez',
      role: 'MBA Graduate, Management Consultant at BCG',
      quote: 'Networking opportunities and case-based learning prepared me perfectly for consulting challenges and client engagements.',
      rating: 5,
      badge: 'CONSULTING STAR'
    },
    {
      name: 'Sarah Johnson',
      role: 'MBA Graduate, VP Finance at JP Morgan',
      quote: 'Specialized finance track combined with real-world projects gave me the competitive edge in investment banking.',
      rating: 5,
      badge: 'FINANCE EXPERT'
    },
  ];

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      
      setIsUploading(true);
      
      // Simulate upload process
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          resume: file
        }));
        setIsUploading(false);
        alert('Resume uploaded successfully!');
      }, 1500);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formEl = e.target;
      const data = new FormData(formEl);
      data.append('access_key', '57f7ee33-9ae4-4e3e-ae91-018650618fcb');
      data.append('subject', 'New MBA Application');
      data.append('from_name', 'QualifyLearn Website');
      data.append('captcha', 'true');
      if (formData.resume && !data.get('attachment')) {
        data.append('attachment', formData.resume);
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      const json = await res.json();
      if (json.success) {
        alert('Application submitted successfully! Our admissions team will contact you shortly.');
        formEl.reset();
        setFormData({
          name: '',
          phone: '',
          email: '',
          position: '',
          program: '',
          experience: '',
          specialization: '',
          resume: null
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (err) {
      alert('An error occurred while submitting the form.');
      console.error(err);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Trigger file input click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
                <span className="text-sm font-semibold text-white tracking-wide">PREMIUM BUSINESS EDUCATION</span>
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                  Master of Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Administration (MBA)
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-8 text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto font-light leading-relaxed">
                Transform your career with comprehensive business education, leadership development, 
                and strategic thinking for today's dynamic global marketplace.
              </p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {programStats.map((stat, index) => (
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
                    <GraduationCap className="w-5 h-5" />
                    Begin MBA Journey
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
                  <span>92% Placement Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Program Formats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6">
              <Settings className="w-5 h-5" />
              FLEXIBLE PROGRAM FORMATS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Choose Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Learning Path</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select the MBA format that aligns with your career stage and lifestyle.
            </p>
          </motion.div>

          {/* Program Formats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl mb-4">{format.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{format.title}</h3>
                  <p className="text-slate-600 mb-6">{format.description}</p>
                  <div className="space-y-2">
                    {format.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialization Tracks */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Specialization Tracks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {specializationTracks.map((track, index) => (
                <motion.div
                  key={track}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                      {index % 4 === 0 ? <BarChartIcon className="w-4 h-4" /> : 
                       index % 4 === 1 ? <TargetIcon2 className="w-4 h-4" /> : 
                       index % 4 === 2 ? <Network className="w-4 h-4" /> : 
                       <PieChart className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                      {track}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Distinguished features that set our MBA program apart in business education.
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

      {/* Career Outcomes */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transformative <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Career Paths</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Launch your career with prestigious roles and competitive compensation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center border border-slate-100 hover:border-blue-200 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{outcome.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{outcome.title}</h3>
                <div className="text-lg font-bold text-emerald-600 mb-3">{outcome.avgSalary}</div>
                <p className="text-slate-600 text-sm">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Admission <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Streamlined process from application to enrollment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 hidden lg:block" />
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-sm opacity-50 hidden lg:block" />

            <div className="grid lg:grid-cols-4 gap-8">
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

                    <div className="flex items-center justify-between">
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                Apply for <span className="text-blue-600">MBA Program</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="57f7ee33-9ae4-4e3e-ae91-018650618fcb" />
                <input type="hidden" name="subject" value="New MBA Application" />
                <input type="hidden" name="from_name" value="QualifyLearn Website" />
                <input type="hidden" name="captcha" value="true" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Position</label>
                  <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 bg-white"
                    placeholder="Your current job title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Program Format *</label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white"
                    required
                  >
                    <option value="">Select program format</option>
                    <option value="Full-Time MBA">Full-Time MBA</option>
                    <option value="Executive MBA">Executive MBA</option>
                    <option value="Online MBA">Online MBA</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select experience range</option>
                      <option value="0-2 years">0-2 years</option>
                      <option value="2-5 years">2-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Specialization Interest</label>
                    <select 
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white"
                    >
                      <option value="">Select specialization</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Strategy">Strategy</option>
                      <option value="Business Analytics">Business Analytics</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload Section */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Upload Resume/CV *</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    name="attachment"
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleUploadClick}
                    className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-300 ${formData.resume ? 'border-emerald-500 bg-emerald-50/50' : 'border-blue-300 hover:border-blue-500 bg-blue-50/50'}`}
                  >
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className={`p-4 rounded-full ${formData.resume ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                        {isUploading ? (
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        ) : formData.resume ? (
                          <FileCheck className="w-8 h-8" />
                        ) : (
                          <Upload className="w-8 h-8" />
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {isUploading ? 'Uploading...' : 
                           formData.resume ? 'Resume Uploaded!' : 'Click to upload resume'}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {formData.resume ? 
                           `${formData.resume.name} (${(formData.resume.size / 1024 / 1024).toFixed(2)} MB)` : 
                           'Upload PDF or Word document (Max 5MB)'}
                        </p>
                      </div>
                      
                      {!formData.resume && !isUploading && (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          Choose File
                        </motion.button>
                      )}
                    </div>
                    
                    {formData.resume && !isUploading && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData(prev => ({ ...prev, resume: null }));
                          if (fileInputRef.current) {
                            fileInputRef.current.value = '';
                          }
                        }}
                        className="mt-4 text-sm text-rose-600 hover:text-rose-700 font-medium"
                      >
                        Remove File
                      </button>
                    )}
                  </motion.div>
                  
                  <p className="mt-2 text-xs text-slate-500">
                    Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isUploading}
                  className={`w-full py-4 rounded-xl text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${isUploading ? 'bg-gradient-to-r from-slate-400 to-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'}`}
                >
                  {isUploading ? 'Uploading...' : 'Submit MBA Application'}
                </motion.button>
              </form>
            </motion.div>

            {/* Eligibility & Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Program Eligibility
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our MBA program seeks ambitious professionals with strong academic backgrounds and leadership potential.
              </p>
              
              <div className="space-y-4 mb-12">
                {eligibilityPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Benefits Overview */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our MBA?</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${benefit.color} bg-white/10`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-blue-100/80 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Full Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/95 to-purple-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
              <TrendingUpIcon className="w-5 h-5" />
              CAREER TRANSFORMATION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformative <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">Benefits</span>
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Elevate your professional trajectory with comprehensive business education.
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Alumni <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from MBA graduates who transformed their careers with our program.
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
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic text-lg mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
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
                  Ready to Accelerate Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Business Career?</span>
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join ambitious professionals transforming their leadership capabilities and career trajectories through comprehensive business education.
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
                      Begin MBA Application
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.a>
                </div>

                <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Next intake begins • Limited seats available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MBA;
