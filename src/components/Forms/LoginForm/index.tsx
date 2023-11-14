import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TLoginFormValues, loginFormSchema } from './loginForm.schema';
import { Input } from '../../Input';


export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) });
  const onSubmit: SubmitHandler<TLoginFormValues> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type='email' placeholder='E-mail' register={register('email')} />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <Input type='password' placeholder='Senha' register={register('password')} />
      {errors.password ? <p>{errors.password.message}</p> : null}
      <button type="submit">Enviar</button>
    </form>
  );
};
