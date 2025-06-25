import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    id: 1,
    title: 'Senior Backend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: 'Lead backend development for enterprise-level applications serving 1M+ users. Architected microservices infrastructure and implemented CI/CD pipelines.',
    achievements: [
      'Reduced API response time by 60% through database optimization',
      'Led team of 5 developers in migrating monolith to microservices',
      'Implemented real-time features serving 100K+ concurrent users'
    ],
    technologies: ['Laravel', 'PHP 8', 'MySQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Digital Innovations Inc',
    location: 'San Jose, CA',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects, focusing on API development and database design for e-commerce and fintech applications.',
    achievements: [
      'Built payment processing system handling $2M+ monthly transactions',
      'Designed scalable database architecture for multi-tenant applications',
      'Mentored junior developers and established coding standards'
    ],
    technologies: ['Laravel', 'PHP 7', 'PostgreSQL', 'Vue.js', 'AWS', 'Stripe'],
  },
  {
    id: 3,
    title: 'PHP Developer',
    company: 'WebSolutions Agency',
    location: 'Sacramento, CA',
    period: '2017 - 2019',
    description: 'Developed custom web applications and CMS solutions for small to medium businesses. Focused on performance optimization and user experience.',
    achievements: [
      'Delivered 20+ successful web applications',
      'Improved website performance by 80% through optimization',
      'Established automated testing protocols'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
  },
];

export const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-800 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-yellow-500">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building robust backend solutions across different industries and scales
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative pl-20 transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-800 shadow-lg"></div>

                <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-yellow-400 font-medium mb-2">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-yellow-500 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-yellow-900/30 text-yellow-300 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};