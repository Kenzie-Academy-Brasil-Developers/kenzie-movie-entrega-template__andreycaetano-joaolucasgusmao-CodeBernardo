import { useEffect } from "react";
import { CurrentMovie } from "../../components/CurrentMovie";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { useAllProductReviewsStore, useProductByIdStore } from "../../contexts/products";
import { MoviesList } from "../../components/MoviesList";

export const HomePage = () => {
  const ProductsStore = useAllProductReviewsStore(store => store)
  const ProductByIdStore = useProductByIdStore(store => store)

  useEffect(() => {
    ProductsStore.loadAllProductsReviews()
    ProductByIdStore.loadProductById("1")
  }, [])
  
  return (
    <>
      <DefaultTemplate>
        <CurrentMovie movie={ProductByIdStore.productData} note={ProductByIdStore.note}/>
        <section>
          <ul>
            {ProductsStore.allProductReviewData.map((movie) => {
              if (movie.id === 1) {
                return null
              }
              return <MoviesList movie={movie}/>
            })}
          </ul>
        </section>
      </DefaultTemplate>
    </>
  );
};
