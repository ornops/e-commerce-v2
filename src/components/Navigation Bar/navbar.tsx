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
} from "@mui/material";
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
			<Toolbar>
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
				<Typography
					variant="h6"
					sx={{
						flexGrow: 1,
						textAlign: { xs: "center", md: "left" },
						cursor: "pointer",
					}}
				>
					MyShop
				</Typography>

				{/* Desktop menu items */}
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
					<Button color="inherit">Home</Button>
					<Button color="inherit">Male</Button>
					<Button color="inherit">Female</Button>
					<Button color="inherit">Contact</Button>
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
				<MenuItem onClick={handleMenuClose}>Home</MenuItem>
				<MenuItem onClick={handleMenuClose}>Male</MenuItem>
				<MenuItem onClick={handleMenuClose}>Female</MenuItem>
				<MenuItem onClick={handleMenuClose}>Contact</MenuItem>
			</Menu> */}
		</AppBar>
	);
};

export default Navbar;
