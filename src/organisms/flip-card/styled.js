import styled from "@emotion/styled";
//import { pxToRem } from "../../ions/utils/unit";

export const StyledFlipCard = styled.div`
	position: relative;
	max-width: 300px;
	margin: auto;
	transform-style: preserve-3d;
	perspective: 700px;
`;

export const innerStyle = {
	display: "flex",
	flexDirection: "column",
	backfaceVisibility: "hidden",
	transition: "transform 0.2s linear",
	transformStyle: "preserve-3d",
};

export const backSideInnerStyle = {
	...innerStyle,
	position: "absolute",
	inset: 0,
};

export const contentStyle = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};
