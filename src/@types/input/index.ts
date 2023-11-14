import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
    type: "text" | "email" | "number" | "password";
    placeholder?: string;
    register?: UseFormRegisterReturn<string>;
}