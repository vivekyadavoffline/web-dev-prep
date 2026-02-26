import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  isDone: Boolean,
  days : Number
});
export default mongoose.model("Todo", todoSchema);