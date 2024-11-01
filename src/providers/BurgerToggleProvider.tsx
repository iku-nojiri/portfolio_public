import { ReactNode, useState, createContext } from 'react';

interface contextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

const defaultValue: contextType = {
  isOpen: false,
  toggleMenu: () => {},
};

export const BurgerToggleContext = createContext<contextType>(defaultValue);

export const BurgerToggleProvider = (props: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BurgerToggleContext.Provider value={{ isOpen, toggleMenu }}>
      {props.children}
    </BurgerToggleContext.Provider>
  );
};
