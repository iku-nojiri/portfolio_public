import { TextPropsType } from '../../../../../types/TextPropsType';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

interface TagPropsType extends TextPropsType {
  bordered?: boolean;
}

const withBorder: string = 'inline-flex items-center gap-1.5 rounded-md border border-indigo-400 px-3 py-1.5 text-xs font-semibold text-mainColor duration-mainTime dark:border-indigo-300 dark:text-indigo-300';
const withoutBorder: string = 'inline-flex items-center gap-1.5 rounded-md bg-indigo-100 px-3 py-1.5 text-xs font-semibold text-mainColor duration-mainTime dark:bg-indigo-300 dark:text-indigo-800';

export const Tag = ({ as: Component = 'span', children, variant, href, bordered = false }: TagPropsType): JSX.Element => {
  const baseStyle: string = bordered ? withBorder : withoutBorder;

  if (Component === 'a' && href) {
    return (
      <Link to={href} className={twMerge(baseStyle, variant)}>
        {children}
      </Link>
    );
  }

  return <Component className={twMerge(baseStyle, variant)}>{children}</Component>;
};
