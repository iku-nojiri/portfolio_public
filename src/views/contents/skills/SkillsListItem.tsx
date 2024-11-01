import { FaHtml5 as HtmlIcon } from 'react-icons/fa';
import { FaCss3Alt as CssIcon } from 'react-icons/fa';
import { BsFiletypeScss as ScssIcon } from 'react-icons/bs';
import { RiTailwindCssFill as TailwindIcon } from 'react-icons/ri';
import { RiJavascriptLine as JavascriptIcon } from 'react-icons/ri';
import { TbBrandTypescript as TypeScriptIcon } from 'react-icons/tb';
import { FaReact as ReactIcon } from 'react-icons/fa';
import { FaPhp as PhpIcon } from 'react-icons/fa';
import { FaWordpress as WPIcon } from 'react-icons/fa';
import { FaDocker as DockerIcon } from 'react-icons/fa';
import { FaGithub as GitHubIcon } from 'react-icons/fa';

import { Text18to16 } from '../../uis/components/atoms/text/Text18to16';
import { Text16to14 } from '../../uis/components/atoms/text/Text16to14';

const iconStyle: string = 'absolute left-0 top-0 p-2 h-10 w-10 rounded-lg bg-mainColor text-white';

const skills = [
  {
    icon: <HtmlIcon className={iconStyle} />,
    name: 'HTML',
    description: 'Webサイトをセマンティックで効率的に構築します',
  },
  {
    icon: <CssIcon className={iconStyle} />,
    name: 'CSS',
    description: 'デザインに忠実に、美しくスタイリングします',
  },
  {
    icon: <ScssIcon className={iconStyle} />,
    name: 'SCSS',
    description: '効率的なスタイリングと開発においてのCSSカスタマイズが可能です',
  },
  {
    icon: <TailwindIcon className={iconStyle} />,
    name: 'Tailwind CSS',
    description: 'ユーティリティファーストなスタイリングを行います',
  },
  {
    icon: <JavascriptIcon className={iconStyle} />,
    name: 'JavaScript',
    description: '動的なWebサイトの開発を実現します',
  },
  {
    icon: <TypeScriptIcon className={iconStyle} />,
    name: 'TypeScript',
    description: '型や構文由来のエラーを防ぎ、信頼性の高いコードを作成します',
  },
  {
    icon: <ReactIcon className={iconStyle} />,
    name: 'React',
    description: 'コンポーネントベースの保守性の高いUI開発を行います',
  },
  {
    icon: <PhpIcon className={iconStyle} />,
    name: 'PHP',
    description: 'サーバーサイドでのWebサイト開発に対応します',
  },
  {
    icon: <WPIcon className={iconStyle} />,
    name: 'WordPress',
    description: '運用からカスタマイズまで行います',
  },
  {
    icon: <DockerIcon className={iconStyle} />,
    name: 'Docker',
    description: 'コンテナ化技術で開発環境を構築します',
  },
  {
    icon: <GitHubIcon className={iconStyle} />,
    name: 'GitHub',
    description: 'バージョン管理もお任せください',
  },
];

export const SkillsListItem = () => {
  return (
    <>
      {skills.map((skill) => (
        <li key={skill.name} className='relative pl-16'>
          {skill.icon}

          <Text18to16 as={'h3'} variant='font-robot font-semibold'>
            {skill.name}
          </Text18to16>
          <Text16to14 as={'p'}>{skill.description}</Text16to14>
        </li>
      ))}
    </>
  );
};
