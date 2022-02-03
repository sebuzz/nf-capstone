import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledVocNoHolder = styled.div`
	display: flex;
	position: absolute;
	top: ${pxToRem(100)};
	left: ${pxToRem(360)};
	justify-content: center;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #fae;
	color: #fff;
	font-size: 0.9em;

	&:hover {
		background: #fae;
	}

	&:active {
		background: #fae;
	}
`;

export default StyledVocNoHolder;
