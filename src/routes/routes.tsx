import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" />
      <Route path="/register" />
      <Route path="movie/:id" element={<MoviePage/>}/>
      <Route path="*" />
    </Routes>
  );
};
