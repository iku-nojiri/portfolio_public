import { COMMON_DATA } from '../../../utils/commonData';

const gradStyle = {
  background: 'linear-gradient(90deg, #58c6ff 0%, #818cf8 80%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const HeroTtl = (): JSX.Element => {
  return (
    <h1 className='text-center text-[2.5rem] font-bold leading-snug tracking-tight text-mainBlack duration-mainTime dark:text-mainWhite sm:text-[3.75rem]'>
      <span style={gradStyle}>ようこそ</span>
      <br />
      {COMMON_DATA.authorInJp}の<br className='sm:hidden' />
      ポートフォリオへ
    </h1>
  );
};
