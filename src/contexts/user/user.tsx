import { createContext, ReactNode, useCallback, useContext, useState } from "react"
import { api } from "../../services/api";

interface AuthContextState {
    token: TokenState;
    signIn({ email, password }: UserData): Promise<void>;
    userLogged(): boolean;
}

interface UserData {
    email: string;
    password: string;
}

interface TokenState {
    token: string;
}

interface InputProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

export const AuthProvider: React.FC<InputProps> = ({children}) => {
    const [token, setToken] = useState<TokenState>(() => {
        const token = localStorage.getItem("@KenzieMovie:token");

        if(token) {
            return { token }
        }

        return { } as TokenState
    })

    const signIn = useCallback(async ({email, password}:UserData) => {
        const response = await api.post('/login', {
            email,
            password
        })

        const { token } = response.data
        setToken(token)

        localStorage.setItem('@KenzieMovie:token', token)
    }, [])

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@KenzieMovie:token');
        if(token) {
            return true;
        }
        return false
    }, [])

    return (
        <AuthContext.Provider value={
            {
                token, 
                signIn, 
                userLogged,
            }
        }>

            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextState {
    const context = useContext(AuthContext)
    return context
}