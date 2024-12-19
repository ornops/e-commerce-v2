import React from 'react'
import { Product } from '../../types/Product'
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';



interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<Card raised
			variant="elevation"
			sx={{
				maxWidth: 450
			}}
		>
			<CardMedia
				component="img"
				image={product.image}
				height="300"
			/>
			<CardContent>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					{product.title}
				</Typography>
			</CardContent>


		</Card>
	)
}

export default ProductCard
