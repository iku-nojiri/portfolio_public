import { ReactNode } from 'react';

export const FormGrid = (props: { children: ReactNode }) => {
  return <div className='grid gap-4 lg:gap-6'>{props.children}</div>;
};
