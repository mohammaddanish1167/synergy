import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  Users, 
  CheckCircle, 
  GraduationCap, 
  Star,
  Shield,
  FileText,
  Target,
  Lightbulb,
  Sparkles,
  ChevronRight,
  Calendar,
  Clock,
  Building,
  FileCheck,
  Briefcase,
  ArrowRight,
  Crown,
  Brain,
  TrendingUp,
  BadgeCheck,
  Rocket,
  Search,
  Upload,
  X,
  FileUp,
  Plus,
  Minus,
  BarChart,
  LineChart,
  Settings,
  Target as TargetIcon,
  BookOpen,
  BarChart3
} from 'lucide-react';
import { useState, useEffect } from 'react';

function DBA() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  
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
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
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
    
    if (!formData.consent) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const formDataObj = new FormData();
      formDataObj.append('access_key', '39abe0c3-8f53-46e1-831e-74da0d049d2d');
      formDataObj.append('subject', 'New DBA Application');
      formDataObj.append('from_name', 'Website');
      formDataObj.append('honeypot', '');
      formDataObj.append('botcheck', '');
      
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
        setSubmitMessage('DBA application submitted successfully! We will contact you within 3-5 business days.');
        
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
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Failed to submit application. Please try again.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const programStats = [
    { icon: Briefcase, number: '600+', label: 'DBA Graduates' },
    { icon: TrendingUp, number: '94%', label: 'Career Advancement' },
    { icon: Globe, number: '50+', label: 'Countries' },
    { icon: Building, number: '25+', label: 'Partner Institutions' },
  ];

  const programHighlights = [
    {
      icon: BarChart3,
      title: 'Applied Business Research',
      description: 'Bridge theory and practice through rigorous applied business research.',
    },
    {
      icon: TargetIcon,
      title: 'Executive Focus',
      description: 'Designed for experienced professionals seeking advanced business leadership.',
    },
    {
      icon: BookOpen,
      title: 'Industry-Relevant Curriculum',
      description: 'Cutting-edge business theories applied to real-world organizational challenges.',
    },
    {
      icon: FileCheck,
      title: 'Research Support',
      description: 'Comprehensive guidance from research proposal to dissertation completion.',
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with senior executives and business leaders worldwide.',
    },
    {
      icon: Rocket,
      title: 'Flexible Learning',
      description: 'Blended learning approach combining online and intensive workshops.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Admission & Orientation',
      description: 'Comprehensive application review and program orientation.',
    },
    {
      step: '02',
      title: 'Core Coursework',
      description: 'Advanced business theory and research methodology courses.',
    },
    {
      step: '03',
      title: 'Research Proposal',
      description: 'Develop and defend your applied business research proposal.',
    },
    {
      step: '04',
      title: 'Dissertation Research',
      description: 'Conduct original research and write dissertation.',
    },
    {
      step: '05',
      title: 'Defense & Graduation',
      description: 'Dissertation defense and formal degree conferment.',
    },
  ];

  const benefits = [
    {
      title: 'Strategic Leadership',
      description: 'Develop advanced strategic thinking and decision-making capabilities.',
      icon: Crown,
    },
    {
      title: 'Research Expertise',
      description: 'Master applied research methods for business problem-solving.',
      icon: Brain,
    },
    {
      title: 'Global Perspective',
      description: 'Gain international business insights and cross-cultural understanding.',
      icon: Globe,
    },
    {
      title: 'Executive Network',
      description: 'Join elite community of senior business leaders and researchers.',
      icon: Users,
    },
  ];

  const eligibilityPoints = [
    'Master\'s degree in Business or related field',
    '10+ years of professional experience',
    '5+ years in managerial/leadership roles',
    'Strong academic and professional background',
    'Research proposal demonstrating business relevance',
    'English proficiency (for international programs)'
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
      description: 'Lead organizations with strategic vision and research-based insights'
    },
    {
      title: 'Executive Consultant',
      description: 'Provide evidence-based consulting to global corporations'
    },
    {
      title: 'Academic Leader',
      description: 'Teach and research at top business schools worldwide'
    },
    {
      title: 'Industry Innovator',
      description: 'Drive innovation and transformation in your industry'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. James Wilson',
      role: 'DBA Graduate, CEO TechCorp International',
      quote: 'The DBA program transformed my approach to strategic decision-making with rigorous research methodology and global business perspectives.',
      badge: 'STRATEGY LEADER'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'DBA Graduate, Partner McKinsey & Company',
      quote: 'Applied research skills from the DBA program enabled me to provide data-driven solutions to complex business challenges.',
      badge: 'CONSULTING EXPERT'
    },
    {
      name: 'Dr. Raj Patel',
      role: 'DBA Graduate, Dean of Business School',
      quote: 'The program provided the perfect blend of academic rigor and practical application for executive leadership development.',
      badge: 'ACADEMIC LEADER'
    },
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

  return (
    <div className="min-h-screen bg-white">
      {/* Notification Toast */}
      {submitStatus && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          <div className={`bg-white rounded-xl shadow-lg border p-4 flex items-start gap-3 ${
            submitStatus === 'success' ? 'border-green-200' : 'border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <span className="text-red-500 text-lg">⚠️</span>
            )}
            <p className="text-sm text-gray-800">{submitMessage}</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-indigo-50 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-xs font-medium text-indigo-700">Doctor of Business Administration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Executive doctoral program for
            <span className="text-indigo-600"> senior business leaders</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The pinnacle of executive education combining rigorous research with practical 
            business application for senior leaders driving organizational transformation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center">
                  <Icon className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distinguished features designed for senior executives and business leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programHighlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Specialization areas</h2>
            <p className="text-gray-600">Focus your executive research on cutting-edge business disciplines</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {specializationAreas.map((area, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                <span className="text-sm font-medium text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your executive journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured pathway from admission to doctoral achievement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-3">{step.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Executive career paths</h2>
            <p className="text-gray-600">Transform your career trajectory with advanced business leadership</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {careerOutcomes.map((outcome, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{outcome.title}</h3>
                <p className="text-xs text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for DBA program</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="20396432-2a2f-49ed-b82d-c598bfaf2238" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current position *</label>
                  <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Your current job title"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization *</label>
                    <select 
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="strategic-management">Strategic Management</option>
                      <option value="organizational-leadership">Organizational Leadership</option>
                      <option value="digital-transformation">Digital Transformation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification *</label>
                    <select 
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="masters">Master's Degree</option>
                      <option value="mba">MBA</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience *</label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select</option>
                    <option value="10-15">10-15 years</option>
                    <option value="15-20">15-20 years</option>
                    <option value="20-25">20-25 years</option>
                    <option value="25+">25+ years</option>
                  </select>
                </div>

                {/* Resume Upload - Optional */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV <span className="font-normal text-gray-500">(Optional, PDF up to 5MB)</span>
                  </label>
                  
                  {!selectedFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-300 transition-colors">
                      <input
                        type="file"
                        id="resume-upload"
                        onChange={handleFileChange}
                        disabled={submitting}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer block">
                        <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                        <span className="text-sm text-gray-600">
                          Click to upload or drag and drop
                        </span>
                      </label>
                    </div>
                  ) : (
                    <div className="border border-green-200 bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700 truncate max-w-[200px]">{selectedFile.name}</span>
                          <span className="text-xs text-gray-500">({formatFileSize(selectedFile.size)})</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-1 hover:bg-red-100 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional information</label>
                  <textarea 
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your professional background and research interests..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I confirm that all information provided is accurate for academic evaluation.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting || !formData.consent}
                  className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right column - Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility criteria</h2>
              
              <div className="space-y-3 mb-8">
                {eligibilityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive advantages</h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Icon className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h4>
                        <p className="text-xs text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Application Tips */}
              <div className="mt-8 bg-indigo-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-semibold text-gray-900">Application tips</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400"></div>
                    <span>Highlight executive leadership experience in your resume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400"></div>
                    <span>Describe your research interests and business challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400"></div>
                    <span>Applications reviewed within 3-5 business days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive success stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from distinguished DBA graduates who transformed their leadership capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{testimonial.role}</p>
                  <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded">
                    {testimonial.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-gray-600">Everything you need to know about the DBA program</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex p-3 bg-indigo-100 rounded-xl mb-6">
            <Briefcase className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to lead with research insight?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join elite business leaders advancing organizational strategy through rigorous applied research.
          </p>
          <a
            href="#application"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Begin DBA Application
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-2">
            <Clock className="w-3 h-3" />
            Next cohort begins soon • Limited executive seats available
          </p>
        </div>
      </section>
    </div>
  );
}

export default DBA;