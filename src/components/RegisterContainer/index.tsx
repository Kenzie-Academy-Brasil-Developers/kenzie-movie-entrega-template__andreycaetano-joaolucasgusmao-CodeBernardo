
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import { RegisterForm } from '../Forms/RegisterForm';

export const RegisterContainer = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Cadastro</h3>
                    <p>Preencha os campos para cadastrar-se</p>
                </div>
                <Link to={"/login"}> <MdArrowBack /> Voltar</Link>
            </div>
            <RegisterForm />
        </div>
    )
}