/**
 * University Partnerships Component
 * Clean showcase of all partner universities with prominent logos
 */

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  GraduationCap,
  BookOpen,
  MapPin,
  Star,
  Globe,
  CheckCircle,
  Target
} from 'lucide-react';

// Import logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/kennedy-baptist-logo.jpg';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

// Partner universities data
const partners = [
  { 
    id: 1,
    name: 'Kennedy University', 
    acronym: 'KU',
    logo: KennedyUniLogo,
    location: 'California, USA',
    founded: 1965,
    students: '25,000+',
    programs: 120,
    accreditation: 'WASC Accredited',
    focus: 'Research & Innovation'
  },
  { 
    id: 2,
    name: 'American Management University', 
    acronym: 'AMU',
    logo: AMULogo,
    location: 'New York, USA',
    founded: 1982,
    students: '15,000+',
    programs: 85,
    accreditation: 'ACBSP Accredited',
    focus: 'Business Leadership'
  },
  { 
    id: 3,
    name: 'Kennedy Baptist University', 
    acronym: 'KBU',
    logo: KennedyBaptistLogo,
    location: 'Texas, USA',
    founded: 1978,
    students: '8,000+',
    programs: 65,
    accreditation: 'SACSCOC Accredited',
    focus: 'Liberal Arts & Ethics'
  },
  { 
    id: 4,
    name: 'Central Global University', 
    acronym: 'CGU',
    logo: CentralGlobalLogo,
    location: 'Global Campus',
    founded: 1995,
    students: '30,000+',
    programs: 150,
    accreditation: 'Multiple Global',
    focus: 'International Education'
  },
  { 
    id: 5,
    name: 'Euro-Asian University', 
    acronym: 'EAU',
    logo: EuroAsianLogo,
    location: 'Switzerland',
    founded: 2001,
    students: '20,000+',
    programs: 95,
    accreditation: 'EU Accredited',
    focus: 'Cross-Cultural Studies'
  },
];

function UniversityPartnerships() {
  const stats = [
    { value: '150+', label: 'Program Pathways', icon: BookOpen, color: 'blue' },
    { value: '98%', label: 'Success Rate', icon: Star, color: 'amber' },
    { value: '50K+', label: 'Global Alumni', icon: Users, color: 'violet' },
    { value: '100%', label: 'Accredited', icon: Award, color: 'emerald' },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                University Partners
              </span>
              <Star className="w-5 h-5 text-blue-600" />
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6"
          >
            Our <span className="font-semibold text-gray-800">Academic</span> Partners
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Exclusive collaborations with prestigious institutions providing our students with 
            direct pathways to globally recognized qualifications and academic excellence.
          </motion.p>
        </div>

        {/* Key Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div>
                  <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Partners Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Partner Universities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic collaborations with prestigious institutions worldwide
            </p>
          </div>

          {/* Partners Grid - Logo Focused */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Large Logo Container */}
                  <div className="flex-1 flex flex-col items-center text-center mb-6">
                    {/* Logo with Gradient Background */}
                    <div className="relative mb-8">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl transform rotate-3 opacity-50 group-hover:rotate-6 transition-transform duration-300" />
                      
                      {/* Main Logo Container */}
                      <div className="relative w-48 h-48 bg-white rounded-2xl border-2 border-gray-200 shadow-xl flex items-center justify-center p-6 group-hover:shadow-2xl transition-all duration-300 group-hover:border-blue-300">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full flex flex-col items-center justify-center">
                                <div class="text-6xl font-bold text-gray-800 mb-3">${partner.acronym.charAt(0)}</div>
                                <div class="text-xl font-semibold text-gray-600">${partner.acronym}</div>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      
                      {/* Accreditation Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>Accredited</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* University Name - Large and Prominent */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {partner.name}
                    </h3>
                    
                    {/* University Acronym */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-4">
                      <span className="text-sm font-semibold text-blue-700">{partner.acronym}</span>
                    </div>
                    
                    {/* Location and Focus */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{partner.location}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full">
                        <Target className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">{partner.focus}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">{partner.students}</div>
                      <div className="text-xs text-gray-500 mt-1">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">{partner.programs}</div>
                      <div className="text-xs text-gray-500 mt-1">Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">{partner.founded}</div>
                      <div className="text-xs text-gray-500 mt-1">Founded</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20 text-center mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Partnership Advantages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our strategic collaborations provide students with exclusive benefits and pathways to success
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Direct Admissions</h3>
              <p className="text-gray-600 text-sm">
                Streamlined admission process with guaranteed pathways for qualified students
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Credit Transfer</h3>
              <p className="text-gray-600 text-sm">
                Maximum credit recognition for accelerated degree completion
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-600 text-sm">
                Access to international alumni networks and career opportunities
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Recognition</h3>
              <p className="text-gray-600 text-sm">
                Degrees recognized worldwide by employers and institutions
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-gray-200 p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
              Our Partner Institutions
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-36 h-36 bg-white rounded-2xl border-2 border-gray-200 shadow-xl flex items-center justify-center p-6 mb-4 hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center">
                            <div class="text-5xl font-bold text-gray-800 mb-2">${partner.acronym.charAt(0)}</div>
                            <div class="text-lg font-semibold text-gray-600">${partner.acronym}</div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 text-center">
                    {partner.name}
                  </span>
                  <span className="text-sm text-gray-600 mt-1">
                    {partner.acronym}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-6">
                Start Your Journey with Our Partners
              </h3>
              
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Access world-class education through our exclusive university partnerships 
                and build an internationally recognized career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Partnership Programs
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  Schedule Academic Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default UniversityPartnerships;