import { UseFormRegisterReturn } from "react-hook-form";


interface IInputProps {
    type: "text" | "email" | "number" | "password";
    placeholder?: string;
    register?: UseFormRegisterReturn<string>;
}

export const Input = ({ type, placeholder, register }: IInputProps) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} {...register} />
        </div>
    )
}