import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "../api/products.api";
export function useGetProduct(productId: number) {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: () => ProductApi.product(productId)
    })
}