import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";

export const CTA = () => {
  return (
    <section id="cta" className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Take ownership of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-violet-600">
                your digital footprint
              </span>
            </h1>
            <Paragraph className="pt-10 ">
              Share your vision with us, and let's get you setup with a
              responsive page.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-white">
              <Button>Get in Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
