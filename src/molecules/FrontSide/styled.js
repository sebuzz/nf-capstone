import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledCardMainArea = styled.div`
	display: flex;
	justify-content: center;
	height: 350px;
	padding: 0.5em 1em;
	border: none;
	border-radius: ${pxToRem(4)};
	background: #fefbfd;
	background-image: url("/images/paper_2.jpg");
	color: #000;
	font-size: 1em;
`;
