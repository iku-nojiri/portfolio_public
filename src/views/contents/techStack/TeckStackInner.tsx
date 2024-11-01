import { ReactNode } from 'react';

export const TeckStackInner = ({ children }: { children: ReactNode }) => {
  return <div className='custom-layout-full py-10 sm:pb-16 sm:pt-14'>{children}</div>;
};
