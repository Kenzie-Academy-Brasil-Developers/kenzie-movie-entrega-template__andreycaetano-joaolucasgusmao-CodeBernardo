import { CurrentMovie } from "../../components/CurrentMovie";
import { MoviesList } from "../../components/MoviesList";

export const HomePage = () => {
  return (
    <>
      <section>
        <CurrentMovie />
      </section>
      <section>
        <ul>
          <MoviesList />
        </ul>
      </section>
    </>
  );
};
