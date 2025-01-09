import React from 'react'
import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';
const WomensPage: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Typography variant='h1'>
				Women's Wear
			</Typography>
		</Box>
	)
}

export default WomensPage
