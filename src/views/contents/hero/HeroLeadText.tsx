import { COMMON_DATA } from '../../../utils/commonData';
import { Text18to16 } from '../../uis/components/atoms/text/Text18to16';

export const HeroLeadText = () => {
  return <Text18to16 variant='text-center'>Webエンジニア {COMMON_DATA.authorInJp}のポートフォリオサイトです</Text18to16>;
};
