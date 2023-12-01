type Props = {
  children?: React.ReactNode;
  href?: string;
  newTab?: boolean;
  uppercase?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const StylishLink: React.FC<Props> = ({
  children,
  href,
  newTab,
  uppercase,
  onClick
}) => {
  return (
    <div className="group relative w-fit font-space-grotesk">
      <a
        onClick={onClick}
        className={`relative z-10 leading-[140%] transition-all duration-200 group-hover:text-white ${
          uppercase ? 'uppercase' : ''
        }`}
        href={href}
        target={newTab ? '_blank' : ''}
      >
        {children}
      </a>
      <div className="absolute bottom-0 h-px w-full bg-black transition-all duration-200 group-hover:h-[100%]" />
    </div>
  );
};
