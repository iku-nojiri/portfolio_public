import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Text14to12 } from '../../atoms/text/Text14to12';
import { sliceText } from '../../../../../function/sliceTextLength';

interface CardPropsType {
  role?: string;
  href: string;
  img: string;
  title: ReactNode;
  detail?: ReactNode;
  externalLink?: boolean;
}

export const CardLink = ({ role, href, img, title, detail, externalLink }: CardPropsType): JSX.Element => {
  const processedDetail = typeof detail === 'string' ? sliceText(detail, 45) : detail;
  const isExternalLink = externalLink ? '_blank' : '_self';

  return (
    <Link role={role} to={href} className='block rounded-lg border border-gray-200 duration-mainTime hover:opacity-75 focus:outline-none dark:border-neutral-700 dark:bg-mainBlack' target={isExternalLink}>
      <figure className='relative flex items-center overflow-hidden'>
        <img className='absolute inset-0 h-full w-32 rounded-s-lg object-cover sm:w-48' src={img} alt={`${title}のイメージ`} />
        <figcaption className='ms-32 flex min-h-24 grow flex-col justify-center p-4 sm:ms-48'>
          <Text14to12 as={'p'} variant='font-semibold'>
            {title}
          </Text14to12>
          <Text14to12 as={'p'} variant='opacity-85'>
            {processedDetail}
          </Text14to12>
        </figcaption>
      </figure>
    </Link>
  );
};
