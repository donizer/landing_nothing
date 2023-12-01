import { createContext } from 'react';

const defaultValue: DefaultValueType = {
  isModalOpen: false,
  setIsModalOpen: () => null,
  toggleMenu: () => null,
  closeMenu: () => null,
  openMenu: () => null,    
}

export type DefaultValueType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  closeMenu: () => void,
  openMenu: () => void,    
};

export const appContext = createContext(defaultValue);
