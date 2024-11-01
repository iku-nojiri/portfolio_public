import { TechStackListItems } from './TechStackListItems';
export const TechStackList = (): JSX.Element => {
  return (
    <ul role='list' className='mx-auto mt-8 flex grid max-w-sm grid-cols-2 gap-y-5 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-8 md:grid-cols-4'>
      <TechStackListItems />
    </ul>
  );
};
