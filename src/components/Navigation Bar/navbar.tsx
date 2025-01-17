import React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Badge,
	Button,
	Avatar
} from "@mui/material";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
	return (
		<AppBar position="fixed" sx={{ backgroundColor: "#1976d2", width: '100%' }}>
			<Toolbar sx={{
				display: "flex",
				justifyContent: "space-between"
			}}>

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
					<Link to="/"><Button sx={{ color: '#fff' }}>All</Button></Link>
					<Link to="/men"><Button sx={{ color: '#fff' }}>Men</Button></Link>
					<Link to="/women"><Button sx={{ color: '#fff' }}>Women</Button></Link>
				</Box>

				{/* Shopping cart icon */}
				<IconButton size="large" color="inherit">
					<Badge badgeContent={4} color="error">
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
