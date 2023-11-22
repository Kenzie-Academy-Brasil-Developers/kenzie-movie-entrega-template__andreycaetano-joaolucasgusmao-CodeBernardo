import { useParams } from "react-router-dom";
import { Avaliations } from "../../components/Avaliations";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { MovieViewed } from "../../components/MovieViewed";
import { useProductByIdStore } from "../../contexts/products";
import { useEffect } from "react";

export const MoviePage = () => {
  const { id } = useParams()
  const {productData, loadProductById} = useProductByIdStore((store) => store)
  useEffect(() => {
    loadProductById(id)
  }, [])
  return (
    <>
      <DefaultTemplate>
        <section>
          <MovieViewed movie={productData} />
        </section>
        <section>
          {/* <Avaliations /> */}
        </section>
      </DefaultTemplate>
    </>
  );
};