import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../../services/api";
import { create } from "zustand";
import { useNavigate } from "react-router-dom";

interface IAuthContextState {
  token: ITokenState | null;
  signIn({ email, password }: IUserData): Promise<void>;
  userLogged(): boolean;
  userRegister({ email, password, name }: IRegisterUser): Promise<void>;
}
interface IUserData {
  email: string;
  password: string;
}

interface IRegisterUser extends IUserData {
  name: string;
}

interface ITokenState {
  token: string;
}

interface IInputProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

export const AuthProvider: React.FC<IInputProps> = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState<ITokenState | null> (() => {
    const token = localStorage.getItem("@KenzieMovie:token");

    if (token) {
      return { token };
    }

    return null;
  });

  const userRegister = useCallback(
    async ({ email, password, name }: IRegisterUser) => {
      try {
        await api.post("/users", {
          email,
          password,
          name,
        });
        navigate("/login")
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const signIn = useCallback(async ({ email, password }: IUserData) => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("@KenzieMovie:token", token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }, []);

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("@KenzieMovie:token");
    if (token) {
      return true;
    }
    return false;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        userLogged,
        userRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextState {
  const context = useContext(AuthContext);
  return context;
}

interface IuseUser {
  loading: boolean;
  user: any;
  loadUser: Function;
}

export const useUser = create<IuseUser>((set) => ({
  loading: true,
  user: {},
  loadUser: async (id: string) => {
    try {
      const { data } = await api.get(`/users/${id}`);
      set({user: data})
    } catch (error) {
      console.error(error);
    }finally{
      set({loading: false})
    }
  }
}));

interface IUser{
  name: string;
  email: string;
  age: number;
  id: number
}
interface IUseUserByToken{
  loading: boolean;
  user: IUser[];
  loadUser: Function
}

export const useUserByToken = create<IUseUserByToken>((set) => ({
  loading: true,
  user: [],
  loadUser: async(token: ITokenState) => {
    try {
      const {data} = await api.get("/users" ,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      set({user: data})
    } catch (error) {
      console.error(error)
    }
  }
}))