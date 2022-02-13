import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";
import { StyledCardMainArea } from "./styled";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FlipIcon from "@mui/icons-material/Flip";

const BackSide = () => {
	const currentCard = useStore(state => state.currentCard);
	//const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const setFlipped = useStore(state => state.setFlipped);

	return (
		<StyledCardMainArea>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					{/*<Typography gutterBottom align="center" variant="h2" component="div">*/}
					{/*	{currentCard.kanji}*/}
					{/*</Typography>*/}
					{/*{showKana && (*/}
					{/*	<Typography align="center" variant="h4" component="div">*/}
					{/*		{currentCard.word}*/}
					{/*	</Typography>*/}
					{/*)}*/}
					{showTranslation && (
						<Typography align="center" variant="body2" color="text.secondary">
							{currentCard.meaning}
						</Typography>
					)}
				</CardContent>
				<CardActions>
					<IconButton
						onClick={() => {
							setFlipped(false);
						}}
					>
						<FlipIcon />
					</IconButton>
				</CardActions>
			</Stack>
		</StyledCardMainArea>
	);
};

export default BackSide;
