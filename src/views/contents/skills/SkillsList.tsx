import { SkillsListItem } from './SkillsListItem';

export const SkillsList = (): JSX.Element => {
  return (
    <ul className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16'>
      <SkillsListItem />
    </ul>
  );
};
