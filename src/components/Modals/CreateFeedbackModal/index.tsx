import { MdOutlineClose } from "react-icons/md";
import { FeedbackForm } from "../../Forms/FeedbackForm";
import { useCreateAvaliation } from "../../../hooks";

interface ICreateFeedbackModal {
  movieId: string | undefined;
  userId: number;
}

export const CreateFeedbackModal = ({movieId,userId,}: ICreateFeedbackModal) => {
  return (
    <div>
      <div>
        <h3>Avaliação</h3>
        <span>
          <MdOutlineClose />
        </span>
        <FeedbackForm
          movieId={movieId}
          userId={userId}
          callback={useCreateAvaliation}
        />
      </div>
    </div>
  );
};
