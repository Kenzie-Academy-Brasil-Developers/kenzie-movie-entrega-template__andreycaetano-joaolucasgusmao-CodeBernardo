import { DefaultTemplate } from "./components/DefaultTemplate";
import { LoginBanner } from "./components/LoginBanner";

export const App = () => {
  return (
    <DefaultTemplate>
      <LoginBanner />
    </DefaultTemplate>
  );
};
