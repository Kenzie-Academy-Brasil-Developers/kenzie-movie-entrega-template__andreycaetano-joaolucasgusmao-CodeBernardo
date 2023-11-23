import { Link } from "react-router-dom";

export const LoginButtons = () => {
  return (
    <div>
      <Link to="/register">
        <button>Cadastre-se</button>
      </Link>
      <Link to={"/login"}>
        <button>Entrar</button>
      </Link>
    </div>
  );
};
