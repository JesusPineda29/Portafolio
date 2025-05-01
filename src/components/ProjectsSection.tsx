import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight, XCircle } from 'lucide-react';
import { projects } from '../data/content';
import { Project } from '../types';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const uniqueTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const getImageUrl = (imageName: string) => {
    return new URL(`/src/public/${imageName}`, import.meta.url).href;
  };

  return (
    <section id="projects" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Mis Proyectos</h2>
          <p className="text-lg text-gray-400">
          Revisa algunos de mis trabajos recientes y proyectos personales.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              filter === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === tag
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-700 transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={getImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="project-overlay absolute inset-0 bg-emerald-900/70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <button className="btn btn-primary">Ver detalles</button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 line-clamp-2 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-800 text-emerald-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <ChevronRight size={20} className="text-emerald-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={getImageUrl(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-gray-900/70 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                >
                  <XCircle size={24} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-gray-800 text-emerald-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="flex space-x-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      <Github size={16} /> Ver código
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} /> Demostración en vivo
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