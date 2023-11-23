import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { PrivateRoutes } from "./PrivateRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="movie/:id" element={<MoviePage />} />
      </Route>
     
      <Route path="/" element={<HomePage />} />
      <Route path="/login" />
      <Route path="/register" />
      <Route path="*" />
    </Routes>
  );
};
