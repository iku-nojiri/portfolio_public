import { ReactNode } from 'react';

export const WorksModalInner = (props: { children: ReactNode }) => {
  return <div className='h-full overflow-auto md:grid md:grid-cols-2 md:gap-4'>{props.children}</div>;
};
