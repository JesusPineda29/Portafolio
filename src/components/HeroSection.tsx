import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/content';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  {/*Animación */}
  useEffect(() => {
    const titles = ["Full Stack Developer", "Fronted Developer", "solucionador de problemas"];
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let pauseDuration = 1500;
    
    const type = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentTitle.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentTitle.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 150;
      }
      
      if (!isDeleting && currentCharIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = pauseDuration;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    type();
    
    return () => {
      // Cleanup if needed
    };
  }, []);


  return (
    <section id="home" className="min-h-screen relative flex items-center pt-16 bg-gray-950 bg-hero-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-lg md:text-xl text-emerald-500 font-medium mb-2">
              Hola, yo soy
            </h2>
            <h1 className="heading-xl text-white mb-2">
              {personalInfo.name}
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 font-medium min-h-[36px] mb-2">
              Yo Soy <span ref={textRef} className="text-emerald-500"></span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl">
              {personalInfo.description} Soy una persona reflexiva, organizada y con actitud colaborativa. Me adapto con facilidad, mantengo buenas relaciones interpersonales y estoy siempre dispuesto a aprender y resolver con iniciativa.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="btn btn-outline">
                Proyectos
              </a>
              <a href="#contact" className="btn btn-outline">
                Contacto
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="h-px w-10 bg-gray-700"></div> {/*Linea Decorativa */}
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-emerald-700 text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && <Github size={18} />}
                    {link.icon === 'linkedin' && <Linkedin size={18} />}

                  </a>
                ))}
              </div>
            </div>
          </div>
          
          
          {/* Hero Image */}
          <div className="lg:col-span-2 relative p-10">
            <div className="relative w-full h-[550px] rounded-2xl overflow-hidden bg-gray-900 border-2 border-emerald-900/50 shadow-xl shadow-emerald-900/20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/90 to-transparent opacity-60 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/public/FOTOinfantil.png')] bg-cover bg-center"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-5 rounded-xl">
                  <p className="text-emerald-400 font-medium">{personalInfo.availability}</p>
                  <p className="text-gray-300 mt-1">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <span className="text-sm mb-2">Desliza hacia abajo</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;