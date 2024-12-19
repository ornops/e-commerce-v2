import { Product } from "../types/Product";

export const fetchProduct = async (): Promise<Product[]> => {

	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json()
		return data;
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
}

