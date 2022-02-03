import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../organisms/layout";
import Flashcard from "../organisms/flashcard";
import useStore from "../ions/store/store";
import randomCardNumber from "../ions/utils/randomCardNumber";

const Page = () => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const currentCard = useStore(state => state.currentCard);

	useEffect(() => {
		setCurrentCard(randomCardNumber(48));
	}, []);

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
