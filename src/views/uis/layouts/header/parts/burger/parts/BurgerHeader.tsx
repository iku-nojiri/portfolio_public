import { ReactNode } from 'react';

export const BurgerHeader = ({ children }: { children: ReactNode }) => {
  return <div className='flex items-center justify-between'>{children}</div>;
};
