import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: String,
    isChecked: { type: Boolean, default: false },
    date: { type: Date, default: new Date() }
});

const Todos = mongoose.model("Todo", todoSchema);

module.exports = Todos;