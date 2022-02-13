import * as React from "react";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import CardWrapper from "../../atoms/card-wrapper";
import CardHeader from "../../molecules/card-header";
import CardMainArea from "../../molecules/card-main-area";
import CardFooter from "../../molecules/card-footer";

const Flashcard = ({ ...props }) => {
	return (
		<CardWrapper>
			<Card sx={{ width: 445 }}>
				<Paper elevation={20}>
					<Box sx={{ height: 550 }} alignItems="center">
						<CardHeader {...props} />
						<Box sx={{ height: 410 }}>
							<CardMainArea />
						</Box>
					</Box>
					<CardFooter />
				</Paper>
			</Card>
		</CardWrapper>
	);
};

export default Flashcard;
