import { UseFormRegisterReturn } from "react-hook-form";

export interface ITextareaProps {
    placeholder: string;
    errors: string | undefined;
    register?: UseFormRegisterReturn<string>;
  }
  