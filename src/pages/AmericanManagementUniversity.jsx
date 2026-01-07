import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink, Award, Shield, Users, BookOpen } from 'lucide-react';
import AMULogo from '../assets/amu-logo.jpg';

const AmericanManagementUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'American Management University', 
    logo: AMULogo, 
    link: 'https://amuonline.org/', 
    color: 'from-purple-500 to-pink-500',
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
      status: "Active"
    },
    {
      logo: "🇬🇧",
      name: "Chartered Management Institute (CMI)",
      description: "Program Recognition Partner for AMU's Master of Business Administration",
      verification: "CMI recognition for MBA program",
      status: "Program Recognition"
    },
    {
      logo: "🌍",
      name: "International Accreditation and Recognition Council (IARC)",
      description: "Accredited Institution recognized by Ministry of Education in Kyrgyz Republic and Moldova",
      verification: "Certificate of Accreditation from IARC",
      status: "Accredited Institution"
    },
    {
      logo: "🇺🇸",
      name: "ACCREDITAT UK",
      description: "TESOL Program Accreditation for AMU's 120-hour TESOL program",
      verification: "Certificate of Programmatic Accreditation",
      status: "Program Accreditation"
    },
    {
      logo: "🌐",
      name: "MACCA",
      description: "Management and Accreditation Council for Colleges & Academies",
      verification: "Certificate of Institutional Accreditation",
      status: "Accredited Institution"
    },
    {
      logo: "🎓",
      name: "Quality Assurance in Higher Education (QAHE)",
      description: "Accredited Institution by independent international quality assurance body",
      verification: "Listed on QAHE.org for AMU Paris and AMU USA",
      status: "Accredited Institution"
    },
    {
      logo: "🏛️",
      name: "ACBSP – Educational Member",
      description: "U.S. CHEA-recognized accrediting body for business schools and programs",
      verification: "Educational membership with ACBSP",
      status: "Educational Member"
    },
    {
      logo: "🇪🇺",
      name: "ATHEA – Institutional Member",
      description: "Association for Transnational Higher Education Accreditation registered in Austria",
      verification: "Institutional member of ATHEA",
      status: "Institutional Member"
    },
    {
      logo: "📚",
      name: "IACBE – Educational Member",
      description: "U.S. CHEA-recognized accrediting body for business education",
      verification: "Educational membership with IACBE",
      status: "Educational Member"
    },
    {
      logo: "🇧🇪",
      name: "ECBE – Institutional Member",
      description: "European Council for Business Education aligned with Bologna Process",
      verification: "Institutional member of ECBE",
      status: "Institutional Member"
    },
    {
      logo: "🇦🇹",
      name: "CONIES – Affiliate Member",
      description: "Council on International Higher Education Supervision",
      verification: "Affiliate member certificate",
      status: "Affiliate Member"
    }
  ];

  const partnerships = [
    "International American University (Los Angeles) – MBA and DBA programs",
    "Nobel University (Los Angeles) – BBA, MBA and DBA programs",
    "European City University (Paris) – MBA and DBA programs"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Partners
        </button>

        {/* Compact Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <div className={`h-48 rounded-3xl bg-gradient-to-r ${university.color} relative overflow-hidden`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative h-full flex items-center px-8 md:px-12">
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-2xl">
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {university.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-white/90">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {university.location}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {university.type}
                    </span>
                    {university.verified && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-emerald-400/30">
                        <CheckCircle className="w-3 h-3" />
                        Verified Partner
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 -mt-8 px-8"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-purple-600">11+</div>
              <div className="text-sm text-gray-600">Accreditations</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-purple-600">Global</div>
              <div className="text-sm text-gray-600">Recognition</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-purple-600">3+</div>
              <div className="text-sm text-gray-600">Dual Degree Partners</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Credit Transfer</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${university.color} text-white`}>
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">About AMU</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                American Management University (AMU) is a nonprofit private higher-education institution legally registered in France, serving students worldwide through degree, research, and competency-based programs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                AMU provides accessible education through flexible learning models, catering to working professionals globally. The university operates under the Code de l'Éducation with "hors contrat" status as an independent private institution.
              </p>
              
              <a 
                href={university.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:opacity-90 transition-all font-medium shadow-lg hover:shadow-purple-500/30"
              >
                Visit Official Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Accreditations Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${university.color} text-white`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Accreditations & Memberships</h2>
                  <p className="text-gray-500">Official authorizations, accreditations, and memberships with recognized international quality-assurance bodies</p>
                </div>
              </div>

              <div className="space-y-6">
                {accreditations.map((acc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all group"
                  >
                    <div className="text-2xl bg-white p-3 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
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
                      <p className="text-gray-600 text-sm mb-2">{acc.description}</p>
                      <p className="text-gray-500 text-xs flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {acc.verification}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partnerships Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${university.color} text-white`}>
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Dual Degree & Articulation Agreements</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                AMU has validation agreements with universities in Europe and the United States, allowing students to graduate with dual degrees. Credits earned at AMU are transferable to these accredited institutions.
              </p>

              <div className="space-y-4">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-800">{partner}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Students may graduate from AMU and pay an additional fee to receive two degrees simultaneously through these partnerships.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Interested in AMU Programs?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Learn more about AMU's degree programs, admission requirements, and how to apply through QualifyLearn.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full px-4 py-3 bg-white border border-purple-200 text-purple-700 font-medium rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-colors shadow-sm hover:shadow-md"
              >
                Contact QualifyLearn for Guidance
              </button>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Institution Type</span>
                  <span className="font-medium">Nonprofit Private</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Headquarters</span>
                  <span className="font-medium">Paris, France</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">U.S. Office</span>
                  <span className="font-medium">California, USA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium text-emerald-600">Hors Contrat</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">Legally Registered</span>
                </div>
              </div>
            </motion.div>

            {/* Verification Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Verification Resources
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://www.education.gouv.fr/annuaire-des-etablissements" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors text-sm text-blue-700 hover:text-blue-800"
                >
                  🔍 French Ministry of Education Registry
                </a>
                <a 
                  href="https://managers.org.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors text-sm text-blue-700 hover:text-blue-800"
                >
                  🏛️ CMI Official Website
                </a>
                <a 
                  href="https://qahe.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors text-sm text-blue-700 hover:text-blue-800"
                >
                  🌐 QAHE Accreditation Listing
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