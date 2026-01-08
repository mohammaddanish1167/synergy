import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink, Award, Shield, BookOpen, Users, Building, Flag, GraduationCap, Star } from 'lucide-react';
import KennedyBaptistLogo from '../assets/baptlist.png';

const KennedyBaptistUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'Kennedy Baptist University', 
    logo: KennedyBaptistLogo, 
    link: 'https://kennedybaptistuniversity.com/', 
    color: 'from-blue-700 to-blue-900',
    gradient: 'bg-gradient-to-r from-blue-700 to-blue-900',
    lightColor: 'from-blue-50 to-blue-100',
    verified: true,
    location: 'Florida, USA (Headquarters) & Global Recognition',
    type: 'Religious College & Higher Education Institution'
  };

  const accreditations = [
    {
      title: "FLORIDA DEPARTMENT OF EDUCATION (USA)",
      description: "Kennedy Baptist University has been granted an Annual Verification as a Religious College by the Florida Department of Education Commission for Independent Education.",
      highlights: [
        "Officially registered with the Florida Department of Education",
        "Authorized to award religious degrees and certificates",
        "Annual verification ensures compliance with state regulations",
        "Legally recognized religious education institution in Florida"
      ],
      icon: "🇺🇸",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "EUROPEAN COUNCIL OF LEADING BUSINESS SCHOOLS (ECLBS)",
      description: "Kennedy Baptist University has gained membership with the European Council of Leading Business Schools (ECLBS), ensuring institutions meet the highest internationally recommended level of quality.",
      highlights: [
        "ECLBS recognized by:",
        "• CHEA CIQG USA - Council for Higher Education Accreditation Quality International Group",
        "• ANQAHE - Bilateral Recognition Agreement with Arab Network for Quality Assurance in Higher Education",
        "• UM - Listed on Union of International Associations with UNESCO consultative status",
        "• INOAAHE - International Network For Quality Assurance Agencies in Higher Education in Europe"
      ],
      note: "ECLBS has a board of trustees representing state and private organizations from different countries.",
      icon: "🇪🇺",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "KENNEDY UNIVERSITY PARTNERSHIP",
      description: "Kennedy Baptist University maintains a strategic partnership with Kennedy University (France). Credits earned at Kennedy Baptist University are recognized by Kennedy University, and vice versa.",
      highlights: [
        "Students can pursue double degrees in partnership with Kennedy University",
        "Mutual credit recognition between both institutions",
        "Collaborative academic programs and research initiatives",
        "Global network of students and alumni"
      ],
      icon: "🤝",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "INTERNATIONAL ACCREDITATION NETWORKS",
      description: "Kennedy Baptist University is recognized by multiple international accreditation networks and quality assurance bodies through its ECLBS membership.",
      highlights: [
        "Quality assurance through international standards",
        "Recognition in European higher education circles",
        "Access to global academic networks",
        "International peer review and quality assessment"
      ],
      icon: "🌍",
      iconColor: "bg-blue-100 text-blue-700"
    }
  ];

  const features = [
    {
      title: 'Ethical Leadership',
      description: 'Integrating moral and ethical principles with academic excellence',
      icon: '⚖️',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Community Engagement',
      description: 'Active participation in social and community development',
      icon: '🤝',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Holistic Education',
      description: 'Nurturing intellectual, spiritual, and personal growth',
      icon: '🎓',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Supportive Environment',
      description: 'Personalized attention and mentorship for all students',
      icon: '❤️',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Global Perspective',
      description: 'International partnerships and cross-cultural learning',
      icon: '🌐',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Flexible Learning',
      description: 'Online and distance learning options available',
      icon: '💻',
      iconColor: 'bg-blue-100'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Partners
        </button>

        {/* Fixed Hero Section - Dark Blue Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          {/* Dark Blue Gradient Background */}
          <div className={`h-64 md:h-72 rounded-3xl ${university.gradient} relative overflow-hidden shadow-2xl`}>
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-800/30 z-0" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8">
              {/* University Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 md:mb-0">
                {/* Logo Container - White Background */}
                <div className="bg-white p-4 rounded-2xl shadow-2xl border border-blue-200">
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="w-24 h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>
                
                {/* Text Content - White Text */}
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {university.name}
                  </h1>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-white/30">
                      <MapPin className="w-4 h-4" />
                      {university.location}
                    </span>
                    
                    <span className="inline-flex px-3 py-1.5 bg-white/25 backdrop-blur-sm rounded-full text-sm text-white border border-white/40">
                      {university.type}
                    </span>
                    
                    {university.verified && (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-500/30 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-emerald-400/50">
                        <CheckCircle className="w-4 h-4" />
                        Verified Partner
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Visit Website Button - White with Blue Text */}
             
            </div>
          </div>

          {/* Quick Stats - White Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4"
          >
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">4+</div>
              <div className="text-sm text-blue-600">Accreditations</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">USA</div>
              <div className="text-sm text-blue-600">Headquarters</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">Dual</div>
              <div className="text-sm text-blue-600">Degree Options</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">100%</div>
              <div className="text-sm text-blue-600">Legal Recognition</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Banner - Dark Blue Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className={`rounded-3xl p-8 text-white relative overflow-hidden shadow-xl ${university.gradient}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Award className="w-7 h-7" />
                MISSION & VALUES
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
                Kennedy Baptist University combines academic rigor with moral and ethical leadership training. We are dedicated to nurturing well-rounded individuals who make a positive impact on society.
              </p>
              
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* University Features - White Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${university.gradient} text-white shadow-lg`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Educational Philosophy</h2>
                  <p className="text-blue-600 font-medium">Our commitment to holistic development and ethical leadership</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 group shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-2xl ${feature.iconColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-blue-700 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Accreditation Details - White Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${university.gradient} text-white shadow-lg`}>
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Official Accreditations & Recognitions</h2>
                  <p className="text-blue-600 font-medium">Kennedy Baptist University's legal status and quality assurances</p>
                </div>
              </div>

              <div className="space-y-8">
                {accreditations.map((acc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="pb-8 border-b border-blue-100 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-2xl ${acc.iconColor} p-4 rounded-xl shadow-sm`}>
                        {acc.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{acc.title}</h3>
                        <p className="text-blue-700 mb-4">{acc.description}</p>
                        
                        {acc.highlights && (
                          <ul className="space-y-2 mb-4">
                            {acc.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-blue-800">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {acc.note && (
                          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                            <p className="text-blue-700 text-sm italic">{acc.note}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Important Notes - Blue Background with White Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`rounded-3xl p-8 border border-blue-200 shadow-lg ${university.gradient}`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                Important Information
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <h4 className="font-bold text-white mb-2">Degree Classification</h4>
                  <p className="text-blue-100 text-sm">
                    Kennedy Baptist University awards religious degrees verified by the Florida Department of Education. As a religious college, it offers specialized programs integrating faith and learning, with degrees recognized through its international accreditation networks.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <h4 className="font-bold text-white mb-2">Partnership Benefits</h4>
                  <p className="text-blue-100 text-sm">
                    • Dual degree options available with Kennedy University (France)<br/>
                    • Mutual credit recognition between partner institutions<br/>
                    • Access to global academic networks through ECLBS membership<br/>
                    • Collaborative research and academic exchange opportunities
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <h4 className="font-bold text-white mb-2">Legal Status</h4>
                  <p className="text-blue-100 text-sm">
                    Kennedy Baptist University is legally registered in Florida, USA as a religious college under the Florida Department of Education Commission for Independent Education and maintains international recognition through ECLBS membership.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card - White with Blue Accents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 border border-blue-100 shadow-lg"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-700" />
                Interested in Kennedy Baptist University?
              </h3>
              <p className="text-blue-700 text-sm mb-6">
                Learn more about admission requirements, program details, and how to apply through QualifyLearn.
              </p>
              <motion.button 
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Contact QualifyLearn for Guidance
              </motion.button>
            </motion.div>

            {/* Verification Resources - White Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-blue-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-700" />
                Verification Resources
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://www.fldoe.org/cie/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Flag className="w-4 h-4" />
                  Florida Department of Education (CIE)
                </a>
                <a 
                  href="https://eclbs.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  European Council of Leading Business Schools
                </a>
                <a 
                  href="https://kennedybaptistuniversity.com/accreditation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Building className="w-4 h-4" />
                  University Accreditation Page
                </a>
              </div>
            </motion.div>

            {/* Quick Facts - White Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-blue-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Legal Status</span>
                  <span className="font-medium text-blue-800">Religious College</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Headquarters</span>
                  <span className="font-medium text-blue-800">Florida, USA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Education Type</span>
                  <span className="font-medium text-blue-800">Blended Learning</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Degree Type</span>
                  <span className="font-medium text-blue-800">Religious & Academic</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-blue-700">Partner University</span>
                  <span className="font-medium text-blue-800">Kennedy University</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KennedyBaptistUniversity;