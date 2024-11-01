import { BurgerLinkNavItems } from './BurgerLinkNavItems';

export const BurgerLinkNav = (): JSX.Element => {
  return (
    <nav className='flex flex-col gap-2'>
      <BurgerLinkNavItems />
    </nav>
  );
};
