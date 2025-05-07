import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-xl rounded-3xl bg-box-bg 
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {""}1{""}
            </h2>
            <p className="mt-2 text-heading-3">Websites Built</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {""}1 {""}
            </h2>
            <p className="mt-2 text-heading-3">Codebase managed</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {""}30%{""}
            </h2>
            <p className="mt-2 text-heading-3">SEO traffic increase</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {""}100%{""}
            </h2>
            <p className="mt-2 text-heading-3">Client Satisfaction</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
