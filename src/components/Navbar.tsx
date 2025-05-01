import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../data/content';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real implementation, this would toggle classes on the document body
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-emerald-500">
          Jesús Pineda <span className="text-white">Full Stack Developer.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-emerald-500" /> : <Moon size={20} className="text-emerald-500" />}
          </button> */}

          <a href="#contact" className="btn btn-primary">
            Contactame
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-emerald-500" /> : <Moon size={20} className="text-emerald-500" />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="container-custom py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-2 text-gray-300 hover:text-emerald-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="btn btn-primary w-full text-center justify-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contactame
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;