import { ReactNode } from 'react';

import { IconContext } from 'react-icons';
import { FaReact as ReactIcon } from 'react-icons/fa';
import { BiLogoTypescript as TypeScriptIcon } from 'react-icons/bi';
import { RiTailwindCssFill as TailwindIcon } from 'react-icons/ri';
import { SiVite as ViteIcon } from 'react-icons/si';
import { Link } from 'react-router-dom';

interface ListItemType {
  icon: ReactNode;
  name: string;
  href: string;
}

const listItem: Array<ListItemType> = [
  {
    icon: <ReactIcon />,
    name: 'React',
    href: 'https://ja.react.dev/',
  },
  {
    icon: <TypeScriptIcon />,
    name: 'TypeScript',
    href: 'https://typescriptbook.jp/',
  },
  {
    icon: <TailwindIcon />,
    name: 'Tailwind',
    href: 'https://tailwindcss.com/',
  },
  {
    icon: <ViteIcon />,
    name: 'Vite',
    href: 'https://ja.vite.dev/',
  },
];

export const TechStackListItems = () => {
  return (
    <>
      {listItem.map((item, index) => (
        <li key={index} className='flex flex-1 items-center gap-x-2.5 duration-mainTime hover:opacity-70 sm:justify-center'>
          <IconContext.Provider value={{ attr: { 'aria-label': item.name }, className: 'w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] text-mainGray dark:text-mainWhite' }}>{item.icon}</IconContext.Provider>
          <Link to={item.href} className='font-robot text-base font-semibold text-mainGray duration-mainTime dark:text-mainOffWhite sm:text-2xl' target='_blank'>
            <>{item.name}</>
          </Link>
        </li>
      ))}
    </>
  );
};
