import { Layout } from "./components/Layout";
import { Linktree } from "./components/sections/Linktree";
import { AboutMe } from "./components/sections/AboutMe";
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import Headshot from "./components/sections/Headshot";
import { StarsBackground } from "./components/sections/StarsBackground";
import { ContactForm } from "./components/sections/ContactForm";
import {
  FaGithub,
  FaLinkedin,
  FaWordpress,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaDiscord,
  FaDollarSign,
  FaTiktok,
  // FaDownload,
} from "react-icons/fa";

const linkList = [
  // {
  //   name: "View Resume",
  //   url: "/assets/files/taha_Resume_2025.pdf",
  //   icon: <FaDownload />,
  //   download: true,
  // },
  {
    name: "GitHub",
    url: "https://github.com/tahaListens",
    icon: <FaGithub />,
  },
  {
    name: "Blog",
    url: "https://teeheetaha.wordpress.com",
    icon: <FaWordpress />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@tahaListens",
    icon: <FaYoutube />,
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/tahalistens",
    icon: <FaTwitch />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tahalistens",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tahalistens",
    icon: <FaInstagram />,
  },
  {
    name: "Discord",
    url: "https://discord.gg/kuym92hC6P",
    icon: <FaDiscord />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tahalistens",
    icon: <FaTiktok />,
  },
  {
    name: "Donate",
    url: "https://paypal.me/tahaListens?country.x=US&locale.x=en_US",
    icon: <FaDollarSign />,
  },
];

export const App = () => {
  return (
    <div>
      <StarsBackground />
      <div className="absolute flex flex-col py-20">
        <Layout title="tahaListens">
          <Navbar />
          <Headshot />
          <Linktree links={linkList} />
          <AboutMe />
          <ContactForm />
          <Footer />
        </Layout>
      </div>
    </div>
  );
};

export default App;
