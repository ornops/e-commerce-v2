import React, { useEffect, useState } from 'react'
import { Box, Typography, Card, CardContent } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';
const MensPage: React.FC = () => {

	const [products, setProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetch("https://fakestoreapi.com/products/category/men's%20clothing")
			.then(response => response.json())
			.then(data => {
				setProducts(data);  // Set the array of products
				setLoading(false);
			})
	}, [])


	return (
		<Box>
			<Navbar />
			<Typography variant='h1'>Men's Wear</Typography>

			{loading ? (
				<Typography>Loading products...</Typography>
			) : (
				<Box display="flex" flexWrap="wrap" gap={2}>
					{products.map(product => (
						<Card key={product.id} sx={{ width: 250 }}>
							<CardContent>
								<Typography variant="h6">{product.title}</Typography>
								<Typography variant="body2">${product.price}</Typography>
							</CardContent>
						</Card>
					))}
				</Box>
			)}
		</Box>
	)
}

export default MensPage
