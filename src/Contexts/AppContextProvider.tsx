import { ReactNode, useEffect, useState } from 'react';
import { DefaultValueType, appContext } from './appContext';

type Props = {
  children: ReactNode;
};

const body = document.querySelector('body');

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen(prev => !prev);
  };

  const closeMenu = () => {
    if (isModalOpen) setIsModalOpen(false);
  };

  const openMenu = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  useEffect(() => {
    if (!body) {
      return;
    }

    if (isModalOpen) {
      body.style.position = 'fixed';
      body.style.overflow = 'hidden';
    } else {
      body.style.position = 'static';
      body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  const state: DefaultValueType = {
    isModalOpen,
    setIsModalOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };

  return <appContext.Provider value={state}>{children}</appContext.Provider>;
};
