import React, { useEffect } from "react";
import Flashcard from "../molecules/flashcard";
import useStore from "../ions/store/store";

const randomCard = maxCard => {
	return Math.floor(Math.random() * maxCard) + 1;
};

const Page = () => {
	const setCurrentCard = useStore(state => state.setCurrentCard);
	const currentCard = useStore(state => state.currentCard);

	useEffect(() => {
		setCurrentCard(randomCard(48));
	}, []);

	return (
		<div>
			<Flashcard
				title={currentCard.lesson}
				word={currentCard.word}
				kanji={currentCard.kanji}
				meaning={currentCard.meaning}
				random={randomCard(48)}
			/>
			{/*<Link href="#">Foobar</Link>*/}
		</div>
	);
};

export default Page;
