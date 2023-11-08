import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  dense?: boolean;
  id?: string;
};

export const GridContainer: React.FC<Props> = ({ children, dense, id }) => {
  const classDense = dense ? 'grid-flow-dense' : '';

  return (
    <div
      id={id}
      className={`xl:grid-cols-desktop grid-cols-mobile md:grid-cols-tablet grid gap-x-[20px] md:gap-x-[24px] ${classDense}`}
    >
      {children}
    </div>
  );
};
