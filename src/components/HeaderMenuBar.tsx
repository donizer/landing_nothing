import logo from '../assets/Logo.svg';
import phoneIco from '../assets/Icon-Phone-call.svg';
import burger from '../assets/Icon-Burger-menu.svg';
import burgerHover from '../assets/Icon-Burger-menu-hover.svg';
import closeIco from '../assets/Icon-Close.svg';
import { useCallback, useContext } from 'react';
import { appContext } from '../Contexts/appContext';

type Props = {
  phone?: boolean;
  close?: boolean;
  sticky?: boolean;
};

export const HeaderMenuBar: React.FC<Props> = ({ phone, close, sticky }) => {
  const { toggleMenu, closeMenu } = useContext(appContext);

  const onMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (!close) {
        e.currentTarget.src = burgerHover;
      }
    },
    [close],
  );

  const onMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (!close) {
        e.currentTarget.src = burger;
      }
    },
    [close],
  );

  return (
    <div
      className={`flex h-[72px] items-center justify-between md:h-[96px] ${
        sticky ? 'sticky top-0 bg-[#e5e5e5]' : ' '
      }`}
    >
      <a href="#" onClick={closeMenu}>
        <img
          className="h-[16px] w-[125px] md:h-[24px] md:w-[172px]"
          src={logo}
          alt=""
        />
      </a>

      <nav className="flex gap-x-[24px] md:gap-x-[32px]">
        {phone && (
          <a
            href="tel:+12345555555"
            className="group relative flex h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
          >
            <div className="absolute left-[-140px] top-1 w-[140px] opacity-0 transition-all duration-200 group-hover:opacity-100">
              <p>+1 234 555-55-55</p>
            </div>
            <img className="h-full w-full" src={phoneIco} alt="" />
          </a>
        )}

        <button onClick={toggleMenu}>
          <img
            className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            src={close ? closeIco : burger}
            alt=""
          />
        </button>
      </nav>
    </div>
  );
};
