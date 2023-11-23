import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { PublicRoutes } from "./PublicRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" />
        <Route path="/register" />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="movie/:id" element={<MoviePage />} />
      <Route path="*" />
    </Routes>
  );
};
