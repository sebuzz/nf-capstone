import * as React from "react";
import useStore from "../../ions/store/store";
import VocabularyNoHolder from "../../atoms/vocabulary-no-holder";
import FilteredHolder from "../../atoms/filtered-holder";
import TranslationHolder from "../../atoms/translation-holder";
import MenuDrawer from "../menu-drawer";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
	display: grid;
	position: relative;
	align-items: self-end;
`;

const CardHeader = () => {
	const currentCard = useStore(state => state.currentCard);
	const showKana = useStore(state => state.showKana);
	const showTranslation = useStore(state => state.showTranslation);
	//const shownCards = useStore(state => state.shownCards);

	//const cardNumber = currentCard.vocabularyNo;
	//const thisCard = shownCards.find(element => element.cardNumber === cardNumber);
	//const timesShown = thisCard ? thisCard.occurrenceSC : 0;
	const debugMode = useStore(store => store.debugMode);

	return (
		<StyledHeader>
			<Image src="/images/Logo_Header_@2x.png" width={445} height={164} alt="header title" />

			<div>
				{debugMode && (
					<div>
						<FilteredHolder>{`Show Kana:${showKana}`}</FilteredHolder>
						<TranslationHolder>{`Show Translation:${showTranslation}`}</TranslationHolder>
					</div>
				)}
			</div>
			<MenuDrawer />
		</StyledHeader>
	);
};

export default CardHeader;
