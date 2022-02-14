import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";
import { StyledCardMainArea } from "./styled";

const FrontSide = () => {
	const currentCard = useStore(state => state.currentCard);
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const learnMode = useStore(state => state.learnMode);

	return (
		<StyledCardMainArea>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography gutterBottom align="center" variant="h2" component="div">
						{currentCard.kanji}
					</Typography>
					{showKana && (
						<Typography align="center" variant="h4" component="div">
							{currentCard.word}
						</Typography>
					)}
					{learnMode && showTranslation && (
						<Typography align="center" variant="body2" color="text.secondary">
							{currentCard.meaning}
						</Typography>
					)}
				</CardContent>
			</Stack>
		</StyledCardMainArea>
	);
};

export default FrontSide;
