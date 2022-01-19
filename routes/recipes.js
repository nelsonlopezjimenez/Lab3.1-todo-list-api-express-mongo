const express = require('express');
const router = express.Router();
const db = require('../models/recipe');
const helpers = require('../helpers/recipes');

router.route('/')
.get(helpers.getRecipes)
.post(helpers.createRecipe)

router.route('/:RecipeId')
.get(helpers.getOneRecipe)
.put(helpers.updateRecipe)
.delete(helpers.deleteRecipe);

module.exports = router;