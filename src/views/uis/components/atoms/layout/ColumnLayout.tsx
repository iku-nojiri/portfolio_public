import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface layoutPropsType {
  children: ReactNode;
  variant?: string;
}

const baseStyle: string = 'grid grid-col-1 gap-10 lg:grid-cols-2 lg:gap-12';

export const ColumnLayout = (props: layoutPropsType) => {
  return <div className={twMerge(baseStyle, props.variant)}>{props.children}</div>;
};
