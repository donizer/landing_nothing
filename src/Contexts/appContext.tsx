import { createContext } from 'react';

const defaultValue: DefaultValueType = {
  isModalOpen: false,
  setIsModalOpen: () => null,
  toggleMenu: () => null,
};

type DefaultValueType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
};

export const appContext = createContext(defaultValue);
