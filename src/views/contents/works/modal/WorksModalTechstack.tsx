import { Text16to14 } from '../../../uis/components/atoms/text/Text16to14';
import { Tag } from '../../../uis/components/atoms/text/Tag';

interface TechstackPropsType {
  techstack: string;
}

export const WorksModalTechstack = ({ techstack }: TechstackPropsType): JSX.Element => {
  const techstackArray: Array<string> = techstack.split(',');

  return (
    <dl className='pb-6 pt-3 md:pb-5 md:pt-2'>
      <Text16to14 as={'dt'} variant='font-semibold mb-[.5em]'>
        技術スタック
      </Text16to14>
      <dd>
        <ul className='flex flex-wrap items-center gap-2'>
          {techstackArray.map((item, index) => (
            <Tag key={index} as={'li'} bordered={true}>
              {item}
            </Tag>
          ))}
        </ul>
      </dd>
    </dl>
  );
};
