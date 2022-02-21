import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledChapterSelector = styled.div`
	width: ${pxToRem(50)};
	max-width: ${pxToRem(50)};
	height: ${pxToRem(50)};
	max-height: ${pxToRem(50)};
	margin: ${pxToRem(10)};
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: hsl(${props => props.ballColor}, 90%, 50%);
	color: #000;
	font-size: 1em;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export default StyledChapterSelector;
