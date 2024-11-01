import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BoxPropsType {
  children: ReactNode;
  variant?: string;
}

const baseStyle: string = 'flex items-center gap-x-6';

export const BtnBox = ({ children, variant }: BoxPropsType): JSX.Element => {
  return <div className={twMerge(baseStyle, variant)}>{children}</div>;
};
