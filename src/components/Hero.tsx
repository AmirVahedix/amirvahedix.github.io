import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProfileImage from '../assets/images/profile.png'

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gray-900 px-4 relative overflow-hidden"
    >
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-gray-800/10 to-gray-900/50"></div>
      </div>

      <div className={`max-w-4xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        {/* Profile Image */}
        <div className={`mb-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-gray-800"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className={`mb-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Amir Vahedi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Backend Developer
          </p>
          <div className="flex items-center justify-center mt-2 text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Tehran, Iran</span>
          </div>
        </div>

        {/* Bio */}
        <div className={`mb-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a back-end developer with 5+ years of experience working with edge technologies. 
            I participated in many back-end projects these years using <span className="text-yellow-400 font-semibold">PHP & Laravel</span> as my main stack and 
            libraries like Livewire, Filament, etc.  I follow the trends of the back-end world 
            and keep myself updated with the latest tools. I love working in teams and creating magic
             in the world together.
          </p>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-6 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { icon: Github, href: 'https://github.com/amirvahedix', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/amirvahedix', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:amirvahedix@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }, index) => (
            <a
              key={label}
              href={href}
              target='_blank'
              className="group p-3 rounded-full bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-6 h-6 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};