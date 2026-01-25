import { Container } from "../shared/Container";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  client: string;
  logo: string;
  fullDescription: string;
  tags: string[];
}

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
}

const projects: Project[] = [
  {
    id: 1,
    name: "iPrintSol",
    client: "Enterprise Custom Printing Solutions",
    logo: "🛍️",
    fullDescription: "A full-scale Website for a custom printing business, featuring product catalogs with product filtering, lead generation, SEO, and a blog.",
    tags: ["Wordpress", "Woocommerce", "ACF", "Elementor", "Hostinger"],
  },
  {
    id: 2,
    name: "Raiz Packaging",
    client: "Custom Packaging Supplier",
    logo: "🎵",
    fullDescription: "A full-scale Website for a custom packaging business, featuring product catalogs with product filtering, lead generation, SEO, and a blog.",
    tags: ["Wordpress", "Woocommerce", "ACF", "Elementor", "Hostinger"],
  }
];

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-[2px] shadow-lg">
        <div className="relative flex aspect-video flex-col justify-between overflow-hidden rounded-[10px] bg-white dark:bg-gray-900 p-6">
          <div>
            <div className="text-4xl mb-3">{project.logo}</div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              {project.client}
            </p>
          </div>
          
          {/* Card Bubbles */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-[10px] font-bold uppercase tracking-tight">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-body">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-heading-2">Check out my past work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </Container>

      {/* Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 max-w-lg w-full p-8 rounded-2xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black dark:hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div className="text-5xl mb-4">{selectedProject.logo}</div>
            <h2 className="text-2xl font-bold mb-2 text-black">{selectedProject.name}</h2>
            <p className="text-blue-600  font-semibold mb-4">{selectedProject.client}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
            
            {/* Modal Bubbles - High Contrast */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};