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
  Book,
  Lightbulb,
  Sparkles,
  ChevronRight,
  Calendar,
  Clock,
  Briefcase,
  Zap,
  ArrowRight,
  Crown,
  Brain,
  TrendingUp,
  BadgeCheck,
  Rocket,
  BarChart3,
  BookMarked,
  Search,
  Mic,
  Upload,
  X,
  FileCheck,
  DollarSign,
  PieChart,
  Network,
  Download,
  Plus,
  Minus
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
    additionalInfo: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const fileInputRef = useRef(null);

  const programStats = [
    { icon: Briefcase, number: '2,500+', label: 'MBA Graduates' },
    { icon: TrendingUp, number: '92%', label: 'Placement Rate' },
    { icon: DollarSign, number: '45%', label: 'Salary Hike' },
    { icon: Globe, number: '60+', label: 'Countries' },
  ];

  const programHighlights = [
    {
      icon: BarChart3,
      title: 'Industry-Relevant Curriculum',
      description: 'Cutting-edge business concepts aligned with current market demands.',
    },
    {
      icon: Network,
      title: 'Global Business Network',
      description: 'Connect with professionals and alumni across international markets.',
    },
    {
      icon: Target,
      title: 'Career-Focused Learning',
      description: 'Practical skills development for immediate workplace application.',
    },
    {
      icon: PieChart,
      title: 'Specialized Concentrations',
      description: 'Tailor your MBA with focused tracks in high-demand business areas.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry practitioners and academic experts.',
    },
    {
      icon: Rocket,
      title: 'Flexible Formats',
      description: 'Full-time, part-time, online, and executive MBA options available.',
    },
  ];

  const programFormats = [
    {
      title: 'Full-Time MBA',
      duration: '1-2 years',
      description: 'Intensive program for career switchers and recent graduates',
      features: ['Campus immersion', 'Internship opportunities', 'Career services']
    },
    {
      title: 'Executive MBA',
      duration: '18-24 months',
      description: 'Weekend/evening classes for working professionals',
      features: ['Minimal work disruption', 'Peer learning', 'Immediate application']
    },
    {
      title: 'Online MBA',
      duration: 'Flexible',
      description: 'Complete flexibility with virtual learning platform',
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
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Application & Documentation',
      description: 'Submit academic records, test scores, and professional experience.',
    },
    {
      step: '02',
      title: 'Admission Review',
      description: 'Comprehensive evaluation by admissions committee.',
    },
    {
      step: '03',
      title: 'Interview Process',
      description: 'Personal interviews to assess fit and potential.',
    },
    {
      step: '04',
      title: 'Enrollment & Orientation',
      description: 'Program onboarding and academic preparation.',
    },
  ];

  const benefits = [
    {
      title: 'Career Advancement',
      description: 'Accelerate your professional growth and leadership potential.',
      icon: TrendingUp,
    },
    {
      title: 'Leadership Skills',
      description: 'Develop strategic thinking and team management capabilities.',
      icon: Crown,
    },
    {
      title: 'Global Network',
      description: 'Build lifelong connections with business leaders worldwide.',
      icon: Globe,
    },
    {
      title: 'Business Acumen',
      description: 'Master core business functions and strategic decision-making.',
      icon: Brain,
    },
  ];

  const eligibilityPoints = [
    "Bachelor's degree from recognized institution",
    '2-5 years of work experience (varies by program)',
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
      salary: '$120,000+',
      description: 'Advise organizations on strategic challenges'
    },
    {
      title: 'Product Manager',
      salary: '$110,000+',
      description: 'Lead product development and strategy'
    },
    {
      title: 'Investment Banker',
      salary: '$150,000+',
      description: 'Manage corporate finance and investments'
    },
    {
      title: 'Marketing Director',
      salary: '$130,000+',
      description: 'Drive brand strategy and market growth'
    },
  ];

  // Handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setSubmitMessage('File size must be less than 5MB');
        setSubmitStatus('error');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const web3formsData = new FormData();
      web3formsData.append('access_key', '20396432-2a2f-49ed-b82d-c598bfaf2238');
      web3formsData.append('name', formData.name);
      web3formsData.append('phone', formData.phone);
      web3formsData.append('email', formData.email);
      web3formsData.append('position', formData.position);
      web3formsData.append('program', formData.program);
      web3formsData.append('experience', formData.experience);
      web3formsData.append('specialization', formData.specialization);
      web3formsData.append('additional_info', formData.additionalInfo);
      web3formsData.append('form_type', 'MBA Program Application');
      web3formsData.append('subject', `New MBA Application from ${formData.name}`);
      
      if (selectedFile) {
        web3formsData.append('attachment', selectedFile);
      }
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3formsData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Your MBA application has been submitted successfully!');
        setSelectedFile(null);
        setFormData({
          name: '',
          phone: '',
          email: '',
          position: '',
          program: '',
          experience: '',
          specialization: '',
          additionalInfo: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }
  };

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
            <GraduationCap className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-xs font-medium text-indigo-700">Master of Business Administration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transform your career with
            <span className="text-indigo-600"> business leadership</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Comprehensive business education, leadership development, and strategic thinking 
            for today's dynamic global marketplace.
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

      {/* Program Formats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Program formats</h2>
            <p className="text-gray-600">Choose the format that fits your career goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programFormats.map((format, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{format.title}</h3>
                <div className="inline-block px-3 py-1 bg-indigo-50 rounded-full text-xs font-medium text-indigo-600 mb-3">
                  {format.duration}
                </div>
                <p className="text-sm text-gray-600 mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Specialization tracks</h2>
            <p className="text-gray-600">Tailor your MBA to your career aspirations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {specializationTracks.map((track, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-center hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-pointer">
                <span className="text-xs font-medium text-gray-700">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distinguished features that set our MBA program apart
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

      {/* Career Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career outcomes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Launch your career with prestigious roles and competitive compensation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerOutcomes.map((outcome, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{outcome.title}</h3>
                <div className="text-lg font-bold text-indigo-600 mb-3">{outcome.salary}</div>
                <p className="text-xs text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process from application to enrollment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
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

      {/* Application Form Section */}
      <section id="application" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply for MBA program</h2>
              
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current position</label>
                  <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Your current job title"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program *</label>
                    <select 
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select program</option>
                      <option value="Full-Time MBA">Full-Time MBA</option>
                      <option value="Executive MBA">Executive MBA</option>
                      <option value="Online MBA">Online MBA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select years</option>
                      <option value="0-2 years">0-2 years</option>
                      <option value="2-5 years">2-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialization interest</label>
                  <select 
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select specialization</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Business Analytics">Business Analytics</option>
                  </select>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV <span className="font-normal text-gray-500">(Optional, PDF up to 5MB)</span>
                  </label>
                  
                  {!selectedFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-300 transition-colors">
                      <input
                        type="file"
                        id="resume-upload"
                        ref={fileInputRef}
                        onChange={handleFileChange}
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your career goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program eligibility</h2>
              
              <div className="space-y-3 mb-8">
                {eligibilityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Why choose our MBA?</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-gray-600">Quick answers about our MBA program</p>
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
            <GraduationCap className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to accelerate your career?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join ambitious professionals transforming their leadership capabilities.
          </p>
          <a
            href="#application"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Begin Application
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-2">
            <Clock className="w-3 h-3" />
            Next intake begins soon • Limited seats available
          </p>
        </div>
      </section>
    </div>
  );
}

export default MBA;