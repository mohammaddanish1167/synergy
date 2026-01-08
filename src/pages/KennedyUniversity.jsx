import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink, Award, Shield, BookOpen, Users, Building, Flag, GraduationCap, Star } from 'lucide-react';
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';

const KennedyUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'Kennedy University', 
    logo: KennedyUniLogo, 
    link: 'https://www.kennedy.edu.eu/', 
    color: 'from-blue-700 to-blue-900',
    gradient: 'bg-gradient-to-r from-blue-700 to-blue-900',
    lightColor: 'from-blue-50 to-blue-100',
    verified: true,
    location: 'France (Headquarters) & Global Recognition',
    type: 'Private Higher Education Establishment'
  };

  const accreditations = [
    {
      title: "KENNEDY UNIVERSITY OF BAPTIST",
      description: "Kennedy University is the daughter university of Kennedy University of Baptist. Credits earned at Kennedy University are recognized by Kennedy University of Baptist, and credits earned at Kennedy University of Baptist are recognized by Kennedy University.",
      highlights: [
        "Students at Kennedy University can pursue a double degree in the name of Kennedy University of Baptist",
        "Students at Kennedy University of Baptist can obtain a double degree in the name of Kennedy University"
      ],
      icon: "👑",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "FRENCH MINISTRY OF NATIONAL EDUCATION, HIGHER EDUCATION, RESEARCH AND INNOVATION",
      description: "Kennedy University is a private higher education establishment authorized by the French Ministry of National Education, Higher Education, Research, and Innovation, in accordance with the French Education Law (Code de l'Education, Articles L 444-1 to L 444-11 and R 444-1 to R 444-28).",
      highlights: [
        "Listed on the official web portal of the French Ministry",
        "Registered as a Centre d'enseignement à distance under French law",
        "Degrees are Private Institutional Degrees issued in accordance with French Education Code",
        "All academic programs developed and assessed by Kennedy University"
      ],
      note: "These degrees are not classified as Diplômes Nationaux (national degrees).",
      icon: "🇫🇷",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "MINISTRY OF EDUCATION, CULTURE AND HIGHER EDUCATION (GALMUDUG STATE OF SOMALIA)",
      description: "Kennedy University is authorized by the Ministry of Education, Culture, and Higher Education of the Galmudug State of Somalia as a higher education institution registered to issue valid and legal degrees in the Galmudug State of Somalia.",
      highlights: [
        "Graduates can obtain degrees recognized in the Galmudug State of Somalia",
        "Somalia is a full member state of the United Nations (UN)",
        "Galmudug State is an autonomous region constituting part of Somalia"
      ],
      icon: "🇸🇴",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "MINISTRY OF EDUCATION, CULTURE AND HIGHER EDUCATION (HIRSHABELLE STATE OF SOMALIA)",
      description: "Kennedy University is authorized by the Ministry of Education, Culture, and Higher Education of the Hirshabelle State of Somalia as a higher education institution registered to issue valid and legal degrees in the Hirshabelle State of Somalia.",
      highlights: [
        "Graduates can obtain degrees recognized in the Hirshabelle State of Somalia",
        "Hirshabelle State is an autonomous region constituting part of Somalia"
      ],
      icon: "🇸🇴",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "INTERNATIONAL ASSOCIATION FOR QUALITY ASSURANCE IN HIGHER EDUCATION (QAHE)",
      description: "Kennedy University has received full accreditation from the International Association for Quality Assurance in Higher Education (QAHE). QAHE is an international accreditation body.",
      highlights: [
        "QAHE accreditation recognized by multiple national agencies:",
        "• National Agency for Quality Assurance in Education & Research, Republic of Moldova",
        "• Higher Education Council (HEC), Syria",
        "• Agency for Quality Assurance in Education (EdNet), Kyrgyz Republic",
        "• Accreditation Council for Education (ACE), Indonesia"
      ],
      icon: "🏆",
      iconColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "EUROPEAN COUNCIL OF LEADING BUSINESS SCHOOLS (ECLBS)",
      description: "Kennedy University of Baptist has gained membership with the European Council of Leading Business Schools (ECLBS). ECLBS ensures institutions meet the highest internationally recommended level of quality.",
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
      title: "FLORIDA DEPARTMENT OF EDUCATION (USA)",
      description: "Kennedy University of Baptist has been granted an Annual Verification as a Religious College by the Florida Department of Education Commission for Independent Education.",
      icon: "🇺🇸",
      iconColor: "bg-blue-100 text-blue-700"
    }
  ];

  const features = [
    {
      title: 'International Recognition',
      description: 'Accredited in multiple countries with global recognition',
      icon: '🌍',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Flexible Learning',
      description: 'Distance learning programs with flexible schedules',
      icon: '💻',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Dual Degrees',
      description: 'Double degree options with Kennedy Baptist University',
      icon: '🎓',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Legal Compliance',
      description: 'Authorized by multiple government ministries',
      icon: '⚖️',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Quality Assurance',
      description: 'Multiple international accreditation bodies',
      icon: '🏅',
      iconColor: 'bg-blue-100'
    },
    {
      title: 'Global Network',
      description: 'Partnerships across Europe, Africa, and Americas',
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
              <div className="text-2xl md:text-3xl font-bold text-blue-700">7+</div>
              <div className="text-sm text-blue-600">Accreditations</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-700">3+</div>
              <div className="text-sm text-blue-600">Countries</div>
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
                ACCREDITATION & RECOGNITION
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
                Kennedy University holds multiple international accreditations and recognitions, ensuring quality education and global acceptance of degrees.
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
                  <p className="text-blue-600 font-medium">What makes Kennedy University a distinguished institution</p>
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
                  <p className="text-blue-600 font-medium">Comprehensive list of Kennedy University's international authorizations and quality assurances</p>
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
                    Kennedy University awards Private Institutional Degrees under French law. These are not Diplômes Nationaux (French national degrees) but are legally issued private degrees recognized internationally through Kennedy University's accreditations.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <h4 className="font-bold text-white mb-2">Credit Transfer & Recognition</h4>
                  <p className="text-blue-100 text-sm">
                    • Credits are mutually recognized between Kennedy University and Kennedy University of Baptist<br/>
                    • Degrees are recognized in France, Somalia (Galmudug & Hirshabelle States), and internationally<br/>
                    • Dual degree options available with Kennedy University of Baptist
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <h4 className="font-bold text-white mb-2">Legal Status</h4>
                  <p className="text-blue-100 text-sm">
                    Kennedy University is legally registered in France as a private higher education establishment (Centre d'enseignement à distance) and authorized to operate by multiple national ministries and international accreditation bodies.
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
                Interested in Kennedy University?
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
                  href="https://www.education.gouv.fr/annuaire-des-etablissements" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Flag className="w-4 h-4" />
                  French Ministry of Education Registry
                </a>
                <a 
                  href="https://www.kennedy.edu.eu/Accreditation-and-Recognition" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Kennedy University Accreditation Page
                </a>
                <a 
                  href="https://qahe.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 text-sm text-blue-800 hover:text-blue-900 flex items-center gap-2"
                >
                  <Building className="w-4 h-4" />
                  QAHE Accreditation Body
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
                  <span className="font-medium text-blue-800">Private Institution</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Headquarters</span>
                  <span className="font-medium text-blue-800">France</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Education Type</span>
                  <span className="font-medium text-blue-800">Distance Learning</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <span className="text-blue-700">Degree Type</span>
                  <span className="font-medium text-blue-800">Private Institutional</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-blue-700">Sister University</span>
                  <span className="font-medium text-blue-800">Kennedy Baptist</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KennedyUniversity;