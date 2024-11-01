import { resetViewportPosition } from '../../../function/resetViewportPosition';
import { HeadMetadata } from '../../contents/head/HeadMetadata';
import { ContentLayout } from '../../uis/components/atoms/layout/ContentLayout';
import { Text38to32 } from '../../uis/components/atoms/text/Text38to32';
import { Text16to14 } from '../../uis/components/atoms/text/Text16to14';
import { BtnBox } from '../../uis/components/atoms/box/BtnBox';
import { Btn } from '../../uis/components/atoms/btn/Btn';

export const FailedPage = () => {
  resetViewportPosition();
  return (
    <>
      <HeadMetadata description='お問い合わせページです。お手数ですが時間を置き、再度送信してください。' />
      <ContentLayout variant='custom-full-height grid place-items-center'>
        <div className='grid place-items-center'>
          <Text38to32 as={'h1'}>送信が失敗しました</Text38to32>
          <Text16to14 as={'p'} variant='mt-[.5em] mb-[1em]'>
            お手数ですが時間を置き、再度送信してください
          </Text16to14>
          <BtnBox>
            <Btn as='a' href='/'>
              ホームに戻る
            </Btn>
            <Btn as='a' href='/contact/'>
              入力画面に戻る
            </Btn>
          </BtnBox>
        </div>
      </ContentLayout>
    </>
  );
};
