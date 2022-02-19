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
	position: absolute;
	align-items: self-end;
	z-index: -1;
`;

const StyledLogoWrapper = styled.div`
	position: relative;
	top: -55px;
	left: 10px;
	opacity: 30%;
`;

const StyledBGWrapper = styled.div`
	position: relative;
	top: 100px;
	left: 0px;
	opacity: 40%;
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
			{/*<Image src="/images/Logo_Header_@2x.png" width={445} height={164} alt="header title" />*/}
			{/*<img href="/images/Logo_full.svg" alt="logo" />*/}
			<StyledLogoWrapper>
				<Image
					src="/images/Logo_full_05@05.png"
					width={154}
					height={98}
					alt="header title"
				/>
			</StyledLogoWrapper>
			<StyledBGWrapper>
				<Image src="/images/fuji_05@05.png" width={445} height={104} alt="header title" />
			</StyledBGWrapper>

			<div>
				{debugMode && (
					<div>
						<FilteredHolder>{`Show Kana:${showKana}`}</FilteredHolder>
						<TranslationHolder>{`Show Translation:${showTranslation}`}</TranslationHolder>
					</div>
				)}
			</div>
			{/*<MenuDrawer />*/}
		</StyledHeader>
	);
};

export default CardHeader;
