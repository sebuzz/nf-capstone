import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardWrapper from "../../atoms/card-wrapper";
import CardHeader from "../../molecules/card-header";
import CardFooter from "../../molecules/card-footer";
import useStore from "../../ions/store/store";
import FlipCard from "../flip-card";
import FrontSide from "../../molecules/FrontSide";
import BackSide from "../../molecules/BackSide";
import styled from "@emotion/styled";
import MenuDrawer from "../../molecules/menu-drawer";

const StyledPaperBG = styled.div`
	background: rgb(212, 188, 163);
	background: linear-gradient(
		180deg,
		rgba(212, 188, 163, 1) 0%,
		rgba(241, 236, 218, 1) 42%,
		rgba(238, 232, 212, 1) 48%,
		rgba(186, 162, 112, 1) 100%,
		rgba(212, 188, 163, 1) 100%
	);
	height: 600px;
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
					{/*<CardHeader />*/}
					{/*<MenuDrawer />*/}
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
