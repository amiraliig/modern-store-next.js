import { ProductsPageClient } from "@/features/products/components/products-page-client";

export default function ProductsPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="mb-8 space-y-2">
                <h1 className="text-3xl font-bold">محصولات</h1>
                <p className="text-muted-foreground">
                    لیست محصولات فروشگاه را مشاهده کنید.
                </p>
            </div>

            <ProductsPageClient />
        </main>
    );
}