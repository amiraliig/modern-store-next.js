import ProductDetails from "@/features/products/components/product-details";
import getProduct from "@/features/products/hooks/use-getServerSideProduct";

export default async function ProductPage({
    params,
}: PageProps<"/products/[id]">) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <main className="container mx-auto px-4 py-8">
            <ProductDetails product={product} />
        </main>
    );
}
