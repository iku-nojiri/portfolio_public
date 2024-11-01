import { ReactNode } from 'react';

export const FormColumn = (props: { children: ReactNode }) => {
  return <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6'>{props.children}</div>;
};
