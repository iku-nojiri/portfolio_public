import { COMMON_DATA } from '../../../utils/commonData';
import { Text16to14 } from '../../uis/components/atoms/text/Text16to14';

export const AboutContent = () => {
  return (
    <div className='space-y-6 md:space-y-8'>
      <Text16to14 as={'p'} variant='!leading-[1.8em]'>
        {COMMON_DATA.authorInJp}。1992年熊本県出身。娘が一人。
        <br />
        フロントエンドを中心にWebサイトの構築を行なっています。26歳までバーテンダーとして勤務していましたが、コロナ禍を機にWebデザインとエンジニアリングを学び、今日に至ります。
      </Text16to14>
      <img className='aspect-video w-full rounded-xl object-cover' src={COMMON_DATA.pathToAuthorPic} alt='著者のプロフィール写真' />
      <Text16to14 as={'p'} variant='!leading-[1.8em]'>
        趣味は海外旅行・写真撮影・読書などです。読書は歴史に関するものを好んで読んでおり、特に中国史が好みです。いつか娘と趣味の話ができればと思っています。
      </Text16to14>
    </div>
  );
};
