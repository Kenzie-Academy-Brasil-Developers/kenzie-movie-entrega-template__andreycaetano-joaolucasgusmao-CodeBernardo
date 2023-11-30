import { useEffect } from "react";
import { useProductByUserIdStore } from "../../../contexts/products";
import { useUser } from "../../../contexts/user/user";

export const AvaliationsList = ({ review}: any) => {
  const { productByUserIdData, loadProductByUserId } = useProductByUserIdStore(
    (store) => store
    );
  const {loadUser, user, loading} = useUser(store => store)
    
    useEffect(() => {
      loadProductByUserId(review.userId, review.movieId);
      loadUser(review.userId)
  }, [])

  return (
    <>
      {
        loading ? 
        null : 
        <li>
        <div>
          <span>{user.name[0].toUpperCase()}</span>
          <div>
            <i>Star Icon</i>
            <span>{productByUserIdData[0].score}</span>
          </div>
        </div>
        <p>{productByUserIdData[0].description}</p>
        <h3>{user.name}</h3>
      </li>
      }
    </>
  );
};
