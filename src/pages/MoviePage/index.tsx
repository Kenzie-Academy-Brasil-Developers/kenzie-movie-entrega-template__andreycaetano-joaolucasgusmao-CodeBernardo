import { DefaultTemplate } from "../../components/DefaultTemplate";
import { MovieViewed } from "../../components/MovieViewed";

export const MoviePage = () => {
  return (
    <>
      <DefaultTemplate>
        <section>
          <MovieViewed />
        </section>
      </DefaultTemplate>
    </>
  );
};
