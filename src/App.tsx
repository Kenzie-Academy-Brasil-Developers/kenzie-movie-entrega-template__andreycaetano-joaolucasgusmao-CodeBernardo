import { DefaultTemplate } from "./components/DefaultTemplate";
import { MoviePage } from "./pages/MoviePage";

export const App = () => {
  return (
    <DefaultTemplate>
      <MoviePage />
    </DefaultTemplate>
  );
};
