import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../ions/theme";

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
