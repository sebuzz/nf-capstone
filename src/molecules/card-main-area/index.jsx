import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const CardMainArea = ({ ...props }) => {
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
};

export default CardMainArea;
