import { BtnPropsType } from '../../../../../types/BtnPropsType';
import { twMerge } from 'tailwind-merge';
import { FaExternalLinkAlt as ExternalIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const baseStyle: string = 'flex items-center gap-1.5 rounded-md bg-mainColor px-3.5 py-2.5 text-[12px] font-semibold text-white shadow-sm sm:text-[14px] duration-quickTime hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

export const Btn = ({ as = 'button', type, children, variant, href, externalLink, disabled, onClick }: BtnPropsType) => {
  const isLink = as === 'a';
  const icon = externalLink ? <ExternalIcon /> : null;

  if (isLink && href) {
    return (
      <Link to={href} className={twMerge(baseStyle, variant)} onClick={onClick}>
        {children} {icon}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={twMerge(baseStyle, variant)}>
      {children}
    </button>
  );
};
