import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";
import { StyledCardMainArea } from "./styled";

const BackSide = () => {
	const currentCard = useStore(state => state.currentCard);

	return (
		<StyledCardMainArea>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography align="center" variant="h5" color="text.secondary">
						{currentCard.meaning}
					</Typography>
				</CardContent>
			</Stack>
		</StyledCardMainArea>
	);
};

export default BackSide;
