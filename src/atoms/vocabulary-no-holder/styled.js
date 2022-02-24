import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledVocNoHolder = styled.div`
	position: absolute;
	top: ${pxToRem(10)};
	left: ${pxToRem(10)};
	justify-content: center;
	width: auto;
	max-height: max-content;
	padding: 0.1em 0.3em;
	border: 1px solid rgba(59, 65, 69, 0.1);
	border-radius: ${pxToRem(4)};
	background: rgba(59, 65, 69, 0.1);
	color: rgba(39, 53, 86, 0.5);
	font-size: 1em;
`;

export default StyledVocNoHolder;
