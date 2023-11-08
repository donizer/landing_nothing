import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const StylishButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-space-grotesk bg-dark-grey hover:text-dark-grey h-[56px] w-full rounded-lg border-2 border-[#F0F1F4] font-bold leading-[27px] text-white transition-all hover:bg-white active:bg-[#111] active:text-white"
    >
      {children}
    </button>
  );
};
