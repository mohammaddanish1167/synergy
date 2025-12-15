/**
 * Compact Footer Component with Social Media Icons
 * Simple, clean design with logo image and organized content
 */

import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      url: 'https://www.instagram.com/qualifylearn/?hl=en'
    },
    {
      name: 'Facebook',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      url: 'https://www.facebook.com/p/QualifyLearn-61566246874078/'
    },
    {
      name: 'LinkedIn',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      url: 'https://www.linkedin.com/company/104800214/admin/dashboard/'
    }
  ];

  // Footer sections
  const footerSections = [
    {
      title: 'Important Links',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Upcoming Batches', to: '/batches' },
        { label: 'Contact Us', to: '/contact' }
      ]
    },
    {
      title: 'Useful Links',
      links: [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Refund Policy', to: '/refund-policy' },
        { label: 'Disclaimer', to: '/disclaimer' },
        { label: 'Terms and Conditions', to: '/terms' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Quality Learning Logo" 
                className="h-14 w-auto brightness-110 contrast-125"
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality Learn envisions a world where education knows no boundaries. 
              Our mission is to break down barriers and provide equitable access to 
              exceptional learning experiences.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Visit our ${social.name}`}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6 text-base tracking-wide uppercase">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm block transition-colors duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base tracking-wide uppercase">
              Contact Info
            </h3>
            <div className="space-y-6">
              
              {/* UK Address */}
              <div className="space-y-2">
                <h4 className="text-gray-300 font-medium text-sm">United Kingdom</h4>
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  Quality Learn Limited,<br />
                  124 City Road,<br />
                  London, EC1V 2NX
                </address>
              </div>
              
              {/* US Address */}
              <div className="space-y-2">
                <h4 className="text-gray-300 font-medium text-sm">United States</h4>
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  Quality Learn LLC,<br />
                  30 N Gould St Ste R<br />
                  Sheridan WY 82801
                </address>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <a 
                    href="tel:+447457417703" 
                    className="text-gray-400 hover:text-white text-sm block transition-colors duration-300"
                  >
                    +44-745-741-7703
                  </a>
                  <a 
                    href="tel:+13073929112" 
                    className="text-gray-400 hover:text-white text-sm block transition-colors duration-300"
                  >
                    +1 (307) 392-9112
                  </a>
                </div>
                
                <a 
                  href="mailto:info@qualitylearn.com" 
                  className="text-gray-400 hover:text-white text-sm block transition-colors duration-300"
                >
                  info@qualitylearn.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Quality Learn. All rights reserved.
            </p>
            
            {/* Optional: Additional Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                Terms
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;