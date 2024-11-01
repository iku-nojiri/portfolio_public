import { GiCube as Icon } from 'react-icons/gi';

interface IconPropsType {
  variant?: string;
}

export const LogoIcon = ({ variant }: IconPropsType): JSX.Element => {
  return <Icon aria-hidden='true' className={`${variant}`} color='#4f46e5' />;
};
