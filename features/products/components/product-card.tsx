import Image from "next/image";
import Link from "next/link";
import type { Product } from "../types";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    const imageUrl = product.images[0] || "/placeholder-product.png";

    return (
        <Card className="overflow-hidden transition hover:shadow-md">
            <div className="relative aspect-square bg-muted">
                {/* <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                /> */}
            </div>

            <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary">{product.category.slug}</Badge>

                    {!product.isActive && (
                        <Badge variant="destructive">غیرفعال</Badge>
                    )}
                </div>

                <CardTitle className="line-clamp-1 text-base">
                    {product.name}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <p className="line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="font-bold">
                        {product.price.toLocaleString("fa-IR")} تومان
                    </span>

                    <span className="text-sm text-muted-foreground">
                        موجودی: {product.stock}
                    </span>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={`/products/${product._id}`}>
                        مشاهده محصول
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}