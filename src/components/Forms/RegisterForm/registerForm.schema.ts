import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(6),
    email: z.string().email("Fornceça um e-mail válido").min(1, "O e-mail é obrigatório."),
    password: z.string().min(8, "A senha precisa ter 8 digistos ou mais!")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).+/),
    confirmPassword: z.string().min(1, "Confirme sua senha"),
});

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
