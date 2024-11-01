import { resetViewportPosition } from '../../../function/resetViewportPosition';
import { HeadMetadata } from '../../contents/head/HeadMetadata';
import { ContentLayout } from '../../uis/components/atoms/layout/ContentLayout';
import { Text38to32 } from '../../uis/components/atoms/text/Text38to32';
import { Text16to14 } from '../../uis/components/atoms/text/Text16to14';
import { BtnBox } from '../../uis/components/atoms/box/BtnBox';
import { Btn } from '../../uis/components/atoms/btn/Btn';

export const SuccessPage = () => {
  resetViewportPosition();
  return (
    <>
      <HeadMetadata description='お問い合わせページです。送信が完了しました。1~2日以内にご連絡いたします。' />
      <ContentLayout variant='custom-full-height grid place-items-center'>
        <div className='grid place-items-center'>
          <Text38to32 as={'h1'}>送信が完了しました</Text38to32>
          <Text16to14 as={'p'} variant='mt-[.5em] mb-[1em]'>
            1~2日以内にご連絡いたします
          </Text16to14>
          <BtnBox>
            <Btn as='a' href='/'>
              ホームに戻る
            </Btn>
          </BtnBox>
        </div>
      </ContentLayout>
    </>
  );
};
