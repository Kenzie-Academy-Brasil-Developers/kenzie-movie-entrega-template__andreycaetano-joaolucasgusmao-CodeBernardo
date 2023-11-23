import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/user/user";
import { Router } from "./routes/routes";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};
