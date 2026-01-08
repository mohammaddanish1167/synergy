import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink, Users, Award, BookOpen, Shield, Star, University, Target, Handshake } from 'lucide-react';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const EuroAsianUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'EuroAsian University',
    logo: EuroAsianLogo,
    link: 'https://euroasianuniversity.edu/',
    color: 'from-blue-600 to-indigo-700',
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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-700 mb-8 transition-colors group bg-white px-4 py-2 rounded-xl shadow-sm"
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
          <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4" /> Verified Partner
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {university.heroText}
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  {university.aboutDescription}
                </p>
                
                
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-4">
                  <University className="w-8 h-8 text-blue-600" />
                </div>
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
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${university.color} text-white shadow-md`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
                    <div className="text-blue-600 font-medium">{stat.label}</div>
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
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100"
        >
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Partners */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <Handshake className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-blue-900">Affiliations & Partners</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {university.partners.map((partner, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl p-2 bg-blue-50 rounded-xl">{partner.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-blue-900 mb-1">{partner.name}</h3>
                            <p className="text-blue-600 text-sm font-medium">{partner.type}</p>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-xs text-gray-500">Verified</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact & Info */}
              <div className="space-y-8">
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl text-blue-900">
                      Contact Information
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-blue-500">Location</div>
                        <div className="font-medium text-blue-900">{university.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-blue-500">Status</div>
                        <div className="font-medium text-blue-900">Verified Partner</div>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-blue-100">
                      <p className="text-blue-700 mb-4 text-sm leading-relaxed">
                        Interested in applying to {university.name} or learning more about our partnership opportunities?
                      </p>
                      <button 
                        onClick={() => navigate('/contact')}
                        className="w-full px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Contact QualifyLearn
                      </button>
                    </div>
                  </div>
                </div>

                {/* About Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 shadow-sm">
                  <h3 className="font-bold text-xl text-blue-900 mb-6">About {university.name}</h3>
                  <p className="text-blue-700 leading-relaxed mb-6">
                    {university.description}
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <img 
                      src={university.logo} 
                      alt={university.name} 
                      className="h-16 w-auto object-contain mx-auto"
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
         
        </motion.div>
      </div>
    </div>
  );
};

export default EuroAsianUniversity;