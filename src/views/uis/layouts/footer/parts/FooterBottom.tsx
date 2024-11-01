import { FooterCopyRight } from './FooterCopyRight';
import { FooterSnsList } from './FooterSnsList';

export const FooterBottom = (): JSX.Element => {
  return (
    <div className='flex justify-between'>
      <FooterCopyRight />
      <FooterSnsList />
    </div>
  );
};
