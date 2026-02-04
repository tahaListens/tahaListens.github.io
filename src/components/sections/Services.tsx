import { Container } from "../shared/Container";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[]; // Added for the overlay content
}

const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "Custom websites built with robust full stack web-technologies Node.js, GraphQL, and REST API.",
    icon: "🌐",
    details: ["Frontend: React, Next.js, HTML5, CSS3, TailwindCSS", "Backend: Node.js, Express.js, GraphQL, REST API", "Databases: MongoDB, PostgreSQL, MySQL", "Deployment: Vercel, Netlify, Heroku, AWS"],
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Building businesses with Woocommerce, and Shopify platforms for seamless online shopping experiences.",
    icon: "🎨",
    details: ["Woocommerce", "Shopify", "Custom Ecommerce Solutions", "Click Funnels Integration"],
  },
  {
    title: "Wordpress Development:Themes & Plugins",
    description:
      "Building custom Wordpress sites, themes, andplugins to enhance your website reliability and reach, to keep you focused on running your business.  ",
    icon: "✍️",
    details: ["Custom Themes", "Plugin Development", "SEO Optimization", "Performance Tuning"],
  },
];

// const ServiceCard: React.FC<Service> = ({ title, description, icon, details }) => {
//   return (
//     <div className="group relative overflow-hidden bg-service-card-bg p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
//       {/* Main Content */}
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//         {title}
//       </h3>
//       <p className="text-white dark:text-gray-300">{description}</p>

//       {/* Wipe Overlay */}
//       <div 
//   tabIndex={0} // This makes the div focusable via tap
//   className="group relative overflow-hidden"
// >
//       <div className="absolute z-50 inset-0 rounded-lg bg-service-wipe-bg p-6 flex flex-col justify-center items-start translate-x-full group-hover:translate-x-0 
//     group-focus:translate-x-0      
//     group-focus-within:translate-x-0 
//     transition-transform duration-500 ease-in-out">
//         <h3 className="text-white font-bold mb-3 text-xl">What I Offer:</h3>
//         <ul className="text-white text-sm space-y-2">
//           {details.map((item, i) => (
//             <li key={i} className="flex items-center">
//               <span className="mr-2">▹</span> {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//       </div>
//     </div>
//   );
// };

const ServiceCard: React.FC<Service> = ({ title, description, icon, details }) => {
  return (
    <div 
      /* 1. tabIndex on the ROOT allows the whole card to catch the tap/focus */
      tabIndex={0} 
      className="group relative overflow-hidden bg-service-card-bg p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 outline-none cursor-pointer"
    >
      {/* Main Content (Static Layer) */}
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-white dark:text-gray-300">{description}</p>
      </div>

      {/* Wipe Overlay (Animated Layer) */}
      <div className="
        absolute 
        inset-0 
        z-20 
        bg-service-wipe-bg 
        p-6 
        flex flex-col justify-center items-start 
        
        /* Start off-screen to the right */
        translate-x-full 
        
        /* Wipe in on Hover (Desktop) OR Focus (Mobile Tap) */
        group-hover:translate-x-0 
        group-focus:translate-x-0 
        group-focus-within:translate-x-0 

        transition-transform 
        duration-500 
        ease-in-out
      ">
        <h3 className="text-white font-bold mb-3 text-xl">What I Offer:</h3>
        <ul className="text-white text-sm space-y-2">
          {details.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2">▹</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export const Services = () => {
  return (
    <section id="services" className="py-20 bg-body-bg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text"> Services </span>
          </h2>
          <p className="text-lg text-heading-2">I will make your brand pop, and your online engagement increase with any of the following bespoke services.
          </p>    
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
