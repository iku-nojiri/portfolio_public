import { ReactNode } from 'react';

export const WorksListCaption = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className='flex flex-col gap-y-2.5 px-1' role='caption'>
      {children}
    </div>
  );
};
