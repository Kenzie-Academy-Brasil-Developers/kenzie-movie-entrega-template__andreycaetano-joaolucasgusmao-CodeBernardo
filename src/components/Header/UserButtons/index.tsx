import { useAuth } from "../../../contexts/user/user"

export const UserButtons = () => {
    const {token, useUserByToken} = useAuth()
const user = useUserByToken(token)
    return(
        <div>
            <span>{user[0].name[0].toUpperCase()}</span>
            <span>{user[0].name}</span>
            <button>Sair</button>
        </div>
    )
}