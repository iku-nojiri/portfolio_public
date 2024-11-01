import { Text14to12 } from '../../atoms/text/Text14to12';

interface FigurePropsType {
  img: string;
  caption: string;
}

export const Figure = (props: FigurePropsType): JSX.Element => {
  return (
    <figure>
      <img className='aspect-3/2 w-full rounded-xl object-cover' src={props.img} />
      <Text14to12 as={'figcaption'} variant='mt-3 text-center'>
        {props.caption}
      </Text14to12>
    </figure>
  );
};
