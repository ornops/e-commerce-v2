// import { AppBar, Typography } from '@mui/material'
// import React from 'react'

// const NavBar: React.FC = () => {
// 	return (
// 		<AppBar position="static" sx={{ backgroundColor: "#1976d2", width: "100vw" }}>
// 			<Typography>NavBar</Typography>
// 		</AppBar>
// 	)
// }

// export default NavBar

import React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Badge,
	MenuItem,
	Menu,
	Button,
	Avatar
} from "@mui/material";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static" sx={{ backgroundColor: "#1976d2", width: '100vw' }}>
			<Toolbar sx={{
				display: "flex",
				justifyContent: "space-between"
			}}>
				{/* Mobile menu icon */}
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
					onClick={handleMenuOpen}
				>
					<MenuIcon />
				</IconButton>

				{/* Logo */}
				<Avatar
					src="/src/assets/images/logo.png"
					alt="Logo"
					sx={{
						height: 40,
						width: 40,
						marginRight: 2,
						cursor: "pointer",
					}}
				/>

				{/* Desktop menu items */}
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
					<Link to="/"><Button color="inherit">All</Button></Link>
					<Link to="/men"><Button color="inherit">Men</Button></Link>
					<Link to="/women"><Button color="inherit">Women</Button></Link>
				</Box>

				{/* Shopping cart icon */}
				<IconButton size="large" color="inherit">
					<Badge badgeContent={4} color="error">
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
			</Toolbar>

			{/* Mobile dropdown menu */}
			{/* <Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
				sx={{ display: { xs: "block", md: "none" } }}
			>
				<MenuItem onClick={handleMenuClose}>All</MenuItem>
				<MenuItem onClick={handleMenuClose}>Male</MenuItem>
				<MenuItem onClick={handleMenuClose}>Female</MenuItem>
				
			</Menu> */}
		</AppBar>
	);
};

export default Navbar;
