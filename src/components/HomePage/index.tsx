import { CurrentMovie } from "./CurrentMovie";
import { MoviesList } from "./MoviesList";

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
