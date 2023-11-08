import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const CategoryItem: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="col-span-2 col-start-2 grid grid-cols-2 gap-x-5 md:col-span-6 md:col-start-2 md:grid-cols-3 md:gap-x-6 xl:col-span-12 xl:col-start-2">
      {children}

      <h3 className="font-space-grotesk mt-[16px] text-[18px] font-bold leading-[140%] md:text-[24px]">
        {title}
      </h3>
    </div>
  );
};
