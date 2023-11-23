import Logo from "../../assets/logo.svg";
import { useAuth } from "../../contexts/user/user";
import { LoginButtons } from "./LoginButtons";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  const {userLogged} = useAuth()
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
        {userLogged() ? <UserButtons/> : <LoginButtons/>}
      </div>
    </header>
  );
};
