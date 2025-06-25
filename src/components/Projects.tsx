import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with advanced inventory management, payment processing, and real-time analytics.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Stripe API'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'API Gateway System',
    description: 'Microservices API gateway with rate limiting, authentication, and comprehensive logging for enterprise applications.',
    technologies: ['Laravel', 'Docker', 'PostgreSQL', 'RabbitMQ', 'JWT'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'Scalable chat application with WebSocket support, file sharing, and advanced moderation features.',
    technologies: ['Laravel', 'Pusher', 'React', 'MySQL', 'AWS S3'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in backend development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-yellow-900/30 text-yellow-300 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-500 transition-colors duration-300">
                  <Code className="w-4 h-4 mr-2" />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};