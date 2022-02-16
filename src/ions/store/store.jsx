import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => ({
			debugMode: false,
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
				set(() => ({ lessonData, filteredData: lessonData }));
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
							//state.currentCard.occurrence = multiple.occurrenceSC; // not needed anymore, occurrence now only tracked separately
						} else {
							// if this card was never shown before, add it to the shownCards array
							console.log("added new card number");
							const newCardNumber = {
								cardNumber: card,
								occurrenceSC: 1,
								correct: 0,
								incorrect: 0,
							};
							state.shownCards.push(newCardNumber);
							state.voted = false;
						}
					})
				);
			},
			voted: false,

			setCorrect: (card, correctAnswer) => {
				set(
					produce(state => {
						if (!state.shownCards.find(element => element.cardNumber === card)) {
							return;
						}
						const cardToBeUpdated = state.shownCards.find(
							element => element.cardNumber === card
						);

						if (correctAnswer && !state.voted) {
							cardToBeUpdated.correct += 1;
							// state.setVoted(true);
							state.voted = true;
							return;
						}
						if (!state.voted) {
							cardToBeUpdated.incorrect += 1;
							state.voted = true;
						}
					})
				);
			},
		}),
		{ name: "myStore" }
	)
);

export default useStore;
