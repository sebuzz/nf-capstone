import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";
import { StyledCardBackArea } from "./styled";
import CardHeaderFlipped from "../../molecules/card-header-flipped";

const BackSide = () => {
	const currentCard = useStore(state => state.currentCard);

	return (
		<StyledCardBackArea>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography align="center" variant="h5" color="text.secondary">
						{currentCard.meaning}
					</Typography>
				</CardContent>
				<CardHeaderFlipped />
			</Stack>
		</StyledCardBackArea>
	);
};

export default BackSide;
