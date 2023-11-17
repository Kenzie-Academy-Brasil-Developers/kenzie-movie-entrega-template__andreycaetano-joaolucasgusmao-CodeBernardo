import { UseFormRegisterReturn } from "react-hook-form";

export type nota = {
  value: number;
  label: string;
};

export const options: nota[] = [
  { value: 5, label: "5 - Excelente" },
  { value: 4, label: "4 - Muito Bom" },
  { value: 3, label: "3 - Bom" },
  { value: 2, label: "2 - Regular" },
  { value: 1, label: "1 - Ruim" },
];

export interface ISelectProps {
  placeholder: string;
  errors: string | undefined;
  options: Array<nota>;
  register?: UseFormRegisterReturn<string>;
}
