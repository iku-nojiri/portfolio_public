import { ReactNode } from 'react';
import { Text16to14 } from '../../../uis/components/atoms/text/Text16to14';
import parse from 'html-react-parser';

const sliceCaptionLength = (description: string): ReactNode => {
  const limit: number = 40;

  if (description.length > limit) {
    return <>{parse(description.slice(0, limit))} ...</>;
  } else {
    return <>{parse(description)}</>;
  }
};

interface DescPropsType {
  description: string;
}

export const WorksListDescription = ({ description }: DescPropsType) => {
  return <Text16to14 as={'p'}>{sliceCaptionLength(description)}</Text16to14>;
};
