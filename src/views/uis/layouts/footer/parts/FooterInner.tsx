import { ReactNode } from 'react';

export const FooterInner = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className='custom-layout-full pb-5 pt-12'>{children}</div>;
};
