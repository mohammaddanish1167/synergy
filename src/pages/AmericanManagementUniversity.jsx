import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink, Award, Shield, Users, BookOpen, Star, GraduationCap, Flag } from 'lucide-react';
import AMULogo from '../assets/amu-logo.jpg';

const AmericanManagementUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'American Management University', 
    logo: AMULogo, 
    link: 'https://amuonline.org/', 
    color: 'from-blue-700 to-blue-900',
    gradient: 'bg-gradient-to-r from-blue-700 to-blue-900',
    lightColor: 'from-blue-50 to-blue-100',
    verified: true,
    location: 'Paris, France (Headquarters) & California, USA',
    type: 'Nonprofit Private Higher-Education Institution'
  };

  const accreditations = [
    {
      logo: "🇫🇷",
      name: "Official Authorization in France",
      description: "Legally registered non-profit private higher-education institution under Code de l'Éducation",
      verification: "Verified on French Ministry of Education registry",
      status: "Active",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🇬🇧",
      name: "Chartered Management Institute (CMI)",
      description: "Program Recognition Partner for AMU's Master of Business Administration",
      verification: "CMI recognition for MBA program",
      status: "Program Recognition",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🌍",
      name: "International Accreditation and Recognition Council (IARC)",
      description: "Accredited Institution recognized by Ministry of Education in Kyrgyz Republic and Moldova",
      verification: "Certificate of Accreditation from IARC",
      status: "Accredited Institution",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🇺🇸",
      name: "ACCREDITAT UK",
      description: "TESOL Program Accreditation for AMU's 120-hour TESOL program",
      verification: "Certificate of Programmatic Accreditation",
      status: "Program Accreditation",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🌐",
      name: "MACCA",
      description: "Management and Accreditation Council for Colleges & Academies",
      verification: "Certificate of Institutional Accreditation",
      status: "Accredited Institution",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🎓",
      name: "Quality Assurance in Higher Education (QAHE)",
      description: "Accredited Institution by independent international quality assurance body",
      verification: "Listed on QAHE.org for AMU Paris and AMU USA",
      status: "Accredited Institution",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🏛️",
      name: "ACBSP – Educational Member",
      description: "U.S. CHEA-recognized accrediting body for business schools and programs",
      verification: "Educational membership with ACBSP",
      status: "Educational Member",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🇪🇺",
      name: "ATHEA – Institutional Member",
      description: "Association for Transnational Higher Education Accreditation registered in Austria",
      verification: "Institutional member of ATHEA",
      status: "Institutional Member",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "📚",
      name: "IACBE – Educational Member",
      description: "U.S. CHEA-recognized accrediting body for business education",
      verification: "Educational membership with IACBE",
      status: "Educational Member",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🇧🇪",
      name: "ECBE – Institutional Member",
      description: "European Council for Business Education aligned with Bologna Process",
      verification: "Institutional member of ECBE",
      status: "Institutional Member",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      logo: "🇦🇹",
      name: "CONIES – Affiliate Member",
      description: "Council on International Higher Education Supervision",
      verification: "Affiliate member certificate",
      status: "Affiliate Member",
      iconColor: "bg-blue-100 text-blue-700"
    }
  ];

  const partnerships = [
    "International American University (Los Angeles) – MBA and DBA programs",
    "Nobel University (Los Angeles) – BBA, MBA and DBA programs",
    "European City University (Paris) – MBA and DBA programs"
  ];

  const features = [
    {
      title: 'Global Accreditation',
      description: 'Recognized by multiple international accreditation bodies',
      icon: '🏆',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Dual Degree Options',
      description: 'Partnerships with universities in Europe and USA',
      icon: '🎓',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Flexible Learning',
      description: 'Online and distance education for working professionals',
      icon: '💻',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Legal Compliance',
      description: 'Legally registered in France under Code de l\'Éducation',
      icon: '⚖️',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Nonprofit Status',
      description: 'Dedicated to accessible education worldwide',
      icon: '❤️',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Industry Recognition',
      description: 'Programs recognized by professional bodies like CMI',
      icon: '🤝',
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
              <div className="text-2xl md:text-3xl font-bold text-blue-700">11+</div>
              <div className="text-sm text-blue-600">Accreditations</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">Global</div>
              <div className="text-sm text-blue-600">Recognition</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">3+</div>
              <div className="text-sm text-blue-600">Dual Degree Partners</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">100%</div>
              <div className="text-sm text-blue-600">Credit Transfer</div>
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
                <Globe className="w-7 h-7" />
                GLOBAL ACCREDITATION & RECOGNITION
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
                American Management University (AMU) is a nonprofit private higher-education institution legally registered in France, serving students worldwide through degree, research, and competency-based programs.
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
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                  <p className="text-blue-600 font-medium">What makes AMU a distinguished institution</p>
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

            {/* Accreditations Section - White Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${university.gradient} text-white shadow-lg`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Accreditations & Memberships</h2>
                  <p className="text-blue-600 font-medium">Official authorizations, accreditations, and memberships with recognized international quality-assurance bodies</p>
                </div>
              </div>

              <div className="space-y-6">
                {accreditations.map((acc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group"
                  >
                    <div className={`text-2xl ${acc.iconColor} p-3 rounded-xl shadow-sm group-hover:shadow-md transition-shadow`}>
                      {acc.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-gray-900">{acc.name}</h3>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
                          <CheckCircle className="w-3 h-3" />
                          {acc.status}
                        </span>
                      </div>
                      <p className="text-blue-700 text-sm mb-2">{acc.description}</p>
                      <p className="text-blue-600 text-xs flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {acc.verification}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partnerships Section - Blue Background with White Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`rounded-3xl p-8 border border-blue-200 shadow-lg ${university.gradient}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 text-white shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Dual Degree & Articulation Agreements</h2>
              </div>
              
              <p className="text-blue-100 mb-6">
                AMU has validation agreements with universities in Europe and the United States, allowing students to graduate with dual degrees. Credits earned at AMU are transferable to these accredited institutions.
              </p>

              <div className="space-y-4 mb-6">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white">{partner}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-blue-100 text-sm">
                  <strong>Note:</strong> Students may graduate from AMU and pay an additional fee to receive two degrees simultaneously through these partnerships.
                </p>
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
                Interested in AMU Programs?
              </h3>
              <p className="text-blue-700 text-sm mb-6">
                Learn more about AMU's degree programs, admission requirements, and how to apply through QualifyLearn.
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

            {/* Quick Facts - White Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-blue-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Institution Type</span>
                  <span className="font-medium text-blue-800">Nonprofit Private</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Headquarters</span>
                  <span className="font-medium text-blue-800">Paris, France</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">U.S. Office</span>
                  <span className="font-medium text-blue-800">California, USA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Status</span>
                  <span className="font-medium text-emerald-600">Hors Contrat</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-blue-700">Founded</span>
                  <span className="font-medium text-blue-800">Legally Registered</span>
                </div>
              </div>
            </motion.div>

            {/* Verification Resources - White Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-blue-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-700" />
                Verification Resources
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://www.education.gouv.fr/annuaire-des-etablissements" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Flag className="w-4 h-4" />
                  French Ministry of Education Registry
                </a>
                <a 
                  href="https://managers.org.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  CMI Official Website
                </a>
                <a 
                  href="https://qahe.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  QAHE Accreditation Listing
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmericanManagementUniversity;