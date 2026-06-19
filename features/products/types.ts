export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    images: string[];
    category: Category;
    brand: string;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;

};
export type Category = {
    id: string;
    name: string;
    slug: string;
}

export type Products = {
    success: boolean;
    count: number;
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    data: Product[]
};

export type ProductSort = "newest" | "price_asc" | "price_desc";

export type ProductQuery = {
    search?: string;
    category?: string;
    page?: number;
    limit?: number;
    sort?: ProductSort;
};