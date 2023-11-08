import { useContext } from 'react';
import { HeaderMenuBar } from './HeaderMenuBar';
import { appContext } from '../Contexts/appContext';
import { StylishLink } from './StylishLink';

export const Modal = () => {
  const { isModalOpen, toggleMenu } = useContext(appContext);
  return (
    <div
      className={`fixed z-50 h-full w-full bg-[#E5E6E8] px-[20px] font-bold tracking-[2px] text-[#292929] transition-all md:px-[72px] xl:px-[120px] ${
        isModalOpen ? 'left-0' : 'left-[100%]'
      }`}
    >
      <HeaderMenuBar close />

      <hr className="mb-[32px] border-0 md:mb-[56px]" />

      <div className="font-space-grotesk flex flex-col gap-y-[32px] text-[22px]">
        <a onClick={toggleMenu} href="#products">
          Products
        </a>
        <a onClick={toggleMenu} href="#store">
          Store
        </a>
        <a onClick={toggleMenu} href="#">
          Login
        </a>
        <a onClick={toggleMenu} href="#">
          Cart(0)
        </a>
      </div>

      <hr className="mb-[48px] border-0" />

      <p className="font-space-grotesk mb-[16px] leading-[140%]">
        +1 234 5555-55-55
      </p>
      <StylishLink href="tel:+123455555555" uppercase>
        call to order
      </StylishLink>
    </div>
  );
};
