import React from 'react'
import { Product } from '../../types/Product'


interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div >
			<div >
				<img src={product.image} alt={product.title} />
			</div>
			<div >
				<h3>{product.title}</h3>
			</div>


		</div>
	)
}

export default ProductCard
