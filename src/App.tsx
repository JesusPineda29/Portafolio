import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  // Update title
  useEffect(() => {
    document.title = "Jesús Pineda | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Custom cursor */}
      <Cursor />
      
      {/* Header/Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;