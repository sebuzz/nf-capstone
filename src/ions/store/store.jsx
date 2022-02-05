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
	filtered: false,
	toggleFiltered: () => {
		set(
			produce(state => {
				state.filtered = !state.filtered;
			})
		);
	},
	setFilter: type => {
		set(state => {
			const clone = [...state.lessonData];

			if (type === "kanji") {
				const kanjiFilter = clone.filter(word => word.kanji.length > 0);
				return {
					filteredData: kanjiFilter,
				};
			} else if (type === "translation") {
				// do something
			} else {
				return {
					filteredData: clone,
				};
			}
		});
	},
	setLessonData: lessonData => {
		set(() => ({ lessonData: lessonData }));
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
