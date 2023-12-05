import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/user/user";
import { Router } from "./routes/routes";
import "./styles/index.css"

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};
