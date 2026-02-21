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
  MessageSquare,
  UserCheck
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Fallback for missing Certificate icon
const Certificate = Award;

function HonoraryDoctorate() {
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
    experience: '',
    organization: '',
    achievements: '',
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
    const fileInput = document.getElementById('resume');
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
      formDataObj.append('subject', 'New Honorary Doctorate Application');
      formDataObj.append('from_name', 'Website');
      formDataObj.append('honeypot', '');
      formDataObj.append('botcheck', '');
      
      formDataObj.append('name', formData.name);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('email', formData.email);
      formDataObj.append('position', formData.position);
      formDataObj.append('specialization', formData.specialization);
      formDataObj.append('experience', formData.experience);
      formDataObj.append('organization', formData.organization);
      formDataObj.append('achievements', formData.achievements);
      formDataObj.append('consent', formData.consent ? 'Agreed' : 'Not agreed');
      formDataObj.append('program', 'Honorary Doctorate');
      
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
        setSubmitMessage('Application submitted successfully! Our review panel will evaluate your achievements and contact you shortly.');
        
        e.target.reset();
        setSelectedFile(null);
        setFormData({
          name: '',
          phone: '',
          email: '',
          position: '',
          specialization: '',
          experience: '',
          organization: '',
          achievements: '',
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

  const stats = [
    { icon: Award, number: '3,200+', label: 'Doctorates Conferred' },
    { icon: CheckCircle, number: '98%', label: 'Success Rate' },
    { icon: Globe, number: '60+', label: 'Countries' },
    { icon: Building, number: '25+', label: 'Partner Universities' },
  ];

  const features = [
    {
      icon: BadgeCheck,
      title: 'Globally Accredited',
      description: 'Internationally recognized by accredited universities with full global validity.',
    },
    {
      icon: Crown,
      title: 'Merit-Based Honor',
      description: 'Awarded purely on lifetime achievements and exceptional contributions.',
    },
    {
      icon: Shield,
      title: 'Rigorous Evaluation',
      description: 'Multi-tier review by international academic and industry panels.',
    },
    {
      icon: Users,
      title: 'Elite Network',
      description: 'Join distinguished community of global leaders and visionaries.',
    },
  ];

  const timelineSteps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive eligibility review and achievement evaluation.',
    },
    {
      number: '02',
      title: 'Portfolio Development',
      description: 'Expert curation of your professional achievements portfolio.',
    },
    {
      number: '03',
      title: 'Academic Review',
      description: 'Evaluation by international university boards and expert panels.',
    },
    {
      number: '04',
      title: 'Conferment',
      description: 'Official degree conferment with optional global convocation.',
    },
  ];

  const benefits = [
    {
      title: 'Global Recognition',
      description: 'Internationally recognized title that elevates professional standing worldwide.',
      icon: Globe,
    },
    {
      title: 'Speaking Platforms',
      description: 'Keynote invitations at global conferences and academic summits.',
      icon: Brain,
    },
    {
      title: 'Research Collaboration',
      description: 'Access to exclusive academic networks and research partnerships.',
      icon: Users,
    },
    {
      title: 'Legacy Establishment',
      description: 'Cement lifetime achievements with formal academic recognition.',
      icon: Crown,
    },
  ];

  const eligibilityPoints = [
    '20+ years of distinguished professional experience',
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
      answer: 'Yes, you can choose between virtual conferment or attending a physical convocation ceremony at prestigious university campuses worldwide.'
    },
    {
      question: 'What documents are required?',
      answer: 'Comprehensive professional CV, achievement portfolio, publications/media coverage, recommendation letters, evidence of impact, and any awards or recognitions received.'
    }
  ];

  const specializationAreas = [
    'Business Administration',
    'Technology Management',
    'Healthcare Leadership',
    'Education Innovation',
    'Sustainable Development',
    'Financial Strategy',
    'Creative Arts',
    'Public Policy',
    'Engineering Excellence',
  ];

  const achievementStats = [
    { number: '500+', label: 'Industry Leaders' },
    { number: '60+', label: 'Countries Served' },
    { number: '100+', label: 'Global Partners' },
    { number: '98%', label: 'Satisfaction Rate' },
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
            <Crown className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-xs font-medium text-indigo-700">Honorary Doctorate</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ultimate academic honor for
            <span className="text-indigo-600"> visionary leaders</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Prestigious recognition for exceptional individuals transforming industries 
            and societies through extraordinary achievements.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distinguished features of our honorary doctorate program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Areas of excellence</h2>
            <p className="text-gray-600">Recognizing achievements across diverse fields</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your journey to recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined, transparent process designed for distinguished professionals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-3">{step.number}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {idx < timelineSteps.length - 1 && (
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Begin your honorary journey</h2>
              
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional title *</label>
                  <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="CEO, Founder, Director, etc."
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
                      <option value="business">Business Administration</option>
                      <option value="technology">Technology Management</option>
                      <option value="healthcare">Healthcare Leadership</option>
                    </select>
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization *</label>
                  <input 
                    type="text" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Your organization"
                  />
                </div>

                {/* Resume Upload - Optional */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio <span className="font-normal text-gray-500">(Optional, PDF up to 5MB)</span>
                  </label>
                  
                  {!selectedFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-300 transition-colors">
                      <input
                        type="file"
                        id="resume"
                        onChange={handleFileChange}
                        disabled={submitting}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <label htmlFor="resume" className="cursor-pointer block">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notable achievements</label>
                  <textarea 
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleInputChange}
                    rows={3}
                    disabled={submitting}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                    placeholder="List major awards, publications, patents, or significant contributions..."
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
                    I consent to having my achievements reviewed by the academic panel.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideal candidate profile</h2>
              
              <div className="space-y-3 mb-8">
                {eligibilityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive benefits</h3>
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

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievementStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
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
            <p className="text-gray-600">Everything you need to know about Honorary Doctorate</p>
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
            <Crown className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for your academic legacy?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join distinguished global leaders recognized for their transformative impact.
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
            Next review cycle begins soon • Limited nominations available
          </p>
        </div>
      </section>
    </div>
  );
}

export default HonoraryDoctorate;