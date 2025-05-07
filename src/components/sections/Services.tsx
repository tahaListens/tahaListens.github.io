import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { services } from "../../utils/services-data.tsx";
import { Service } from "../cards/Service.tsx";
import { Title } from "../shared/Title.tsx";
export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> My Services </Title>
          <Paragraph>
            Unlock the potential of your online presence with a customized and
            responsive webpage. Our services Include:
          </Paragraph>
        </div>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
