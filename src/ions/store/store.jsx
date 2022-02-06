import create from "zustand";
import produce from "immer";

const useStore = create(set => ({
	fetched: false,
	setFetched: () => {
		set(
			produce(state => {
				state.fetched = !state.fetched;
			})
		);
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
	},
	// set the current card data to the incoming data
	setCurrentCard: cardData => {
		console.log("setting currentCard", cardData);
		set(() => ({ currentCard: cardData }));
	},
}));

export default useStore;
