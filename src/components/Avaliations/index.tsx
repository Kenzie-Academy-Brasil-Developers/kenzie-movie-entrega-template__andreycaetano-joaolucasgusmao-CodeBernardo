import { AvaliationsList } from "./AvaliationsList";

interface IProps {
  userId: number
  movieId: number
}

export const Avaliations = ({movieId, userId}: IProps) => {
  return (
    <>
      <div>
        <h2>Avaliações</h2>
        <button>
          <i>Star Icon</i>
          Avaliar
        </button>
      </div>
      <ul>
        <AvaliationsList movieId={movieId} userId={userId}/>
      </ul>
    </>
  );
};
