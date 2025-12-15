/**
 * University Partnerships Component
 * Clean, professional display of partner university logos and names
 */

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

// Import logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

// Partner universities data
const partners = [
  { 
    id: 1,
    name: 'Kennedy University', 
    logo: KennedyUniLogo,
  },
  { 
    id: 2,
    name: 'American Management University', 
    logo: AMULogo,
  },
  { 
    id: 3,
    name: 'Kennedy Baptist University', 
    logo: KennedyBaptistLogo,
  },
  { 
    id: 4,
    name: 'Central Global University', 
    logo: CentralGlobalLogo,
  },
  { 
    id: 5,
    name: 'Euro-Asian University', 
    logo: EuroAsianLogo,
  },
];

function UniversityPartnerships() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                University Partners
              </span>
              <Building2 className="w-5 h-5 text-blue-600" />
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
            Exclusive collaborations with prestigious institutions worldwide
          </motion.p>
        </div>

        {/* Partners Grid - Only Logos and Names */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center"
              >
                {/* University Logo */}
                <div className="w-full h-64 mb-6 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain max-h-52"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-6xl font-bold text-gray-800 mb-3">${partner.name.split(' ').map(w => w[0]).join('')}</div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
                
                {/* University Name */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-6">
                Partner with Excellence
              </h3>
              
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Access world-class education through our exclusive university partnerships
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Programs
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