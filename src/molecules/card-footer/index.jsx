import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";
import randomCardNumber from "../../ions/utils/randomCardNumber";

const CardFooter = ({ ...props }) => {
	//const setCurrentCard = useStore(state => state.setCurrentCard);
	//const lessonData = useStore(state => state.lessonData);
	const { lessonData, filteredData, filtered, setCurrentCard } = useStore(state => state);
	//const filtered = useStore(state => state.filtered);

	const nextCard = () => {
		if (!filtered) {
			const currentCardNo = lessonData[randomCardNumber(lessonData.length - 1)];
			console.log("currentCardNo:", currentCardNo);
			setCurrentCard(currentCardNo);
		} else {
			const currentCardNo = filteredData[randomCardNumber(filteredData.length - 1)];
			console.log("currentCardNo:", currentCardNo);
			setCurrentCard(currentCardNo);
		}
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
