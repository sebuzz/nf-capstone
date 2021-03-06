import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStore from "../../ions/store/store";
import { StyledCardMainArea } from "./styled";
import CardHeader from "../../molecules/card-header";
import { Link } from "@mui/material";
import Gauge from "../../atoms/gauge";
import VocabularyNoHolder from "../../atoms/vocabulary-no-holder";
import { useEffect, useState } from "react";

const FrontSide = () => {
	const currentCard = useStore(state => state.currentCard);
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const learnMode = useStore(state => state.learnMode);
	const knowledgeLevel = useStore(state => state.knowledgeLevel);
	const occurrences = useStore(state => state.occurrences);

	const cardNumber = currentCard.vocabularyNo;
	const lessonNumber = currentCard.lesson;

	const [voices, setVoices] = useState([]);

	useEffect(() => {
		const myVoices = speechSynthesis.getVoices();
		setVoices(myVoices);
		//console.log("voices set");
	}, [cardNumber]);

	const speakIt = textToSpeak => {
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
			{!learnMode && <Gauge ballPosition={knowledgeLevel} occurrences={occurrences} />}
			<VocabularyNoHolder>
				罤 {lessonNumber} 課 - {cardNumber}
			</VocabularyNoHolder>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<CardContent>
					<Typography gutterBottom align="center" variant="h4" component="div">
						<Link
							color="#212121"
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
						<Typography align="center" variant="h5" component="div">
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
							{currentCard.meaning.join(", ")}
						</Typography>
					)}
					<button
						type="button"
						onClick={() => {
							speakIt(currentCard.word);
						}}
					>
						▶
					</button>
				</CardContent>
				<CardHeader />
			</Stack>
		</StyledCardMainArea>
	);
};

export default FrontSide;
