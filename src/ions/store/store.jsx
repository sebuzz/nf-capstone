import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => ({
			debugMode: false,
			cursive: false,
			setCursive(cursive) {
				set({ cursive });
			},
			flipped: false,
			setFlipped(flipped) {
				set({ flipped });
			},
			learnMode: false,
			setLearnMode: bool => {
				// setting learnMode to TRUE will show option to hide translation
				// and at the same time will deactivate the Flip Card function.
				// If Card is currently flipped, it will turn to front side
				set(state => ({ learnMode: bool, flipped: bool ? false : state.flipped }));
			},
			fetched: false,
			setFetched: () => {
				set(
					produce(state => {
						state.fetched = !state.fetched;
					})
				);
			},
			selectedLesson: 1,
			setSelectedLesson: number => {
				set(() => ({ selectedLesson: number }));
			},
			lessonData: [],
			filteredData: [],
			lessonLength: [],

			showKana: true,
			showTranslation: true,
			toggleField: type => {
				set(
					produce(state => {
						state[type] = !state[type];
						if (type === "showKana") {
							state.filteredData = state.showKana
								? state.lessonData
								: state.lessonData.filter(word => word.kanji.length > 0);
						}
					})
				);
			},
			// MAYBE needed to filter
			// setFilter: type => {
			// 	set(state => {
			// 		switch (type) {
			// 			case "kanji":
			// 				return {
			// 					filteredData: state.lessonData.filter(word => word.kanji.length > 0),
			// 				};
			//
			// 			default:
			// 				return {
			// 					filteredData: state.lessonData,
			// 				};
			// 		}
			// 	});
			// },
			setLessonData: lessonData => {
				const lessonLength = lessonData.length;
				set(() => ({ lessonData, filteredData: lessonData, lessonLength }));
			},

			currentCard: {
				title: "",
				kanji: [],
				meaning: [],
				id: "",
				lesson: 1,
				word: "",
				vocabularyNo: 1,
				occurrence: 1,
			},
			// set the current card data to the incoming data
			setCurrentCard: cardData => {
				console.log("setting currentCard", cardData);

				set(
					produce(state => {
						state.currentCard = cardData;
					})
				);
			},
			shownCards: [],
			setShownCards: card => {
				set(
					produce(state => {
						// has this card been previously shown?
						if (state.shownCards.find(element => element.cardNumber === card)) {
							// then select this element and save it to variable 'multiple'
							const multiple = state.shownCards.find(
								element => element.cardNumber === card
							);
							// increase the card occurrence variable for this card in the shown cards array
							multiple.occurrenceSC += 1;
							// reset buttons
							state.votedCorrect = false;
							state.votedIncorrect = false;
						} else {
							// if this card was never shown before, add it to the shownCards array
							console.log("added new card number");
							const newCardNumber = {
								cardNumber: card,
								occurrenceSC: 1,
								correct: 0,
								lesson: state.selectedLesson,
								numberOfWords: state.lessonLength,
							};
							// reset buttons
							state.votedCorrect = false;
							state.votedIncorrect = false;
							// add this new card to the shownCards array
							state.shownCards.push(newCardNumber);
						}
					})
				);
			},
			votedCorrect: false,
			votedIncorrect: false,
			knowledgeLevel: 24,
			occurrences: 0,

			setCorrect: (card, correctAnswer = undefined) => {
				//  when using this function for initialization, correctAnswer is  omitted and accepted as undefined to make parameter completely optional
				set(
					produce(state => {
						if (!state.shownCards.find(element => element.cardNumber === card)) {
							return;
						}
						const cardToBeUpdated = state.shownCards.find(
							element => element.cardNumber === card
						);
						// initially set Gauge ballPosition
						state.knowledgeLevel =
							(cardToBeUpdated.correct / cardToBeUpdated.occurrenceSC) * 24 + 24;
						// update occurrences label
						state.occurrences = cardToBeUpdated.occurrenceSC;
						if (correctAnswer === undefined) {
							return;
						}
						// if the 'Correct' button was clicked
						if (correctAnswer && !state.votedCorrect) {
							// and it was not previously voted 'incorrect'
							if (!state.votedIncorrect) {
								// then add one
								cardToBeUpdated.correct += 1;
							} else {
								// otherwise, re-set and add 1 (add 2)
								cardToBeUpdated.correct += 2;
							}

							// toggle the voting states that toggle the buttons
							state.votedCorrect = true;
							state.votedIncorrect = false;
							// set Gauge ballPosition

							state.knowledgeLevel =
								(cardToBeUpdated.correct / cardToBeUpdated.occurrenceSC) * 24 + 24;
							// update occurrences label
							state.occurrences = cardToBeUpdated.occurrenceSC;

							return;
						}
						// if the 'Incorrect' button was clicked
						if (!correctAnswer && !state.votedIncorrect) {
							// and it was not previously voted 'correct'
							if (!state.votedCorrect) {
								cardToBeUpdated.correct -= 1;
							} else {
								// otherwise, re-set and subtract 1 (minus 2)
								cardToBeUpdated.correct -= 2;
							}
							// toggle the voting states that toggle the buttons
							state.votedIncorrect = true;
							state.votedCorrect = false;
							// set Gauge ballPosition

							state.knowledgeLevel =
								(cardToBeUpdated.correct / cardToBeUpdated.occurrenceSC) * 24 + 24;
							// update occurrences label
							state.occurrences = cardToBeUpdated.occurrenceSC;
						}
					})
				);
			},
		}),
		{ name: "myStore" }
	)
);

export default useStore;
