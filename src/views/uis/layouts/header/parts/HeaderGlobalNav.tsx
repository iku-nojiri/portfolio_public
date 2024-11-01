import { ReactNode } from 'react';

export const HeaderGlobalNav = ({ children }: { children: ReactNode }): JSX.Element => {
  return <nav className='flex items-center justify-between'>{children}</nav>;
};
