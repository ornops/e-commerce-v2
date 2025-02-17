import { Product } from "../types/Product";
import { ProductDetail } from "../types/Product";

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
export const fetchProductDetails = async (productId: number): Promise<ProductDetail[]> => {

	try {
		const response = await fetch("https://fakestoreapi.com/products/" + productId)
		const data = await response.json()
		return data;
	} catch (error) {
		console.error('Error fetching product details:', error);
		return [];
	}
}

