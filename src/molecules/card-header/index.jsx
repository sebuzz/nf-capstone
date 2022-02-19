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

const StyledLogoWrapper = styled.div`
	position: absolute;
	top: -165px;
	left: -180px;
	width: 124px;
	opacity: 20%;
`;

const StyledBGWrapper = styled.div`
	position: absolute;
	top: 80px;
	left: -220px;
	width: 445px;
	opacity: 45%;
`;

const CardHeader = () => {
	const showKana = useStore(state => state.showKana);
	const showTranslation = useStore(state => state.showTranslation);
	const debugMode = useStore(store => store.debugMode);

	return (
		<StyledHeader>
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
		</StyledHeader>
	);
};

export default CardHeader;
