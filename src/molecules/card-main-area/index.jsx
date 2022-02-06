import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";

const CardMainArea = ({ ...props }) => {
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);

	return (
		<Stack justifyContent="center" alignItems="center" spacing={2}>
			<CardContent>
				<Typography gutterBottom align="center" variant="h2" component="div">
					{props.kanji}
				</Typography>
				{showKana && (
					<Typography align="center" variant="h4" component="div">
						{props.word}
					</Typography>
				)}
				{showTranslation && (
					<Typography align="center" variant="body2" color="text.secondary">
						{props.meaning}
					</Typography>
				)}
			</CardContent>
		</Stack>
	);
};

export default CardMainArea;
