import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import SwipeableTemporaryDrawer from "../swipe-menu";

const TopBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar enableColorOnDark position="static">
				<Toolbar>
					<SwipeableTemporaryDrawer />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						KOTOBA NINJA
					</Typography>
					<Image
						layout="fixed"
						src="/images/Logo_light-blue.png"
						alt="Kotoba Ninja Logo"
						width={83}
						height={50}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopBar;
