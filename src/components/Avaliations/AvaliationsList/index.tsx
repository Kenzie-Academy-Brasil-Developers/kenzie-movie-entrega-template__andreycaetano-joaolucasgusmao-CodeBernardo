import { useProductByUserIdStore } from "../../../contexts/products";
import { useAuth } from "../../../contexts/user/user";

interface IProps {
  userId: number;
  movieId: number;
}

export const AvaliationsList = ({ userId, movieId }: IProps) => {
  const user = async () => {
    const { useUser } = useAuth();
    const user = await useUser(userId);
    return user;
  };
  user();

  const { productByUserIdData, loadProductByUserId } = useProductByUserIdStore(
    (store) => store
  );
  loadProductByUserId(userId, movieId);
  return (
    <>
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
    </>
  );
};
