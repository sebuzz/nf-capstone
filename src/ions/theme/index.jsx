import { createTheme } from "@mui/material";
import { MuiAppBar, MuiCard } from "/src/ions/theme/components";

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#93b8c2",
		},
		secondary: {
			main: "#1a2756",
		},
		background: {
			paper: "#ebdbba",
			default: "#93b8c2",
		},
	},
	typography: {
		h4: {
			fontFamily: "Noto Sans JP",
			fontWeight: "bold",
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
	components: {
		MuiAppBar,
		MuiCard,
	},
});

export default theme;
