/**
 * Redesigned FAQ Component
 * Clean, minimal design with improved visual hierarchy
 */

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, BookOpen, GraduationCap, Globe, Briefcase, Users } from 'lucide-react';

function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      question: 'How does QualifyLearn help with university selection?',
      answer: 'Our AI-powered matching system analyzes your academic profile, career goals, and personal preferences to recommend the best-fit universities from our database of 500+ global institutions. We provide detailed comparisons, success rates, and alumni outcomes for each recommendation.',
      category: 'admissions',
      icon: <BookOpen className="w-5 h-5" />,
      stats: '98% Match Accuracy',
      tags: ['University Selection', 'Program Matching', 'AI Analysis']
    },
    {
      id: 2,
      question: 'What is included in the application support package?',
      answer: 'Our comprehensive package includes SOP/LOR development, portfolio review, resume optimization, interview preparation (with mock sessions), scholarship application support, and document verification. Each service is tailored to your specific programs and universities.',
      category: 'applications',
      icon: <GraduationCap className="w-5 h-5" />,
      stats: '500+ Successful Applications',
      tags: ['SOP Development', 'Interview Prep', 'Scholarships']
    },
    {
      id: 3,
      question: 'Do you assist with visa applications for international students?',
      answer: 'Yes, we provide complete visa assistance including document preparation, financial planning, interview simulation, and post-approval support for 30+ countries. Our success rate for visa approvals is 99%, with dedicated experts for each country.',
      category: 'visa',
      icon: <Globe className="w-5 h-5" />,
      stats: '99% Visa Success Rate',
      tags: ['Visa Support', 'Documentation', 'Country Experts']
    },
    {
      id: 4,
      question: 'What kind of career counseling do you provide?',
      answer: 'Our career counseling includes industry analysis, skill gap assessment, long-term career roadmap development, networking strategy, and interview preparation with industry-specific mock sessions. We connect you with 200+ industry mentors for personalized guidance.',
      category: 'career',
      icon: <Briefcase className="w-5 h-5" />,
      stats: '85% Higher Salary Outcomes',
      tags: ['Career Planning', 'Industry Insights', 'Mentorship']
    },
    {
      id: 5,
      question: 'How long does the entire process typically take?',
      answer: 'The timeline varies based on your goals and preparation level. Typically: 2-4 weeks for program selection, 4-8 weeks for application preparation, 2-6 weeks for university responses, and 4-8 weeks for visa processing. We provide a personalized timeline with milestone tracking.',
      category: 'process',
      icon: <HelpCircle className="w-5 h-5" />,
      stats: 'Personalized Timeline',
      tags: ['Timeline', 'Milestones', 'Progress Tracking']
    },
    {
      id: 6,
      question: 'What makes QualifyLearn different from other consultancies?',
      answer: 'Our unique approach combines AI technology with human expertise, offers 360-degree support from selection to career placement, provides access to 200+ industry mentors, maintains a 98.7% success rate, and offers transparent pricing with a satisfaction guarantee.',
      category: 'general',
      icon: <Users className="w-5 h-5" />,
      stats: '98.7% Success Rate',
      tags: ['AI Technology', 'Expert Network', 'Transparency']
    },
    {
      id: 7,
      question: 'Do you offer scholarships or financial aid guidance?',
      answer: 'Yes, we identify and apply for scholarships worth $15M+ annually. Our scholarship optimization includes matching with eligibility criteria, essay coaching, application strategy, and negotiation support for financial aid packages.',
      category: 'financial',
      icon: <HelpCircle className="w-5 h-5" />,
      stats: '$15M+ Secured Funding',
      tags: ['Scholarships', 'Financial Aid', 'Funding']
    },
    {
      id: 8,
      question: 'What support do you provide after admission?',
      answer: 'Our post-admission support includes accommodation assistance, pre-departure orientation, airport pickup coordination, bank account setup, and ongoing academic support. We also provide access to our alumni network for continued guidance.',
      category: 'post-admission',
      icon: <HelpCircle className="w-5 h-5" />,
      stats: 'Ongoing Support',
      tags: ['Post-Admission', 'Alumni Network', 'Settling In']
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: faqs.length },
    { id: 'admissions', label: 'Admissions', count: faqs.filter(f => f.category === 'admissions').length },
    { id: 'applications', label: 'Applications', count: faqs.filter(f => f.category === 'applications').length },
    { id: 'visa', label: 'Visa', count: faqs.filter(f => f.category === 'visa').length },
    { id: 'career', label: 'Career', count: faqs.filter(f => f.category === 'career').length },
    { id: 'financial', label: 'Financial', count: faqs.filter(f => f.category === 'financial').length }
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      {/* Clean background with subtle texture */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              Support & Guidance
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4"
          >
            Frequently asked
            <span className="block font-medium mt-2 text-slate-700">questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Everything you need to know about our services and how we can help you achieve your academic goals.
          </motion.p>
        </div>

        {/* Search - Clean and minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:bg-white transition-colors duration-200"
            />
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400"
              >
                {filteredFAQs.length} results
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Category tabs - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-10 border-b border-slate-200"
        >
          <div className="flex flex-wrap gap-1 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-200 relative ${
                  activeCategory === category.id
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {category.label}
                <span className={`ml-2 text-xs ${
                  activeCategory === category.id ? 'text-slate-400' : 'text-slate-400'
                }`}>
                  {category.count}
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items - Clean accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors duration-200"
              >
                {/* Question button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center gap-4"
                >
                  {/* Icon - minimal */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                    {faq.icon}
                  </div>

                  {/* Question and tags */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-slate-900 mb-1.5">
                      {faq.question}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {faq.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {faq.tags.length > 2 && (
                        <span className="px-2 py-0.5 text-slate-400 text-xs">
                          +{faq.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Chevron and stats */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    {/* Stats - subtle */}
                    <div className="hidden md:block text-xs text-slate-400">
                      {faq.stats}
                    </div>
                    
                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-300"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[72px] pr-20 border-t border-slate-100 pt-5">
                        <p className="text-sm text-slate-600 leading-relaxed mb-5">
                          {faq.answer}
                        </p>
                        
                        {/* Additional info - minimal */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                              Key Benefits
                            </h4>
                            <ul className="space-y-1.5">
                              <li className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
                                Personalized guidance
                              </li>
                              <li className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
                                Expert network access
                              </li>
                              <li className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
                                Proven success rates
                              </li>
                            </ul>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-4">
                            <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                              Next Steps
                            </h4>
                            <ul className="space-y-1.5">
                              <li className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
                                Free consultation
                              </li>
                              <li className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
                                Profile assessment
                              </li>
                              <li className="text-xs text-slate-600 flex items-start gap-2">
                                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
                                Personalized roadmap
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* No results */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-700 mb-2">
                No results found
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-5 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-200"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-medium text-slate-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Our team is here to help you with personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  Contact support
                </Link>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-guidance-modal'))}
                  className="px-6 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors duration-200"
                >
                  Schedule call
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;