import React, {useEffect, useState} from "react";
//import Link from "next/link";
import Flashcard from "../molecules/flashcard";
import axios from "axios";



const Page = () => {

	const [thisCard, setThisCard] = useState([]);

	const getVocabulary = async function (cardNumber) {
		await axios.get("/vocabulary/japanese/9.json").then(
			response => {
				const result = response.data;
				const lessonData = result.vocabulary;
				const cardData = lessonData[cardNumber];
				console.log("result:",result);
				console.log("lessonData:",lessonData);
				console.log("cardData:",cardData);

				setThisCard(cardData);
				return cardData;
			},
			error => {
				console.log(error);
			}
		);
	};


	const NextCard = () => {
		useEffect(() => {
			const randomCard = Math.floor(Math.random()*48) + 1;
			console.log(randomCard);
			getVocabulary(randomCard);
		}, []);
	}
	NextCard();


	const lesson = thisCard.lesson;
	console.log("lesson: ", lesson);
	const word = thisCard.word;
	const kanji = thisCard.kanji;
	const meaning = thisCard.meaning;

	return (
		<div>
			<Flashcard title={lesson} word={word} kanji={kanji} meaning={meaning} handler={NextCard} />
			{/*<Link href="#">Foobar</Link>*/}
		</div>
	);
};

export default Page;
