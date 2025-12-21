/**
 * Compact Footer Component with Social Media Icons
 * Optimized spacing – same content, same theme
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
      url: 'https://www.facebook.com/p/QualifyLearn-61566246874078/'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/company/104800214/admin/dashboard/'
    }
  ];

  const courses = [
    { name: 'Honorary Doctorate', slug: 'honorary-doctorate' },
    { name: 'Honorary Professorship', slug: 'honorary-professorship' },
    { name: 'PhD Programs', slug: 'phd' },
    { name: 'MBA Programs', slug: 'mba' },
    { name: 'DBA Programs', slug: 'dba' }
  ];

  const footerSections = [
    {
      title: 'Courses',
      links: courses.map(course => ({
        label: course.name,
        to: `/courses/${course.slug}`
      }))
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Upcoming Batches', to: '/batches' },
        { label: 'Contact Us', to: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Refund Policy', to: '/refund-policy' },
        { label: 'Disclaimer', to: '/disclaimer' },
        { label: 'Terms & Conditions', to: '/terms' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Brand Section */}
          <div className="space-y-4">
            <img
              src={logoImage}
              alt="Quality Learning Logo"
              className="h-11 w-auto brightness-110 contrast-125"
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

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-gray-400 hover:text-white text-sm block transition hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 border border-gray-700/50">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-300">United Kingdom</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Quality Learn Limited<br />
                    124 City Road, London<br />
                    EC1V 2NX
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-300">United States</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Quality Learn LLC<br />
                    30 N Gould St Ste R<br />
                    Sheridan WY 82801
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-700/50 pt-3 space-y-2">
                <a href="tel:+447457417703" className="flex items-center gap-2 hover:text-white transition">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+44-745-741-7703</span>
                </a>

                <a href="tel:+13073929112" className="flex items-center gap-2 hover:text-white transition">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 (307) 392-9112</span>
                </a>

                <a href="mailto:info@qualitylearn.com" className="flex items-center gap-2 hover:text-white transition">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>info@qualitylearn.com</span>
                </a>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm pt-2"
              >
                Need assistance? Contact our team →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Quality Learn. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs">
            <Link to="/privacy-policy" className="hover:text-gray-300">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-gray-300">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
