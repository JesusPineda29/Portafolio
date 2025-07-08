import { useState, useCallback, useMemo } from 'react';
import { Github, ExternalLink, ChevronRight, X } from 'lucide-react';
import { projects } from '../data/content';
import { Project } from '../types';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useMemo(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    return filter === 'all' 
      ? projects 
      : projects.filter(project => project.tags.includes(filter));
  }, [filter]);

  // Get unique tags with count
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach(project => {
      project.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const uniqueTags = useMemo(() => 
    Object.keys(tagCounts).sort(),
    [tagCounts]
  );

  // Handle project click
  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  }, []);

  // Close modal with Escape
  useMemo(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedProject, closeModal]);

  // Get image URL with fallback
  const getImageUrl = useCallback((imageName: string) => {
    return `/${imageName}`;
  }, []);

  // Filter button styles
  const getFilterButtonStyle = (isActive: boolean) => 
    `px-4 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
    }`;

  // Loading skeleton component
  const ProjectSkeleton = () => (
    <div className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 animate-pulse">
      <div className="h-64 bg-gray-800" />
      <div className="p-6">
        <div className="h-6 bg-gray-800 rounded mb-2" />
        <div className="h-4 bg-gray-800 rounded mb-4" />
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-16 bg-gray-800 rounded-full" />
          <div className="h-6 w-20 bg-gray-800 rounded-full" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <div className="h-5 w-5 bg-gray-800 rounded" />
            <div className="h-5 w-5 bg-gray-800 rounded" />
          </div>
          <div className="h-5 w-5 bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  );

  // Project card component
  const ProjectCard = ({ project }: { project: Project }) => (
    <div
      className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-700 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
      onClick={() => handleProjectClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles del proyecto ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleProjectClick(project);
        }
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={getImageUrl(project.image)}
          alt={`Captura de pantalla del proyecto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button className="btn btn-primary w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
              Ver detalles
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-800 text-emerald-400 rounded-full border border-gray-700"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full border border-gray-700">
              +{project.tags.length - 3} más
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors p-1 rounded"
                onClick={(e) => e.stopPropagation()}
                aria-label="Ver código en GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors p-1 rounded"
                onClick={(e) => e.stopPropagation()}
                aria-label="Ver demo en vivo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <ChevronRight size={20} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Mis Proyectos</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Revisa algunos de mis trabajos recientes y proyectos personales. 
            Cada proyecto representa un desafío único y una oportunidad de aprendizaje.
          </p>
        </div>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={getFilterButtonStyle(filter === 'all')}
            aria-pressed={filter === 'all'}
          >
            Todos ({projects.length})
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={getFilterButtonStyle(filter === tag)}
              aria-pressed={filter === tag}
            >
              {tag} ({tagCounts[tag]})
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <ProjectSkeleton key={i} />
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No se encontraron proyectos
              </div>
              <p className="text-gray-500">
                Intenta ajustar tus filtros
              </p>
            </div>
          )}
        </div>

        {/* Project modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div 
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={getImageUrl(selectedProject.image)}
                  alt={`Captura de pantalla del proyecto ${selectedProject.title}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-gray-900/70 p-2 rounded-full hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Cerrar modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-gray-800 text-emerald-400 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <Github size={16} />
                      Ver código
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <ExternalLink size={16} />
                      Demo en vivo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;