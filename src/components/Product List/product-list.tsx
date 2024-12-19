import React, { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { fetchProduct } from "../../services/productService";
import ProductCard from "../Product Card/product-card";




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
		<div >
			{products.length === 0 ? (
				<p>No products available.</p>
			) : (
				products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
			)}
		</div>
	);
};

export default ProductList;

