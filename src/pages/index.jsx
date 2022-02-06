import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../organisms/layout";
import Flashcard from "../organisms/flashcard";
import useStore from "../ions/store/store";
import randomCardNumber from "../ions/utils/randomCardNumber";
import axios from "axios";

const Page = () => {
	const currentCard = useStore(state => state.currentCard);

	// fetch lesson data once
	useEffect(() => {
		const callback = async () => {
			const setLessonData = useStore.getState().setLessonData;
			const setCurrentCard = useStore.getState().setCurrentCard;
			console.log("attempting initial fetch lesson data");
			const { data } = await axios.get("/vocabulary/japanese/9.json");

			const lessonData = data.vocabulary;

			// TODO: test if filter is set and then maybe use filteredLesson
			const randomCard = lessonData[randomCardNumber(lessonData.length - 1)];
			console.log("cCN:", randomCard);
			setLessonData(lessonData);
			setCurrentCard(randomCard);
		};
		void callback();
	}, []);

	return (
		<Layout>
			<Head>
				<title key="title">KOTOBA</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>

			<Flashcard
				title={currentCard?.lesson}
				word={currentCard?.word}
				kanji={currentCard?.kanji}
				meaning={currentCard?.meaning}
			/>
		</Layout>
	);
};

export default Page;
