import * as React from "react";
import Card from "@mui/material/Card";
import ChapterWrapper from "../../atoms/chapter-wrapper";
import ChapterGrid from "../../molecules/chapter-grid";
import useStore from "../../ions/store/store";
import { useRouter } from "next/router";
import ChapterSelector from "../../molecules/ChapterSelector";

const chapArray = [];
for (let i = 1; i < 51; i++) {
	chapArray.push({ id: i });
}

const ChaptersCard = () => {
	const setSelectedLesson = useStore(store => store.setSelectedLesson);
	const shownCards = useStore(state => state.shownCards);
	const router = useRouter();
	const setMyChapter = item => {
		setSelectedLesson(item);
		router.push("/");
	};
	const calculateBoxColor = number => {
		// filter out only this lesson
		const thisLessonShown = shownCards.filter(item => item.lesson === number);
		//const numberOfWords = useStore(state => state.numberOfWords);
		console.log(thisLessonShown);
		// sum all 'correct' values of the lesson and also set the (full) lesson length parameter (numberOfWords)
		let sum = 0;
		let numberOfWords = 0;
		thisLessonShown.forEach(word => {
			sum += word.correct / word.occurrenceSC;
			numberOfWords = word.numberOfWords;
		});
		console.log("sum: ", sum);
		// calculate the knowledgeLevel
		let knowledgeLevel = (sum / thisLessonShown.length) * 24 + 24;
		console.log("KnLevel:", knowledgeLevel, "lesson:", number);
		// calculate the percentage of viewed cards of the current lesson
		const percent = thisLessonShown.length / numberOfWords;
		console.log("percent:", percent);
		// return both
		return { knowledgeLevel, percent };
	};
	console.log("calculate...", calculateBoxColor(7));

	return (
		<ChapterWrapper>
			<Card sx={{ width: 445, background: "none" }}>
				<ChapterGrid>
					{chapArray.map(item => {
						return (
							<ChapterSelector
								key={item.id}
								ballPosition={calculateBoxColor(item.id).knowledgeLevel}
								percent={calculateBoxColor(item.id).percent}
								onClick={() => {
									setMyChapter(item.id);
								}}
							>
								<label>
									<h2>{item.id}</h2>
								</label>
								{/*<button*/}
								{/*	type="button"*/}
								{/*	style={{*/}
								{/*		color: "black",*/}
								{/*		margin: 0,*/}
								{/*		alignContent: "center",*/}
								{/*	}}*/}
								{/*	onClick={() => {*/}
								{/*		setMyChapter(item.id);*/}
								{/*	}}*/}
								{/*>*/}
								{/*	{item.id}*/}
								{/*</button>*/}
							</ChapterSelector>
						);
					})}
				</ChapterGrid>

				{/*<CardFooter />*/}
			</Card>
		</ChapterWrapper>
	);
};

export default ChaptersCard;
