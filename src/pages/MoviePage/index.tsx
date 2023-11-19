import { Avaliations } from "../../components/Avaliations";
import { MovieViewed } from "../../components/MovieViewed";

export const MoviePage = () => {
  return (
    <>
      <section>
        <MovieViewed />
      </section>
      <section>
        <Avaliations />
      </section>
    </>
  );
};
