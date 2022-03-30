import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Check from "@mui/icons-material/Check";
import TranslateIcon from "@mui/icons-material/Translate";
import useStore from "../../ions/store/store";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const SwipeableTemporaryDrawer = () => {
	const [state, setState] = React.useState({
		top: false,
	});

	const toggleDrawer = (anchor, open) => event => {
		if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const handleChange = () => {
		setLearnMode(!learnMode); //event.target.checked
	};
	const learnMode = useStore(store => store.learnMode);
	const setLearnMode = useStore(store => store.setLearnMode);
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const toggleField = useStore(store => store.toggleField);
	const cursive = useStore(store => store.cursive);
	const setCursive = useStore(store => store.setCursive);
	const legacyMode = useStore(store => store.legacyMode);
	const setLegacyMode = useStore(store => store.setLegacyMode);

	const list = () => (
		<Box
			sx={{ width: 450 }}
			role="presentation"
			onClick={toggleDrawer("top", false)}
			onKeyDown={toggleDrawer("top", false)}
		>
			<List>
				<ListItem button onClick={handleChange}>
					<ListItemIcon>
						<LocalLibraryIcon />
					</ListItemIcon>
					<div>
						<ListItemText primary="Learn Mode" />
					</div>
					{learnMode && (
						<div>
							&nbsp; <Check />
						</div>
					)}
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem
					button
					onClick={() => {
						toggleField("showKana");
					}}
				>
					<ListItemIcon>
						<h2>あ</h2>
					</ListItemIcon>
					<div>
						<ListItemText primary="Hide Kana" />
					</div>
					{!showKana && (
						<div>
							&nbsp; <Check />
						</div>
					)}
				</ListItem>

				{learnMode && (
					<ListItem
						button
						onClick={() => {
							toggleField("showTranslation");
						}}
					>
						<ListItemIcon>
							<TranslateIcon />
						</ListItemIcon>
						<div>
							<ListItemText primary="Hide Translation" />
						</div>
						{!showTranslation && (
							<div>
								&nbsp; <Check />
							</div>
						)}
					</ListItem>
				)}
			</List>
			<Divider />
			<List>
				<ListItem
					button
					onClick={() => {
						setCursive(!cursive);
					}}
				>
					<ListItemIcon>
						<h2>
							<i>言葉</i>
						</h2>
					</ListItemIcon>
					<div>
						<ListItemText primary="Cursive Font" />
					</div>
					{cursive && (
						<div>
							&nbsp; <Check />
						</div>
					)}
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem
					button
					onClick={() => {
						setLegacyMode(!legacyMode);
					}}
				>
					<ListItemIcon>
						<h2>
							<i>---</i>
						</h2>
					</ListItemIcon>
					<div>
						<ListItemText primary="Legacy Mode" />
					</div>
					{legacyMode && (
						<div>
							&nbsp; <Check />
						</div>
					)}
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment key="top">
				<IconButton color="primary" onClick={toggleDrawer("top", true)}>
					<MenuIcon />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						&nbsp; KOTOBA NINJA
					</Typography>
				</IconButton>
				<SwipeableDrawer
					anchor="top"
					open={state["top"]}
					onClose={toggleDrawer("top", false)}
					onOpen={toggleDrawer("top", true)}
				>
					{list()}
				</SwipeableDrawer>
			</React.Fragment>
		</div>
	);
};

export default SwipeableTemporaryDrawer;
