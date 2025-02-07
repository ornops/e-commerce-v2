import React, { useEffect, useState } from 'react'
import { Box, Typography, CardMedia } from "@mui/material";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navigation Bar/navbar';

const CartPage: React.FC = () => {

	type ProductDetails = {
		id: number,
		image: string,
		title: string,
		description: string,
		price: number
	}


	const { id } = useParams();
	const [cartedProductDetails, setCartedProductDetails] = useState<ProductDetails | null>(null);

	useEffect(() => {

		fetch("https://fakestoreapi.com/products/" + id)
			.then(response => response.json())
			.then(data => {
				setCartedProductDetails(data);
			})
			.catch(error => {
				console.error("Error fetching product details:", error);
			});
	}, [id])

	return (
		<Box>
			<Navbar />
			<Typography>Cart Page</Typography>

			{cartedProductDetails ?
				(
					<div>{cartedProductDetails.title}
						<div>{cartedProductDetails.description}</div>
						<div>{cartedProductDetails.price}</div>
					</div>

				) : null
			}
		</Box>
	)
}

export default CartPage
