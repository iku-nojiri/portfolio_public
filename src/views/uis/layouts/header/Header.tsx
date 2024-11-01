import { BurgerToggleProvider } from '../../../../providers/BurgerToggleProvider';
import { ModeSwitchProvider } from '../../../../providers/ModeSwitchProvider';
import { HeaderInner } from './parts/HeaderInner';
import { HeaderGlobalNav } from './parts/HeaderGlobalNav';
import { HeaderLogo } from './parts/HeaderLogo';
import { HeaderUtilNav } from './parts/HeaderUtilNav';
import { HeaderLinkNav } from './parts/HeaderLinkNav';
import { BurgerOpenBtn } from './parts/burger/parts/BurgerOpenBtn';
import { Burger } from './parts/burger/Burger';

export const Header = (): JSX.Element => {
  return (
    <BurgerToggleProvider>
      <ModeSwitchProvider>
        <header className='fixed z-[100] w-full bg-mainWhite bg-white shadow-headerLight duration-mainTime dark:bg-darkThemaGray dark:shadow-headerDark'>
          <HeaderInner>
            <HeaderGlobalNav>
              <HeaderLogo />
              <HeaderLinkNav />
              <HeaderUtilNav />
              <BurgerOpenBtn />
            </HeaderGlobalNav>

            <Burger />
          </HeaderInner>
        </header>
      </ModeSwitchProvider>
    </BurgerToggleProvider>
  );
};
