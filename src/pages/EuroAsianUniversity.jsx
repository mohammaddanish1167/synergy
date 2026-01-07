import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink, Users, Award, BookOpen, Shield } from 'lucide-react';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const EuroAsianUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'EuroAsian University',
    logo: EuroAsianLogo,
    link: 'https://euroasianuniversity.edu/',
    color: 'from-rose-600 to-red-600',
    verified: true,
    location: 'Estonia',
    heroText: 'Academic Partners & Affiliations',
    description: 'Euro-Asian University bridges the East and West, offering a unique blend of educational philosophies. We specialize in fostering connections and understanding between diverse regions.',
    aboutDescription: 'The EuroAsian University is proud to collaborate with esteemed educational institutions, governmental bodies, and international organizations. These strategic partnerships enhance our academic programs, research opportunities, and global recognition while providing our students with exceptional international experiences.',
    partners: [
      { name: 'Republic of Estonia', icon: '🏛️', type: 'Government Partner' },
      { name: 'AEUP', icon: '🎓', type: 'Academic Association' },
      { name: 'NEA', icon: '🌐', type: 'Educational Partner' },
      { name: 'KEG', icon: '🤝', type: 'Educational Partner' },
      { name: 'ECNAIS', icon: '🏫', type: 'School Network' },
      { name: 'BERA', icon: '🔬', type: 'Research Partner' },
      { name: 'ISO 9001', icon: '✅', type: 'Quality Certified' },
      { name: 'Estonian Education Ministry', icon: '📜', type: 'Government Partner' }
    ],
    stats: [
      { value: '20+', label: 'Global Partners', icon: <Users className="w-6 h-6" /> },
      { value: '100%', label: 'Quality Certified', icon: <Shield className="w-6 h-6" /> },
      { value: '50+', label: 'Programs Offered', icon: <BookOpen className="w-6 h-6" /> },
      { value: 'A+', label: 'Accreditation', icon: <Award className="w-6 h-6" /> }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Verified Partner</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {university.heroText}
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                  {university.aboutDescription}
                </p>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={university.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 rounded-xl hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl"
                  >
                    Visit Official Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    Contact Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <img 
                  src={university.logo} 
                  alt={university.name} 
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {university.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${university.color} text-white`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Partners */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Affiliations & Partners</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {university.partners.map((partner, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-rose-200 hover:bg-gradient-to-br hover:from-rose-50 hover:to-red-50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{partner.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{partner.name}</h3>
                            <p className="text-gray-600 text-sm">{partner.type}</p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact & Info */}
              <div className="space-y-8">
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-rose-500" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                      <span>Location: {university.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Status: Verified Partner</span>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <p className="text-gray-600 mb-4 text-sm">
                        Interested in applying to {university.name} or learning more about our partnership opportunities?
                      </p>
                      <button 
                        onClick={() => navigate('/contact')}
                        className="w-full px-4 py-3 bg-gradient-to-r from-rose-600 to-red-600 text-white font-medium rounded-xl hover:from-rose-700 hover:to-red-700 transition-all shadow-lg hover:shadow-rose-500/30"
                      >
                        Contact QualifyLearn
                      </button>
                    </div>
                  </div>
                </div>

                {/* About Card */}
                <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-6 border border-rose-100">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">About {university.name}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {university.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <img 
                      src={university.logo} 
                      alt={university.name} 
                      className="h-16 w-auto object-contain opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-rose-500 to-red-500 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have benefited from our partnership with EuroAsian University
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Apply Now
              </button>
              <a 
                href={university.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Visit University Website
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EuroAsianUniversity;