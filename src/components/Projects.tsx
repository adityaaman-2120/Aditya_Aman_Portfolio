import { projects } from "../data/projects";
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-600 text-lg">Real-world applications I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-6">
                {/* Logo Section - UPDATED TO FILL FULL BOX */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {/* Logo Container - NOW FILLS FULL SIZE */}
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.logoBg} flex items-center justify-center shadow-lg overflow-hidden`}>
                        {project.logo ? (
                          <img 
                            src={project.logo} 
                            alt={`${project.title} Logo`}
                            className="w-full h-full object-cover" // Changed from object-contain to object-cover
                          />
                        ) : (
                          <span className="text-white font-bold text-xl">{project.title.charAt(0)}</span>
                        )}
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">Project</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-xs text-gray-500">{project.tech.length} techs</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* GitHub & Demo Links */}
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-all hover:scale-110"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-all hover:scale-110"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 hover:border-blue-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* View Details Button */}
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium hover:from-blue-100 hover:to-purple-100 transition-all group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;