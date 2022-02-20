import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledCardWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(0)};
	background: url("/images/pattern_sepia_dark_small.png");
	color: #000;
	font-size: 1em;
`;
