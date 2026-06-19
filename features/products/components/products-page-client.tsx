"use client";

import { useState } from "react";
import { useGetProducts } from "../hooks/use-getProducts";
import { ProductGrid } from "./product-grid";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProductsPageClient() {
    const [search, setSearch] = useState("");

    const { data: products, isLoading, error, refetch } = useGetProducts({
        search: search || undefined,
        page: 1,
        limit: 12,
        sort: "newest",
    });
    console.log(products)
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

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <Input
                    placeholder="جستجوی محصول..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <ProductGrid products={products?.data ?? []} />
        </div>
    );
}