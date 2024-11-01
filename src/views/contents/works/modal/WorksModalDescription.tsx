import { Text16to14 } from '../../../uis/components/atoms/text/Text16to14';

interface DescriptionPropsType {
  description: string;
}

export const WorksModalDescription = ({ description }: DescriptionPropsType): JSX.Element => {
  return (
    <Text16to14 as={'p'} variant='py-[.5em]'>
      {description}
    </Text16to14>
  );
};
