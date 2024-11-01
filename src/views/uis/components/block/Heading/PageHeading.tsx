import { ReactNode } from 'react';
import { Text38to32 } from '../../atoms/text/Text38to32';

interface HeadingPropsType {
  mainText: ReactNode;
  subText?: ReactNode;
  marginSize: 'large' | 'small';
}

export const PageHeading = ({ mainText, subText, marginSize }: HeadingPropsType) => {
  const marginClass = marginSize === 'large' ? 'mb-16 sm:mb-20 lg:mb-24' : marginSize === 'small' ? 'mb-8 sm:mb-10 lg:mb-12' : null;

  return (
    <Text38to32 as={'h1'} variant={`font-semibold ${marginClass}`}>
      {mainText}
      <span className='opacity-60 dark:opacity-70'>{subText}</span>
    </Text38to32>
  );
};
