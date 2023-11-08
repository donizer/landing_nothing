type Props = {
  children?: React.ReactNode;
  href?: string;
  newTab?: boolean;
  uppercase?: boolean;
};

export const StylishLink: React.FC<Props> = ({
  children,
  href,
  newTab,
  uppercase,
}) => {
  return (
    <div className="font-space-grotesk group relative w-fit">
      <a
        className={`relative z-10 leading-[140%] transition-all group-hover:text-white ${
          uppercase ? 'uppercase' : ''
        }`}
        href={href}
        target={newTab ? '_blank' : ''}
      >
        {children}
      </a>
      <div className="absolute bottom-0 h-px w-full bg-black transition-all group-hover:h-[100%]" />
    </div>
  );
};
