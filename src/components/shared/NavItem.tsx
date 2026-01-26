// interface NavItemProps {
//   href: string;
//   text: string;
  

// }

// export const NavItem = ({ href, text }: NavItemProps) => {
//   return (
//     <li>
//       <a
//         href={href}
//         className="duration-300 font-medium ease-linear hover:text-primary py-3"
//       >
//         {text}
//       </a>
//     </li>
//   );
// };

interface NavItemProps {
  href: string;
  text: string;
  isActive: boolean; // Tells the component whether to show the white bubble
  onClick: () => void; // A function that tells the parent (Navbar) which tab was clicked
}

export const NavItem = ({ href, text, isActive, onClick }: NavItemProps) => {
  return (
    <li className="list-none">
      {/* <a
        href={href}
        onClick={onClick}
        style={{ 
          // @ts-ignore - anchorName is new in CSS
          anchorName: isActive ? '--active' : 'none' 
        }}
        className={`relative z-10 block px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 nav-link ${
                    isActive ? "text-black dark:text-white active" 
                             : " text-link-bg dark:text-white hover:text-link-bg dark:hover:text-white" }`}
      > */}
      <a
        href={href}
        onClick={onClick}
        className={`relative z-10 block px-5 py-2 text-xs font-bold uppercase
                   tracking-widest transition-colors duration-200 nav-link ${
                  isActive ? "text-black dark:text-white active" 
                           : " text-link-bg dark:text-white hover:text-link-bg dark:hover:text-white" }`}
      >
        {text}
      </a>
    </li>
  );
};
