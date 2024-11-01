import { HeaderLinkNavItems } from './HeaderLinkNavItems';

export const HeaderLinkNav = (): JSX.Element => {
  return (
    <nav className='hidden lg:flex lg:gap-x-12'>
      <HeaderLinkNavItems />
    </nav>
  );
};
