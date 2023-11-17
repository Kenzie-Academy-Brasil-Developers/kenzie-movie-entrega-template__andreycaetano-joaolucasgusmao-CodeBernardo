import { IInputLoginProps } from "../../@types/input";

export const Input = ({ type, placeholder, register }: IInputLoginProps) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...register} />
    </div>
  );
};
