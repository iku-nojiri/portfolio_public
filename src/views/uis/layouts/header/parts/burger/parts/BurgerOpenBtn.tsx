import { useContext } from 'react';
import { BurgerToggleContext } from '../../../../../../../providers/BurgerToggleProvider';
import { Bars3Icon } from '@heroicons/react/24/outline';

export const BurgerOpenBtn = (): JSX.Element => {
  const { toggleMenu } = useContext(BurgerToggleContext);
  return (
    <button type='button' onClick={toggleMenu} className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-mainBlack lg:hidden'>
      <Bars3Icon aria-hidden='true' className='h-6 w-6 text-black duration-mainTime dark:text-mainOffWhite' />
    </button>
  );
};
