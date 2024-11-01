import { LinkPropsType } from '../../../../../types/LinkPropsType';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { transitionToHome } from '../../../../../function/transitionToHome';
import { scrollWithOffset } from '../../../../../function/scrollWithOffset';
import { resetViewportPosition } from '../../../../../function/resetViewportPosition';
import { FaExternalLinkAlt as ExternalIcon } from 'react-icons/fa';

const baseStyle: string = 'custom-text-14to12 opacity-90 hover:text-mainColor dark:opacity-85 dark:hover:text-indigo-500';

export const FooterLinkListItem = ({ children, href, externalLink }: LinkPropsType): JSX.Element => {
  const isLinkToHome: boolean = href === '/';
  const hasHashtag: boolean = href.includes('#');
  const isExternalLink = externalLink;

  return isLinkToHome ? (
    <HashLink to={href} className={baseStyle} onClick={transitionToHome}>
      {children}
    </HashLink>
  ) : hasHashtag ? (
    <HashLink to={href} className={baseStyle} scroll={(el) => scrollWithOffset(el, 60)}>
      {children}
    </HashLink>
  ) : isExternalLink ? (
    <Link to={href} className={`${baseStyle} flex items-center gap-x-1`} target='_blank' rel='noopener noreferrer'>
      {children} <ExternalIcon />
    </Link>
  ) : (
    <Link to={href} className={baseStyle} onClick={resetViewportPosition}>
      {children}
    </Link>
  );
};
