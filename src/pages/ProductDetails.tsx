import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia, Stack, Button } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';
import { ProductDetail } from '../types/Product';
import { fetchProductDetails } from '../services/productService';

const ProductDetails: React.FC = () => {

	const { id } = useParams();
	const [productDetails, setProductDetails] = useState<ProductDetail | null>(null);

	useEffect(() => {
		fetchProductDetails(Number(id)).then(setProductDetails);
	}, [id]);


	// Function to add product to cart
	const addToCart = () => {
		if (!productDetails) return;

		const cart: ProductDetail[] = JSON.parse(localStorage.getItem("cart") || "[]");

		// Check if product already exists in cart
		const existingProduct = cart.find((item) => item.id === productDetails.id);
		if (!existingProduct) {
			cart.push(productDetails);
		}

		localStorage.setItem("cart", JSON.stringify(cart));
		alert("Product added to cart!");
	};

	return (
		<Box>
			<Navbar />
			{productDetails && (
				<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, padding: 4, alignItems: 'center' }}>
					{/* Product Image */}
					<CardMedia
						component="img"
						src={productDetails.image}
						alt={productDetails.title}
						sx={{ width: { xs: '100%', md: '40%' }, height: 'auto', objectFit: 'contain', borderRadius: 2, boxShadow: 3 }}
					/>

					{/* Product Details */}
					<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
						<Typography variant="h4" fontWeight="bold">{productDetails.title}</Typography>
						<Typography variant="body1" color="text.secondary">{productDetails.description}</Typography>
						<Typography variant="h5" color="primary" fontWeight="bold">${productDetails.price}</Typography>

						{/* Action Buttons */}
						<Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
							<Button variant="contained" color="primary" onClick={addToCart}>
								Add to Cart
							</Button>
							<Button variant="outlined" color="secondary">
								Buy Now
							</Button>
						</Stack>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default ProductDetails;
