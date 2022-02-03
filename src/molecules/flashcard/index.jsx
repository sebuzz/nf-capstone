import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Div from "../../atoms/div";
import useStore from "../../ions/store/store.jsx";
//import Div from "../../atoms/div";
// import StyledButton from "../../atoms/button/styled";
// import StyledDiv from "../../atoms/div/styled";

const Flashcard = ({ children, ...props }) => {

	//const nextCard = useStore((state) => state.nextCard);
	// const nextCard = () => {
	// 	 preventDefault();
	// 	props.handler;
	// }

	return (
		<Div {...props}>
			{children}
			<Card sx={{ maxWidth: 445 }}>
				<Paper elevation={20}>
					<CardActionArea>
						<Box alignItems="center">
							<Stack justifyContent="center" alignItems="center" spacing={2}>
								<CardMedia
									component="img"
									height="140"
									image="/images/flashcard.png"
									alt={props.lesson}
								/>
								<CardContent>
									<Typography
										align="center"
										gutterBottom
										variant="h2"
										component="div"
									>
										{props.kanji}
									</Typography>
									<Typography align="center" variant="h4" component="div">
										{props.word}
									</Typography>
									<Typography
										align="center"
										variant="body2"
										color="text.secondary"
									>
										{props.meaning}
									</Typography>
								</CardContent>
							</Stack>
						</Box>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" onClick={()=>{props.handler}} >
							Next card
						</Button>
					</CardActions>
				</Paper>
			</Card>
		</Div>
	);
};

export default Flashcard;
