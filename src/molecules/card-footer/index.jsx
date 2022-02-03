import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";

const CardFooter = ({ ...props }) => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
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
						setCurrentCard(props.random);
					}}
				>
					Next card
				</Button>

				<Button
					size="small"
					color="primary"
					onClick={() => {
						setCurrentCard(props.random);
						console.log("CORRECT");
					}}
				>
					Correct
				</Button>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						setCurrentCard(props.random);
						console.log("INCORRECT");
					}}
				>
					Incorrect
				</Button>

				<Button
					size="small"
					color="primary"
					onClick={() => {
						setCurrentCard(props.random);
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
