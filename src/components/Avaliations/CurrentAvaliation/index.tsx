import { useState } from "react"
import { IUserReview } from "../../../@types/products"
import { EditFeedbackModal } from "../../Modals/EditFeedbackModal"
interface IProps{
    avaliation: IUserReview
}

export const CurrentAvaliation = ({avaliation} : IProps) => {
    const [editIsOpen, setEditIsOpen] = useState(false)
    return(
        <>
        <section>
            <h4>Sua Avaliação</h4>
            <div>
                <p>{avaliation.description}</p>
                <div>
                    <span><i>Star Icon</i>{avaliation.score}</span>
                    <button onClick={() => setEditIsOpen(true)}>edit icon</button>
                    <button>delete icon</button>
                </div>
            </div>
        </section>
        {editIsOpen ? <EditFeedbackModal movieId={avaliation.movieId} userId={avaliation.userId}/> : null}
        </>
    )
}