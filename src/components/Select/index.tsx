import { ISelectProps } from "../../@types/select";

export const Select = ({ errors, options, register }: ISelectProps) => {
  return (
    <div>
      <select {...register}>
        <option value="" disabled selected>
          Selecione uma nota
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
