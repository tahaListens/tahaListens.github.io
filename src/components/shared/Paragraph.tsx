//this is a wrapper component that provides a consistent layout for the application

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p className={`"text-heading-3 md:text-lg ${className}`}> {children}</p>
  );
};
