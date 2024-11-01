import { TextPropsType } from '../../../../../types/TextPropsType';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

const baseStyle: string = 'custom-text-38to32';

export const Text38to32 = ({ as: Component = 'p', href, role, variant, children }: TextPropsType): JSX.Element => {
  if (Component === 'a' && href) {
    return (
      <Link to={href} className={twMerge(baseStyle, variant)} role={role}>
        {children}
      </Link>
    );
  }

  return (
    <Component className={twMerge(baseStyle, variant)} role={role}>
      {children}
    </Component>
  );
};
