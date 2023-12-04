import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
import { PublicRoutes } from "./PublicRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="movie/:id" element={<MoviePage />} />
      <Route path="*" />
    </Routes>
  );
};
