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
  Upload,
  FileUp,
  X,
  AlertCircle,
  
} from 'lucide-react';
import { useState, useEffect } from 'react';

function DBA() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    specialization: '',
    qualification: '',
    experience: '',
    additionalInfo: '',
    consent: false
  });

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const validExtensions = ['pdf', 'doc', 'docx', 'txt'];
      
      if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
        alert('Please upload a PDF, DOC, DOCX, or TXT file');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    // Reset the file input
    const fileInput = document.getElementById('resume-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Removed file requirement check
    if (!formData.consent) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Create FormData for file upload
      const formDataObj = new FormData();
      
      // Add Web3Forms required fields
      formDataObj.append('access_key', '57f7ee33-9ae4-4e3e-ae91-018650618fcb');
      formDataObj.append('subject', 'New DBA Application');
      formDataObj.append('from_name', 'QualifyLearn Website');
      formDataObj.append('honeypot', '');
      formDataObj.append('botcheck', '');
      
      // Add form data
      formDataObj.append('name', formData.name);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('email', formData.email);
      formDataObj.append('position', formData.position);
      formDataObj.append('specialization', formData.specialization);
      formDataObj.append('qualification', formData.qualification);
      formDataObj.append('experience', formData.experience);
      formDataObj.append('additionalInfo', formData.additionalInfo);
      formDataObj.append('consent', formData.consent ? 'Agreed' : 'Not agreed');
      formDataObj.append('program', 'DBA Program');
      formDataObj.append('source', 'DBA Application Page');
      
      // Add file only if selected (now optional)
      if (selectedFile) {
        formDataObj.append('attachment', selectedFile);
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });
      
      const json = await res.json();

      if (json.success) {
        setSubmitStatus('success');
        setSubmitMessage('DBA application submitted successfully! We will review your submission and contact you within 3-5 business days.');
        
        // Reset form
        e.target.reset();
        setSelectedFile(null);
        setFormData({
          name: '',
          phone: '',
          email: '',
          position: '',
          specialization: '',
          qualification: '',
          experience: '',
          additionalInfo: '',
          consent: false
        });
        
        // Reset file input
        const fileInput = document.getElementById('resume-upload');
        if (fileInput) {
          fileInput.value = '';
        }
        
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(json.message || 'Failed to submit application. Please try again.');
        console.error('Web3Forms Error:', json);
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred while submitting the form. Please check your connection and try again.');
      console.error('Submission Error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const programStats = [
    { icon: <BriefcaseIcon className="w-5 h-5" />, number: '600+', label: 'DBA Graduates', color: 'from-blue-500 to-cyan-500' },
    { icon: <TrendingUpIcon className="w-5 h-5" />, number: '94%', label: 'Career Advancement', color: 'from-emerald-500 to-green-500' },
    { icon: <GlobeIcon className="w-5 h-5" />, number: '50+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
    { icon: <Building className="w-5 h-5" />, number: '25+', label: 'Partner Institutions', color: 'from-amber-500 to-orange-500' },
  ];

  const programHighlights = [
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      title: 'Applied Business Research',
      description: 'Bridge theory and practice through rigorous applied business research.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <TargetIcon2 className="w-6 h-6" />,
      title: 'Executive Focus',
      description: 'Designed for experienced professionals seeking advanced business leadership.',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: <BookOpenIcon className="w-6 h-6" />,
      title: 'Industry-Relevant Curriculum',
      description: 'Cutting-edge business theories applied to real-world organizational challenges.',
      gradient: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <FileCheckIcon className="w-6 h-6" />,
      title: 'Research Support',
      description: 'Comprehensive guidance from research proposal to dissertation completion.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: 'Global Network',
      description: 'Connect with senior executives and business leaders worldwide.',
      gradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
      iconColor: 'text-rose-600'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Flexible Learning',
      description: 'Blended learning approach combining online and intensive workshops.',
      gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      iconColor: 'text-cyan-600'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Admission & Orientation',
      description: 'Comprehensive application review and program orientation.',
      icon: <FileText className="w-5 h-5" />,
      duration: '2-4 weeks',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      step: '02',
      title: 'Core Coursework',
      description: 'Advanced business theory and research methodology courses.',
      icon: <BookOpen className="w-5 h-5" />,
      duration: '12-18 months',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      step: '03',
      title: 'Research Proposal',
      description: 'Develop and defend your applied business research proposal.',
      icon: <Target className="w-5 h-5" />,
      duration: '3-6 months',
      gradient: 'from-emerald-400 to-green-400'
    },
    {
      step: '04',
      title: 'Dissertation Research',
      description: 'Conduct original research and write dissertation.',
      icon: <Search className="w-5 h-5" />,
      duration: '12-18 months',
      gradient: 'from-amber-400 to-orange-400'
    },
    {
      step: '05',
      title: 'Defense & Graduation',
      description: 'Dissertation defense and formal degree conferment.',
      icon: <GraduationCap className="w-5 h-5" />,
      duration: '1-2 months',
      gradient: 'from-rose-400 to-pink-400'
    },
  ];

  const benefits = [
    {
      title: 'Strategic Leadership',
      description: 'Develop advanced strategic thinking and decision-making capabilities.',
      icon: <Crown className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      title: 'Research Expertise',
      description: 'Master applied research methods for business problem-solving.',
      icon: <BookHeart className="w-5 h-5" />,
      color: 'text-amber-400'
    },
    {
      title: 'Global Perspective',
      description: 'Gain international business insights and cross-cultural understanding.',
      icon: <Globe2 className="w-5 h-5" />,
      color: 'text-purple-400'
    },
    {
      title: 'Executive Network',
      description: 'Join elite community of senior business leaders and researchers.',
      icon: <Users2 className="w-5 h-5" />,
      color: 'text-emerald-400'
    },
  ];

  const eligibilityPoints = [
    'Master\'s degree in Business or related field',
    'Professional years of professional experience',
    'Professional years in managerial/leadership roles',
    'Strong academic and professional background',
    'Research proposal demonstrating business relevance',
    'English proficiency (for international programs)'
  ];

  const faqs = [
    {
      question: 'What is the difference between DBA and PhD in Business?',
      answer: 'While both are doctoral degrees, DBA focuses on applied business research and practical problem-solving, whereas PhD is more theoretical and research-oriented for academic careers.'
    },
    {
      question: 'How long does the DBA program take to complete?',
      answer: 'Typically 3-4 years, depending on research complexity, dissertation progress, and individual pace of study.'
    },
    {
      question: 'Is the DBA program suitable for working professionals?',
      answer: 'Yes, DBA programs are specifically designed for working executives with flexible schedules, online components, and intensive workshop formats.'
    },
    {
      question: 'What career opportunities does a DBA provide?',
      answer: 'DBA graduates advance to C-suite positions, executive consulting roles, academic positions, and senior advisory roles in global organizations.'
    }
  ];

  const specializationAreas = [
    'Strategic Management',
    'Organizational Leadership',
    'Global Business',
    'Innovation & Entrepreneurship',
    'Digital Transformation',
    'Financial Management',
    'Marketing Strategy',
    'Operations Management',
    'Human Resource Leadership',
    'Sustainable Business',
    'Corporate Governance',
    'Business Analytics'
  ];

  const careerOutcomes = [
    {
      title: 'Chief Executive Officer',
      icon: '👨‍💼',
      description: 'Lead organizations with strategic vision and research-based insights'
    },
    {
      title: 'Executive Consultant',
      icon: '📊',
      description: 'Provide evidence-based consulting to global corporations'
    },
    {
      title: 'Academic Leader',
      icon: '🎓',
      description: 'Teach and research at top business schools worldwide'
    },
    {
      title: 'Industry Innovator',
      icon: '💡',
      description: 'Drive innovation and transformation in your industry'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. James Wilson',
      role: 'DBA Graduate, CEO TechCorp International',
      quote: 'The DBA program transformed my approach to strategic decision-making with rigorous research methodology and global business perspectives.',
      rating: 5,
      badge: 'STRATEGY LEADER'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'DBA Graduate, Partner McKinsey & Company',
      quote: 'Applied research skills from the DBA program enabled me to provide data-driven solutions to complex business challenges.',
      rating: 5,
      badge: 'CONSULTING EXPERT'
    },
    {
      name: 'Dr. Raj Patel',
      role: 'DBA Graduate, Dean of Business School',
      quote: 'The program provided the perfect blend of academic rigor and practical application for executive leadership development.',
      rating: 5,
      badge: 'ACADEMIC LEADER'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Status Messages */}
      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4`}
        >
          <div className={`p-4 rounded-lg shadow-lg backdrop-blur-lg border ${
            submitStatus === 'success' 
              ? 'bg-gradient-to-r from-green-900/40 to-emerald-900/20 border-green-700/30' 
              : 'bg-gradient-to-r from-red-900/40 to-rose-900/20 border-red-700/30'
          }`}>
            <div className="flex items-center gap-3">
              {submitStatus === 'success' ? (
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              )}
              <div>
                <p className={`font-medium ${
                  submitStatus === 'success' ? 'text-green-200' : 'text-red-200'
                }`}>
                  {submitStatus === 'success' ? 'Success!' : 'Error!'}
                </p>
                <p className="text-sm text-white mt-1">{submitMessage}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

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
                <span className="text-sm font-semibold text-white tracking-wide">EXECUTIVE DOCTORAL PROGRAM</span>
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                  Doctor of Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Administration (DBA)
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-8 text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto font-light leading-relaxed">
                The pinnacle of executive education combining rigorous research with practical 
                business application for senior leaders driving organizational transformation.
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
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('application').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-10 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <BriefcaseIcon className="w-5 h-5" />
                    Begin Executive Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.button>
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
                  <span>50+ Countries</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>94% Career Advancement</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Specializations Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6">
              <TargetIcon2 className="w-5 h-5" />
              SPECIALIZATION AREAS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Business <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Specializations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Focus your executive research on cutting-edge business disciplines and emerging trends.
            </p>
          </motion.div>

          {/* Specializations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {specializationAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                    {index % 4 === 0 ? <BriefcaseIcon className="w-5 h-5" /> : 
                     index % 4 === 1 ? <LineChart className="w-5 h-5" /> : 
                     index % 4 === 2 ? <BarChartIcon className="w-5 h-5" /> : 
                     <TargetIcon2 className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {area}
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
              Distinguished features designed for senior executives and business leaders.
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

      {/* Program Journey */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Your Executive <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Structured pathway from admission to doctoral achievement.
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

      {/* Career Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Executive <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Career Paths</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your career trajectory with advanced business leadership credentials.
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
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-slate-100 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{outcome.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{outcome.title}</h3>
                <p className="text-slate-600">{outcome.description}</p>
              </motion.div>
            ))}
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
                Apply for <span className="text-blue-600">DBA Program</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="57f7ee33-9ae4-4e3e-ae91-018650618fcb" />
                <input type="hidden" name="subject" value="New DBA Application" />
                <input type="hidden" name="from_name" value="QualifyLearn Website" />
                <input type="hidden" name="honeypot" value="" />
                <input type="hidden" name="botcheck" value="" />
                <input type="hidden" name="program" value="DBA Program" />
                <input type="hidden" name="source" value="DBA Application Page" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your phone number"
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
                    required
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Position *</label>
                  <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your current job title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Specialization Interest *</label>
                  <select 
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="" className="text-slate-400">Select specialization area</option>
                    <option value="strategic-management" className="text-slate-900">Strategic Management</option>
                    <option value="organizational-leadership" className="text-slate-900">Organizational Leadership</option>
                    <option value="global-business" className="text-slate-900">Global Business</option>
                    <option value="digital-transformation" className="text-slate-900">Digital Transformation</option>
                    <option value="business-analytics" className="text-slate-900">Business Analytics</option>
                    <option value="innovation-entrepreneurship" className="text-slate-900">Innovation & Entrepreneurship</option>
                    <option value="financial-management" className="text-slate-900">Financial Management</option>
                    <option value="marketing-strategy" className="text-slate-900">Marketing Strategy</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Highest Qualification *</label>
                    <select 
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" className="text-slate-400">Select qualification</option>
                      <option value="masters" className="text-slate-900">Master's Degree</option>
                      <option value="mba" className="text-slate-900">MBA</option>
                      <option value="professional-certification" className="text-slate-900">Professional Certification</option>
                      <option value="other-doctoral" className="text-slate-900">Other Doctoral Degree</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience *</label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" className="text-slate-400">Select experience range</option>
                      <option value="10-15" className="text-slate-900">10-15 years</option>
                      <option value="15-20" className="text-slate-900">15-20 years</option>
                      <option value="20-25" className="text-slate-900">20-25 years</option>
                      <option value="25+" className="text-slate-900">25+ years</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload Section - Now Optional */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Upload Resume/CV (Optional)
                  </label>
                  
                  {/* File Upload Area */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative group"
                  >
                    <input
                      type="file"
                      id="resume-upload"
                      name="attachment"
                      onChange={handleFileChange}
                      disabled={submitting}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
                    
                    {!selectedFile ? (
                      <label
                        htmlFor="resume-upload"
                        className={`flex flex-col items-center justify-center w-full h-40 px-4 transition-all duration-300 rounded-2xl cursor-pointer border-2 border-dashed ${submitting ? 'bg-gray-50 border-gray-300 cursor-not-allowed' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 hover:border-blue-500 hover:bg-blue-50 group-hover:shadow-lg'}`}
                      >
                        <div className={`p-4 mb-4 rounded-xl ${submitting ? 'bg-gray-300' : 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white`}>
                          <FileUp className="w-8 h-8" />
                        </div>
                        <div className="text-center">
                          <p className={`text-lg font-semibold mb-1 ${submitting ? 'text-gray-400' : 'text-slate-800'}`}>
                            {submitting ? 'Uploading...' : 'Click to upload Resume/CV'}
                          </p>
                          <p className={`text-sm mb-2 ${submitting ? 'text-gray-400' : 'text-slate-600'}`}>
                            {submitting ? 'Processing...' : 'or drag and drop'}
                          </p>
                          <p className={`text-xs ${submitting ? 'text-gray-400' : 'text-slate-500'}`}>
                            PDF, DOC, DOCX, TXT (Max 5MB)
                          </p>
                        </div>
                      </label>
                    ) : (
                      <div className="w-full p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-emerald-300 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                              <FileUp className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800 truncate max-w-xs">{selectedFile.name}</h3>
                              <p className="text-sm text-slate-600">{formatFileSize(selectedFile.size)}</p>
                            </div>
                          </div>
                          {!submitting && (
                            <button
                              type="button"
                              onClick={handleRemoveFile}
                              className="p-2 hover:bg-red-50 rounded-full transition-colors"
                              aria-label="Remove file"
                            >
                              <X className="w-5 h-5 text-red-500" />
                            </button>
                          )}
                        </div>
                        <div className="w-full bg-emerald-100 rounded-full h-2">
                          <div className={`bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full ${submitting ? 'animate-pulse' : 'w-full'}`}></div>
                        </div>
                        <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {submitting ? 'Uploading file...' : 'File uploaded successfully'}
                        </p>
                      </div>
                    )}
                  </motion.div>
                  
                  <p className="mt-2 text-xs text-slate-500">
                    Optional: Include detailed professional experience, academic qualifications, and executive achievements
                  </p>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="4"
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Any additional information about your professional background, research interests, or career objectives..."
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="mt-1 w-5 h-5 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-600 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label htmlFor="consent" className={`text-sm ${submitting ? 'text-slate-400' : 'text-slate-600'}`}>
                    I confirm that all information provided is accurate and I authorize the use of my resume/CV for academic evaluation purposes.
                  </label>
                </div>
                
                <motion.button
                  whileHover={submitting ? {} : { scale: 1.02 }}
                  whileTap={submitting ? {} : { scale: 0.98 }}
                  type="submit"
                  disabled={submitting || !formData.consent}
                  className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-cyan-600"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <BriefcaseIcon className="w-5 h-5" />
                      Submit DBA Application
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Eligibility & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Program Eligibility & Benefits
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our DBA program is designed for senior executives and business leaders seeking to advance their strategic capabilities through rigorous applied research.
              </p>
              
              <div className="space-y-4 mb-12">
                {eligibilityPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-6">Executive Advantages</h3>
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

              {/* Application Tips */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-6 border border-cyan-100 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-cyan-600" />
                  <h4 className="text-lg font-bold text-slate-900">Application Tips</h4>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500"></div>
                    <span>Highlight executive leadership experience in your resume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500"></div>
                    <span>Include relevant academic qualifications and publications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500"></div>
                    <span>Describe your research interests and business challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500"></div>
                    <span>Applications reviewed within 3-5 business days</span>
                  </li>
                </ul>
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
              EXECUTIVE ADVANTAGES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformative <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">Benefits</span>
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
              Elevate your executive leadership with advanced research capabilities.
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
              Executive <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from distinguished DBA graduates who transformed their leadership capabilities.
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
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300"
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
              Everything you need to know about the DBA program.
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
                  <BriefcaseIcon className="w-10 h-10" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Ready to Lead with <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Research Insight?</span>
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join elite business leaders advancing organizational strategy through rigorous applied research and executive insight.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('application').scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-12 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <BriefcaseIcon className="w-6 h-6" />
                      Begin DBA Application
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.button>
                </div>

                <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Next cohort begins • Limited executive seats available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DBA;