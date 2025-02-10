import React, { useState, useEffect } from 'react';
import { Box, Typography, CardMedia, Button } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';

const CartPage: React.FC = () => {
	type ProductDetails = {
		id: number;
		image: string;
		title: string;
		description: string;
		price: number;
	};

	const [cartItems, setCartItems] = useState<ProductDetails[]>([]);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		setCartItems(cart);
	}, []);

	// Function to remove item from cart
	const removeFromCart = (id: number) => {
		const updatedCart = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
	};

	return (
		<Box>
			<Navbar />
			<Typography variant="h4" sx={{ textAlign: 'center', margin: 3 }}>
				Shopping Cart
			</Typography>

			{cartItems.length === 0 ? (
				<Typography variant="h6" textAlign="center">Your cart is empty.</Typography>
			) : (
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
					{cartItems.map((item) => (
						<Box
							key={item.id}
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								gap: 2,
								width: '80%',
								padding: 2,
								boxShadow: 3,
								borderRadius: 2,
								backgroundColor: 'white',
							}}
						>
							<CardMedia
								component="img"
								src={item.image}
								alt={item.title}
								sx={{ width: 100, height: 100, objectFit: 'contain' }}
							/>
							<Box sx={{ flex: 1 }}>
								<Typography variant="h6">{item.title}</Typography>
								<Typography variant="body2" color="text.secondary">
									{item.description}
								</Typography>
								<Typography variant="h6" color="primary" fontWeight="bold">
									${item.price}
								</Typography>
							</Box>
							<Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
								Remove
							</Button>
						</Box>
					))}
				</Box>
			)}
		</Box>
	);
};

export default CartPage;
