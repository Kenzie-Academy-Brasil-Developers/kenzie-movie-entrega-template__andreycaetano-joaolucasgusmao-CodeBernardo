import { Header } from "../Header";
import { DefaultTemplateProps } from "../../@types/children";
import { Footer } from "../Footer";

export const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </>
  );
};