import { HeadMetadata } from '../contents/head/HeadMetadata';
import { FullLayout } from '../uis/components/atoms/layout/FullLayout';
import { PageHeading } from '../uis/components/block/Heading/PageHeading';
import { SkillsList } from '../contents/skills/SkillsList';
import { AboutConnector } from '../uis/components/block/cta/AboutConnector';

export const SkillsPage = (): JSX.Element => {
  return (
    <>
      <HeadMetadata description='スキルセット一覧です。効率的かつ運用しやすいコーディングでWebサイトを構築します' />
      <FullLayout>
        <PageHeading
          mainText='スキルセット。'
          subText={
            <>
              効率的かつ運用しやすい
              <br className='hidden lg:inline' />
              コーディングで構築します。
            </>
          }
          marginSize='large'
        />
        <section>
          <SkillsList />
        </section>
      </FullLayout>
      <AboutConnector />
    </>
  );
};
