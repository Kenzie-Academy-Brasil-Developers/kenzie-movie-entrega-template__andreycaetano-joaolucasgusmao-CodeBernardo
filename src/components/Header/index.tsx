import Logo from "../../assets/logo.svg";
// import { LoginButtons } from "./LoginButtons";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
        <LoginButtons />
        {/* usar condicional para definir quando o LoginButtons vai ser exibido, no caso quando nao existir um usuario logado. */}
      </div>
    </header>
  );
};
