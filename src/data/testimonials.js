/**
 * Testimonials Data - Real Reviews from Trustpilot
 * Student testimonials for the Testimonials component
 * Data sourced from: https://www.trustpilot.com/review/qualifylearn.com
 * All reviews are 5-star "Excellent" ratings
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
    name: "Irene's Client",
    location: 'NG', // Nigeria
    reviewsCount: '1 review',
    date: 'August 12, 2025',
    course: 'PhD Program',
    image: 'https://ui-avatars.com/api/?name=Irene+Client&background=0f172a&color=ec4899&bold=true',
    text: 'Irene helped me throughout the process. I feel all the mentors are experienced and knowledgeable. I would recommend to go with qualify learn if you want to pursue PhD.',
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
    text: 'Exceptional. Straightforward, professional help to get the job done. I\'ve been very much helped by Irene and the team.',
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
    text: 'Excellent Educational Support Service. The team at Qualify Learn is highly professional with excellent communications and speedy responses. As an educational service provider, Qualify Learn is exceptional and dedicated to quality results leading to the award of relevant degrees at Bachelor, Master, and Doctorate levels.',
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
    text: 'I used qualify learn for my doctorate. I felt they were professional and helpful whenever I needed. I genuinely recommend them. Whilst people should be rightly skeptical about any training provider, I did my research on all the accreditations and throughout they did exactly what they said they would do. I wasn\'t disappointed. If you\'re wanting to explore getting your doctorate, this is a legitimate, easy and cost effective way of doing that. Thank you qualify learn.',
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
    text: 'Honorary doctorate of philosophy in social science and health care achievement is a reflection of my incredible journey, well honored well deserved a continuity of success and fulfilment ahead.',
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