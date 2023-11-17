import { z } from "zod";

export const feedbackFormSchema = z.object({
    nota: z
        .string()
        .min(1, "selecione uma nota"),
    comentario: z
        .string()
        .min(8, "deixe um comentário"),
});

export type TFeedbackFormValues = z.infer<typeof feedbackFormSchema>;