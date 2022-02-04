import create from "zustand";
import axios from "axios";
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
			}
		});
	},
	setLessonData: lessonData => {
		// console.log("attempting to fetch lesson data");
		// const response = await axios.get("/vocabulary/japanese/9.json");
		// const result = response.data;
		// const lessonData = result.vocabulary;

		set(() => ({ lessonData: lessonData }));
		console.log("lessonData:", lessonData);
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
	// fetch the lesson data and pick the selected card
	// TODO: separate fetch and card picking so that the fetch only happens once
	setCurrentCard: cardData => {
		// console.log("attempting to fetch");
		// const response = await axios.get("/vocabulary/japanese/9.json");
		// const result = response.data;
		// const lessonData = result.vocabulary;
		// const cardData = lessonData[cardNumber];
		//
		console.log("setting currentCard", cardData);
		set(() => ({ currentCard: cardData }));
	},
}));

export default useStore;
