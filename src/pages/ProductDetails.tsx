import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
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
								height: '75vh',
								objectFit: 'contain',
								borderRadius: 2,
								boxShadow: 3,
								marginTop: '5rem'
								// height: 200, // Fixed height for the image
								// objectFit: 'contain', // Ensures the image fits without distortion
							}}
						/>
						<Box sx={{
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							margin: '5rem'
						}}>
							<Typography variant='h4' fontWeight='bold'>{productDetails.title}</Typography>
							<Typography variant='body1' color='text.secondary'>{productDetails.description}</Typography>
							<Typography variant='h5' color='text.secondary' fontWeight="bold">{productDetails.price}</Typography>


							<Stack direction="row" spacing={2} sx={{
								marginTop: 2,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',

							}}>
								<Link to="/cart">
									<Button variant="contained" color="primary">
										Add to Cart
									</Button>
								</Link>

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
