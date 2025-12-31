/**
 * Compact Footer Component with Social Media Icons
 * Format structured like the image but with original Quality Learn content
 */

import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/qualifylearn/?hl=en'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/p/QualifyLearn-61566245874078/'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/company/104800214/admin/dashboard/'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer Grid - 4 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand Logo and Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <img
                src={logoImage}
                alt="Quality Learning Logo"
                className="h-20 w-auto brightness-110 contrast-125"
              />

              <p className="text-gray-400 text-sm leading-relaxed">
                Quality Learn envisions a world where education knows no boundaries.
                Our mission is to break down barriers and provide equitable access to
                exceptional learning experiences.
              </p>

              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition transform hover:scale-110"
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
            <h3 className="text-white font-bold text-lg uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Upcoming Batches', to: '/upcoming-courses' },
                { label: 'Contact Us', to: '/contact' }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-gray-400 hover:text-white text-base block transition hover:translate-x-2 hover:font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wide">
              Our Programs
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
                  className="text-gray-400 hover:text-white text-base block transition hover:translate-x-2 hover:font-medium"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wide">
              Contact Info
            </h3>

            <div className="space-y-6">
              
              {/* UK Office */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-300 text-sm">UNITED KINGDOM</p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">
                      Quality Learn Limited<br />
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
                    <p className="font-semibold text-gray-300 text-sm">UNITED STATES</p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">
                      Quality Learn LLC<br />
                      30 N Gould St Ste R<br />
                      Sheridan WY 82801
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-4 border-t border-gray-700/30">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <a href="tel:+447457417703" className="text-gray-400 hover:text-white text-sm transition block">
                      +44-745-741-7703
                    </a>
                    <a href="tel:+13073929112" className="text-gray-400 hover:text-white text-sm transition block mt-1">
                      +1 (307) 392-9112
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@qualitylearn.com" className="text-gray-400 hover:text-white text-sm transition">
                    info@qualitylearn.com
                  </a>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium hover:gap-3 transition-all"
                >
                  Need assistance? Contact our team →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Quality Learn. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm justify-end">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-300 transition hover:font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-gray-300 transition hover:font-medium">Terms & Conditions</Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-gray-300 transition hover:font-medium">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;