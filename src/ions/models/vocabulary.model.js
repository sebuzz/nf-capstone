import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema({
	// Set by client
	name: String,
	// Set by server
	isChecked: Boolean,
});

const Vocabulary = mongoose.model("Vocabulary", vocabularySchema);

export default Vocabulary;
