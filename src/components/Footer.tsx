import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-emerald-500">
              Jesús Pineda <span className="text-white">Full Stack Developer.</span>
            </a>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Términos del Servicio
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all duration-300 ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;