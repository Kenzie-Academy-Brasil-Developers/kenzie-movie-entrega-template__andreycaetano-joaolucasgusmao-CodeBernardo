import { create } from "zustand";
import { api } from "../../services/api";
import {
  IAllProducts,
  IAllProductsReviews,
  IProductByIdStore,
  IProductByUserIdStore,
  IProductReview,
  IProducts,
  IUserReview,
} from "../../@types/products";
import { useCallback } from "react";
import { useAuth } from "../user/user";
import { useCalcMedia } from "../../hooks";

export interface IRequisitioAvaliation {
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export const useAllProductsStore = create<IAllProducts>((set) => ({
  loading: false,
  error: "",
  allProductsData: [],
  loadAllProducts: async () => {
    try {
      set({ loading: true, error: "" });
      const { data } = await api.get<IProducts[]>("/movies");
      set({ allProductsData: data });
    } catch (error) {
      console.error(error);
      set({ error: "Algo deu errado!" });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useAllProductReviewsStore = create<IAllProductsReviews>((set) => ({
  loading: false,
  error: "",
  allProductReviewData: [],
  loadAllProductsReviews: async () => {
    try {
      set({ loading: true, error: "" });
      const { data } = await api.get<IProductReview[]>(
        "/movies?_embed=reviews"
      );
      set({ allProductReviewData: data });
    } catch (error) {
      console.error(error);
      set({ error: "Algo deu errado!" });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useProductByIdStore = create<IProductByIdStore>((set) => ({
  loading: false,
  error: "",
  productData: {} as IProductReview,
  note: null,
  loadProductById: async (id: string | undefined) => {
    try {
      set({ loading: true, error: "" });
      const { data } = await api.get<IProductReview>(`/movies/${id}?_embed=reviews`);
      set({ productData: data, note: useCalcMedia(data) });
    } catch (error) {
      console.error(error);
      set({ error: "Algo deu errado!" });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useProductByUserIdStore = create<IProductByUserIdStore>((set) => ({
  loading: false,
  error: "",
  productByUserIdData: [],
  loadProductByUserId: async (userId: number, productId: number) => {
    try {
      set({ loading: true, error: "" });
      const { data } = await api.get<IUserReview[]>(
        `/movies/${productId}/reviews?userId=${userId}`
      );
      set({ productByUserIdData: data });
    } catch (error) {
      console.error(error);
      set({ error: "Algo deu errado!!" });
    } finally {
      set({ loading: false });
    }
  },
}));


// export const createAvaliation = useCallback(
//   async({movieId, userId, score, description}:IRequisitioAvaliation) => {
//     try {
//       const token = useAuth();
//       await api.post("/reviews" , {
//         movieId,
//         userId,
//         score,
//         description
//       },{
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }, [])

//   export const editAvaliation = useCallback(
//     async({movieId, userId, score, description}:IRequisitioAvaliation) => {
//       try {
//         const token = useAuth();
//         await api.put(`/reviews/${movieId}}` , {
//           movieId,
//           userId,
//           score,
//           description
//         },{
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         })
//       } catch (error) {
//         console.error(error)
//       }
//     } ,[])