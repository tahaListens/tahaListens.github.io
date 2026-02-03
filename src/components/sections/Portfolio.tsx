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
  },
  {
    id: 2,
    client_name: "This Website",
    service_provided: "High Performance SPA",
    service_short: ["React", "Next.js", "Tailwind CSS"],
    logo: "🚀",
    fullDescription: "A high-performance single-page application built with React and Next.js, featuring responsive design and optimized performance.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  }
];


export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, className }) => {
  return (
    
        <div className={`relative flex aspect-video flex-col justify-between overflow-hidden rounded-[10px] bg-white dark:bg-gray-900 p-6 ${className}`}>
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
              <span key={tag} className="px-2 py-1 bg-box-bg text-gray-600 dark:text-gray-300 rounded-md text-[10px] font-bold uppercase tracking-tight">
                {tag}
              </span>
            ))}
          </div>
        </div>
  );
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCardId, setActiveCardId] = useState<number>(0);

  // const shiftDeck= (id: number) => {
  //   setActiveCardId(id);
  // }

  return (
    
    <section id="portfolio" className=" bg-transparent flex flex-col ">
      <div className="flex flex-col relative">
          <div className="carousel flex cursor-grab touch-pan-y lg:hidden rounded-2xl"
              style={{ transform: "rotateX(7deg) rotateY(-14deg) rotateZ(7deg)" }}>

            <div className="group-port flex flex-row flex-grow pr-[.5em] gap-[1em] justify-center">
              {projects.map((project) => (
                <div onClick ={() => setSelectedProject(project)}
                  className=" cursor-pointer shrink-0  w-[90vw] md:w-[400px]
                  rounded-xl p-[4px] shadow-lg bg-gradient-to-r from-pink via-yellow to-blue" >
                  <PortfolioCard 
                    key={project.id} 
                    project={project} 
                    className="card"
                  /> 
                </div> 
              ))}
              </div>
            <div aria-hidden className="group-port flex flex-row flex-grow gap-[1em] justify-center">
              {projects.map((project) => (
                <div onClick ={() => setSelectedProject(project)}
                  className=" cursor-pointer shrink-0 w-[90vw] md:w-[400px]
                  rounded-xl p-[4px] shadow-lg bg-gradient-to-r from-pink via-yellow to-blue" >
                  <PortfolioCard 
                    key={project.id} 
                    project={project} 
                    className="card"
                  /> 
                </div> 
              ))}
              </div>
              
           
          </div>
          
          <div className=" hidden lg:flex h-full flex-col ">
              <div className=" pt-16 pb-8 text-center">
                <h2 className="text-4xl font-bold my-4">
                    <span className="gradient-text">Portfolio</span>
                </h2>
                <p className="text-lg text-heading-2">Check out my past work.</p>
              </div>
              <div className= "flex flex-row items-center py-8">
                <div className= "flex ">
                  <div className="card-group relative h-88 w-176 pl-12"
                      style={{ perspective: "1200px", perspectiveOrigin: "0% 50%" }}> 
                    <div className="relative h-full w-full"
                        style={{ transformStyle: "preserve-3d", transform: "rotateX(8deg) rotateY(12deg)" }}>
                        
                        {projects.map((project) => (
                          <div className="absolute inset-0"
                                style={{ zIndex: project.id < activeCardId ? 0 : 8 - Math.abs(project.id - activeCardId) , opacity: project.id < activeCardId ? 0 : 1,
                                transform: project.id < activeCardId ? 'translateZ(1000px) scale(0)' : `translateZ(${(project.id - activeCardId) * -100}px) scale(${1 - (project.id - activeCardId) * 0.03})`,
                                transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.2s ease' }}>
                            
                            <div 
                              onClick ={() => project.id === activeCardId ? setSelectedProject(project) : null}
                              className={`group cursor-pointer transition-transform duration-300  
                              rounded-xl p-[4px] shadow-lg ${project.id === activeCardId ? 'bg-gradient-to-r from-pink via-yellow to-blue hover:-translate-y-2 ' : 'bg-gray-800 dark:bg-gray-100' }}`}>

                            
                                <PortfolioCard 
                                key={project.id} 
                                project={project} 
                                className={""}/>
                              </div>
                          </div>
                          ))}
                    </div>
                  </div>
                </div>
                <div className= "flex pl-40">
                  <div className="btn-group relative -bottom-6 flex w-full max-w-[12rem] flex-col gap-1">
                    {projects.map((project) => (
                      <button 
                        key={project.id} 
                        className={`group flex w-full items-center gap-1 rounded-lg px-4 py-2 text-left transition-all duration-300 
                          ease-in-out ${project.id === activeCardId ? 'bg-gray-100/75 dark:bg-white/10' : 'bg-transparent'}`}
                        onMouseEnter={() => setActiveCardId(project.id)}
                      >
                        <span className="relative -bottom-px font-berkeley font-bold text-8pt tabular-nums transition-colors duration-300 ease-in-out text-gray-700 group-hover:text-white">{project.id + 1}.</span>
                        <span className="flex-1 font-sohne text-12pt font-semibold transition-colors duration-300 ease-in-out text-gray-500 group-hover:text-white">{project.client_name}</span> 
                      </button>
                    ))} 
                  </div>
                  </div>
                </div>
          </div>
      </div>
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