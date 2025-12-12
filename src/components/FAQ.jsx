/**
 * Enhanced FAQ Component
 * Interactive FAQ with rich content, animations, and better UX
 */

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
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'admissions', label: 'Admissions', count: faqs.filter(f => f.category === 'admissions').length },
    { id: 'applications', label: 'Applications', count: faqs.filter(f => f.category === 'applications').length },
    { id: 'visa', label: 'Visa Support', count: faqs.filter(f => f.category === 'visa').length },
    { id: 'career', label: 'Career Guidance', count: faqs.filter(f => f.category === 'career').length },
    { id: 'financial', label: 'Financial Aid', count: faqs.filter(f => f.category === 'financial').length }
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Open the first matching FAQ if search yields results
    if (e.target.value && filteredFAQs.length > 0) {
      setOpenId(filteredFAQs[0].id);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              SUPPORT CENTER
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Frequently Asked
            </span>{' '}
            <span className="text-slate-900">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Get answers to common questions about our services, processes, and how we can help you 
            achieve your academic goals.
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-4 bg-white border border-blue-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400"
            />
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-slate-500"
              >
                {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-100'
                }`}
              >
                {category.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-blue-100 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 overflow-hidden"
              >
                {/* Question Button */}
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-blue-50/50 transition-colors duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-500">
                      {faq.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 text-left group-hover:text-blue-600 transition-colors duration-300">
                          {faq.question}
                        </h3>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {faq.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats Badge */}
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="hidden sm:block"
                      >
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200">
                          <span className="text-xs font-semibold text-blue-700">
                            {faq.stats}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      className="absolute right-6 top-6"
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-16 border-t border-blue-100 pt-6">
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        
                        {/* Additional Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                          <div className="bg-blue-50/50 rounded-xl p-4">
                            <div className="text-sm font-semibold text-blue-700 mb-1">Key Benefits</div>
                            <ul className="space-y-1 text-sm text-slate-600">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Personalized guidance tailored to your goals
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Access to expert network and resources
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Proven success rates and track record
                              </li>
                            </ul>
                          </div>
                          <div className="bg-cyan-50/50 rounded-xl p-4">
                            <div className="text-sm font-semibold text-cyan-700 mb-1">Next Steps</div>
                            <ul className="space-y-1 text-sm text-slate-600">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                Schedule a free consultation
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                Submit your profile for assessment
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                Receive personalized roadmap
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

          {/* No Results State */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                No questions found
              </h3>
              <p className="text-slate-500 mb-6">
                We couldn't find any questions matching "{searchQuery}". Try a different search term.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View All Questions
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block max-w-2xl">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Our expert advisors are here to help you with personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
                  Contact Support
                </button>
                <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 right-10 w-3 h-3 bg-blue-400 rounded-full hidden md:block"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-4 h-4 bg-cyan-400 rounded-full hidden md:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}

export default FAQ;