import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

// Logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const partners = [
  { id: 1, name: 'Kennedy University', logo: KennedyUniLogo, link: 'https://www.kennedy.edu' },
  { id: 2, name: 'American Management University', logo: AMULogo, link: 'https://amuonline.org' },
  { id: 3, name: 'Kennedy Baptist University', logo: KennedyBaptistLogo, link: '' },
  { id: 4, name: 'Central Global University', logo: CentralGlobalLogo, link: '' },
  { id: 5, name: 'Euro-Asian University', logo: EuroAsianLogo, link: 'https://euroasianuniversity.edu' },
];

function UniversityPartnerships() {
  const handleOpenLink = (link) => {
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Soft animated background glow */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[800px] h-[800px] rounded-full 
                   bg-gradient-to-r from-blue-100 to-purple-100 blur-[120px]"
        animate={{ x: ['-50%', '-45%', '-50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue-600" />
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              University Partners
            </span>
            <Building2 className="w-4 h-4 text-blue-600" />
            <div className="h-px w-10 bg-blue-600" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academic Partners
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted academic collaborations with globally recognized universities.
          </p>
        </motion.div>

        {/* PARTNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20 perspective-[1200px]">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{
                rotateX: 12,
                rotateY: -12,
                scale: 1.08,
              }}
              className={`relative group flex flex-col items-center text-center
                ${partner.link ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => handleOpenLink(partner.link)}
            >
              {/* Glow Aura */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                           bg-gradient-to-br from-blue-500/10 to-purple-500/10
                           blur-xl transition duration-500"
              />

              {/* Floating Logo */}
              <motion.img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="
                  relative z-10 h-28 md:h-32 object-contain mb-6
                  grayscale group-hover:grayscale-0
                  transition-all duration-500
                  group-hover:drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]
                "
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              />

              {/* Name */}
              <h3
                className={`relative z-10 text-xl md:text-2xl font-semibold
                  transition-colors duration-300
                  ${partner.link
                    ? 'text-gray-900 group-hover:text-blue-600'
                    : 'text-gray-700'
                  }`}
              >
                {partner.name}
              </h3>

              {/* Animated Line */}
              {partner.link && (
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: 70 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 h-[2px]
                             bg-gradient-to-r from-blue-600 to-purple-600"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UniversityPartnerships;
