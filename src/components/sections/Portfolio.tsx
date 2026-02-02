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
  }
];

// function that will look at the project.id and compare it to the active card id. it will then look at every 
// if project.id < activeCardId, apply a transform a
// Cards with ID < Active ID: These are the ones that have already been "pulled." We animate them to a translateZ that is positive (e.g., 500px) and fade their opacity to 0. This makes them look like they flew past the viewer's head.
// The Active Card: This sits at translateZ(0px) with scale(1) and opacity(1). Cards behind this card also have an opacity of 1
// Cards with ID > Active ID: These are the ones still in the deck. We dynamically calculate their translateZ based on their distance from the active card. For example: translateZ(${(id - activeId) * -150}px). This keeps the stack perfectly spaced
// this function will be called by the buttons in the right side of the portfolio section


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
              <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-[10px] font-bold uppercase tracking-tight">
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
    <Container>
    <section id="portfolio" className=" bg-transparent flex flex-col c:aspect-video c:w:aspect-auto c:w:min-h-screen c:aspect-auto!">
      <div className="flex w-full flex-1 flex-col px-6 py-12 relative">
          <div className="flex grow items-center" style={{ perspective: "1000px", perspectiveOrigin: "0% 10%" }}></div>

          <div className="h-full flex-col ">
              <div className="pt-16 pb-8 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="gradient-text">Portfolio</span>
                </h2>
                <p className="text-lg text-heading-2">Check out my past work.</p>
              </div>
              <div className= "hidden lg:flex flex-1 items-center gap-16 py-8 ">
                <div className= "w-gr-lg">
                  <div className="relative h-88 w-176 pl-24"
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

                <div className= "flex w-gr-sm">
                  <div className="relative -bottom-6 flex w-full max-w-[16rem] flex-col gap-1">
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
          </Container>

  );
};