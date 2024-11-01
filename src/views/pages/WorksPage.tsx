import { HeadMetadata } from '../contents/head/HeadMetadata';
import { FullLayout } from '../uis/components/atoms/layout/FullLayout';
import { PageHeading } from '../uis/components/block/Heading/PageHeading';
import { WorksDataProvider } from '../../providers/WorksDataProvider';
import { WorksList } from '../contents/works/List/WorksList';
import { AboutConnector } from '../uis/components/block/cta/AboutConnector';

export const WorksPage = (): JSX.Element => {
  return (
    <>
      <HeadMetadata description='制作実績一覧です。今まで制作・運用を行なったWebサイトを紹介します。' />
      <FullLayout>
        <PageHeading
          mainText='制作実績。'
          subText={
            <>
              制作・運用を行なった
              <br className='hidden md:inline' />
              Webサイトを紹介します。
            </>
          }
          marginSize='large'
        />
        <WorksDataProvider>
          <section>
            <WorksList />
          </section>
        </WorksDataProvider>
      </FullLayout>
      <AboutConnector />
    </>
  );
};
