import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../organisms/layout";
import Flashcard from "../organisms/flashcard";
import useStore from "../ions/store/store";
import randomCardNumber from "../ions/utils/randomCardNumber";

const Page = () => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const currentCard = useStore(state => state.currentCard);
	const lessonData = useStore(state => state.lessonData);
	const filteredData = useStore(state => state.filteredData);
	const setFilter = useStore(state => state.setFilter);
	const toggleFiltered = useStore(state => state.toggleFiltered);
	const filtered = useStore(state => state.filtered);

	useEffect(() => {
		setCurrentCard(randomCardNumber(lessonData.length));
	}, [setCurrentCard, lessonData.length]);

	return (
		<Layout>
			<button
				type={"button"}
				onClick={() => {
					toggleFiltered();
					setFilter("kanji");
					console.log(filteredData);
					console.log("filtered:", filtered);
				}}
			>
				Kanji
			</button>
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
				title={currentCard.lesson}
				word={currentCard.word}
				kanji={currentCard.kanji}
				meaning={currentCard.meaning}
				random={randomCardNumber(48)}
			/>
		</Layout>
	);
};

export default Page;
