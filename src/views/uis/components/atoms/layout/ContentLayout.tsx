import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface wrapperProps {
  children: ReactNode;
  id?: string;
  variant?: string;
}

const baseStyle: string = 'custom-layout-content py-12 custom-full-height sm:py-16 duration-mainTime';

export const ContentLayout = ({ children, id, variant }: wrapperProps): JSX.Element => {
  return (
    <article id={id} className={twMerge(baseStyle, variant)}>
      {children}
    </article>
  );
};
