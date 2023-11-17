import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Select } from '../../Select';
import { TFeedbackFormValues, feedbackFormSchema } from './feedbackForm.schema';
import { options } from '../../../@types/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdOutlineStarBorder } from 'react-icons/md';
import { Textarea } from '../../Textarea';

export const FeedbackForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFeedbackFormValues>({ resolver: zodResolver(feedbackFormSchema) });

    const onSubmit: SubmitHandler<TFeedbackFormValues> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Select
                placeholder="Selecione uma nota"
                options={options}
                errors={errors.nota?.message}
                register={register("nota")}
            />
            <Textarea
                placeholder={'deixe um comentario'}
                errors={errors.comentario?.message}
                register={register("comentario")}
            />


            <button type="submit"> <MdOutlineStarBorder />  Avaliar</button>
        </form>
    );
};
