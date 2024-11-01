import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { FormGrid } from './FormGrid';
import { FormColumn } from './FormColumn';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormCheckArea } from './FormCheckArea';
import { Btn } from '../../uis/components/atoms/btn/Btn';
import { Text14to12 } from '../../uis/components/atoms/text/Text14to12';

interface FormData {
  name: string;
  furigana: string;
  tel: string;
  mail: string;
  company: string;
  detail: string;
}

export const Form = (): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    try {
      const response = await emailjs.send(serviceId, templateId, data, publicKey);
      console.log('メールの送信に成功しました', response.status);
      navigate('/contact/success');
    } catch (err) {
      console.error('メールの送信に失敗しました。', err);
      navigate('/contact/failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8 sm:space-y-10'>
      <FormGrid>
        <FormColumn>
          <FormInput label='お名前' id='name' register={register} errors={errors} />
          <FormInput label='フリガナ' id='furigana' register={register} errors={errors} />
        </FormColumn>
        <FormInput label='会社名' id='company' register={register} errors={errors} />
        <FormInput label='電話番号' id='tel' register={register} errors={errors} />
        <FormInput label='メールアドレス' id='mail' register={register} errors={errors} />
        <FormTextarea label='お問い合わせ内容詳細' id='detail' areaRows={4} register={register} errors={errors} />
      </FormGrid>
      <FormCheckArea id='agreement' register={register} errors={errors} label={''} />
      <Btn type='submit' variant='mt-6 block w-full text-center'>
        送信する
      </Btn>
      <Text14to12 variant='mt-3 text-center opacity-85'>1~2日以内にご連絡いたします</Text14to12>
    </form>
  );
};
