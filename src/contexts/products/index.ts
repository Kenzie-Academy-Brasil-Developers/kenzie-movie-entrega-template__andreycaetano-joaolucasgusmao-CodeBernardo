import { create } from "zustand";
import { api } from "../../services/api";
import { IAllProducts, IProducts } from "../../@types/products";

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