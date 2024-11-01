import { useState, useContext } from 'react';
import { WorksDataContext } from '../../../../providers/WorksDataProvider';
import { WorksListCaption } from './WorksListCaption';
import { WorksListImg } from './WorksListImg';
import { WorksListName } from './WorksListName';
import { WorksListDescription } from './WorksListDescription';
import { WorksListStatusTags } from './WorksListStatusTags';
import { Btn } from '../../../uis/components/atoms/btn/Btn';
import { WorksModal } from '../modal/WorksModal';

export const WorksListItem = (): JSX.Element => {
  const worksData = useContext(WorksDataContext);

  const [modal, setModal] = useState<boolean[]>(new Array(worksData.length).fill(false));

  const toggleModal = (index: number): void => {
    setModal((prevState) => {
      const currentState = [...prevState];
      currentState[index] = !currentState[index];
      return currentState;
    });
  };

  return (
    <>
      {worksData.map((items, index) => (
        <li key={index} className='overflow-hidden' role='figure'>
          <WorksListImg onClick={() => toggleModal(index)} src={items.thumb} alt={items.name} />
          <WorksListCaption>
            <WorksListStatusTags isDeveloped={items.development} isMaintained={items.maintenance} />
            <WorksListName name={items.name} />
            <WorksListDescription description={items.description} />
            <Btn type='button' onClick={() => toggleModal(index)} variant='mt-3 self-auto !text-xs sm:self-start'>
              詳細を見る
            </Btn>
          </WorksListCaption>

          <WorksModal isOpen={modal[index]} onClick={() => toggleModal(index)} workIndex={index} />
        </li>
      ))}
    </>
  );
};
