import { Container } from "../shared/Container";
import {SvgLogo} from "../shared/SvgLogo";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 rounded-t-3xl bg-footer-bg">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <SvgLogo></SvgLogo>
              <span className="text-xl font-bold text-heading-1">tahaListens</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {/* Insert your saved description here */}
              Helping brands build high-conversion digital experiences through 
              thoughtful design and robust engineering.
            </p>
          </div>

          {/* Column 2: Navigation (Vertical on Mobile) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-heading-1 font-bold uppercase tracking-widest text-xs">Explore</h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text} />
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Tags */}
          <div className="flex flex-col gap-4">
            <h4 className="text-heading-1 font-bold uppercase tracking-widest text-xs">Email and Socials</h4>
            <a href="mailto:taha.aziz.arif@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              taha.aziz.arif@gmail.com
            </a>
            {/* LinkedIn Link */}
            <a 
              href="https://linkedin.com/in/tahalistens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors flex items-center gap-2 group"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
          
            <div className="mt-4">
               <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Expertise</h4>
               <p className="text-gray-500 text-[11px] leading-tight">
                 {/* Comma-separated tags as requested */}
                 UI Design, UX Research, React, Vite, Node.js, Frontend Engineering, Wordpress, Shopify
               </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} tahaListens. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};