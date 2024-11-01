import { ReactNode } from 'react';
import { Text16to14 } from '../../../components/atoms/text/Text16to14';

interface ListPropsType {
  children: ReactNode;
  title: string;
}

export const FooterLinkList = ({ children, title }: ListPropsType): JSX.Element => {
  return (
    <dl className='flex flex-col gap-y-3'>
      <Text16to14 as={'dt'} variant='font-semibold'>
        {title}
      </Text16to14>
      {children}
    </dl>
  );
};
