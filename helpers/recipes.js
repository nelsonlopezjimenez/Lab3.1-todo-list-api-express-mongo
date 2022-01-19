const db = require('../models/recipe');

exports.getRecipes = function(req, res) {
    db.Recipe.find()
    .then(function(Recipes){
        res.json(Recipes);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.createRecipe = function(req, res){
    db.Recipe.create(req.body)
    .then(function(newRecipe){
        res.status(201).json(newRecipe);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.getOneRecipe = function(req, res){
    db.Recipe.findById(req.params.recipeId)
    .then(function(foundRecipe){
        res.json(foundRecipe);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.updateRecipe = function(req, res){
    db.Recipe.findOneAndUpdate( { _id: req.params.recipeId }, req.body, { new: true })
    .then(function(recipe){
        res.json(recipe);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.deleteRecipe = function (req, res) {
    db.Recipe.remove ( { _id: req.params.recipeId } )
    .then(function(){
        res.json( {message: "We deleted it!" } );
    })
    .catch(function(err){
        res.send(err);
    })
};

module.exports = exports;