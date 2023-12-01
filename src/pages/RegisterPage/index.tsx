import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { DefaultTemplate } from "../../components/DefaultTemplate";

export const RegisterPage = () => {
  return (
    <DefaultTemplate>
        <div>
          <div>
            <h3>Cadastro</h3>
            <p>Preencha os campos para cadastrar-se</p>
          </div>
          <Link to={"/login"}>
             <button><MdArrowBack />Voltar</button>
          </Link>
        </div>
        <RegisterForm />
    </DefaultTemplate>
  );
};
