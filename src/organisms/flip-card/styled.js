import styled from "@emotion/styled";
//import { pxToRem } from "../../ions/utils/unit";

export const StyledFlipCard = styled.div`
	position: relative;
	z-index: 1;
	top: 0px;
	max-width: 450px;
	margin: auto;
	transform-style: preserve-3d;
	perspective: 700px;
`;

export const innerStyle = {
	display: "flex",
	flexDirection: "column",
	backfaceVisibility: "hidden",
	transition: "transform 0.5s cubic-bezier(0.1, -0.3, 0.2, -0.3)",
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
