import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutMe = () => {
  return (
    <section id="about-me">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="/assets/images/working.JPG"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="me at computer"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title> developer, drummer, dreamer </Title>
          <Paragraph>
            My name is Taha Arif. I am a full stack web developer with over 2 years of experience. I was raised, and still live, in Raleigh, North Carolina.
            <br />I enjoy spending time with family, banging on drums, and building robust webapps
            that solve real world problems. Nothing makes me happier than seeing my clients' brand visions come to life through my work. 
            Whether you need a simple landing page, a revamp on your existing site, or migrating to a new platform, I am here to help!
            <br />I am always looking for opportunties to learn and grow! I am available for hire for freelance, part-time, and full-time work. 
          </Paragraph>

          {/* <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Current Project"
              description="This website, and learning how to React to changes in the web dev ecosystem."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="Built to last"
              description="Beyond products, and services, I aim to build robust organizations that bring people closer to their passions."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div> */}
        </div>
      </Container>
    </section>
  );
};
