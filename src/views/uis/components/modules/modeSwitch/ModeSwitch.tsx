import { memo } from 'react';
import { useContext } from 'react';
import { Switch } from '@headlessui/react';
import { IconContext } from 'react-icons';
import { FiSun as LightModeIcn } from 'react-icons/fi';
import { LuMoon as DarkModeIcn } from 'react-icons/lu';
import { ModeSwitchContext } from '../../../../../providers/ModeSwitchProvider';

export const ModeSwitch = memo((): JSX.Element => {
  const { isBright, switchMode } = useContext(ModeSwitchContext);

  return (
    <Switch checked={isBright} onChange={switchMode} className='group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#bfc3cc] p-1 transition-colors duration-mainTime ease-in-out dark:bg-mainGray'>
      <span aria-hidden='true' className='pointer-events-none inline-block grid size-5 translate-x-7 place-items-center rounded-full bg-white shadow-lg ring-0 transition duration-mainTime ease-in-out group-data-[checked]:translate-x-0 dark:bg-mainBlack'>
        {isBright ? (
          <LightModeIcn />
        ) : (
          <IconContext.Provider value={{ color: '#fff' }}>
            <DarkModeIcn />
          </IconContext.Provider>
        )}
      </span>
    </Switch>
  );
});
