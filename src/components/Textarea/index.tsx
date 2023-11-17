import { ITextareaProps } from "../../@types/textarea"

export const Textarea = ({ placeholder, errors, register }: ITextareaProps) => {
    return (
        <div>
            <textarea
                placeholder={placeholder}
                {...register}
            />
            {errors ? <p>{errors}</p> : null}
        </div>
    )
}