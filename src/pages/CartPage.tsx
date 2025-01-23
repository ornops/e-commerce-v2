import React from 'react'
import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';

const CartPage: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Typography>My Cart</Typography>
		</Box>
	)
}

export default CartPage
