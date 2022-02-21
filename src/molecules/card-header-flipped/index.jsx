import * as React from "react";
import useStore from "../../ions/store/store";

import FilteredHolder from "../../atoms/filtered-holder";
import TranslationHolder from "../../atoms/translation-holder";

import Image from "next/image";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
	display: grid;
	position: absolute;
	z-index: -1;
	align-items: self-end;
`;

const StyledLogoWrapperFlipped = styled.div`
	position: absolute;
	top: -165px;
	left: 55px;
	width: 124px;
	transform: scale(-1, 1);
	opacity: 8%;
`;

const StyledBGWrapperFlipped = styled.div`
	position: absolute;
	top: 80px;
	left: -220px;
	width: 445px;
	transform: scale(-1, 1);
	opacity: 25%;
`;

const CardHeaderFlipped = () => {
	const showKana = useStore(state => state.showKana);
	const showTranslation = useStore(state => state.showTranslation);
	const debugMode = useStore(store => store.debugMode);

	return (
		<StyledHeader>
			<StyledLogoWrapperFlipped>
				<Image
					src="/images/Logo_full_05@05.png"
					width={154}
					height={98}
					alt="header title"
				/>
			</StyledLogoWrapperFlipped>

			<StyledBGWrapperFlipped>
				<Image src="/images/fuji_05@05.png" width={445} height={104} alt="header title" />
			</StyledBGWrapperFlipped>

			<div>
				{debugMode && (
					<div>
						<FilteredHolder>{`Show Kana:${showKana}`}</FilteredHolder>
						<TranslationHolder>{`Show Translation:${showTranslation}`}</TranslationHolder>
					</div>
				)}
			</div>
		</StyledHeader>
	);
};

export default CardHeaderFlipped;
