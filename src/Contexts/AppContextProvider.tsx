import { ReactNode, useEffect, useState } from 'react';
import { appContext } from './appContext';

type Props = {
  children: ReactNode;
};

const body = document.querySelector('body');

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen(prev => !prev);
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

  const state = {
    isModalOpen,
    setIsModalOpen,
    toggleMenu,
  };

  return <appContext.Provider value={state}>{children}</appContext.Provider>;
};
