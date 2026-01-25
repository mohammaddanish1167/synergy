/**
 * Home Page - Synergy Scholars Academia
 * Premium light luxury theme with modern layout and original content
 * Redesigned structure for optimal user experience and conversion
 */

import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import PartnerOrbit from '../components/PartnerOrbit';
import HiringPartners from '../components/HiringPartners';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import WorldMapConnections from '../components/WorldMapConnections';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import FeaturedCourses from '../components/FeaturedCourses';
import ApplicationProcess from '../components/ApplicationProcess.jsx';

function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/5 to-purple-50/5">
      {/* Hero Section - Premium Introduction */}
      <Hero />

      {/* Featured Programs - Elite Academic Pathways */}
      <FeaturedCourses/>

      {/* Why Choose Us - Distinguished Advantages */}
      <WhyChooseUs/>

      {/* Application Process - Streamlined Journey */}
      <ApplicationProcess/>

      {/* Partner Institutions - Global Network */}
      <PartnerOrbit />

      {/* Hiring Partners - Career Connections */}
      <HiringPartners />

      {/* Success Stories - Transformative Outcomes */}
      <Testimonials testimonials={testimonials} />

      {/* Global Reach - International Presence */}
      <WorldMapConnections/>

      {/* Frequently Asked Questions - Comprehensive Guidance */}
      <FAQ faqs={faqs} />
    </div>
  );
}

export default Home;
