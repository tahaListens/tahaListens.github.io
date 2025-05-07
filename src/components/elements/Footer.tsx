import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { NavItem } from "../shared/NavItem";
import { navItems } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="relative pt-20 rounded-t-3xl bg-box-bg ">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row  justify-between items-center">
          {" "}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} alt="tahalistens logo" className="w-7 h-7" />
            <span className="text-lg font-semibold text-heading-1">
              tahaListens
            </span>
          </div>
          <ul className="flex gap-6 text-heading-1 mr-0">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
