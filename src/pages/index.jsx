import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../organisms/layout";
import Flashcard from "../organisms/flashcard";
import useStore from "../ions/store/store";
import randomCardNumber from "../ions/utils/randomCardNumber";
import axios from "axios";

const Page = () => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const currentCard = useStore(state => state.currentCard);
	const lessonData = useStore(state => state.lessonData);

	const setLessonData = useStore(state => state.setLessonData);

	// fetch lesson data once
	useEffect(async () => {
		console.log("attempting initial fetch lesson data");
		const response = await axios.get("/vocabulary/japanese/9.json");
		const result = response.data;
		const lessonData = result.vocabulary;
		setLessonData(lessonData);
	}, []);

	// Initialize Card on page load
	useEffect(() => {
		// TODO: test if filter is set and then maybe use filteredLesson
		const currentCardNo = lessonData[randomCardNumber(lessonData.length - 1)];
		console.log("cCN:", currentCardNo);
		setCurrentCard(currentCardNo);
		console.log("currentCard:", currentCard);
	}, [lessonData]);

	return (
		<Layout>
			<Head>
				<title key="title">KOTOBA</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			{/*<h1>Home</h1>*/}
			{/*{loading && <div>Loading...</div>}*/}
			{/*{error && <div>{error.message}</div>}*/}
			{/*{data && (*/}
			{/*	<pre>*/}
			{/*		<code>{JSON.stringify(data, null, 4)}</code>*/}
			{/*	</pre>*/}
			{/*)}*/}
			<Flashcard
				title={currentCard?.lesson}
				word={currentCard?.word}
				kanji={currentCard?.kanji}
				meaning={currentCard?.meaning}
				random={randomCardNumber(48)}
			/>
		</Layout>
	);
};

export default Page;
