import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductApi } from "../api/products.api";
import { ProductQuery } from "../types";
export function useGetProducts(params: ProductQuery) {
    return useQuery({
        queryKey: ["products", [params]],
        queryFn: () => ProductApi.products(params),
    })
}