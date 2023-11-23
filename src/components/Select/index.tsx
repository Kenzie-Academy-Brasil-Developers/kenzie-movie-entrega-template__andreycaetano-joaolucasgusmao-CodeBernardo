import { ISelectProps } from "../../@types/select";

export const Select = ({
  errors,
  options,
  register,
  placeholder,
}: ISelectProps) => {
  return (
    <div>
      <select {...register} defaultValue="" placeholder={placeholder}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors ? <p>{errors}</p> : null}
    </div>
  );
};
