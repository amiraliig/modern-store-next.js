import { notFound } from "next/navigation";

import type { Product } from "../types";

type ProductResponse = Product | {
    success: boolean;
    data: Product;
};

function resolveProduct(response: ProductResponse) {
    if ("data" in response) {
        return response.data;
    }

    return response;
}

async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) notFound();

    const response = await res.json() as ProductResponse;

    return resolveProduct(response);
}
export default getProduct
