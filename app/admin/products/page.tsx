"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { useGetProducts } from '@/features/products/hooks/use-getProducts'
import TableAdmin from '@/features/products/components/admin/table';
import Link from 'next/link';
const page = () => {
    const { data, isLoading, error } = useGetProducts({ page: 1, limit: 10 });
    return (
        <div>
            <Link href="/admin/products/create">
                <Button className="mb-4">Create Product</Button>
            </Link>
            {
                isLoading ? (

                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <TableAdmin products={data?.data || []} />
                )
            }
        </div>
    )
}

export default page