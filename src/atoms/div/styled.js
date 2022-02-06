import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #fae;
	color: #000;
	font-size: 1em;
`;

export default StyledDiv;
