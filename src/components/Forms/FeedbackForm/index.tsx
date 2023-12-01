import { useForm, SubmitHandler } from "react-hook-form";
import { Select } from "../../Select";
import { TFeedbackFormValues, feedbackFormSchema } from "./feedbackForm.schema";
import { options } from "../../../@types/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineStarBorder } from "react-icons/md";
import { Textarea } from "../../Textarea";

interface IFeedbackForm {
  movieId: string | undefined;
  userId: number;
  callback: Function;
}

export const FeedbackForm = ({ movieId, userId, callback }: IFeedbackForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
  });

  const onSubmit: SubmitHandler<TFeedbackFormValues> = async (data) => {
    await callback({
      movieId: movieId,
      userId: userId,
      score: Number(data.nota),
      description: data.comentario,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        placeholder="Selecione uma nota"
        options={options}
        errors={errors.nota?.message}
        register={register("nota")}
      />
      <Textarea
        placeholder={"deixe um comentario"}
        errors={errors.comentario?.message}
        register={register("comentario")}
      />

      <button type="submit">
        
        <MdOutlineStarBorder /> Avaliar
      </button>
    </form>
  );
};
