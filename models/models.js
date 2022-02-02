import Mongoose from "mongoose";
import config from "../common/config.js";

Mongoose.connect(`mongodb://${config.mongoUrl}`, { useNewUrlParser: true });

const todoSchema = new Mongoose.Schema({
  title: String,
  isChecked: { type: Boolean, default: false },
  date: { type: Date, default: new Date() }
});

export const todoModel = Mongoose.model("Todo", todoSchema);