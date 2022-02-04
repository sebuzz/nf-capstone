import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";

const CardMainArea = ({ ...props }) => {
	const filtered = useStore(store => store.filtered);
	if (!filtered) {
		return (
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography gutterBottom align="center" variant="h2" component="div">
						{props.kanji}
					</Typography>
					<Typography align="center" variant="h4" component="div">
						{props.word}
					</Typography>
					<Typography align="center" variant="body2" color="text.secondary">
						{props.meaning}
					</Typography>
				</CardContent>
			</Stack>
		);
	} else {
		return (
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography gutterBottom align="center" variant="h2" component="div">
						{props.kanji}
					</Typography>
					<Typography align="center" variant="h4" component="div">
						&nbsp;
					</Typography>
					<Typography align="center" variant="body2" color="text.secondary">
						{props.meaning}
					</Typography>
				</CardContent>
			</Stack>
		);
	}
};

export default CardMainArea;
