import { TeckStackInner } from './TeckStackInner';
import { TechStackTtl } from './TechStackTtl';
import { TechStackList } from './TechStackList';

export const TechStack = (): JSX.Element => {
  return (
    <div className='bg-mainOffWhite duration-mainTime dark:bg-violet-600'>
      <TeckStackInner>
        <TechStackTtl />
        <TechStackList />
      </TeckStackInner>
    </div>
  );
};
