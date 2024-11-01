import { HeadMetadata } from '../../contents/head/HeadMetadata';
import { ContentLayout } from '../../uis/components/atoms/layout/ContentLayout';
import { PageHeading } from '../../uis/components/block/Heading/PageHeading';
import { Form } from '../../contents/form/Form';

export const ContactPage = (): JSX.Element => {
  return (
    <>
      <HeadMetadata description='お問い合わせページです。入力フォームより必要事項を記入の上お問い合わせください。' />
      <ContentLayout>
        <PageHeading
          mainText='お問い合わせ。'
          subText={
            <>
              下記フォームより
              <br className='hidden sm:inline' />
              お問い合わせください。
            </>
          }
          marginSize='small'
        />
        <section>
          <Form />
        </section>
      </ContentLayout>
    </>
  );
};
