import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputLoginProps {
  type: "text" | "email" | "number" | "password";
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
}
