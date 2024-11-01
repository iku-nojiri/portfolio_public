import { COMMON_DATA } from '../../../../../utils/commonData';
import { Text14to12 } from '../../../components/atoms/text/Text14to12';

const currentDate: Date = new Date();
const currentYear = currentDate.getFullYear();

export const FooterCopyRight = (): JSX.Element => {
  return (
    <Text14to12 as={'small'} variant='opacity-85'>
      &copy; {currentYear} {COMMON_DATA.authorInEn}.
    </Text14to12>
  );
};
