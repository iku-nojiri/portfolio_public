import { LINK_LIST } from '../../../../../utils/linkList';
import { COMMON_DATA } from '../../../../../utils/commonData';
import { FooterLogoArea } from './FooterLogoArea';
import { FooterLinkList } from './FooterLinkList';
import { FooterLinkListItem } from './FooterLinkListItem';

export const FooterNav = (): JSX.Element => {
  return (
    <div className='mb-10 grid grid-cols-3 gap-6 sm:grid-cols-5'>
      <FooterLogoArea />

      <FooterLinkList title='コンテンツ'>
        {LINK_LIST.map((item, index) => {
          const isContact = item.name === 'お問い合わせ';

          if (!isContact) {
            return (
              <FooterLinkListItem key={index} href={item.href} externalLink={item.externalLink}>
                {item.name}
              </FooterLinkListItem>
            );
          }
        })}
      </FooterLinkList>

      <FooterLinkList title='お問い合わせ・SNS'>
        <FooterLinkListItem href='/contact/'>Eメール</FooterLinkListItem>
        <FooterLinkListItem href={COMMON_DATA.instagramLink} externalLink={true}>
          Instagram
        </FooterLinkListItem>
        <FooterLinkListItem href={COMMON_DATA.githubLink} externalLink={true}>
          GitHub
        </FooterLinkListItem>
      </FooterLinkList>
    </div>
  );
};
