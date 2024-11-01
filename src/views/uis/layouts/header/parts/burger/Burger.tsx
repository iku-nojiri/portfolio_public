import { useContext } from 'react';
import { Dialog as BurgerArea, DialogPanel as BurgerMenu } from '@headlessui/react';

import { BurgerHeader } from './parts/BurgerHeader';
import { HeaderLogo } from '../HeaderLogo';
import { BurgerCloseBtn } from './parts/BurgerCloseBtn';
import { BurgerLinkNav } from './parts/BurgerLinkNav';
import { SnsIcons } from '../../../../components/atoms/icon/sns/SnsIcons';
import { BurgerToggleContext } from '../../../../../../providers/BurgerToggleProvider';
import { ModeSwitch } from '../../../../components/modules/modeSwitch/ModeSwitch';

export const Burger = () => {
  const { toggleMenu } = useContext(BurgerToggleContext);
  const { isOpen } = useContext(BurgerToggleContext);

  return (
    <BurgerArea open={isOpen} onClose={toggleMenu} className='lg:hidden'>
      <BurgerMenu className='fixed inset-y-0 right-0 z-[101] w-full space-y-6 overflow-y-auto bg-white px-6 py-6 duration-mainTime dark:bg-darkThemaGray sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
        <BurgerHeader>
          <HeaderLogo />
          <BurgerCloseBtn />
        </BurgerHeader>

        <BurgerLinkNav />

        <ModeSwitch />
        <div className='flex items-center gap-2 py-2'>
          <SnsIcons variant='h-7 w-7' />
        </div>
      </BurgerMenu>
    </BurgerArea>
  );
};
