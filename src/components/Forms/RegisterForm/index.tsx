import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../Input";
import { TRegisterFormValues, registerFormSchema } from "./registerForm.schema";
import { useAuth } from "../../../contexts/user/user";

export const RegisterForm = () => {
  const { userRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<TRegisterFormValues> = async (data) => {
    await userRegister({
      email: data.email,
      password: data.password,
      name: data.name,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Nome" register={register("name")} />
      {errors.name ? <p>{errors.name.message}</p> : null}
      <Input type="email" placeholder="E-mail" register={register("email")} />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <Input
        type="password"
        placeholder="Senha"
        register={register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}
      <Input
        type="password"
        placeholder="Confirmar senha"
        register={register("confirmPassword")}
      />
      {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}

      <button type="submit">Cadastrar-se</button>
    </form>
  );
};
