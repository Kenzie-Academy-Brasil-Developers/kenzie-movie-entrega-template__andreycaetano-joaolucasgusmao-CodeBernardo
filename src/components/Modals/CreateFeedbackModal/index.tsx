import { MdOutlineClose } from "react-icons/md";
import { FeedbackForm } from "../../Forms/FeedbackForm";
import { createAvaliation } from "../../../contexts/products";

interface ICreateFeedbackModal {
  movieId: number;
  userId: number;
}

export const CreateFeedbackModal = ({
  movieId,
  userId,
}: ICreateFeedbackModal) => {
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
          callback={createAvaliation}
        />
      </div>
    </div>
  );
};
