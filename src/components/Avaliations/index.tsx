import { AvaliationsList } from "./AvaliationsList";

export const Avaliations = () => {
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
        <AvaliationsList />
      </ul>
    </>
  );
};
