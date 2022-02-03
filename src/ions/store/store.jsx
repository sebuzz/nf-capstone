import create from "zustand";
import axios from "axios";

const useStore = create(set => ({
	lessonVocabulary: [],
	currentCard: {},
	setCurrentCard: async cardNumber => {
		console.log("attempting to fetch");
		const response = await axios.get("/vocabulary/japanese/9.json");
		const result = response.data;
		const lessonData = result.vocabulary;
		const cardData = lessonData[cardNumber];

		set(() => ({ currentCard: cardData }));
	},
}));

export default useStore;
