import { InputPropsType } from '../../../types/InputPropsType';
import { sanitizeInput } from '../../../function/sanitizeInput';
import { Text14to12 } from '../../uis/components/atoms/text/Text14to12';

export const FormInput = (props: InputPropsType): JSX.Element => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const isKatakana = (value: string) => {
    return /^[ァ-ヶー　]*$/.test(value) || /^[ァ-ヶー\s]*$/.test(value); // カタカナ、長音符、全角スペース、半角スペースのみを許可
  };

  return (
    <div>
      <label htmlFor={props.id} className='custom-text-16to14 mb-2 block cursor-pointer'>
        {sanitizeInput(props.label)}
      </label>
      <input
        type='text'
        id={props.id}
        name={props.id}
        className={`custom-text-14to12 block w-full rounded-lg border px-4 py-3 duration-mainTime focus:border-blue-500 focus:ring-blue-500 dark:bg-mainBlack ${props.errors[props.id] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200'}`}
        onKeyDown={handleKeyDown}
        {...(props.register &&
          props.register(props.id, {
            required: '*入力必須項目です',
            validate: (value) => {
              if (sanitizeInput(value) !== value) {
                return '「<>」など無効な文字列が含まれています。';
              }
              if (props.id === 'furigana' && !isKatakana(value)) {
                return 'カタカナで入力してください。';
              }
              return true;
            },
          }))}
      />
      <Text14to12 variant='mt-1 text-red-500 dark:text-red-400'>{props.errors[props.id]?.message as string}</Text14to12>
    </div>
  );
};
