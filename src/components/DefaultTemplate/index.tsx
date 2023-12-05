import { Header } from "../Header";
import { DefaultTemplateProps } from "../../@types/children";
import { Footer } from "../Footer";

export const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <>
      <Header />
      <main className="w-3/4 mx-auto my-0 pb-28">{children}</main>
      <Footer />
    </>
  );
};
