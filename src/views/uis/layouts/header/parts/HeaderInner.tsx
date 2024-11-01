import { ReactNode } from 'react';

export const HeaderInner = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className='custom-layout-full py-3 sm:py-5'>{children}</div>;
};
