/**
 * Compact Footer Component with Social Media Icons
 * Simple, clean design with logo image and organized content
 */

import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links with Lucide icons
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

  // Course links
  const courses = [
    { name: 'Honorary Doctorate', slug: 'honorary-doctorate' },
    { name: 'Honorary Professorship', slug: 'honorary-professorship' },
    { name: 'PhD Programs', slug: 'phd' },
    { name: 'MBA Programs', slug: 'mba' },
    { name: 'DBA Programs', slug: 'dba' }
  ];

  // Footer sections
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Content - 2x2 grid for better space usage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Brand and Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center">
                <img 
                  src={logoImage} 
                  alt="Quality Learning Logo" 
                  className="h-12 w-auto brightness-110 contrast-125"
                />
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Quality Learn envisions a world where education knows no boundaries. 
                Our mission is to break down barriers and provide equitable access to 
                exceptional learning experiences.
              </p>
              
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
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections - 2 columns */}
            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <div className="space-y-2.5">
                    {section.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="text-gray-400 hover:text-white text-sm block transition-colors duration-200 hover:pl-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">
              Contact Information
            </h3>
            
            <div className="space-y-5">
              {/* Addresses */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-gray-300 font-medium text-sm">United Kingdom</h4>
                    <address className="text-gray-400 text-xs not-italic leading-relaxed mt-1">
                      Quality Learn Limited<br />
                      124 City Road, London<br />
                      EC1V 2NX
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-gray-300 font-medium text-sm">United States</h4>
                    <address className="text-gray-400 text-xs not-italic leading-relaxed mt-1">
                      Quality Learn LLC<br />
                      30 N Gould St Ste R<br />
                      Sheridan WY 82801
                    </address>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2 border-t border-gray-700/50">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a 
                    href="tel:+447457417703" 
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-sm">+44-745-741-7703</span>
                  </a>
                  
                  <a 
                    href="tel:+13073929112" 
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-sm">+1 (307) 392-9112</span>
                  </a>
                </div>
                
                <a 
                  href="mailto:info@qualitylearn.com" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-sm">info@qualitylearn.com</span>
                </a>
              </div>

              {/* Quick CTA */}
              <div className="pt-3">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200 group"
                >
                  <span>Need assistance? Contact our team</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              &copy; {currentYear} Quality Learn. All rights reserved.
            </p>
            
            <div className="flex items-center gap-5 text-xs">
              <Link 
                to="/privacy-policy" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
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