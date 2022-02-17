import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
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
		// and add increase occurrence count OR add it as a new card to the shownCards array
		setShownCards(randomCard.vocabularyNo);
		// then set this card as the current card to be shown
		setCurrentCard(randomCard);
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
				<Button
					disabled={!learnMode && !(votedCorrect || votedIncorrect)}
					variant="outlined"
					size="small"
					color="primary"
					onClick={() => {
						nextCard();
					}}
				>
					Next card
				</Button>

				<Button
					disabled={learnMode || votedCorrect}
					size="small"
					color="primary"
					onClick={() => {
						setCorrect(currentCard.vocabularyNo, true);
						console.log("CORRECT");
					}}
				>
					Correct
				</Button>
				<Button
					disabled={learnMode || votedIncorrect}
					size="small"
					color="primary"
					onClick={() => {
						setCorrect(currentCard.vocabularyNo, false);
						console.log("INCORRECT");
					}}
				>
					Incorrect
				</Button>

				<Button
					disabled={learnMode}
					size="small"
					color="primary"
					onClick={() => {
						setFlipped(!flipped);
						console.log("FLIP CARD");
					}}
				>
					Flip Card
				</Button>
			</Stack>
		</CardActions>
	);
};

export default CardFooter;
