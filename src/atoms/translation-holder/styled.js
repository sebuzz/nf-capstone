import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledTranslationHolder = styled.div`
	display: flex;
	position: absolute;
	top: ${pxToRem(130)};
	left: ${pxToRem(360)};
	justify-content: center;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #fac;
	color: #fff;
	font-size: 0.9em;

	&:hover {
		background: #fac;
	}

	&:active {
		background: #fac;
	}
`;

export default StyledTranslationHolder;
