import React, { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { fetchProduct } from "../../services/productService";
import ProductCard from "../Product Card/product-card";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";




const ProductList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const getProducts = async () => {
			const data = await fetchProduct();
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
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
				paddingTop: '70px'
			}}
		>
			{products.length === 0 ? (
				<p>Loading Products...</p>
			) : (
				products.map((product) => <Link to={"/" + product.id}><ProductCard key={product.id} product={product}></ProductCard></Link>)
			)}
		</Box>
	);
};

export default ProductList;

