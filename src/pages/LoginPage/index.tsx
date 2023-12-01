import { DefaultTemplate } from "../../components/DefaultTemplate";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <DefaultTemplate>
      <section>
        <div>
          <h3>Login</h3>
          <LoginForm />
          <span>ou</span>
          <Link to={"/register"}>Cadastre=se</Link>
        </div>
      </section>
    </DefaultTemplate>
  );
};
