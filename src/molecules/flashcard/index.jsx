import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Div from "../../atoms/div";
import CardHeader from "../card-header";
import CardMainArea from "../card-main-area";
import CardFooter from "../card-footer";

const Flashcard = ({ ...props }) => {
	return (
		<Div {...props}>
			<Card sx={{ maxWidth: 445 }}>
				<Paper elevation={20}>
					<CardActionArea>
						<Box alignItems="center">
							<CardHeader {...props} />
							<CardMainArea {...props} />
						</Box>
					</CardActionArea>
					<CardFooter {...props} />
				</Paper>
			</Card>
		</Div>
	);
};

export default Flashcard;
