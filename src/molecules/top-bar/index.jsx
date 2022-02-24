import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SwipeableTemporaryDrawer from "../swipe-menu";
import AboutModal from "../about-modal";

const TopBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar enableColorOnDark position="static">
				<Toolbar>
					<SwipeableTemporaryDrawer />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						&nbsp;
					</Typography>
					<AboutModal />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopBar;
