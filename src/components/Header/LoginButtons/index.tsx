import { Link } from 'react-router-dom';

export const LoginButtons = () => {
    return (
        <div>
            <Link to="/register">Cadastre-se</Link>
            <button>Entrar</button>
        </div>
    )
}