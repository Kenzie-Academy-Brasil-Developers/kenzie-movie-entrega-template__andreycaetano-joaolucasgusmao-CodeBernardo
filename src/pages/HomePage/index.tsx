import { CurrentMovie } from "../../components/CurrentMovie";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { MoviesList } from "../../components/MoviesList";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <section>
          <CurrentMovie />
        </section>
        <section>
          <ul>
            <MoviesList />
          </ul>
        </section>
      </DefaultTemplate>
    </>
  );
};
