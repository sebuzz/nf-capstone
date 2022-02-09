import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => ({
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
				//console.log("lessonData:", lessonData);
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
						if (state.shownCards.find(element => element.cardNumber === card)) {
							//console.log("multiple found!!!");
							const multiple = state.shownCards.find(
								element => element.cardNumber === card
							);
							multiple.occurrenceSC += 1;
							//console.log("double.occurrence:", multiple.occurrenceSC);
							state.currentCard.occurrence = multiple.occurrenceSC;
						} else {
							console.log("added new card number");
							const newCardNumber = {
								cardNumber: card,
								occurrenceSC: 1,
							};
							state.shownCards.push(newCardNumber);
							console.log("card:", card);
						}
						console.log("=>", JSON.stringify(state.shownCards));
					})
				);
			},
		}),
		{ name: "myStore" }
	)
);

export default useStore;
