import useStore from "../../ions/store/store";
import { Button, CardActions } from "@mui/material";
import * as React from "react";

const CardFooter = ({ ...props }) => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	return (
		<CardActions>
			<Button
				size="small"
				color="primary"
				onClick={() => {
					setCurrentCard(props.random);
				}}
			>
				Next card
			</Button>
		</CardActions>
	);
};

export default CardFooter;
