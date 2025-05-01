import React from 'react';
import { Code, Server, Figma, GitBranch, Cloud, FileType, Paintbrush as PaintBrush, RepeatIcon as ReactIcon } from 'lucide-react';
import { skills } from '../data/content';

const iconMap: { [key: string]: React.ReactNode } = {
  react: <ReactIcon size={24} />,
  code: <Code size={24} />,
  server: <Server size={24} />,
  figma: <Figma size={24} />,
  'git-branch': <GitBranch size={24} />,
  cloud: <Cloud size={24} />,
  'file-type': <FileType size={24} />,
  paintbrush: <PaintBrush size={24} />,
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Mis habilidades</h2>
          <p className="text-lg text-gray-400">
          Estas son las tecnologías y herramientas con las que trabajo para dar vida a las ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="card hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-2xl font-bold text-white">{skill.name}</div>
                <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500">
                  {iconMap[skill.icon]}
                </div>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="text-sm text-gray-400">{skill.level}% Dominio</div>
            </div>
          ))}
        </div>
        
        {/* Additional skills */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white text-center mb-8">Otras Tecnologías y Herramientas</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML5', 'CSS3', 'SASS', 'Git', 'Webpack', 'Redux', 'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Jest', 'Cypress', 'Storybook'].map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-emerald-900/50 hover:text-white transition-colors duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;