import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledChapterSelector = styled.div`
	position: relative;
	width: ${pxToRem(50)};
	width: ${props => props.percent * 50}px;
	max-width: ${pxToRem(50)};
	height: ${pxToRem(50)};
	max-height: ${pxToRem(50)};
	border: none;
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

export const StyledChapterSelectorWrapper = styled.div`
	display: flex;
	position: relative;
	width: ${pxToRem(50)};
	max-width: ${pxToRem(50)};
	height: ${pxToRem(50)};
	max-height: ${pxToRem(50)};
	margin: ${pxToRem(10)};
	border: 1px solid rgba(26, 39, 86, 1);
	border-radius: ${pxToRem(4)};
	background: rgba(26, 39, 86, 1);
	box-shadow: 12px 12px 12px 1px rgba(0, 0, 5, 0.5);
`;
