import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginFormValues, loginFormSchema } from "./loginForm.schema";
import { Input } from "../../Input";
import { useAuth } from "../../../contexts/user/user";

export const LoginForm = () => {
  const {signIn} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit: SubmitHandler<TLoginFormValues> = async (data) => {
    await signIn({
      email: data.email,
      password: data.password
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="E-mail" register={register("email")} />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <Input
        type="password"
        placeholder="Senha"
        register={register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}
      <button type="submit">Enviar</button>
    </form>
  );
};
