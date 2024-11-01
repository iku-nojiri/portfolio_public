interface ImgPropsType {
  mock: string;
  name: string;
}

export const WorksModalImg = ({ mock, name }: ImgPropsType): JSX.Element => {
  return <img src={mock} alt={`${name}のデバイス上のイメージ画像`} className='mb-4 block h-auto w-full md:mb-0' />;
};
