import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia, Stack, Button } from "@mui/material";
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
					<Box sx={{
						display: 'flex'
					}}>
						<CardMedia
							component='img'
							image={productDetails.image}
							sx={{
								width: { xs: '100%', md: '40%' },
								height: 'auto',
								objectFit: 'contain',
								borderRadius: 2,
								boxShadow: 3,
								// height: 200, // Fixed height for the image
								// objectFit: 'contain', // Ensures the image fits without distortion
							}}
						/>
						<Box>
							<Typography variant='h4' fontWeight='bold'>{productDetails.title}</Typography>
							<Typography variant='subtitle1' color='text.secondary'>{productDetails.category}</Typography>
							<Typography variant='body1' color='text.secondary'>{productDetails.description}</Typography>
							<Typography variant='h5' color='text.secondary' fontWeight="bold">{productDetails.price}</Typography>


							<Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
								<Button variant="contained" color="primary">
									Add to Cart
								</Button>
								<Button variant="outlined" color="secondary">
									Buy Now
								</Button>
							</Stack>
						</Box>





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
