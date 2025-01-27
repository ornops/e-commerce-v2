import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';

const ProductDetails: React.FC = () => {
	const { id } = useParams();
	const [productDetails, setProductDetails] = useState<any[]>([]);
	// const [loading, setLoading] = useState(true);
	useEffect(() => {

		fetch("https://fakestoreapi.com/products/" + id)
			.then(response => response.json())
			.then(data => {
				setProductDetails(data);
				// setLoading(false);
			})
	}, [])

	return (
		<Box>
			<Navbar />

			{productDetails ?
				(
					<Box>
						<Typography variant='h1'>{productDetails.title}</Typography>
						<Typography>{productDetails.category}</Typography>
						<Typography>{productDetails.description}</Typography>
						<Typography>{productDetails.price}</Typography>
						<CardMedia
							component='img'
							image={productDetails.image}
							sx={{
								height: 200, // Fixed height for the image
								objectFit: 'contain', // Ensures the image fits without distortion
							}}
						/>

					</Box>
				) : null
			}
			{/* {loading ? (
				<Typography sx={{
					margin: 0,
					padding: 0
				}}>Loading Product details...</Typography>
			) : (
				<Box>
					<h1>{productDetails.title}</h1>
				</Box>
			)

			} */}
		</Box>
	)
}

export default ProductDetails
