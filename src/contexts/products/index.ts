import { create } from "zustand";
import { api } from "../../services/api";
import { IAllProducts, IAllProductsReviews, IProducts } from "../../@types/products";

export const useAllProductsStore = create<IAllProducts>((set) => ({
    loading: false,
    error: "",
    allProductsData: [],
    loadAllProducts: async () => {
        try {
            set({loading: true, error: ""})
            const { data } = await api.get<IProducts[]>("/movies")
            set({allProductsData: data})
        } catch (error) {
            console.error(error)
            set({error: "Algo deu errado!"})
        } finally {
            set({loading: false})
        }
    }
}))

export const useAllProductReviewsStore = create<IAllProductsReviews>((set) => ({
    loading: false,
    error: "",
    allProductReviewData: [],
    loadAllProductsReviews: async () => {
        try {
          set({loading: true, error: ""})  
          const { data } = await api.get("/movies?_embed=reviews")
          set({loadAllProductsReviews: data})
        } catch (error) {
            console.error(error)
            set({error: "Algo deu errado!"})
        } finally{
            set({loading: false})
        }
    }
}))