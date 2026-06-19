import { apiClient } from "@/lib/api-client";
import type { Product, Products, ProductQuery } from "../types";

export const ProductApi = {
    products: async (query?: ProductQuery) => {
        const res = await apiClient.get<Products>("/products", {
            params: query
        })
        return res.data
    },

    product: async (params: number) => {
        const res = await apiClient.get<Product>(`products/${params}`)
        return res.data
    }
}
