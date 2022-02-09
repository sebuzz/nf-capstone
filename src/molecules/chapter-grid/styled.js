import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledChapterGrid = styled.div`
	display: grid;
	grid-column-gap: 9px;
	grid-row-gap: 30px;
	grid-template-columns: 12px 12px 12px 12px 12px;
	grid-template-rows: 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px;
	align-content: space-evenly;
	justify-content: space-evenly;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: #90f;
	color: #000;
	font-size: 1em;
`;

export default StyledChapterGrid;
