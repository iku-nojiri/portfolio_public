import { ReactNode } from 'react';

export const Main = (props: { children: ReactNode }): JSX.Element => {
  return <main className='min-h-[100vh] pt-[52px] duration-mainTime dark:bg-darkThemaGray sm:pt-[68px]'>{props.children}</main>;
};
