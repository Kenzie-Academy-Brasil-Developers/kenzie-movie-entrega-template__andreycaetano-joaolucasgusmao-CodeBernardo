import { Link } from "react-router-dom";
import { CurrentMovie } from "../../components/CurrentMovie";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { MoviesList } from "../../components/MoviesList";

export const HomePage = () => {
  return (
    <>
      {/* <DefaultTemplate>
        <section>
          <CurrentMovie />
        </section>
        <section>
          <ul>
            <MoviesList />
          </ul>
        </section>
      </DefaultTemplate> */}
      <Link to={"/movie/1"}>
        <button>caminho 1</button>
      </Link>
      <Link to={"/movie/2"}>
        <button>caminho 2</button>
      </Link>
    </>
  );
};
