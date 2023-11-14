import { Link } from "react-router-dom"
import { LoginForm } from "../../Forms/LoginForm"

export const LoginModal = () => {
    return (
        <div>
            <div>
                <h3>Login</h3>
                <LoginForm />
                <p>ou</p>
                <Link to={"/register"}>Cadastre=se</Link>
            </div>
        </div>
    )
}