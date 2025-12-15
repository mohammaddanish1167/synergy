/**
 * Courses Data
 * Static data for all available courses (UG, PG, Doctoral)
 * This data is used across the Courses and CourseDetail pages
 */

export const courses = [
  // Undergraduate Courses
  {
    id: 'ug-cs',
    title: 'Computer Science',
    category: 'Undergraduate',
    duration: '4 years',
    description: 'Comprehensive program covering programming, algorithms, data structures, software engineering, and emerging technologies.',
    fullDescription: 'Our Computer Science undergraduate program provides a solid foundation in computer science fundamentals. Students learn programming languages, software development, database management, networking, and cybersecurity. The curriculum includes hands-on projects and internships to prepare graduates for careers in tech.',
    universities: ['MIT', 'Stanford', 'Carnegie Mellon', 'UC Berkeley'],
    requirements: ['High school diploma', 'Math and Science background', 'English proficiency'],
    careerPaths: ['Software Engineer', 'Data Scientist', 'Systems Analyst', 'Web Developer'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
  },
  {
    id: 'ug-eng',
    title: 'Engineering',
    category: 'Undergraduate',
    duration: '4 years',
    description: 'Diverse engineering disciplines including Mechanical, Electrical, Civil, and Chemical Engineering.',
    fullDescription: 'Our Engineering program offers specializations in multiple disciplines. Students gain practical experience through labs, design projects, and industry partnerships. The program emphasizes problem-solving, innovation, and sustainable engineering practices.',
    universities: ['MIT', 'Caltech', 'Georgia Tech', 'Purdue'],
    requirements: ['High school diploma', 'Strong Math and Physics', 'SAT/ACT scores'],
    careerPaths: ['Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer', 'Project Manager'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800'
  },
  {
    id: 'ug-bus',
    title: 'Business Administration',
    category: 'Undergraduate',
    duration: '4 years',
    description: 'Learn business fundamentals, management, marketing, finance, and entrepreneurship.',
    fullDescription: 'The Business Administration program prepares students for leadership roles in the corporate world. Curriculum covers accounting, finance, marketing, operations, and strategic management. Students participate in case studies, internships, and business simulations.',
    universities: ['Wharton', 'Harvard Business School', 'Kellogg', 'Sloan'],
    requirements: ['High school diploma', 'Math proficiency', 'Leadership experience preferred'],
    careerPaths: ['Business Analyst', 'Marketing Manager', 'Financial Advisor', 'Entrepreneur'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  },
  
  // Postgraduate Courses
  {
    id: 'pg-mba',
    title: 'Master of Business Administration (MBA)',
    category: 'Postgraduate',
    duration: '2 years',
    description: 'Advanced business management program for career advancement and leadership roles.',
    fullDescription: 'Our MBA program is designed for professionals seeking to advance their careers. The curriculum focuses on strategic thinking, leadership, global business, and innovation. Students work on real-world projects and have access to extensive networking opportunities.',
    universities: ['Harvard Business School', 'Stanford GSB', 'Wharton', 'INSEAD'],
    requirements: ['Bachelor\'s degree', 'GMAT/GRE scores', 'Work experience (2+ years)', 'Letters of recommendation'],
    careerPaths: ['CEO', 'Consultant', 'Investment Banker', 'Product Manager'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
  },
  {
    id: 'pg-mscs',
    title: 'Master of Science in Computer Science',
    category: 'Postgraduate',
    duration: '2 years',
    description: 'Advanced specialization in AI, Machine Learning, Cybersecurity, or Software Engineering.',
    fullDescription: 'The MSCS program offers deep specialization in cutting-edge areas of computer science. Students can focus on artificial intelligence, machine learning, cybersecurity, distributed systems, or human-computer interaction. Research opportunities and industry partnerships provide practical experience.',
    universities: ['MIT', 'Stanford', 'Carnegie Mellon', 'UC Berkeley'],
    requirements: ['Bachelor\'s in CS or related field', 'GRE scores', 'Programming portfolio', 'Research experience'],
    careerPaths: ['AI Researcher', 'ML Engineer', 'Security Architect', 'Tech Lead'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800'
  },
  
  // Doctoral Programs
  {
    id: 'phd-cs',
    title: 'PhD in Computer Science',
    category: 'Doctoral',
    duration: '4-6 years',
    description: 'Research-intensive program for aspiring academics and industry researchers.',
    fullDescription: 'The PhD program in Computer Science is designed for students who want to contribute to cutting-edge research. Students work closely with faculty advisors on original research projects, publish papers, and defend a dissertation. Areas of research include AI, systems, theory, and human-computer interaction.',
    universities: ['MIT', 'Stanford', 'Carnegie Mellon', 'UC Berkeley'],
    requirements: ['Master\'s degree (or exceptional Bachelor\'s)', 'GRE scores', 'Research proposal', 'Publications preferred'],
    careerPaths: ['University Professor', 'Research Scientist', 'Chief Technology Officer', 'R&D Director'],
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c7edf48?w=800'
  }
];

/**
 * Get course by ID
 */
export function getCourseById(id) {
  return courses.find(course => course.id === id);
}

/**
 * Get courses by category
 */
export function getCoursesByCategory(category) {
  return courses.filter(course => course.category === category);
}

/**
 * Get featured courses (first five)
 */
export function getFeaturedCourses() {
  return courses.slice(0, 5);
}

