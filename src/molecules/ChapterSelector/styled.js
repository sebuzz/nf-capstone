import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledChapterSelector = styled.div`
	position: relative;
	width: ${pxToRem(50)};
	width: ${props => props.percent * 50}px;
	max-width: ${pxToRem(50)};
	height: ${pxToRem(50)};
	max-height: ${pxToRem(50)};
	padding-left: 0.15em;
	border: none;
	border-radius: ${pxToRem(4)};
	background: hsl(${props => props.ballColor}, 90%, 50%);
	box-shadow: -5px -5px 15px hsla(${props => props.ballColor}, 90%, 50%, 0.3);
	color: #000;
	font-size: 1em;

	&:hover {
		background: #364996;
		color: #e2e2e2;
	}

	&:active {
		background: #dcb;
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
	border-radius: ${pxToRem(4)};
	background: linear-gradient(
		142deg,
		rgba(0, 0, 0, 0.6601015406162465) 0%,
		rgba(145, 126, 87, 1) 0%,
		rgba(103, 90, 61, 1) 100%
	);
	box-shadow: 2px 2px 5px rgba(0, 0, 5, 0.9), 12px 12px 12px 1px rgba(0, 0, 5, 0.5);

	&:hover {
		background: #364996;
		color: #e2e2e2;
	}
`;
