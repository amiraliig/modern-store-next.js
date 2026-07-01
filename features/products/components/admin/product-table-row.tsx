import React from 'react'
import { TableRow, TableCell } from "@/components/ui/table"
import { Product } from '../../types'
const ProductTableRow = ({ products }: { products: Product[] }) => {
    return (
        products?.map((product) => (
            <TableRow key={product._id}>
                <TableCell className="w-[100px] md:w-[120px] text-center">{product.name || 'N/A'}</TableCell>
                <TableCell className="w-[100px] md:w-[120px] text-center">{product.price || 'N/A'}</TableCell>
                <TableCell className="w-[100px] md:w-[120px] text-center">{product.category?.name || 'N/A'}</TableCell>
                <TableCell className="w-[100px] md:w-[120px] text-center">{product.brand || 'N/A'}</TableCell>
                <TableCell className="w-[100px] md:w-[120px] text-center">{product.stock || 'N/A'}</TableCell>
                <TableCell className="w-[100px] md:w-[120px] text-center">Actions</TableCell>
            </TableRow>
        ))
    )
}

export default ProductTableRow