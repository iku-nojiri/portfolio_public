interface ImgPropsType {
  src: string;
  alt: string;
  onClick: () => void;
}

export const WorksListImg = ({ src, alt, onClick }: ImgPropsType): JSX.Element => {
  return (
    <button type='button' onClick={onClick} className='aspectRatio-3/2 mb-6 block w-full overflow-hidden rounded-lg border border-gray-200'>
      <img src={src} alt={`${alt}のWebサイトのスクリーンショット`} className='object-cover duration-mainTime hover:scale-110' />
    </button>
  );
};
