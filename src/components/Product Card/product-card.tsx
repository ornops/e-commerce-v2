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
				width: 300, // Define consistent card width
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				cursor: 'pointer'
			}}
		>
			<CardMedia
				component='img'
				image={product.image}
				alt={product.title}
				sx={{
					height: 200, // Fixed height for the image
					objectFit: 'contain', // Ensures the image fits without distortion
				}}
			/>
			<CardContent>
				<Typography
					variant="body2"
					sx={{
						color: 'text.secondary',
						textAlign: 'center',
					}}>
					{product.title}
				</Typography>
			</CardContent>


		</Card>
	)
}

export default ProductCard
