import React, { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { fetchProduct } from "../../services/productService";
import ProductCard from "../Product Card/product-card";
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
				gap: 5,
				width: '100vw'
			}}
		>
			{products.length === 0 ? (
				<p>No products available.</p>
			) : (
				products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
			)}
		</Box>
	);
};

export default ProductList;

