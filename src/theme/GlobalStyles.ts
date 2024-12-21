import { GlobalStyles } from "@mui/material";

const AppGlobalStyles = () => (
	<GlobalStyles
    styles= {{
		body: {
			margin: 0,
			padding: 0,
			overflowX: "hidden", // Ensure no horizontal scroll globally
			width: "100%",
		},
	}}
  />
);

export default AppGlobalStyles;
