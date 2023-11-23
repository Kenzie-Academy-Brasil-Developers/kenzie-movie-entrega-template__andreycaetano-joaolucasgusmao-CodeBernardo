import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/user/user";

export const PublicRoutes = () => {
  const { userLogged } = useAuth();

  return !userLogged() ? <Outlet /> : <Navigate to="#" />;
};