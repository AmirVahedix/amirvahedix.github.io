import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Linux', level: 90 },
      { name: 'CI/CD', level: 75 },
    ]
  },
  {
    title: 'API & Integration',
    skills: [
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 70 },
      { name: 'Microservices', level: 80 },
      { name: 'WebSockets', level: 75 },
    ]
  },
];

export const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-yellow-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise in modern backend technologies and development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-gray-800 rounded-xl p-6 border border-gray-700 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};