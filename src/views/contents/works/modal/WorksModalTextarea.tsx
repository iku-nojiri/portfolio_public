import { ReactNode } from 'react';

export const WorksModalTextarea = (props: { children: ReactNode }) => {
  return (
    <div role='caption' className='flex flex-1 flex-col gap-y-[5px] px-3 py-6 sm:gap-y-2 md:p-6'>
      {props.children}
    </div>
  );
};
