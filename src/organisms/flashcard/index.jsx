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

const Flashcard = () => {
	const flipped = useStore(state => state.flipped);
	return (
		<CardWrapper>
			<Card sx={{ width: 445 }}>
				<Box sx={{ height: 550 }} alignItems="center">
					<CardHeader />
					<Box sx={{ height: 410 }}>
						<FlipCard
							flipped={flipped}
							childrenFront={<FrontSide />}
							childrenBack={<BackSide />}
						/>
					</Box>
				</Box>
				<CardFooter />
			</Card>
		</CardWrapper>
	);
};

export default Flashcard;
