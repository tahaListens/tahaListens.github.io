import { Container } from "../shared/Container";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies like React, TypeScript, and Tailwind CSS.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that engage and delight users.",
    icon: "🎨",
  },
  {
    title: "Technical Writing",
    description:
      "Clear and concise documentation, blog posts, and technical articles.",
    icon: "✍️",
  },
];

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
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
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I offer a range of services to help you achieve your goals.
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
