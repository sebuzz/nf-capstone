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
		const voices = speechSynthesis.getVoices();
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		//utterance.voice = voices[21]; // 18 58 // 21 // 58 works best for macOS Chrome, 21 for iOS
		utterance.voice = voices.find(element => element.lang === "ja-JP");
		utterance.volume = 10;
		utterance.pitch = 1;
		utterance.rate = 1;
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
