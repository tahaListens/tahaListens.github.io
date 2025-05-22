interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-3 py-3 rounded-full outline-none relative 
        overflow-hidden border-3 border-box-border bg-link-bg-aux cursor-pointer
         ${className}`}
    >
      <span className="relative z-10 font-bold text-heading-1"> {text}</span>
    </a>
  );
};
