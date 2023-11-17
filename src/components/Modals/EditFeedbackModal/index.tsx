import { MdOutlineClose } from "react-icons/md";
import { FeedbackForm } from "../../Forms/FeedbackForm";

export const EditFeedbackModal = () => {
  return (
    <div>
      <div>
        <h3>Editar Avaliação</h3>
        <span>
          <MdOutlineClose />
        </span>
        <FeedbackForm />
      </div>
    </div>
  );
};
