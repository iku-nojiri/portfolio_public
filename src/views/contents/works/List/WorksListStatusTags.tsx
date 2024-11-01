import { Tag } from '../../../uis/components/atoms/text/Tag';

interface DataType {
  isDeveloped: boolean;
  isMaintained: boolean;
}

export const WorksListStatusTags = ({ isDeveloped, isMaintained }: DataType): JSX.Element => {
  return (
    <ul className='flex items-center gap-x-2'>
      {isDeveloped && <Tag as={'li'}>開発</Tag>}
      {isMaintained && <Tag as={'li'}>運用</Tag>}
    </ul>
  );
};
