import React from 'react';
import { 
  Code, 
  Server, 
  Figma, 
  GitBranch, 
  Cloud, 
  FileType, 
  Paintbrush as PaintBrush, 
  RepeatIcon as ReactIcon,
  Database,
  Layers,
  Globe,
  Settings
} from 'lucide-react';

// Estructura de datos para habilidades principales
const mainSkills = [
  {
    name: 'React',
    icon: 'react',
    description: 'Desarrollo de interfaces modernas y componentes reutilizables'
  },
  {
    name: 'TypeScript',
    icon: 'code',
    description: 'Tipado estático y desarrollo escalable'
  },
  {
    name: 'JavaScript',
    icon: 'code',
    description: 'ES6+, programación funcional y asíncrona'
  },
  {
    name: 'Node.js',
    icon: 'server',
    description: 'Desarrollo de APIs y aplicaciones del lado del servidor'
  },
  {
    name: 'Express',
    icon: 'server',
    description: 'Framework web rápido y minimalista'
  },
  {
    name: 'Tailwind CSS',
    icon: 'paintbrush',
    description: 'Framework CSS utility-first para diseño rápido'
  },
  {
    name: 'MongoDB',
    icon: 'database',
    description: 'Base de datos NoSQL para aplicaciones escalables'
  },
  {
    name: 'PostgreSQL',
    icon: 'database',
    description: 'Base de datos relacional robusta y confiable'
  }
];

// Habilidades secundarias
const secondarySkills = ['HTML', 'CSS3', 'Java', 'Bootstrap', 'Vite', 'Redux',  'Pug.js', 'GitHub', 'Netlify', 'Jest', 'Git', 'Figma', 'Vercel', 'Supertest'];

const iconMap: { [key: string]: React.ReactNode } = {
  react: <ReactIcon size={24} />,
  code: <Code size={24} />,
  server: <Server size={24} />,
  figma: <Figma size={24} />,
  'git-branch': <GitBranch size={24} />,
  cloud: <Cloud size={24} />,
  'file-type': <FileType size={24} />,
  paintbrush: <PaintBrush size={24} />,
  database: <Database size={24} />,
  layers: <Layers size={24} />,
  globe: <Globe size={24} />,
  settings: <Settings size={24} />
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Mis Habilidades</h2>
          <p className="text-lg text-gray-400">
            Estas son las tecnologías y herramientas con las que trabajo para dar vida a las ideas.
          </p>
        </div>

        {/* Habilidades Principales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Habilidades Principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainSkills.map((skill) => (
              <div
                key={skill.name}
                className="card hover:-translate-y-2 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xl font-bold text-white">{skill.name}</div>
                  <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {iconMap[skill.icon]}
                  </div>
                </div>
                
                {/* Descripción */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {skill.description}
                </p>
                

                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2.5 rounded-full transition-all duration-700 ease-out"

                  />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Secundarias */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Otras Tecnologías y Herramientas
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {secondarySkills.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-emerald-900/50 hover:text-white transition-all duration-300 hover:scale-105"
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