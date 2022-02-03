import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import useStore from "../../ions/store/store";
import VocabularyNoHolder from "../../atoms/vocabulary-no-holder";

const CardHeader = ({ ...props }) => {
	const currentCard = useStore(state => state.currentCard);
	return (
		<>
			<CardMedia
				sx={{ marginY: 0 }}
				component="img"
				height="auto"
				image="/images/flashcard.png"
				alt={props.lesson}
				// number={currentCard.vocabularyNo}
			/>
			<VocabularyNoHolder>{currentCard.vocabularyNo}</VocabularyNoHolder>
		</>
	);
};

export default CardHeader;
