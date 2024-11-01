import { COMMON_DATA } from '../../../../../../utils/commonData';
import { twMerge } from 'tailwind-merge';

const baseStyle: string = 'custom-text-16to14 font-robot font-semibold';

export const LogoText = (props: { variant?: string }): JSX.Element => {
  return <span className={twMerge(baseStyle, props.variant)}>{COMMON_DATA.authorInEn}</span>;
};
