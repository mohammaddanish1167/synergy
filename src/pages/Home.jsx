/**
 * Home Page - Premium Dark Theme
 * Landing page with hero, featured courses, testimonials, and FAQs
 * All sections use dark theme with smooth animations
 */

import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import PartnerOrbit from '../components/PartnerOrbit';
import HiringPartners from '../components/HiringPartners';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';

import ServicesSection from '../components/ServiceSection';
import WorldMapConnections from '../components/WorldMapConnections';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import FeaturedCourses from '../components/FeaturedCourses';
import ApplicationProcess from '../components/ApplicationProcess.jsx';

function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Your Path to Academic Excellence Starts Here"
        subtitle="Expert guidance for your educational journey from undergraduate to PhD programs"
        secondaryAction={{ path: '/contact', label: 'Get Started' }}
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
      />




    <FeaturedCourses/>


      <WhyChooseUs/>

      <PartnerOrbit />


      <HiringPartners />
      <ApplicationProcess/>

      



      <Testimonials testimonials={testimonials} />
      <WorldMapConnections/>

   
      <FAQ faqs={faqs} />

     
    </div>
  );
}

export default Home;
