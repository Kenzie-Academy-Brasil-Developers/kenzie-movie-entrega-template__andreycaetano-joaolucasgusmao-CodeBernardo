import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/user/user";

export const PrivateRoutes = () => {
  const { userLogged } = useAuth();

  return userLogged() ? <Outlet /> : <Navigate to="/" />;
};
