import { BtnPropsType } from '../../../../../types/BtnPropsType';
import { twMerge } from 'tailwind-merge';
import { FaExternalLinkAlt as ExternalIcon } from 'react-icons/fa';
import { FaArrowRightLong as ArrowIcon } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const baseStyle: string = 'custom-text-14to12 flex items-center gap-1 font-semibold hover:text-mainColor dark:hover:text-indigo-500';

export const ArrowBtn = ({ as = 'button', type, children, variant, href, externalLink, onClick }: BtnPropsType): JSX.Element => {
  const icon = externalLink ? <ExternalIcon /> : <ArrowIcon />;
  const isLink = as === 'a';
  if (isLink && href) {
    return (
      <Link to={href} target={externalLink ? '_blank' : undefined} rel={externalLink ? 'noopener noreferrer' : undefined} className={twMerge(baseStyle, variant)}>
        {children} <span aria-hidden='true'>{icon}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={twMerge(baseStyle, variant)}>
      {children} <span aria-hidden='true'>{icon}</span>
    </button>
  );
};
