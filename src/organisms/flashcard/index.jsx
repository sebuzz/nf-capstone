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
	height: 600px;
	background: rgb(212, 188, 163);
	background: linear-gradient(
		180deg,
		rgba(212, 188, 163, 1) 0%,
		rgba(241, 236, 218, 1) 42%,
		rgba(238, 232, 212, 1) 44%,
		rgba(189, 166, 118, 1) 68%,
		rgba(39, 53, 86, 1) 69%,
		rgba(26, 35, 57, 1) 78%
	);
`;

const PaperBG = ({ children }) => {
	return <StyledPaperBG>{children}</StyledPaperBG>;
};

const Flashcard = () => {
	const flipped = useStore(state => state.flipped);
	return (
		<CardWrapper>
			<Card sx={{ width: 445 }}>
				<Box
					sx={{
						height: 410,
						backgroundColor: "#eee",
					}}
					alignItems="center"
				>
					<PaperBG>
						<Box sx={{ height: 410 }}>
							<FlipCard
								flipped={flipped}
								childrenFront={<FrontSide />}
								childrenBack={<BackSide />}
							/>
						</Box>
					</PaperBG>
				</Box>
				<CardFooter />
			</Card>
		</CardWrapper>
	);
};

export default Flashcard;
