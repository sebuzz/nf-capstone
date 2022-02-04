import create from "zustand";
import axios from "axios";
import produce from "immer";

const useStore = create(set => ({
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
			const kanjiFilter = clone.filter(word => word.kanji.length > 0);
			if (type === "kanji") {
				return {
					filteredData: kanjiFilter,
				};
			}
		});
	},

	currentCard: {},
	// fetch the lesson data and pick the selected card
	// TODO: separate fetch and card picking so that the fetch only happens once
	setCurrentCard: async cardNumber => {
		console.log("attempting to fetch");
		const response = await axios.get("/vocabulary/japanese/9.json");
		const result = response.data;
		const lessonData = result.vocabulary;

		const cardData = lessonData[cardNumber];

		set(() => ({ currentCard: cardData, lessonData: lessonData }));
	},
}));

export default useStore;
