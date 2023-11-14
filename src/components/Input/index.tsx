import { IInputProps } from "../../@types/input";


export const Input = ({ type, placeholder, register }: IInputProps) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} {...register} />
        </div>
    )
}