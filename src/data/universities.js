/**
 * Universities Data
 * Static data for partner universities and institutions
 * Used in StudyAbroad page and course details
 */

export const universities = [
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    country: 'USA',
    ranking: 'Top 5',
    programs: ['Engineering', 'Computer Science', 'Business'],
    description: 'World-renowned for innovation and research excellence.',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200'
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    country: 'USA',
    ranking: 'Top 5',
    programs: ['Computer Science', 'Business', 'Engineering'],
    description: 'Leading institution in Silicon Valley with strong industry connections.',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200'
  },
  {
    id: 'harvard',
    name: 'Harvard University',
    country: 'USA',
    ranking: 'Top 3',
    programs: ['Business', 'Law', 'Medicine', 'Engineering'],
    description: 'Ivy League institution with exceptional academic reputation.',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200'
  },
  {
    id: 'oxford',
    name: 'University of Oxford',
    country: 'UK',
    ranking: 'Top 5',
    programs: ['Humanities', 'Sciences', 'Business', 'Law'],
    description: 'Historic university with centuries of academic excellence.',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200'
  },
  {
    id: 'cambridge',
    name: 'University of Cambridge',
    country: 'UK',
    ranking: 'Top 5',
    programs: ['Sciences', 'Engineering', 'Business', 'Humanities'],
    description: 'Prestigious institution known for research and innovation.',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200'
  },
  {
    id: 'eth',
    name: 'ETH Zurich',
    country: 'Switzerland',
    ranking: 'Top 10',
    programs: ['Engineering', 'Computer Science', 'Natural Sciences'],
    description: 'Leading European technical university with strong research focus.',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200'
  }
];

/**
 * Get university by ID
 */
export function getUniversityById(id) {
  return universities.find(uni => uni.id === id);
}

/**
 * Get universities by country
 */
export function getUniversitiesByCountry(country) {
  return universities.filter(uni => uni.country === country);
}

