import { useParams } from "react-router-dom";
import { AvaliationsList } from "./AvaliationsList";
import { useProductByIdStore } from "../../contexts/products";
import { useEffect } from "react";

export const Avaliations = () => {
const {id} = useParams()
const {loadProductById,productData,loading} = useProductByIdStore(store => store)
useEffect(() => {
  loadProductById(id)
}, []) 
  return (
    <>
      <div>
        <h2>Avaliações</h2>
        <button>
          <i>Star Icon</i>
          Avaliar
        </button>
      </div>
      <ul>
        {loading ? null : productData.reviews.map((review) => {
          return <AvaliationsList review={review} key={review.id}/>
        })}
      </ul>
    </>
  );
};
