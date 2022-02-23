import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, sansTheme } from "../ions/theme";
import useStore from "../ions/store/store";

const App = ({ Component, pageProps }) => {
	const cursive = useStore(state => state.cursive);
	return (
		<ThemeProvider theme={cursive ? theme : sansTheme}>
			<CssBaseline />
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
