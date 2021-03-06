import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledCardBackArea = styled.div`
	display: flex;
	z-index: 10;
	justify-content: center;
	height: 410px;
	padding: 0.5em 1em;
	border: none;
	border-radius: ${pxToRem(4)};
	background: #fefbfd;
	background-image: url("/images/paper_rev_3.jpg");
	color: #000;
	font-size: 1em;
`;
