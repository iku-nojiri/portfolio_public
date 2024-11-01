import { Text28to26 } from '../../../uis/components/atoms/text/Text28to26';

interface NamePropsType {
  name: string;
}

export const WorksModalName = ({ name }: NamePropsType): JSX.Element => {
  return (
    <Text28to26 as={'h4'} variant='font-semibold'>
      {name}
    </Text28to26>
  );
};
