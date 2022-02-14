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
	const shownCards = useStore(state => state.shownCards);

	const cardNumber = currentCard.vocabularyNo;
	const thisCard = shownCards.find(element => element.cardNumber === cardNumber);
	const timesShown = thisCard ? thisCard.occurrenceSC : 0;
	const debugMode = useStore(store => store.debugMode);

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
				<VocabularyNoHolder>
					{cardNumber}, {timesShown}
				</VocabularyNoHolder>
				{debugMode && (
					<div>
						<FilteredHolder>{`Show Kana:${showKana}`}</FilteredHolder>
						<TranslationHolder>{`Show Translation:${showTranslation}`}</TranslationHolder>
					</div>
				)}
			</div>
			<MenuDrawer />
		</>
	);
};

export default CardHeader;
