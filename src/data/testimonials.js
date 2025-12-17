/**
 * Testimonials Data - Real Reviews from Trustpilot
 * Student testimonials for the Testimonials component
 * Used on Home and About pages
 * Data sourced from: https://www.trustpilot.com/review/qualifylearn.com
 */

export const testimonials = [
  {
    id: 'tp-1',
    name: 'Consumer',
    location: 'IN',
    reviewsCount: '1 review',
    date: '7 days ago',
    course: 'PhD Program',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    text: 'Qualify Learn helping me to achieve my milestone to get a PhD program, they are highly professionals and guide for each and everything through out the process. They explained a clear pathway to complete a program in accelerated way with proper academic guidance. I highly recommend them for their work and professionalism for each and every candidate.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-2',
    name: 'Bafana Peter Malinga',
    location: 'ZA',
    reviewsCount: '2 reviews',
    date: 'Dec 3, 2025',
    course: 'Doctor of Business Administration (DBA)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    text: 'I would like to extend my deepest gratitude to Qualify Learn for their exceptional support throughout my Doctor of Business Administration (DBA) journey. Their professionalism, structured guidance, and commitment to academic excellence played a significant role in helping me achieve this milestone. From the quality of resources to the responsiveness of their team, Qualify Learn consistently demonstrated a high level of expertise and genuine care for their students\' success. I am truly grateful for the role they played in my academic advancement.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-3',
    name: 'Farooq Mir',
    location: 'GB',
    reviewsCount: '1 review',
    date: 'Oct 25, 2025',
    course: 'Customer Service Experience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    text: 'Excellent customer service . Fast communication. Trustworthy organisation.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-4',
    name: 'Firas Ali',
    location: 'GB',
    reviewsCount: '3 reviews',
    date: 'Oct 9, 2025',
    course: 'PhD in AI by Research',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    text: 'Excellent educational platform especially for professionals with plenty of experience for accelerated higher qualification. I am a mature student with lots of IT and other professional experience who manages to successfully complete a PhD in AI by research in a record time that no other way it would\'ve been possible. Excellent academic support backed up by excellent administration front.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-5',
    name: 'Swati Srivastava',
    location: 'CA',
    reviewsCount: '1 review',
    date: 'Aug 28, 2025',
    course: 'PhD Program',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    text: 'Irene helped me throughout the process. I feel all the mentors are experienced and knowledgeable. I would recommend to go with qualify learn if you want to pursue PhD.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-6',
    name: 'Carl Brettle',
    location: 'GB',
    reviewsCount: '5 reviews',
    date: 'Jul 1, 2025',
    course: 'Professional Support',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    text: 'Exceptional. Straightforward, professional help to get the job done. I\'ve been very much helped by Irene and the team.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-7',
    name: 'M Ola Tijani',
    location: 'NG',
    reviewsCount: '5 reviews',
    date: 'Jun 17, 2025',
    course: 'All Degree Levels',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    text: 'Excellent Educational Support Service. The team at Qualify Learn is highly professional with excellent communications and speedy responses. As an educational service provider, Qualify Learn is exceptional and dedicated to quality results leading to the award of relevant degrees at Bachelor, Master, and Doctorate levels.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-8',
    name: 'Lee',
    location: 'GB',
    reviewsCount: '9 reviews',
    date: 'May 14, 2025',
    course: 'Doctorate Program',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    text: 'I used qualify learn for my doctorate. I felt they were professional and helpful whenever I needed. I genuinely recommend them. Whilst people should be rightly skeptical about any training provider, I did my research on all the accreditations and throughout they did exactly what they said they would do. I wasn\'t disappointed. If you\'re wanting to explore getting your doctorate, this is a legitimate, easy and cost effective way of doing that.',
    rating: 5,
    source: 'Trustpilot',
    useful: true
  },
  {
    id: 'tp-9',
    name: 'Elizabeth Samuh',
    location: 'GB',
    reviewsCount: '10 reviews',
    date: 'Apr 26, 2025',
    course: 'Honorary Doctorate in Social Science',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
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
    'doctorate': ['Doctorate Program'],
    'all': ['All Degree Levels', 'Professional Support', 'Customer Service Experience', 'Honorary Doctorate']
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