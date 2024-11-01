import { Helmet } from 'react-helmet-async';
import { COMMON_DATA } from '../../../utils/commonData';

interface MetaPropsType {
  description: string;
}

export const HeadMetadata = ({ description }: MetaPropsType) => {
  const cleanUrl: string = location.origin + location.pathname;
  return (
    <Helmet>
      <title>{`${COMMON_DATA.authorInEn}'S`} PORTFOLIO</title>
      <meta name='description' content={`Webエンジニア ${COMMON_DATA.authorInJp}のポートフォリオサイトの${description}`} />
      <meta name='author' content={COMMON_DATA.authorInEn} />
      <meta name='copyright' content={COMMON_DATA.authorInEn} />
      <link rel='canonical' href={cleanUrl} />
    </Helmet>
  );
};
