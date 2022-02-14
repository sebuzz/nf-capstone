import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";
import randomCardNumber from "../../ions/utils/randomCardNumber";

const CardFooter = () => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const filteredData = useStore(state => state.filteredData);
	const setShownCards = useStore(state => state.setShownCards);
	const flipped = useStore(state => state.flipped);
	const setFlipped = useStore(state => state.setFlipped);
	const learnMode = useStore(store => store.learnMode);

	const nextCard = () => {
		const randomCard = filteredData[randomCardNumber(filteredData.length - 1)];
		// console.log("currentCardNo:", randomCard);
		setShownCards(randomCard.vocabularyNo);
		// console.log("=====>", randomCard);
		setCurrentCard(randomCard); // randomCard
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
					disabled={learnMode}
					size="small"
					color="primary"
					onClick={() => {
						console.log("CORRECT");
					}}
				>
					Correct
				</Button>
				<Button
					disabled={learnMode}
					size="small"
					color="primary"
					onClick={() => {
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
