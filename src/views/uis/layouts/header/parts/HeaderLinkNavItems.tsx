import { LINK_LIST } from '../../../../../utils/linkList';
import { LinkPropsType } from '../../../../../types/LinkPropsType';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { transitionToHome } from '../../../../../function/transitionToHome';
import { scrollWithOffset } from '../../../../../function/scrollWithOffset';
import { resetViewportPosition } from '../../../../../function/resetViewportPosition';
import { FaExternalLinkAlt as ExternalIcon } from 'react-icons/fa';

const baseStyle: string = 'custom-text-14to12 font-semibold dark:text-mainWhite hover:text-mainColor dark:hover:text-indigo-500';

const Component = ({ href, children, externalLink }: LinkPropsType): JSX.Element => {
  const isLinkToHome: boolean = href === '/';
  const hasHashtag: boolean = href.includes('#');
  const isExternalLink = externalLink;

  return isLinkToHome ? (
    <HashLink to={href} className={baseStyle} onClick={transitionToHome}>
      {children}
    </HashLink>
  ) : hasHashtag ? (
    <HashLink to={href} className={baseStyle} smooth scroll={(el) => scrollWithOffset(el, 60)}>
      {children}
    </HashLink>
  ) : isExternalLink ? (
    <Link to={href} className={baseStyle} target='_blank'>
      {children} <ExternalIcon />
    </Link>
  ) : (
    <Link to={href} className={baseStyle} onClick={resetViewportPosition}>
      {children}
    </Link>
  );
};

export const HeaderLinkNavItems = (): JSX.Element => {
  return (
    <>
      {LINK_LIST.map((item, index) => {
        return (
          <Component key={index} href={item.href} externalLink={item.externalLink}>
            {item.name}
          </Component>
        );
      })}
    </>
  );
};
