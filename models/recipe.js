const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: "Name cannot be blank!!" },
    instructions: { type: String, required: 'Instructions cannot be blank!!' },
    ingredients: { type: String, required: 'Image cannot be blank!!' },
}, { toObject: {virtuals: true } } );

const Recipe = mongoose.model('Recipe', recipeSchema);

module.export = Recipe;