import { TextPropsType } from '../../../../../types/TextPropsType';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

const baseStyle: string = 'custom-text-28to26';

export const Text28to26 = ({ as: Component = 'p', href, role, variant, children }: TextPropsType) => {
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
