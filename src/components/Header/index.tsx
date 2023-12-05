import Logo from "../../assets/logo.svg";
import { useAuth } from "../../contexts/user/user";
import { LoginButtons } from "./LoginButtons";
import { UserButtons } from "./UserButtons";

export const Header = () => {
  const {userLogged} = useAuth()
  return (
    <header className="h-11 items-center flex mt-3 mb-4 w-3/4 mx-auto my-0">
      <div className="flex justify-between w-full">
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        {userLogged() ? <UserButtons/> : <LoginButtons/>}
      </div>
    </header>
  );
};
