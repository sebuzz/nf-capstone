import { createTheme } from "@mui/material";
import { MuiAppBar, MuiCard } from "/src/ions/theme/components";

export const theme = createTheme({
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
		h5: {
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

export const sansTheme = createTheme({
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
			fontFamily: "sans-serif",
			fontWeight: "bold",
		},
		h5: {
			fontFamily: "sans-serif",
			fontWeight: "normal",
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
