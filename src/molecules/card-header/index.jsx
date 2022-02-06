import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import useStore from "../../ions/store/store";
import VocabularyNoHolder from "../../atoms/vocabulary-no-holder";
import FilteredHolder from "../../atoms/filtered-holder";
import TranslationHolder from "../../atoms/translation-holder";
import MenuDrawer from "../menu-drawer";

const CardHeader = ({ ...props }) => {
	const currentCard = useStore(state => state.currentCard);
	const showKana = useStore(state => state.showKana);
	const showTranslation = useStore(state => state.showTranslation);

	return (
		<>
			<CardMedia
				sx={{ marginY: 0 }}
				component="img"
				height="auto"
				image="/images/flashcard.png"
				alt={props.lesson}
			/>

			<div>
				<VocabularyNoHolder>{currentCard?.vocabularyNo}</VocabularyNoHolder>
				<FilteredHolder>{`Show Kana:${showKana}`}</FilteredHolder>
				<TranslationHolder>{`Show Translation:${showTranslation}`}</TranslationHolder>
			</div>
			<MenuDrawer />
		</>
	);
};

export default CardHeader;
