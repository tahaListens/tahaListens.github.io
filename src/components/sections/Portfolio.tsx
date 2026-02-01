import { Container } from "../shared/Container";
import { useState } from "react";

interface Project {
  id: number;
  client_name: string;
  service_provided: string;
  service_short: string[];
  logo: string;
  fullDescription: string;
  tags: string[];
}

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
  className?: string;
}

const projects: Project[] = [
  {
    id: 0,
    client_name: "iPrintSol",
    service_provided: "Enterprise Custom Printing Solutions",
    service_short: ["Woocommerce Website Development"],
    logo: "🛍️",
    fullDescription: "A full-scale Website for a custom printing business, featuring product catalogs with product filtering, lead generation, SEO, and a blog.",
    tags: ["Wordpress", "Woocommerce", "ACF", "Elementor", "Hostinger"],
  },
  {
    id: 1,
    client_name: "Raiz Packaging",
    service_provided: "Custom Packaging Supplier",
    service_short: ["Woocommerce Website Development"],
    logo: "🎵",
    fullDescription: "A full-scale Website for a custom packaging business, featuring product catalogs with product filtering, lead generation, SEO, and a blog.",
    tags: ["Wordpress", "Woocommerce", "ACF", "Elementor", "Hostinger"],
  }
];

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick, className }) => {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer bg-transparent transition-transform duration-300 hover:-translate-y-2 ${className}`}
    >
      <div className="rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-[2px] shadow-lg">
        <div className="relative flex aspect-video flex-col justify-between overflow-hidden rounded-[10px] bg-white dark:bg-gray-900 p-6">
          <div>
            <div className="text-4xl mb-3">{project.logo}</div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.client_name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              {project.service_provided}
            </p>
          </div>
          {/* Card Bubbles */}
          <div className="flex flex-wrap gap-2">
            {project.service_short.map(tag => (
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
    <Container>
    <section id="portfolio" className=" bg-transparent flex flex-col c:aspect-video c:w:aspect-auto c:w:min-h-screen c:aspect-auto!">
      <div className="flex w-full flex-1 flex-col px-6 py-12 t:p-12 c:p-24 relative">
          <div className="flex grow items-center" style={{ perspective: "1000px", perspectiveOrigin: "0% 10%" }}></div>

          <div className="h-full flex-col c:flex">
              <div className="pt-16 pb-8 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="gradient-text">Portfolio</span>
                </h2>
                <p className="text-lg text-heading-2">Check out my past work.</p>
              </div>
              <div className= "flex flex-1 items-center gap-16 py-8">
                <div className= "w-gr-lg">
                  <div className="relative h-88 w-176 pl-24"
                      style={{ perspective: "1200px", perspectiveOrigin: "0% 50%" }}> 
                    <div className="relative h-full w-full"
                          style={{ transformStyle: "preserve-3d", transform: "rotateX(8deg) rotateY(12deg)" }}>
                        
                        {projects.map((project) => (
                          <div className="absolute inset-0"
                                style= {{zIndex:8-project.id,opacity:1,
                                transform:`translateZ(${ project.id * -150}px) scale(${1 - project.id * 0.03})`}} >
                            
                            
                            <PortfolioCard 
                            key={project.id} 
                            project={project} 
                            onClick={() => setSelectedProject(project)} 
                            className={""}/>
                          </div>
                        ))}</div></div>
                <div className= "flex w-gr-sm items-center justify-center">
                  <div className="relative -bottom-6 flex w-full max-w-[16rem] flex-col gap-1">
                    {projects.map((project) => (
                      <button 
                        key={project.id} 
                        className="group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-300 ease-in-out bg-transparent hover:bg-white/5"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span className="relative -bottom-px font-berkeley text-8pt tabular-nums transition-colors duration-300 ease-in-out text-gray-700 group-hover:text-white">{project.id}.</span>
                        <span className="flex-1 font-sohne text-12pt font-semibold transition-colors duration-300 ease-in-out text-gray-500 group-hover:text-white">{project.client_name}</span> 
                      </button>
                    ))} 
                  </div>
                  </div>
              </div>
            </div>
          
        
        
          </div></div>
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
          </Container>

  );
};