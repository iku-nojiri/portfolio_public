import { ReactNode } from 'react';
import { Text32to27 } from '../../atoms/text/Text32to27';

interface HeadingPropsType {
  mainText: ReactNode;
  subText: ReactNode;
}

export const SecHeading = ({ mainText, subText }: HeadingPropsType) => {
  return (
    <Text32to27 as={'h2'} variant='font-semibold'>
      {mainText}
      <span className='opacity-60 dark:opacity-70'>{subText}</span>
    </Text32to27>
  );
};
