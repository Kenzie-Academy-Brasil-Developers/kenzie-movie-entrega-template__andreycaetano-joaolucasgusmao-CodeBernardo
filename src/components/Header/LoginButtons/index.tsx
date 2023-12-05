import { Link } from "react-router-dom";

export const LoginButtons = () => {
  return (
    <div className="w-1/5 justify-between flex">
      <Link to="/register">
        <button className="font-Poppins font-bold text-xs text-white">Cadastre-se</button>
      </Link>
      <Link to={"/login"}>
        <button className="bg-yellow px-4 rounded-3xl h-6 text-lightgray-2 font-Poppins font-bold text-xs">Entrar</button>
      </Link>
    </div>
  );
};
