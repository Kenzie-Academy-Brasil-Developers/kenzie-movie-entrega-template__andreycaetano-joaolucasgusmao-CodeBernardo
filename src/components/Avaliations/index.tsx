import { Link, useParams } from "react-router-dom";
import { AvaliationsList } from "./AvaliationsList";
import {
  useProductByIdStore,
  useProductByUserIdStore,
} from "../../contexts/products";
import { useEffect, useState } from "react";
import { useAuth, useUserByToken } from "../../contexts/user/user";
import { CurrentAvaliation } from "./CurrentAvaliation";
import { CreateFeedbackModal } from "../Modals/CreateFeedbackModal";

export const Avaliations = () => {
  const { id } = useParams();
  const { userLogged, token } = useAuth();
  const { loadProductById, productData, loading } = useProductByIdStore(
    (store) => store
  );
  const { loadUser, user } = useUserByToken((store) => store);
  const { loadProductByUserId, productByUserIdData } = useProductByUserIdStore(
    (store) => store
  );
  useEffect(() => {
    loadProductById(id);
    loadUser(token);
  }, []);
  useEffect(() => {
    if (user.length != 0) {
      loadProductByUserId(user[0].id, id);
    }
  }, [user]);
  const [createIsOpen, setCreateIsOpen] = useState(false)
  return (
    <>
      <div>
        <h2>Avaliações</h2>
        {userLogged() ? (
          productByUserIdData.length === 0 ? (
            <button onClick={() => setCreateIsOpen(true)}>
              <i>Star Icon</i>
              Avaliar
            </button>
          ) : (
            <CurrentAvaliation avaliation={productByUserIdData[0]} />
          )
        ) : (
          <Link to={"/login"}>
            <button>
              <i>Star Icon</i>Avaliar
            </button>
          </Link>
        )}
      </div>
      <ul>
        {loading
          ? null
          : productData.reviews.map((review) => {
              return <AvaliationsList review={review} key={review.id} />;
            })}
      </ul>
      {createIsOpen ? <CreateFeedbackModal movieId={id} userId={user[0].id}/> : null}
    </>
  );
};
