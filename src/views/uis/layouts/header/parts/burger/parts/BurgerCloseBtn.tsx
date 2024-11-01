import { useContext } from 'react';
import { BurgerToggleContext } from '../../../../../../../providers/BurgerToggleProvider';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const BurgerCloseBtn = () => {
  const { toggleMenu } = useContext(BurgerToggleContext);
  return (
    <button type='button' onClick={toggleMenu} className='-m-2.5 rounded-md p-2.5 text-mainBlack'>
      <XMarkIcon aria-hidden='true' className='h-6 w-6 duration-mainTime dark:text-mainOffWhite' />
    </button>
  );
};
