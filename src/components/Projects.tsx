import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import RasadentImage from '../assets/images/rasadent.png';
import NeuroSurgeryImage from '../assets/images/neuro-surgery.png';
import MalekiPartsImage from '../assets/images/malekiparts.png';
import NajiFoundationImage from '../assets/images/naji.png';
import HamrahFelezImage from '../assets/images/hamrah-felez.gif';
import RadioBamikImage from '../assets/images/radiobamik.jpg';
import ClinicMotorImage from '../assets/images/clinic-motor.png';


const projects = [
  {
    id: 1,
    title: 'Rasadent',
    description: 'A multi-vendor e-commerce platform for Dental equipments and metrials',
    technologies: ['Laravel', 'MySQL', 'RabbitMQ', 'ElasticSearch', 'Amazon S3'],
    image: RasadentImage,
    demoUrl: 'https://rasadent.com',
  },
  {
    id: 2,
    title: 'Chortkeh',
    description: 'Finance platform for Dentists to calculate profit and loss of their clinics, As a branch of Rasadent',
    technologies: ['Laravel', 'MySQL', 'ElasticSearch', 'RabbitMQ'],
    image: "https://rasadent.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchortkeh-main-banner.42280800.gif&w=2048&q=75",
    demoUrl: 'https://rasadent.com/chortkeh',
  },
  {
    id: 3,
    title: 'NeuroSurgery',
    description: 'E-learning platform for neurosurgery and AI in medicine courses. A part of "Neurosurgery association of SBUMS"',
    technologies: ['Laravel', 'Livewire', 'AlpineJS', 'TailwindCSS'],
    image: NeuroSurgeryImage,
    demoUrl: 'https://neuro-surgery.info'
  },
  {
    id: 4,
    title: 'Naji Foundation',
    description: 'E-learning platform for physiotherapy and medicine courses',
    technologies: ['Laravel', 'Livewire', 'AlpineJS', 'TailwindCSS'],
    image: NajiFoundationImage,
    demoUrl: 'https://najifoundation.com'
  },
  {
    id: 5,
    title: 'MalekiParts',
    description: 'E-commerce platform designed for car Tuning and repair parts',
    technologies: ['Laravel', 'Livewire', 'AlpineJS', 'TailwindCSS'],
    image: MalekiPartsImage,
    demoUrl: 'https://malekiparts.com'
  },
  {
    id: 7,
    title: 'ClinicMotor',
    description: 'Portfolio website for car repair company alongside with CRM to manage services in the company',
    technologies: ['Laravel', 'Livewire', 'AlpineJS', 'TailwindCSS'],
    image: ClinicMotorImage,
    demoUrl: 'https://clinicmotor.ir/'
  },
  {
    id: 6,
    title: 'RadioBamik',
    description: 'Podcasts and E-books online store',
    technologies: ['NextJS', 'ReactJS', 'TailwindCSS', 'TypeScript', 'React Query'],
    image: RadioBamikImage,
    demoUrl: 'https://radiobamik.com/'
  },
  {
    id: 8,
    title: 'HamrahFelez',
    description: 'Portfolio website for an iron and steel industry company',
    technologies: ['NextJS', 'ReactJS', 'TypeScript', 'TailwindCSS', 'React Query'],
    image: HamrahFelezImage,
    demoUrl: 'https://hamrahfelez.org/'
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
                  className="w-full h-[218px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <a 
                  href={project.demoUrl}
                  target='_blank'
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-500 transition-colors duration-300">
                  <Code className="w-4 h-4 mr-2" />
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
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
    </section>
  );
};