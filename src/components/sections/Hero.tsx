import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36 bg-body">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 
                        rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60     
                        lg:opacity-95 lg:block-hidden"
          ></span>
          <span
            className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl 
                        opactiy-80"
          ></span>
        </div>

        <div
          className="relative flex flex-col align-center text-center lg:text-left lg:py-8 lg:items-start
                     lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Modern webpages for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
              your business{" "}
            </span>
          </h1>
          <Paragraph className="mt-8 text-heading-3 md:text-lg">
            Sleek, responsive, and unique webpages to make you stand out from
            your competition. Optimized to maximize SEO and drive customer
            interaction.
          </Paragraph>

          <div className="mt-10 w-full flex max-w-md  mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                                 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full
                                 ease-linear focus-within:bg-body focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <Button className="min-w-max text-white">
                  <span className=" z-[5]"> Get Started!</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* Hero Image */}

        <div
          className="flex flex-1  lg:w-1/2 lg:h-200 relative lg:max-w-none lg:mx-0
                            mx-auto max-w-3xl"
        >
          <img
            src="https://images.pexels.com/photos/28180384/pexels-photo-28180384/free-photo-of-a-close-up-of-a-chinese-juniper-tree-branches-texture-pattern.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero Image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl 
                        object-cover lg:max-h-none max-h-96 my-5 z-10"
          />
        </div>
      </Container>
    </section>
  );
};
