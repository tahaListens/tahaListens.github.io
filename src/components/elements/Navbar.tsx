import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { NavItem } from "../shared/NavItem";
import { useThemeStore } from "../../store/ThemeStore";
import { useState, useEffect, useRef } from "react";

export const navItems = [
  { href: "#", text: "Links" },
  { href: "#services", text: "Services" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#about-me", text: "About" },
  { href: "#contact", text: "Contact" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [activeTab, setActiveTab] = useState(navItems[0].text);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const sectionNavs = navItems.filter(item => item.href !== "#");
    const sectionIds = sectionNavs.map(item => item.href.replace('#', ''));
    const sectionElements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (sectionElements.length === 0) return;

    let timeoutId;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const sorted = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const id = sorted[0].target.id;
          const nav = navItems.find(item => item.href === `#${id}`);
          if (nav && nav.text !== activeTab) setActiveTab(nav.text);
        } else {
          // If scrolled above the first section, set to 'Links'
          const firstSection = sectionElements[0];
          if (firstSection) {
            const rect = firstSection.getBoundingClientRect();
            if (rect.top > 80 && activeTab !== navItems[0].text) {
              setActiveTab(navItems[0].text);
            }
          }
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.01,
      }
    );
    sectionElements.forEach(el => observer.observe(el));
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeTab]);

  return (
    // <header className="sticky inset-x-0 top-0 z-50 py-6">
    <header className="fixed inset-x-0 top-0 z-50 py-6 transition-all duration-300">
      <Container>
        {/*         <nav className="w-full flex justify-between gap-6 relative bg-white/10 dark:bg-neutral-900/10 backdrop-blur-sm">
 */}
        <nav className="w-full flex justify-between items-center gap-6 relative ">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="tahaListens Logo" className="w-10 h-10" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                tahaListens
              </div>
            </a>
          </div>

          
          <div className="rounded-full bg-gradient-to-r from-pink via-yellow to-blue p-[2px] shadow-lg w-fit mx-auto">
            <div className="flex flex-col w-fit mx-auto lg:flex-row lg:items-center 
              relative top-full left-0 lg:static lg:top-0 
              lg:h-auto  h-0 hidden lg:flex
              navSlide-gradient relative
              rounded-full px-2 py-1
              nav-container"
  >
              {/* The Bubbles */}
              <div className="bubble active" />
              <div className="bubble hover absolute" />

              <ul
                className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                            pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4  
                            text-lg text-heading-1 w-full lg:justify-center lg:items-center nav-list"
              >
                {navItems.map((item, key) => (
                  <NavItem
                    key={item.text}
                    href={item.href}
                    text={item.text}
                    isActive={activeTab === item.text}
                    onClick={e => {
                      setActiveTab(item.text);
                      if (item.href !== "#") {
                        isScrollingRef.current = true;
                        const id = item.href.replace("#", "");
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                        setTimeout(() => {
                          isScrollingRef.current = false;
                        }, 800);
                      } else {
                        isScrollingRef.current = true;
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setTimeout(() => {
                          isScrollingRef.current = false;
                        }, 800);
                      }
                    }}
                  />
                ))}
              </ul>
              
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
