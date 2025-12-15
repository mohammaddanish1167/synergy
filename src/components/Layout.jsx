/**
 * Layout Component
 * Wraps all pages with consistent Navbar and Footer
 * Provides consistent structure across the application
 */

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GuidanceModal from './GuidanceModal';
import FloatingActions from './FloatingActions';

function Layout() {
  const [openGuidance, setOpenGuidance] = useState(false);
  const [defaultCourse, setDefaultCourse] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      setDefaultCourse(e?.detail?.defaultCourse || '');
      setOpenGuidance(true);
    };
    window.addEventListener('open-guidance-modal', handler);
    return () => window.removeEventListener('open-guidance-modal', handler);
  }, []);

  // Auto-open guidance modal after 4.5 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenGuidance(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-slate-100">
      {/* Navigation bar at the top */}
      <Navbar />
      
      {/* Modal for guidance form */}
      <GuidanceModal
        open={openGuidance}
        onClose={() => setOpenGuidance(false)}
        defaultCourse={defaultCourse}
      />

      {/* Main content area - Outlet renders the current route's page */}
      {/* Add padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      
      <FloatingActions />
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Layout;

