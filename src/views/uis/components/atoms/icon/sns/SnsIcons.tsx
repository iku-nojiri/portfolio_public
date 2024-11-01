import { Link } from 'react-router-dom';
import { FaInstagram as InstagramIcon } from 'react-icons/fa';
import { FaGithub as GitHubIcon } from 'react-icons/fa';
import { COMMON_DATA } from '../../../../../../utils/commonData';

const LinkStyle: string = 'text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600';
interface IconsPropsType {
  variant?: string;
}

export const SnsIcons = ({ variant }: IconsPropsType): JSX.Element => {
  return (
    <>
      <Link to={COMMON_DATA.instagramLink} target='_blank' className={LinkStyle}>
        <InstagramIcon className={`h-5 w-5 ${variant}`} />
      </Link>
      <Link to={COMMON_DATA.githubLink} target='_blank' className={LinkStyle}>
        <GitHubIcon className={`h-5 w-5 ${variant}`} />
      </Link>
    </>
  );
};
