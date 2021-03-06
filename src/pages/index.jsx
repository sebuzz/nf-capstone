import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../organisms/layout";
import Flashcard from "../organisms/flashcard";
import useStore from "../ions/store/store";
import randomCardNumber from "../ions/utils/randomCardNumber";
import axios from "axios";
const defaultProps = {
	occurrence: 0,
};
const Page = () => {
	const currentCard = useStore(state => state.currentCard);
	// fetch lesson data once
	useEffect(() => {
		const callback = async () => {
			const setLessonData = useStore.getState().setLessonData;
			const setCurrentCard = useStore.getState().setCurrentCard;
			const selectedLesson = useStore.getState().selectedLesson;
			const setShownCards = useStore.getState().setShownCards;
			// attempting initial fetch lesson data
			const { data } = await axios.get(`/vocabulary/japanese/${selectedLesson}.json`);
			const lessonData = data.vocabulary.map(item => ({ ...item, ...defaultProps }));
			const randomCard = lessonData[randomCardNumber(lessonData.length - 1)];
			setLessonData(lessonData);
			setCurrentCard(randomCard);
			setShownCards(randomCard.vocabularyNo);
		};
		void callback();
	}, []);

	return (
		<Layout>
			<Head>
				<title key="title">KOTOBA - lesson {currentCard.lesson}</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<div>
				<Flashcard />
			</div>
		</Layout>
	);
};

export default Page;
