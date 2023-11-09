import { useContext } from 'react';
import { HeaderMenuBar } from './HeaderMenuBar';
import { appContext } from '../Contexts/appContext';
import { StylishLink } from './StylishLink';

export const Modal = () => {
  const { isModalOpen, toggleMenu } = useContext(appContext);
  return (
    <div
      className={`fixed z-50 h-full w-full overflow-auto bg-[#E5E6E8] px-[20px] pb-20 font-bold tracking-[2px] text-[#292929] transition-all md:px-[72px] xl:px-[120px] ${
        isModalOpen ? 'left-0' : 'left-[100%]'
      }`}
    >
      <HeaderMenuBar sticky close />

      <hr className="mb-[32px] border-0 md:mb-[56px]" />

      <div className="flex flex-col gap-y-[32px] font-space-grotesk text-[22px]">
        <StylishLink onClick={toggleMenu} href="#products">
          Products
        </StylishLink>
        <StylishLink onClick={toggleMenu} href="#products">
          Store
        </StylishLink>
        <StylishLink onClick={toggleMenu} href="#products">
          Login
        </StylishLink>
        <StylishLink onClick={toggleMenu} href="#products">
          Products
        </StylishLink>
      </div>

      <hr className="mb-[48px] border-0" />

      <div className="mb-[16px] font-space-grotesk leading-[140%]">
        +1 234 5555-55-55
      </div>

      <StylishLink href="tel:+123455555555" uppercase>
        call to order
      </StylishLink>
    </div>
  );
};
