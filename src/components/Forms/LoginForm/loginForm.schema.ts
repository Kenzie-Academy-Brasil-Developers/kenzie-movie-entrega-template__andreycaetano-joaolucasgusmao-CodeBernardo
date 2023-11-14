import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("Forneça um email válido")
    .min(1, "O email é obrigatório"),
  password: z.string().min(8, "A senha é obrigatória"),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
