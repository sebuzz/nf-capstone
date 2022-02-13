import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardWrapper from "../../atoms/card-wrapper";
import CardHeader from "../../molecules/card-header";
import CardMainArea from "../../molecules/card-main-area";
import CardFooter from "../../molecules/card-footer";

const Flashcard = () => {
	return (
		<CardWrapper>
			<Card sx={{ width: 445 }}>
				<Box sx={{ height: 550 }} alignItems="center">
					<CardHeader />
					<Box sx={{ height: 410 }}>
						<CardMainArea />
					</Box>
				</Box>
				<CardFooter />
			</Card>
		</CardWrapper>
	);
};

export default Flashcard;
