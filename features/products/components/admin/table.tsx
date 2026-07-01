import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table"
import ProductTableRow from './product-table-row'
import { Product } from '../../types'
const TableAdmin = ({ products }: { products: Product[] }) => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] md:w-[120px] text-center">Name</TableHead>
                        <TableHead className="w-[100px] md:w-[120px] text-center">Price</TableHead>
                        <TableHead className="w-[100px] md:w-[120px] text-center">Category</TableHead>
                        <TableHead className="w-[100px] md:w-[120px] text-center">Brand</TableHead>
                        <TableHead className="w-[100px] md:w-[120px] text-center">Stock</TableHead>
                        <TableHead className="w-[100px] md:w-[120px] text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <ProductTableRow products={products} />
                </TableBody>
            </Table>
        </div>
    )
}

export default TableAdmin