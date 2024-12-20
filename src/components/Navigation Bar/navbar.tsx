import { AppBar, Typography } from '@mui/material'
import React from 'react'

const NavBar: React.FC = () => {
	return (
		<AppBar position="static" sx={{ backgroundColor: "#1976d2", width: "100vw" }}>
			<Typography>NavBar</Typography>
		</AppBar>
	)
}

export default NavBar
