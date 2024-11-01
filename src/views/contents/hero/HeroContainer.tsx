import { ReactNode } from 'react';

export const HeroContainer = (props: { children: ReactNode }): JSX.Element => {
  return <div className='custom-layout-full grid place-items-center gap-y-5 pb-10'>{props.children}</div>;
};
