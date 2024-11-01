import { InputPropsType } from '../../../types/InputPropsType';
import { sanitizeInput } from '../../../function/sanitizeInput';
import { Text14to12 } from '../../uis/components/atoms/text/Text14to12';

interface TextareaPropsType extends InputPropsType {
  areaRows?: number;
}

export const FormTextarea = (props: TextareaPropsType): JSX.Element => {
  return (
    <div>
      <label htmlFor={props.id} className='custom-text-16to14 mb-2 block cursor-pointer'>
        {sanitizeInput(props.label)}
      </label>
      <textarea
        id={props.id}
        name={props.id}
        rows={props.areaRows}
        className={`custom-text-14to12 block w-full rounded-lg border px-4 py-3 duration-mainTime focus:border-blue-500 focus:ring-blue-500 dark:bg-mainBlack ${props.errors[props.id] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200'}`}
        {...(props.register && props.register(props.id, { required: '*入力必須項目です', validate: (value) => sanitizeInput(value) === value || '「<>」など無効な文字列が含まれています。' }))}
      ></textarea>
      <Text14to12 variant='mt-1 text-red-500 dark:text-red-400'>{props.errors[props.id]?.message as string}</Text14to12>
    </div>
  );
};
