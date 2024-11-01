import { ReactNode } from 'react';
import { Text16to14 } from '../../atoms/text/Text16to14';

interface TimelinePropsType {
  time: string;
  children: ReactNode;
}

export const TimelineContent = ({ time, children }: TimelinePropsType) => {
  return (
    <li className='grid overflow-hidden rounded-xl md:grid-cols-5 xl:grid-cols-12'>
      <Text16to14 as={'time'} variant='row-start-1 mb-1 opacity-85 md:col-start-1 xl:col-span-2'>
        {time}
      </Text16to14>
      <div className='ml-8 space-y-6 md:col-span-4 md:col-start-2 md:ml-0 xl:col-span-10 xl:col-start-3'>{children}</div>
    </li>
  );
};
