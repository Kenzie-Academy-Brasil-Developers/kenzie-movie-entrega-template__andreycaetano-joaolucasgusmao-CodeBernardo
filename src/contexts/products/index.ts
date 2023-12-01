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
import { useCalcMedia } from "../../hooks";

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
  loading: true,
  error: "",
  productData: {} as IProductReview,
  note: null,
  loadProductById: async (id: string | undefined) => {
    try {
      set({ loading: true, error: "" });
      const { data } = await api.get<IProductReview>(
        `/movies/${id}?_embed=reviews`
      );
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
  loading: true,
  error: "",
  productByUserIdData: [],
  loadProductByUserId: async (userId: number, productId: string | undefined) => {
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



