import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Div from "../../atoms/div";
import CardHeader from "../../molecules/card-header";
import CardMainArea from "../../molecules/card-main-area";
import CardFooter from "../../molecules/card-footer";

const Flashcard = ({ ...props }) => {
	return (
		<Div {...props}>
			<Card sx={{ width: 445 }}>
				<Paper elevation={20}>
					<CardActionArea>
						<Box sx={{ height: 550 }} alignItems="center">
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
