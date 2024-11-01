import { Text14to12 } from '../../../uis/components/atoms/text/Text14to12';

interface MetadataPropsType {
  date: string;
  cordingDuration: string | undefined;
}

export const WorksModalMetadata = ({ date, cordingDuration }: MetadataPropsType): JSX.Element => {
  const joiningDate: string = '2023.10.1';
  const joinOrLaunch = date === joiningDate ? '運用参加' : 'ローンチ';

  return (
    <ul className='mb-2 opacity-85 md:mb-1.5'>
      <Text14to12 as={'li'}>
        {joinOrLaunch} : {date}
      </Text14to12>

      {cordingDuration && <Text14to12 as={'li'}>コーディング期間 : {cordingDuration}</Text14to12>}
    </ul>
  );
};
