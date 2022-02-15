import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";
import { StyledCardMainArea } from "./styled";

import { Link } from "@mui/material";
//import Speech from "react-speech";

const FrontSide = () => {
	const currentCard = useStore(state => state.currentCard);
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const learnMode = useStore(state => state.learnMode);

	const speakIt = textToSpeak => {
		let voices = speechSynthesis.getVoices();
		let utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.voice = voices[58]; // 18 58
		utterance.lang = "ja-JP";
		speechSynthesis.speak(utterance);
	};

	return (
		<StyledCardMainArea>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography gutterBottom align="center" variant="h2" component="div">
						<Link
							color="#616161"
							underline="none"
							unselectable="on"
							onClick={() => {
								speakIt(currentCard.kanji);
							}}
						>
							{currentCard.kanji}
						</Link>
					</Typography>
					{showKana && (
						<Typography align="center" variant="h4" component="div">
							<Link
								color="#616161"
								underline="none"
								unselectable="on"
								onClick={() => {
									speakIt(currentCard.word);
								}}
							>
								{currentCard.word}
							</Link>
						</Typography>
					)}
					{learnMode && showTranslation && (
						<Typography align="center" variant="body2" color="text.secondary">
							{currentCard.meaning}
						</Typography>
					)}
					{/*<button*/}
					{/*	onClick={() => {*/}
					{/*		speakIt();*/}
					{/*	}}*/}
					{/*>*/}
					{/*	speak*/}
					{/*</button>*/}
				</CardContent>
			</Stack>
		</StyledCardMainArea>
	);
};

export default FrontSide;
