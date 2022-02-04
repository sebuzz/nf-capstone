import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import useStore from "../../ions/store/store";
import VocabularyNoHolder from "../../atoms/vocabulary-no-holder";
import FilteredHolder from "../../atoms/filtered-holder";

const CardHeader = ({ ...props }) => {
	//const currentCard = useStore(state => state.currentCard);
	const { currentCard, filtered } = useStore(state => state);
	return (
		<>
			<CardMedia
				sx={{ marginY: 0 }}
				component="img"
				height="auto"
				image="/images/flashcard.png"
				alt={props.lesson}
			/>
			<VocabularyNoHolder>{currentCard?.vocabularyNo}</VocabularyNoHolder>
			<FilteredHolder>{`filtered:${filtered}`}</FilteredHolder>
		</>
	);
};

export default CardHeader;
