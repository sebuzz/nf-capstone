import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardWrapper from "../../atoms/card-wrapper";
import CardFooter from "../../molecules/card-footer";
import useStore from "../../ions/store/store";
import FlipCard from "../flip-card";
import FrontSide from "../../molecules/FrontSide";
import BackSide from "../../molecules/BackSide";
import styled from "@emotion/styled";

const StyledPaperBG = styled.div`
	align-items: center;
	height: 530px;
	background: linear-gradient(
		180deg,
		rgba(212, 188, 163, 0) 0%,
		rgba(212, 188, 163, 0) 30%,
		rgba(241, 236, 218, 0) 42%,
		rgba(39, 53, 86, 0) 89%,
		rgba(39, 53, 86, 0.5) 90%,
		rgba(39, 53, 86, 1) 94.9%,
		rgba(26, 35, 57, 1) 95%
	);
`;

const PaperBG = ({ children }) => {
	return <StyledPaperBG>{children}</StyledPaperBG>;
};

const Flashcard = () => {
	const flipped = useStore(state => state.flipped);
	return (
		<CardWrapper>
			<Card sx={{ width: 445, height: 800, background: "unset" }}>
				<Box
					sx={{
						background: "unset",
					}}
					alignItems="center"
				>
					<PaperBG>
						<Box sx={{ paddingTop: 6, paddingBottom: 2 }}>
							<FlipCard
								flipped={flipped}
								childrenFront={<FrontSide />}
								childrenBack={<BackSide />}
							/>
						</Box>
						<CardFooter />
					</PaperBG>
				</Box>
			</Card>
		</CardWrapper>
	);
};

export default Flashcard;
