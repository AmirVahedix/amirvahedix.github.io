import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    id: 1,
    title: 'Technical Team Lead',
    company: 'Rasadent',
    location: 'Tehran, Iran',
    period: '2024 - Present',
    description: 'As a Technical Team Lead at Resadent, I led the development of several key products, including Resadent Marketplace, a multi-vendor online e-commerce platform for dental equipment.. I also led the creation of ResaChortekeh, an accounting system tailored for dentists, enabling them to calculate treatment costs based on materials and consumables, so they can determine their profit margins. In my role as Senior Backend Developer and Team Lead, I was responsible for the entire product lifecycle, from initial development to launch, working closely with my team. Our backend was built using PHP/Laravel, and we leveraged tools such as RabbitMQ and ElasticSearch. Project management was facilitated through Nibak, our in-house project management tool, and Git & GitHub was used for our source code management.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'RabbitMQ', 'ElasticSearch', 'Amazon S3'],
  },
  {
    id: 2,
    title: 'Technical Manager',
    company: 'NeuroSurgery Association of SBUMS',
    location: 'Tehran, Iran',
    period: '2022 - Present',
    description: 'For the past three years, I have served as the part-time Technical Manager at the Neurosurgery Association ofShahid Beheshti University. The association offers accredited training courses in neurosurgery, artificial intelligence in medicine, and research. These courses are conducted on the Neurosurgery platform, which I developed from the ground up using the Laravel framework, along with Livewire, TailwindCSS, and AlpineJS. The platform supports features such as online exams and certificate generation for participants. I have also collaborated with the association on writing articles related to artificial intelligence in medical science.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'Livewire', 'AlpineJS'],
  },
  {
    id: 3,
    title: 'Chief Technology Officer',
    company: '310 Agency',
    location: 'Tehran, Iran',
    period: '2023 - 2024',
    description: 'As Chief Technology Officer at 310 Branding & Programming Agency, I managed a portfolio of projects. This included the Naji Foundation e-learning platform focused on medical sciences, the Melki Parts e-commerce platform for automotive performance parts, and Wabba Iran, a website for bodybuilding training and competitions.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'Livewire', 'AlpineJS'],
  },
  {
    id: 4,
    title: 'Front-end Developer',
    company: 'Hital',
    location: 'Yazd, Iran (Remote)',
    period: '2021 - 2023',
    description: 'As a Front-end Developer at Hital, I contributed to a range of projects, including Hamrah Felez, which is an online directory for the iron and steel industry, and Radio Bamik, an internet radio platform specializing in podcasts and audiobooks, etc.',
    technologies: ['NextJS', 'ReactJS', 'TailwindCSS', 'TypeScript'],
  },
  {
    id: 5,
    title: 'Back-end Developer',
    company: 'Silino',
    location: 'Kerman, Iran',
    period: '2019 - 2021',
    description: '',
    technologies: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'Livewire', 'AlpineJS'],
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
                        {/* <ExternalLink className="w-4 h-4 mr-2" /> */}
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

                  {/* <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-yellow-500 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}

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