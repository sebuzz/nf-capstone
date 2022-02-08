import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	// Set by client
	name: String,
	// Set by server
	isChecked: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
