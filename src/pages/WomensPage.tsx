import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';
import { Link } from 'react-router-dom'
import ProductCard from '../components/Product Card/product-card';
const WomensPage: React.FC = () => {
	const [products, setProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetch("https://fakestoreapi.com/products/category/women's%20clothing")
			.then(response => response.json())
			.then(data => {
				setProducts(data);  // Set the array of products
				setLoading(false);
			})
	}, [])



	return (

		<Box>
			<Navbar />
			<Typography variant='h1' sx={{
				fontSize: '40px',
			}}>Women's Wear</Typography>

			{loading ? (
				<Typography>Loading Products...</Typography>
			) : (
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 2,
						justifyContent: 'center', // Center-aligns cards
						padding: 2,
						maxWidth: '100%',
						margin: "0 auto", // Centers the container on the page
						boxSizing: "border-box", // Includes padding in width calculations
						overflowX: "hidden", // Prevent horizontal scroll
					}}
				>
					{products.length === 0 ? (
						<p>No products available.</p>
					) : (
						products.map((product) => <Link to={"/" + product.id}><ProductCard key={product.id} product={product}></ProductCard></Link>)
					)}
				</Box>
			)}
		</Box>
	)
}

export default WomensPage
