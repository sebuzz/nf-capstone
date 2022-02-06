import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";
import randomCardNumber from "../../ions/utils/randomCardNumber";

const CardFooter = () => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const filteredData = useStore(state => state.filteredData);

	const nextCard = () => {
		const randomCard = filteredData[randomCardNumber(filteredData.length - 1)];
		console.log("currentCardNo:", randomCard);
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
					size="small"
					color="primary"
					onClick={() => {
						nextCard();
					}}
				>
					Next card
				</Button>

				<Button
					size="small"
					color="primary"
					onClick={() => {
						console.log("CORRECT");
					}}
				>
					Correct
				</Button>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						console.log("INCORRECT");
					}}
				>
					Incorrect
				</Button>

				<Button
					size="small"
					color="primary"
					onClick={() => {
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
