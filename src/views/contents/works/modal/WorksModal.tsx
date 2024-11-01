import Modal from 'react-modal';
import { useContext } from 'react';
import { WorksDataContext } from '../../../../providers/WorksDataProvider';
import { WorksModalInner } from './WorksModalInner';
import { WorksModalImg } from './WorksModalImg';
import { WorksModalTextarea } from './WorksModalTextarea';
import { WorksModalName } from './WorksModalName';
import { WorksModalMetadata } from './WorksModalMetadata';
import { WorksListStatusTags } from '../List/WorksListStatusTags';
import { WorksModalDescription } from './WorksModalDescription';
import { WorksModalTechstack } from './WorksModalTechstack';
import { BtnBox } from '../../../uis/components/atoms/box/BtnBox';
import { Btn } from '../../../uis/components/atoms/btn/Btn';
import { ArrowBtn } from '../../../uis/components/atoms/btn/ArrowBtn';

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    base: 'absolute inset-5 overflow-hidden rounded-md border border-gray-500 bg-white px-4 py-10 opacity-0 duration-mainTime ease-in-out dark:bg-mainBlack sm:px-8 sm:py-11 md:px-10 md:py-14 md:inset-10',
    afterOpen: 'opacity-100',
    beforeClose: 'opacity-0 scale-95',
  },
  overlay: {
    base: 'fixed inset-0 mt-[52px] bg-black bg-opacity-75 duration-300 ease-in-out sm:mt-[68px]',
    afterOpen: 'opacity-100',
    beforeClose: 'opacity-0',
  },
};

interface WorksModalProps {
  workIndex: number;
  isOpen: boolean;
  onClick: () => void;
}

export const WorksModal = ({ workIndex, isOpen, onClick }: WorksModalProps): JSX.Element => {
  const worksData = useContext(WorksDataContext);
  const work = worksData[workIndex];
  return (
    <Modal role='figure' isOpen={isOpen} onRequestClose={onClick} className={modalStyles.content} overlayClassName={modalStyles.overlay} closeTimeoutMS={200}>
      <WorksModalInner>
        <WorksModalImg mock={work.mock} name={work.name} />
        <WorksModalTextarea>
          <WorksModalName name={work.name} />
          <WorksModalMetadata date={work.launchDate} cordingDuration={work.codingDuration} />
          <WorksListStatusTags isDeveloped={work.development} isMaintained={work.maintenance} />
          <WorksModalDescription description={work.description} />
          <WorksModalTechstack techstack={work.techstack} />
          <BtnBox>
            <Btn type='button' onClick={onClick}>
              一覧に戻る
            </Btn>
            <ArrowBtn as='a' externalLink={true} href={work.url}>
              サイトを見る
            </ArrowBtn>
          </BtnBox>
        </WorksModalTextarea>
      </WorksModalInner>
    </Modal>
  );
};
