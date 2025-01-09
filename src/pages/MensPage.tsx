import React from 'react'
import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navigation Bar/navbar';
const MensPage: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Typography variant='h1'>
				Men's Wear
			</Typography>
		</Box>
	)
}

export default MensPage
