import { LogoIcon } from '../../../components/atoms/icon/logo/LogoIcon';
import { LogoText } from '../../../components/atoms/icon/logo/LogoText';
import { Link } from 'react-router-dom';
import { transitionToHome } from '../../../../../function/transitionToHome';

export const HeaderLogo = (): JSX.Element => {
  return (
    <Link to='/' className='inline-flex items-center gap-x-1 outline-none duration-mainTime hover:opacity-80 lg:flex-1' onClick={transitionToHome}>
      <LogoIcon variant='w-[1.75rem] h-[1.75rem]' />
      <LogoText />
    </Link>
  );
};
