/**
 * Premium Footer Component - Synergy Scholars Academia
 * Luxury design with elite academic branding and comprehensive information
 */

import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = 2025;

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/synergy_scholars_academia?utm_source=qr&igsh=MXBvbW1xc2dhN3FybQ=='
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'http://facebook.com/people/Synergy-Scholars-Academia/61587252902623/?rdid=RihUW1LnqgnQ63gT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17RbbMokyK%2F'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: ''
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-50 via-white to-cream-50 text-slate-700 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer Grid - 4 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand Logo and Description - ENLARGED LOGO */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <img
                  src={logoImage}
                  alt="Synergy Scholars Academia Logo"
                  className="h-48 w-auto brightness-110 contrast-125 object-contain max-w-full"
                />
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Synergy Scholars Academia
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Synergy Scholars Academia represents the pinnacle of elite education, where academic excellence meets transformative mentorship. 
                We empower ambitious professionals to achieve extraordinary career outcomes through world-class programs, personalized guidance, 
                and a commitment to unparalleled excellence.
              </p>

              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-indigo-700 transition transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-bold text-lg uppercase tracking-wide mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact Us', to: '/contact' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-slate-600 hover:text-indigo-700 text-base block transition hover:translate-x-2 hover:font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-bold text-lg uppercase tracking-wide mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Elite Programs
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Honorary Doctorate', slug: 'honorary-doctorate' },
                { name: 'Honorary Professorship', slug: 'honorary-professorship' },
                { name: 'PhD Programs', slug: 'phd' },
                { name: 'MBA Programs', slug: 'mba' },
                { name: 'DBA Programs', slug: 'dba' }
              ].map((course) => (
                <Link
                  key={course.slug}
                  to={`/${course.slug}`}
                  className="text-slate-600 hover:text-indigo-700 text-base block transition hover:translate-x-2 hover:font-medium"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-bold text-lg uppercase tracking-wide mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Info
            </h3>

            <div className="space-y-6">
              
              {/* UK Office */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">UNITED KINGDOM</p>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      Synergy Scholars Academia Limited<br />
                      124 City Road, London<br />
                      EC1V 2NX
                    </p>
                  </div>
                </div>
              </div>

              {/* US Office */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">UNITED STATES</p>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      Synergy Scholars Academia LLC<br />
                      30 N Gould St Ste R<br />
                      Sheridan WY 82801
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-4 border-t border-gray-200/50">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <div>
                    <a href="tel:+19177304763" className="text-slate-600 hover:text-indigo-700 text-sm transition block">
                      +1 9177304763
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <a href="mailto:info@synergyscholars.com" className="text-slate-600 hover:text-indigo-700 text-sm transition">
                    info@synergyscholars.com
                  </a>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium hover:gap-3 transition-all"
                >
                  Need assistance? Contact our elite team →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-slate-600 text-sm">
            &copy; {currentYear} Synergy Scholars Academia. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm justify-end">
            <Link to="/privacy-policy" className="text-slate-600 hover:text-indigo-700 transition hover:font-medium">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-slate-600 hover:text-indigo-700 transition hover:font-medium">Terms & Conditions</Link>
            <Link to="/refund-policy" className="text-slate-600 hover:text-indigo-700 transition hover:font-medium">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;