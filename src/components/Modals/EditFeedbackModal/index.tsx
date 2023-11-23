import { MdOutlineClose } from "react-icons/md";
import { FeedbackForm } from "../../Forms/FeedbackForm";
import { editAvaliation } from "../../../contexts/products";

interface IEditFeedbackModal {
  movieId: number;
  userId: number;
}

export const EditFeedbackModal = ({ movieId, userId }: IEditFeedbackModal) => {
  return (
    <div>
      <div>
        <h3>Editar Avaliação</h3>
        <span>
          <MdOutlineClose />
        </span>
        <FeedbackForm
          movieId={movieId}
          userId={userId}
          callback={editAvaliation}
        />
      </div>
    </div>
  );
};
