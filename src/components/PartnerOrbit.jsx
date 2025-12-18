import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

// Logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const partners = [
  {
    id: 1,
    name: 'Kennedy University',
    logo: KennedyUniLogo,
    link: 'https://www.kennedy.edu',
  },
  {
    id: 2,
    name: 'American Management University',
    logo: AMULogo,
    link: 'https://amuonline.org',
  },
  {
    id: 3,
    name: 'Kennedy Baptist University',
    logo: KennedyBaptistLogo,
    link: '', // broken / optional
  },
  {
    id: 4,
    name: 'Central Global University',
    logo: CentralGlobalLogo,
    link: '', // broken / optional
  },
  {
    id: 5,
    name: 'Euro-Asian University',
    logo: EuroAsianLogo,
    link: 'https://euroasianuniversity.edu',
  },
];

function UniversityPartnerships() {
  const handleOpenLink = (link) => {
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue-600" />
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              University Partners
            </span>
            <Building2 className="w-4 h-4 text-blue-600" />
            <div className="h-px w-10 bg-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academic Partners
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted academic collaborations with globally recognized universities.
          </p>
        </div>

        {/* LOGOS + NAMES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpenLink(partner.link)}
              className={`group flex flex-col items-center text-center 
                ${partner.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {/* FLOATING LOGO */}
              <motion.img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-28 md:h-32 object-contain mb-6 
                           transition-all duration-300 
                           group-hover:drop-shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              />

              {/* UNIVERSITY NAME */}
              <h3
                className={`text-xl md:text-2xl font-semibold 
                  transition-colors duration-300
                  ${partner.link ? 'group-hover:text-blue-600 text-gray-900' : 'text-gray-700'}`}
              >
                {partner.name}
              </h3>

              {/* UNDERLINE ANIMATION */}
              {partner.link && (
                <span className="mt-2 h-[2px] w-0 bg-blue-600 
                                 transition-all duration-300 
                                 group-hover:w-16" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UniversityPartnerships;
