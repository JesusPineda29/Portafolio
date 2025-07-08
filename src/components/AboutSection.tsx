import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import { aboutContent, personalInfo } from '../data/content';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Sobre mí</h2>
          <p className="text-lg text-gray-400">
            Conoce más sobre mí, mi experiencia y lo que hago.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-emerald-900/50 shadow-xl shadow-emerald-900/20">
              <img 
                src="/Computer.jpg" 
                alt="About Me" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
            </div>
            
            {/* Experience card */}
            <div className="absolute -bottom-8 -right-8 md:bottom-16 md:right-16 z-20 bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg w-48 md:w-60">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-bold text-emerald-500">2+</span>
                  <p className="text-gray-400 text-sm md:text-base mt-2">Años de Experiencia</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 z-0 w-40 h-40 rounded-full border-8 border-dashed border-emerald-700/20 animate-spin-slow"></div>
          </div>
          
          {/* Content Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {aboutContent.headline}
            </h3>
            
            <div className="space-y-4">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Info boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Nombre</h4>
                  <p className="text-gray-400">{personalInfo.name}</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Ubicación</h4>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Experiencia</h4>
                  <p className="text-gray-400">{personalInfo.title}</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Disponibilidad</h4>
                  <p className="text-gray-400">{personalInfo.availability}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;