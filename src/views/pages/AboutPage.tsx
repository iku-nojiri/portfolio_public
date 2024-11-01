import { HeadMetadata } from '../contents/head/HeadMetadata';
import { ContentLayout } from '../uis/components/atoms/layout/ContentLayout';
import { PageHeading } from '../uis/components/block/Heading/PageHeading';
import { AboutContent } from '../contents/about/AboutContent';
import { AboutTimeline } from '../contents/about/AboutTimeline';

export const AboutPage = (): JSX.Element => {
  return (
    <>
      <HeadMetadata description='自己紹介のページです。私の経歴や趣味などをお話しさせていただきます。' />
      <ContentLayout>
        <PageHeading
          mainText='私について。'
          subText={
            <>
              経歴や趣味などを
              <br className='hidden md:inline' />
              お話しさせていただきます。
            </>
          }
          marginSize='small'
        />
        <div className='space-y-12 sm:space-y-16'>
          <section>
            <AboutContent />
          </section>
          <section>
            <AboutTimeline />
          </section>
        </div>
      </ContentLayout>
    </>
  );
};
