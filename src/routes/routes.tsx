import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/register" />
      <Route path="movie/:id" />
      <Route path="*" />
    </Routes>
  );
};
