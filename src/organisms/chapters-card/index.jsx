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
		const thisLesson = shownCards.filter(item => item.lesson === number);
		console.log(thisLesson);
		let sum = 0;
		thisLesson.forEach(word => (sum += word.correct / word.occurrenceSC));
		console.log("sum: ", sum);
		let knowledgeLevel = (sum / thisLesson.length) * 24 + 24;
		console.log("KnLevel:", knowledgeLevel, "lesson:", number);
		return knowledgeLevel;
	};
	return (
		<ChapterWrapper>
			<Card sx={{ width: 445, background: "none" }}>
				<ChapterGrid>
					{chapArray.map(item => {
						return (
							<ChapterSelector
								key={item.id}
								ballPosition={calculateBoxColor(item.id)}
							>
								<button
									type="button"
									style={{
										color: "black",
										margin: 0,
										alignContent: "center",
									}}
									onClick={() => {
										setMyChapter(item.id);
									}}
								>
									{item.id}
								</button>
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
