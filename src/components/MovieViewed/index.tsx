import { useParams } from "react-router-dom";
import { useProductByIdStore } from "../../contexts/products";
import { useEffect } from "react";

export const MovieViewed = () => {
  const { id } = useParams();
  const { loadProductById, productData, note } = useProductByIdStore(
    (store) => store
  );
  useEffect(() => {
    loadProductById(id);
  }, []);
  return (
    <>
      <img src={productData.image} alt={productData.name} />
      <div>
        <button>{productData.type}</button>
        <h2>{productData.name}</h2>
        <div>
          <span>{productData.duration}</span>
          <div>
            <i>Star Icon</i>
            <br />
            <span>{note}</span>
          </div>
        </div>
      </div>
      <p>{productData.synopsis}</p>
    </>
  );
};
