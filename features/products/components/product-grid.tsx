import type { Product } from "../types";
import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";
type ProductGridProps = {
    products: Product[];
    isLoading: boolean;
    error: Error | null
    refetch: () => void
};

export function ProductGrid({ products, isLoading, error, refetch }: ProductGridProps) {
    if (isLoading) {
        return <p className="text-muted-foreground">در حال دریافت محصولات...</p>;
    }

    if (error) {
        return (
            <div className="space-y-3">
                <p className="text-destructive">خطا در دریافت محصولات</p>
                <Button onClick={() => refetch()}>تلاش دوباره</Button>
            </div>
        );
    }
    if (products.length === 0) {
        return (
            <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                محصولی پیدا نشد.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}