import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" />
        <Route path="/register" />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="movie/:id" element={<MoviePage />} />
      </Route>
      <Route path="*" />
    </Routes>
  );
};
