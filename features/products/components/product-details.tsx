import { Package, ShoppingBag, Star, Tag } from "lucide-react";
import type { ReactNode } from "react";
import type { Product } from "../types";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type ProductDetailsProps = {
    product: Product;
};

const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
};

const formatNumber = (value: number) => {
    return new Intl.NumberFormat("fa-IR").format(value);
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const images = product.images?.filter(Boolean) ?? [];
    const mainImage = images[0] ?? "/placeholder-product.png";
    const isAvailable = product.isActive && product.stock > 0;

    return (
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)]">
            <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-muted">
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="aspect-square w-full object-cover"
                    />
                </div>

                {images.length > 1 && (
                    <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                        {images.slice(0, 5).map((image, index) => (
                            <div
                                key={`${image}-${index}`}
                                className="overflow-hidden rounded-md border bg-muted"
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} - تصویر ${formatNumber(index + 1)}`}
                                    className="aspect-square w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="space-y-6">
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{product.category.name}</Badge>
                        <Badge variant={isAvailable ? "outline" : "destructive"}>
                            {isAvailable ? "موجود" : "ناموجود"}
                        </Badge>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold leading-tight">
                            {product.name}
                        </h1>

                        <p className="text-muted-foreground">
                            {product.description}
                        </p>
                    </div>
                </div>

                <Separator />

                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">قیمت محصول</p>
                    <p className="text-3xl font-bold">
                        {formatPrice(product.price)}
                        <span className="mr-2 text-base font-medium text-muted-foreground">
                            تومان
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <DetailItem
                        icon={<Package />}
                        label="موجودی"
                        value={`${formatNumber(product.stock)} عدد`}
                    />
                    <DetailItem
                        icon={<ShoppingBag />}
                        label="فروخته شده"
                        value={`${formatNumber(product.soldCount)} عدد`}
                    />
                    <DetailItem
                        icon={<Star />}
                        label="امتیاز"
                        value={`${formatNumber(product.ratingsAverage)} از ۵`}
                    />
                    <DetailItem
                        icon={<Tag />}
                        label="برند"
                        value={product.brand}
                    />
                </div>

                <Separator />

                <dl className="grid gap-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                        <dt className="text-muted-foreground">شناسه محصول</dt>
                        <dd className="font-mono text-xs">{product._id}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <dt className="text-muted-foreground">اسلاگ</dt>
                        <dd>{product.slug}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <dt className="text-muted-foreground">تعداد نظرها</dt>
                        <dd>{formatNumber(product.ratingsCount)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <dt className="text-muted-foreground">دسته‌بندی</dt>
                        <dd>{product.category.slug}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};

function DetailItem({
    icon,
    label,
    value,
}: {
    icon: ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-lg border p-4">
            <div className="mb-3 flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground [&_svg]:size-4">
                {icon}
            </div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 font-semibold">{value}</p>
        </div>
    );
}

export default ProductDetails;
