import { WorksListItem } from './WorksListItem';

export const WorksList = (): JSX.Element => {
  return (
    <ul className='mx-auto grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
      <WorksListItem />
    </ul>
  );
};
