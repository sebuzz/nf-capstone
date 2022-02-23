import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledChapterGrid = styled.div`
	display: grid;
	grid-column-gap: 0;
	grid-row-gap: 0;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(10, 1fr);
	align-content: space-evenly;
	justify-content: space-evenly;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: rgba(0, 0, 0, 0);
	color: #000;
	font-size: 1em;
`;

export default StyledChapterGrid;
