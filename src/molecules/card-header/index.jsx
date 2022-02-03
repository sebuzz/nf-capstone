import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

const CardHeader = ({ ...props }) => {
	return (
		<CardMedia component="img" height="140" image="/images/flashcard.png" alt={props.lesson} />
	);
};

export default CardHeader;
