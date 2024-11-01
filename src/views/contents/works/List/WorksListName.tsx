import { Text18to16 } from '../../../uis/components/atoms/text/Text18to16';

interface NamePropsType {
  name: string;
}

export const WorksListName = ({ name }: NamePropsType) => {
  return (
    <Text18to16 as={'h3'} variant='font-semibold'>
      {name}
    </Text18to16>
  );
};
