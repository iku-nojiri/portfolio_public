import { HiOutlineArrowRightCircle as ArrowIcon } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { resetViewportPosition } from '../../../../../function/resetViewportPosition';

export const AboutConnector = (): JSX.Element => {
  return (
    <aside className='bg-gradient-to-r from-mainColor to-indigo-400'>
      <div className='custom-layout-full grid justify-center gap-4 py-8 md:grid-cols-2 md:items-center md:justify-between md:gap-2 md:py-4'>
        <div className='flex items-center gap-x-2'>
          <ArrowIcon className='h-[1.4rem] w-[1.4rem] text-white' />
          <h6 className='text-md me-5 font-semibold text-white md:text-sm'>私について お話しさせていただきます</h6>
        </div>

        <div className='flex items-center justify-center text-center md:justify-end'>
          <p className='me-5 text-sm font-semibold text-white'>知りたいですか?</p>
          <Link to={'/about'} className='rounded-lg border-2 border-white px-3 py-2 text-sm font-medium text-white hover:border-white/70 hover:text-white/70 focus:border-white/70 focus:text-white/70 focus:outline-none disabled:pointer-events-none disabled:opacity-50' onClick={resetViewportPosition}>
            知りたい
          </Link>
        </div>
      </div>
    </aside>
  );
};
