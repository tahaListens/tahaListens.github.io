import { BtnLink } from "../shared/BtnLink";

interface Link {
  url: string;
  name: string;
  icon: React.ReactNode;
}

interface LinktreeProps {
  className?: string;
  links: Link[];
}

// Linktree component to display a list of links with icons
export const Linktree: React.FC<LinktreeProps> = ({
  links,
  className = "",
}) => {
  return (
    <div className="relative flex flex-col items-center">
      {links.map((link, index) => (
        <BtnLink
          key={index}
          href={link.url}
          className="mb-4 flex w-56 items-center justify-center gap-3 rounded-lg 
                border px-6 py-3 shadow-md transition-all duration-300 
                sm:w-64 md:w-72"
          text={link.name}
        >
          {link.icon}
        </BtnLink>
      ))}
    </div>
  );
};
