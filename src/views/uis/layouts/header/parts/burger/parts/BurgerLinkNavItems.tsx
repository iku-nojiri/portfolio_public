import { useContext } from 'react';

import { LINK_LIST } from '../../../../../../../utils/linkList';
import { LinkPropsType } from '../../../../../../../types/LinkPropsType';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../../../../../../../function/scrollWithOffset';
import { Link } from 'react-router-dom';
import { BurgerToggleContext } from '../../../../../../../providers/BurgerToggleProvider';

const baseStyle: string = 'custom-text-16to14 -mx-3 px-3 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-50 dark:hover:text-gray-900';

const Component = ({ href, children }: LinkPropsType): JSX.Element => {
  const hasHashtag: boolean = href.includes('#');
  const { toggleMenu } = useContext(BurgerToggleContext);

  return hasHashtag ? (
    <HashLink to={href} className={baseStyle} smooth scroll={(el) => scrollWithOffset(el, 60)} onClick={toggleMenu}>
      {children}
    </HashLink>
  ) : (
    <Link to={href} className={baseStyle} onClick={toggleMenu}>
      {children}
    </Link>
  );
};

export const BurgerLinkNavItems = () => {
  return (
    <>
      {LINK_LIST.map((item, index) => (
        <Component key={index} href={item.href}>
          {item.name}
        </Component>
      ))}
    </>
  );
};
