import { IProductReview, IUserReview } from "../@types/products";
import { useAuth } from "../contexts/user/user";
import { api } from "../services/api";

export const useCalcMedia = (movie: IProductReview) => {
  let data: number[] = [];
  let sun = 0;
  if (movie.reviews.length === 0) {
    return sun;
  } else {
    movie.reviews.forEach((review) => {
      data.push(review.score);
    });

    data.forEach((number) => {
      sun += number;
    });
    sun = Number((sun / data.length).toFixed(1));
    return sun;
  }
};

export const useEditAvaliation = async(data: Omit<IUserReview, "id">) => {
  try {
    const token = useAuth();
    await api.put(`/reviews/${data.movieId}}` , {
      movieId: data.movieId,
      userId: data.userId,
      score: data.score,
      description: data.description
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export const useCreateAvaliation = async(data:Omit<IUserReview, "id">) => {
      try {
        const token = useAuth();
        await api.post("/reviews" , {
          movieId: data.movieId,
          userId: data.userId,
          score: data.score,
          description: data.description
        },{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
