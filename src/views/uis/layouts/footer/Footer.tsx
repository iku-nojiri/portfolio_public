import { FooterInner } from './parts/FooterInner';
import { FooterNav } from './parts/FooterNav';
import { FooterBottom } from './parts/FooterBottom';

export const Footer = (): JSX.Element => {
  return (
    <footer className='bg-[#fafafa] duration-mainTime dark:bg-darkThemaBlack'>
      <FooterInner>
        <FooterNav />
        <FooterBottom />
      </FooterInner>
    </footer>
  );
};
