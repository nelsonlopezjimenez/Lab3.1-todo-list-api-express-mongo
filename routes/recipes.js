const express = require('express');
const router = express.Router();
const db = require('../models');
const helper = require('../helpers/recipes');

router.route('/')
.get(helpers.getRecipes)
.post(helpers.createRecipe)

router.route('/:recipeId')
.get(helpers/getRecipe)
.put(helpers/updateRecipe)
.delete(helpers/deleteRecipe);

module.export = router;