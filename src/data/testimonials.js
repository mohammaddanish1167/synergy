/**
 * Testimonials Data - Synergy Scholars Academia
 * Elite student testimonials showcasing transformative outcomes
 * Premium academic success stories
 * All reviews reflect 5-star "Excellent" ratings
 */

export const testimonials = [
{
  id: 'tp-1',
  name: 'Bafana Peter Malinga',
  location: 'ZA', // South Africa
  reviewsCount: '1 review',
  date: 'October 12, 2025',
  course: 'PhD Program',
  image: 'https://ui-avatars.com/api/?name=BP&background=0f172a&color=60a5fa&bold=true', // Add avatar URL
  text: 'My phd journey with qualify learn was remarkably smooth...',
  rating: 5,
  source: 'Trustpilot',
  useful: true
},

  {
    id: 'tp-6',
    name: "Swati srivastava",
    location: 'CA', // Nigeria
    reviewsCount: '1 review',
    date: 'August 12, 2025',
    course: 'PhD Program',
    image: 'https://ui-avatars.com/api/?name=Irene+Client&background=0f172a&color=ec4899&bold=true',
    text: 'The mentorship I received was exceptional. All advisors demonstrated profound expertise and genuine commitment. I wholeheartedly recommend Synergy Scholars Academia for anyone pursuing a PhD with excellence.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-7',
    name: 'Carl Brettle',
    location: 'GB', // United Kingdom
    reviewsCount: '5 reviews',
    date: 'June 17, 2025',
    course: 'Professional Support',
    image: 'https://ui-avatars.com/api/?name=Carl+Brettle&background=0f172a&color=f59e0b&bold=true',
    text: 'Exceptional service. The team provided straightforward, professional guidance that delivered outstanding results. The support from our dedicated advisor and the entire team was truly remarkable.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-8',
    name: 'M Ola Tijani',
    location: 'NG', // Nigeria
    reviewsCount: '5 reviews',
    date: 'May 21, 2025',
    course: 'Educational Support Service',
    image: 'https://ui-avatars.com/api/?name=M+Ola+Tijani&background=0f172a&color=8b5cf6&bold=true',
    text: 'Outstanding Educational Excellence. The team at Synergy Scholars Academia demonstrates exceptional professionalism with impeccable communication and responsive service. As a premier educational institution, Synergy Scholars Academia is dedicated to delivering excellence, resulting in the award of distinguished degrees at Bachelor, Master, and Doctorate levels.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-9',
    name: 'Lee',
    location: 'GB', // United Kingdom
    reviewsCount: '9 reviews',
    date: 'April 3, 2025',
    course: 'Doctorate Program',
    image: 'https://ui-avatars.com/api/?name=Lee&background=0f172a&color=ec4899&bold=true',
    text: 'I engaged Synergy Scholars Academia for my doctorate journey. The team demonstrated exceptional professionalism and provided invaluable support whenever needed. I wholeheartedly recommend them. While due diligence is essential with any educational provider, I thoroughly researched all accreditations, and throughout the process, they delivered exactly as promised. The experience exceeded expectations. If you\'re considering pursuing your doctorate, this represents a legitimate, streamlined, and value-driven pathway. Thank you, Synergy Scholars Academia.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-10',
    name: 'Elizabeth Samuh',
    location: 'GB', // United Kingdom
    reviewsCount: '10 reviews',
    date: 'April 26, 2025',
    course: 'Honorary Doctorate in Social Science',
    image: 'https://ui-avatars.com/api/?name=Elizabeth+Samuh&background=0f172a&color=10b981&bold=true',
    text: 'Receiving an Honorary Doctorate of Philosophy in Social Science and Health Care represents a profound milestone in my distinguished journey. This recognition is both well-honored and well-deserved, marking a continuation of excellence and fulfillment in my professional trajectory.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  }
];

// Additional utility function to get featured testimonials (top 4 for carousel)
export const featuredTestimonials = testimonials.slice(0, 4);

// Function to get testimonials by program type
export const getTestimonialsByProgram = (programType) => {
  const programMap = {
    'phd': ['PhD Program', 'PhD in AI by Research'],
    'dba': ['Doctor of Business Administration (DBA)'],
    'doctorate': ['Doctorate Program', 'Honorary Doctorate in Social Science'],
    'all': ['Educational Support Service', 'Professional Support', 'Customer Service Experience']
  };
  
  if (!programMap[programType]) return testimonials;
  
  return testimonials.filter(testimonial => 
    programMap[programType].includes(testimonial.course)
  );
};

// Function to get recent testimonials (last 6 months)
export const getRecentTestimonials = () => {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  return testimonials.filter(testimonial => {
    const reviewDate = new Date(testimonial.date);
    return reviewDate >= sixMonthsAgo;
  });
};

// Function to get testimonials by location
export const getTestimonialsByLocation = (countryCode) => {
  return testimonials.filter(testimonial => testimonial.location === countryCode);
};

// Function to get top-rated testimonials (all are 5-star)
export const getTopRatedTestimonials = () => {
  return testimonials; // All are 5-star
};

// Get summary statistics
export const getTestimonialStats = () => {
  return {
    totalReviews: testimonials.length,
    averageRating: 5.0,
    countries: [...new Set(testimonials.map(t => t.location))],
    programs: [...new Set(testimonials.map(t => t.course))],
    dateRange: {
      oldest: testimonials[testimonials.length - 1].date,
      newest: testimonials[0].date
    }
  };
};