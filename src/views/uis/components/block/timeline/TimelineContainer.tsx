import { ReactNode } from 'react';

export const TimelineContainer = ({ children }: { children: ReactNode }): JSX.Element => {
  return <ul className='space-y-12 py-6 md:space-y-14 lg:py-8'>{children}</ul>;
};
