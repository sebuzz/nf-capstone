import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FlipOutlinedIcon from "@mui/icons-material/FlipOutlined";
import * as React from "react";
import Stack from "@mui/material/Stack";
import randomCardNumber from "../../ions/utils/randomCardNumber";

const CardFooter = () => {
	const currentCard = useStore(state => state.currentCard);
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const filteredData = useStore(state => state.filteredData);
	const setShownCards = useStore(state => state.setShownCards);
	const flipped = useStore(state => state.flipped);
	const setFlipped = useStore(state => state.setFlipped);
	const learnMode = useStore(store => store.learnMode);
	const setCorrect = useStore(store => store.setCorrect);
	const votedCorrect = useStore(store => store.votedCorrect);
	const votedIncorrect = useStore(store => store.votedIncorrect);

	const nextCard = () => {
		// pick a random card from the filteredData array
		const randomCard = filteredData[randomCardNumber(filteredData.length - 1)];
		// and add increase occurrence count OR add it as a new card to the shownCards array -- only if Learn Mode is OFF
		if (!learnMode) {
			setShownCards(randomCard.vocabularyNo, 0);
		}
		// then set this card as the current card to be shown
		setCurrentCard(randomCard);
		// initialize Gauge meter
		setCorrect(randomCard.vocabularyNo);
	};
	return (
		<CardActions>
			<Stack
				width={445}
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
				spacing={2}
			>
				<IconButton
					aria-label="next"
					disabled={!learnMode && !(votedCorrect || votedIncorrect)}
					variant="outlined"
					size="large"
					color="primary"
					onClick={() => {
						nextCard();
					}}
				>
					<SkipNextSharpIcon />
				</IconButton>

				<IconButton
					aria-label="correct"
					disabled={learnMode || votedCorrect}
					size="large"
					color="primary"
					onClick={() => {
						setCorrect(currentCard.vocabularyNo, true);
						console.log("CORRECT");
					}}
				>
					<CircleOutlinedIcon />
				</IconButton>
				<Button
					aria-label="incorrect"
					disabled={learnMode || votedIncorrect}
					size="large"
					color="primary"
					onClick={() => {
						setCorrect(currentCard.vocabularyNo, false);
						console.log("INCORRECT");
					}}
				>
					<ClearOutlinedIcon />
				</Button>

				<Button
					aria-label="next"
					disabled={learnMode}
					size="large"
					color="primary"
					onClick={() => {
						setFlipped(!flipped);
						console.log("FLIP CARD");
					}}
				>
					<FlipOutlinedIcon />
				</Button>
			</Stack>
		</CardActions>
	);
};

export default CardFooter;
