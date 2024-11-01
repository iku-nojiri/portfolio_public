import { ModeSwitch } from '../../../components/modules/modeSwitch/ModeSwitch';
import { SnsIcons } from '../../../components/atoms/icon/sns/SnsIcons';

export const HeaderUtilNav = (): JSX.Element => {
  return (
    <nav className='hidden gap-4 lg:flex lg:flex-1 lg:items-center lg:justify-end'>
      <ModeSwitch />
      <SnsIcons />
    </nav>
  );
};
