import { ReactNode, useEffect, useState, createContext } from 'react';

interface contextType {
  isBright: boolean;
  switchMode: () => void;
}

const defaultValue: contextType = {
  isBright: true,
  switchMode: () => {},
};

export const ModeSwitchContext = createContext<contextType>(defaultValue);

export const ModeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [isBright, setIsBright] = useState(() => {
    return localStorage.getItem('isBright') !== 'false';
  });

  const switchMode = () => {
    setIsBright((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', !isBright);
    localStorage.setItem('isBright', String(isBright));
  }, [isBright]);

  return <ModeSwitchContext.Provider value={{ isBright, switchMode }}>{children}</ModeSwitchContext.Provider>;
};
