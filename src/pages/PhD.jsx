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
  Sparkles,
  ChevronRight,
  Clock,
  Shield,
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
  Calendar,
  Crown,
  Brain,
  BadgeCheck,
  Rocket,
  BarChart3,
  BookMarked,
  FileCheck,
  Search,
  Layers,
  ClipboardCheck,
  Download,
  Upload,
  Plus,
  Minus
} from 'lucide-react';
import { useState } from 'react';

function PhD() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const programStats = [
    { icon: GraduationCap, number: '800+', label: 'PhD Graduates' },
    { icon: Award, number: '97%', label: 'Success Rate' },
    { icon: Target, number: '60+', label: 'Research Areas' },
    { icon: Globe, number: '25+', label: 'Partner Universities' },
  ];

  const programHighlights = [
    {
      icon: BadgeCheck,
      title: 'Awarded by Top Universities',
      description: 'Partnered with globally accredited institutions across India, USA, Europe, and Asia.',
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Your research contributions validated by internationally respected academic institutions.',
    },
    {
      icon: BookMarked,
      title: 'Research-Focused Approach',
      description: 'Dedicated to advancing knowledge through groundbreaking research and innovation.',
    },
    {
      icon: FileCheck,
      title: 'End-to-End Support',
      description: 'Comprehensive guidance from proposal development to dissertation defense.',
    },
    {
      icon: Users,
      title: 'Expert Panel Evaluation',
      description: 'Rigorous review by distinguished academic and industry expert panels.',
    },
    {
      icon: Rocket,
      title: 'Flexible Learning Options',
      description: 'Choose between virtual research supervision or campus-based convocation events.',
    },
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
  ];

  const targetAudience = [
    'Academic researchers and scholars',
    'Industry professionals advancing knowledge',
    'University faculty seeking research advancement',
    'Professionals with Master\'s degree seeking doctoral recognition',
    'Research scientists and innovators',
    'Thought leaders contributing to academic discourse'
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Eligibility Assessment',
      description: 'Comprehensive evaluation of your academic background and research potential.',
    },
    {
      number: '02',
      title: 'Research Proposal',
      description: 'Expert guidance in crafting innovative and feasible research proposals.',
    },
    {
      number: '03',
      title: 'Panel Review',
      description: 'Evaluation by distinguished academic committees and research boards.',
    },
    {
      number: '04',
      title: 'Supervision',
      description: 'Dedicated mentorship throughout your research journey.',
    },
    {
      number: '05',
      title: 'Dissertation',
      description: 'Support for final research submission and defense preparation.',
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
    }
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
        setSubmitMessage('Application submitted successfully! Our admissions team will contact you shortly.');
        form.reset();
        setSelectedFile(null);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus('error');
        setSubmitMessage('File size must be less than 5MB');
        return;
      }
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
 

      {/* Notification Toast */}
      {submitStatus && (
        <div className="fixed top-20 right-4 z-50 max-w-md">
          <div className={`bg-white rounded-xl shadow-lg border p-4 flex items-start gap-3 ${
            submitStatus === 'success' ? 'border-green-200' : 'border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <span className="text-red-500 text-lg">⚠️</span>
            )}
            <div>
              <p className="text-sm text-gray-800">{submitMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Clean and minimal */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-indigo-50 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-xs font-medium text-indigo-700">Doctor of Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Advance knowledge through
            <span className="text-indigo-600"> original research</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The pinnacle of academic achievement for researchers, scholars, and innovators 
            dedicated to advancing knowledge in their fields.
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

      {/* Research Fields */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Research areas</h2>
            <p className="text-gray-600">Explore cutting-edge research opportunities</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {researchFields.map((field, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-pointer">
                {field}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights - Card grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features designed for serious researchers and academic innovators
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

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your research journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured pathway from research conception to doctoral achievement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-3">{step.number}</div>
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

      {/* Application Form */}
      <section id="application" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Begin your research journey</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="20396432-2a2f-49ed-b82d-c598bfaf2238" />
                <input type="hidden" name="subject" value="New PhD Program Application" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full name *</label>
                    <input 
                      type="text" 
                      name="name"
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
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Research interest *</label>
                  <input 
                    type="text" 
                    name="research_interest"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Your primary research area"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program *</label>
                    <select 
                      name="program"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select program</option>
                      <option value="PhD in Management">PhD in Management</option>
                      <option value="PhD in Technology">PhD in Technology</option>
                      <option value="PhD in Social Sciences">PhD in Social Sciences</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification *</label>
                    <select 
                      name="qualification"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white"
                    >
                      <option value="">Select</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Professional Certification">Professional Certification</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV <span className="font-normal text-gray-500">(Optional, PDF up to 5MB)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-300 transition-colors">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-600">
                        {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional information</label>
                  <textarea 
                    name="additional_info"
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your research experience..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to having my credentials reviewed and agree to the program terms.
                  </label>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideal candidate profile</h2>
              
              <div className="space-y-3 mb-8">
                {targetAudience.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick contact */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Need research guidance?</h3>
                <div className="space-y-3">
                  <a href="mailto:phd@synergyscholars.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                    <Mail className="w-4 h-4" />
                    phd@synergyscholars.com
                  </a>
                  <a href="tel:+19177304763" className="flex items-center gap-3 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    +1 917 730 4763
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-gray-600">Quick answers about our PhD program</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to advance knowledge?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of scholars dedicated to groundbreaking research.
          </p>
          <a
            href="#application"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Begin Application
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Simple footer */}
  
    </div>
  );
}

export default PhD;