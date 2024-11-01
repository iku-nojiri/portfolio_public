import { InputPropsType } from '../../../types/InputPropsType';
import { Text16to14 } from '../../uis/components/atoms/text/Text16to14';
import { Text14to12 } from '../../uis/components/atoms/text/Text14to12';

export const FormCheckArea = (props: InputPropsType): JSX.Element => {
  return (
    <div>
      <Text16to14 as={'h2'} variant='font-semibold mb-[.25em]'>
        個情報取り扱いについて
      </Text16to14>
      <Text14to12 as={'p'}>当サイトは、お預かりした個人情報を適切に管理し、ご連絡やご質問に対する回答時のみ利用します。法令に基づいて開示が必要な場合を除いて、個人情報を第三者に開示することはありません。</Text14to12>
      <div className='mt-3 flex'>
        <input
          id='agreement'
          name='agreement'
          type='checkbox'
          className={`mt-1.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800`}
          {...(props.register && props.register(props.id, { required: '*メールを送信するには、個人情報の取り扱いに関する同意が必要です。' }))}
        />
        <Text14to12 as={'label'} variant='ms-3'>
          上記に同意する
        </Text14to12>
      </div>
      <Text14to12 variant='mt-1 text-red-500 dark:text-red-400'>{props.errors[props.id]?.message as string}</Text14to12>
    </div>
  );
};
