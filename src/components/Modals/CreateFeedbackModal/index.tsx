import { MdOutlineClose } from "react-icons/md";
import { FeedbackForm } from "../../Forms/FeedbackForm";

export const CreateFeedbackModal = () => {
    return (
        <div>
            <div>
                <h3>Avaliação</h3>
                <span><MdOutlineClose /></span>
                <FeedbackForm />
            </div>
        </div>
    )
}