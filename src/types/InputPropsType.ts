import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface InputPropsType {
  label: string;
  id: string;
  register?: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export type { InputPropsType };
